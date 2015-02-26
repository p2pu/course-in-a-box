window.discourseGallery = (function($){
    'use strict';

    function getPost(forum_url, post_id, cb){
        var url = forum_url + '/posts/' + post_id + '.json';
        $.getJSON(url, cb);
    }


    function getTopic(forum_url, topic_id, cb){
        var url = forum_url + '/t/' + topic_id + '.json';
        $.getJSON(url, cb);
    }


    function getCategory(forum_url, category, cb){
        var url = forum_url + '/c/' +  category + '/l/latest.json';
        $.getJSON(url, cb);
    }


    function loadTopicGallery(config){
        var container = $('#' + config.containerId);
        var template = $(container.children()[0]).clone();
        container.children().remove();

        getTopic(config.forumUrl, config.topicId, function(topic){
            topic.post_stream.stream.forEach(function(post_id){
                getPost(config.forumUrl, post_id, function(post){
                    console.log(post_id);
                    var clone = template.clone();
                    //clone.find('.title').text('Template title');
                    clone.find('.author').text(post.name);
                    clone.find('.post-link').attr('href', config.forumUrl + '/t/' + post.topic_id + '/' + post.post_number);
                    clone.find('.profile-image').attr('src', config.forumUrl + post.avatar_template.replace('{size}', '45'));
                    // replace relative links in cooked text
                    var cooked = post.cooked.replace(/(src=['"])(\/)/, '$1' + config.forumUrl + '/')
                    clone.find('.post-text').html(cooked);
                    container.append(clone);
                });
            });
        });
    }

    
    function loadCategoryGallery(config){
        /* config = {
         *     forumUrl: 'http://example.net',
         *     category: 'category-slug'
         *     containerId: 'id-of-html-element-with-template
         * }
         * */
        var container = $('#' + config.containerId);
        var template = $(container.children()[0]).clone();
        container.children().remove();

        getCategory(config.forumUrl, config.category, function(category){
            // TODO add button and callback to load more
            var topics = category.topic_list.topics.slice(0,5);
            topics.forEach(function(topic){
                var url = config.forumUrl + '/t/' + topic.id + '/1.json'
                $.getJSON(url, function(topic){
                    //console.log(post_id);
                    var post = topic.post_stream.posts[0];
                    var clone = template.clone();
                    clone.find('.title').text(topic.title);
                    clone.find('.author').text(post.name);
                    clone.find('.post-link').attr('href', config.forumUrl + '/t/' + post.topic_id + '/' + post.post_number);
                    clone.find('.profile-image').attr('src', config.forumUrl + post.avatar_template.replace('{size}', '45'));

                    var cooked = post.cooked.replace(/(src=['"])(\/)/, '$1' + config.forumUrl + '/')
                    clone.find('.post-text').html(cooked);
                    container.append(clone);
                });
            });
        });
    }

    function loadTopicUserGallery(config){
        var container = $('#' + config.containerId);
        var template = $(container.children()[0]).clone();
        var users = [];
        container.children().remove();
        function addUserTemplate(user){
            var clone = template.clone();
            clone.find('.author').text(user.username);
            clone.find('.profile-image').attr('src', config.forumUrl + user.avatar_template.replace('{size}', '45'));
            clone.find('.profile-link').attr('href', config.forumUrl + '/users/' + user.username);
            container.append(clone);
        }

        function loadTenUsers(post_ids, cb){
            var new_users = [];
            function loadOneMore(){
                //var placeholder = document.createElement('div');
                //placeholder.innerHTML = '<i class="fa fa-cog fa-spin"></i>';
                getPost(config.forumUrl, post_ids.pop(), function(user){
                    if (users.indexOf(user.username) == -1){
                        users.push(user.username);
                        new_users.push(user.username);
                        addUserTemplate(user);
                    }
                    if (new_users.length < 10){
                        loadOneMore();
                    }
                    else {
                        cb(post_ids);
                    }
                });
            }
            loadOneMore();
        }

        getTopic(config.forumUrl, config.topicId, function(topic){
            var post_ids = topic.post_stream.stream;
            post_ids.reverse();

            function cb(remaining_ids){
                /*$('#' + config.loadMoreId).off();
                $('#' + config.loadMoreId).click(function(){
                    loadTenUsers(remaining_ids, cb);
                });
                */
                if (remaining_ids.length > 0){
                    loadTenUsers(remaining_ids, cb);
                }
            };
            loadTenUsers(post_ids, cb);

            /*post_ids.forEach(function(post_id){
                getPost(config.forumUrl, post_id, function(user){
                    if (users.indexOf(user.username) == -1){
                        users.push(user.username);
                        addUserTemplate(user);
                    }
                });
            });
            */
        });

    }

    return {
        loadTopicGallery: loadTopicGallery,
        loadCategoryGallery: loadCategoryGallery,
        loadTopicUserGallery: loadTopicUserGallery
    }

})(jQuery);
