var ghLinkHelper = (function($){
    /// Replace the placeholder text your-github-username with the name stored in sessionStorage or create a text input if it is not in sessionStorage
    var ghUserName = window.sessionStorage.getItem('ghUserName');
    var links = $("a[href*='your-github-username']");
    if (ghUserName) {
        // update all links
        for (var i = 0; i< links.length; ++i){
            links[i].text = links[i].text.replace(/your-github-username/, ghUserName);
            links[i].href = links[i].href.replace(/your-github-username/, ghUserName);
        }
    } else {
        // update all links with ghLinkHelper input
        for (var i = 0; i< links.length; ++i){
            (function(i){
            var div = document.createElement('div');
            div.style.display='inline-block';
            var linkStart = links[i].text.substr(0, links[i].text.indexOf('your-github-username'));
            var linkEnd = links[i].text.substr(links[i].text.indexOf('your-github-username') + 'your-github-username'.length);
            div.innerHTML = linkStart + '<input type="text" placeholder="your-github-username"></input>' + linkEnd + ' <button>set</button>';
            links[i].parentElement.replaceChild(div, links[i]);
            $('button', div).click(function(){
                var ghUserName = $('input', div).val();
                window.sessionStorage.setItem('ghUserName', ghUserName);
                window.open(linkStart + ghUserName + linkEnd);
            });
            }(i));
        }
    }
}(jQuery));
