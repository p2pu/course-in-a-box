
//Predefined optons for JSLint
/*jslint browser: true*/

var ghLinkHelper = (function ($) {
	"use strict";
    /// Replace the placeholder text your-github-username with the
    // name stored in sessionStorage or create a text input if it is
    // not in sessionStorage

    var ghUserName = window.sessionStorage.getItem('ghUserName'),
        links = $("a[href*='your-github-username']"),
		setLink = $("a[href*='your-github-username-set']"),
	    introText = $('#ghUsername-intro'),
	    i;

    if (ghUserName) {
	    introText.hide();

        // update all links
        links.replaceWith(function(){
	        var linkClass = '',
		        linkClear = 'This is not taking me to the right place.' +
			        '<a href="#" class="clear-ghUserName">' +
					'Set the Github name again.' +
					'</a>',
		        linkText = '',
		        linkReplace = /your-github-username/;


	        if($(this).attr('href') === setLink.attr('href')){
		        linkReplace = /your-github-username-set/;
		        linkText = 'Your Github username: ';
		        linkClass = "ghUsername-set";
				linkClear = '<small>' +
					'<i>' +
					'<div id="clear-ghUserName-wrap">' +
					'This is not my Github username. ' +
					'<a href="#" class="clear-ghUserName">' +
					'Clear this username.' +
					'</a>' +
					'</div>';

	        }
            return '<div id="ghUsername-box">' + linkText +
	            '<a class="'+ linkClass +'" href="' + this.href.replace(linkReplace, ghUserName) +
	            '" target="_blank"><i class="fa fa-lg fa-github-square"></i> ' +
                this.text.replace(/your-github-username/, ghUserName)+
	            '</a><div><small><i>' +linkClear + '</i></small></div>' +
	            '<span class="label label-default">Link</span>' +
	            '</div>';
        });

        $('.clear-ghUserName').click(function(){
	        introText.show();
            window.sessionStorage.removeItem('ghUserName');
            window.location = window.location;
        });
    } else {
        // update all links with ghLinkHelper input
        for (i = 0; i < links.length; i = i+1){
            (function(i){
	            var div = document.createElement('div'),
		            ghUsernameLink = 'your-github-username',
		            linkStart,
		            linkEnd;

	            if($(links[i]).attr('href') === setLink.attr('href')) {
		            div.className ='gh-username-set';
		            ghUsernameLink = 'your-github-username-set';
	            }
	            div.id = 'ghLink-' + i;
	            div.style.display='inline-block';
	            linkStart = links[i].text.substr(0, links[i].text.indexOf(ghUsernameLink));
	            linkEnd = links[i].text.substr(links[i].text.indexOf(ghUsernameLink) + ghUsernameLink.length);
	            div.innerHTML = linkStart + '<input type="text" placeholder="your-github-username"></input>' + linkEnd + ' <button class="btn btn-success">set</button>';
	            links[i].parentElement.replaceChild(div, links[i]);
	            $('button', div).click(function(){
	                ghUserName = $('input', div).val();
	                window.sessionStorage.setItem('ghUserName', ghUserName);
		            introText.hide();
	                //window.open(links[i].href.replace(/ghUsername/, ghUserName));
	                window.location = window.location;
	            });
            }(i));
        }
    }
}(jQuery));
