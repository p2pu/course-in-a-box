(function(discourseGallery){
    'use strict';

    discourseGallery.loadCategoryGallery({
        forumUrl: window.forumUrl,
        category: window.galleryCategory,
        containerId: 'category-gallery'
    });
})(window.discourseGallery);
