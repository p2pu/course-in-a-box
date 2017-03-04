---
title: Going Live
module: 3
---
# Making it Go Live
OK, congratulations on writing your first html code/page. Now, lets figure out how to get it on the Internet for others to view.

We are going to need to acquire server space, this is where we will store our files. Furthermore, this server will actually “serve” these files to requesting host-computers. In addition to acquiring a server, we will need to each get individual and unique URL’s where we can point a computer to.

## Creating a website with GitHub-pages
GitHub.com provides free web hosting for static websites (a static site is one that does not involve server-side computational work beyond serving or delivering files to a requesting host-computer). For this course, this means we can utilize them as a our server, and they will also provide us with URLs.

GitHub assigns each user the following URL:
_username_`.github.io`

This is your _baseurl_, as was discussed on the previous page.

<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/2MsN8gpT6jY" frameborder="0" allowfullscreen></iframe></div>


### { TODO: } Let GitHub know we want our repo to be a webpage

In order for our repo to be served, we need to tell GitHub that this is a “GitHub pages project site”.

1. Navigate to your GitHub.com account.
2. Navigate into your `/341-work` repository.
3. Select the Settings tab for the repo. ![Settings Tab](../imgs/settingsTab.png)
4. Scroll down to the “GitHub Pages” section. And under “Source” select “master branch” then click save. ![Select a branch](../imgs/githubPagesSettings.png)
5. You should then see this section change and say that your site is “ready to be published as …”. This means GitHub is processing your site and publishing it, assuming no errors popup. ![GitHub, ready to publish](../imgs/gh_ready.png)
6. Wait a few minutes and reload that page. Eventually this section should turn green, meaning it is Live! ![GitHub says the page is live](../imgs/gh_live.png)
7. Click on the link there. It of course will not work since we have not placed an `index.html` file in the root directory of the repo. Instead you should see a GitHub “404 error page”.
8. We simply need to add the directory where our new `index.html` file lives in our repo. Select the URL in the address bar, and add `week-03-hw/` to the end of the address. This should open up your `index.html` page at an address that looks like `https://yourusername.github.io/341-work/week-03-hw/`. ![Live WebPage](../imgs/gh_liveWebPage.png)

For all most of the future pages you will write for homework, the URL will be `https://yourusername.github.io/341-work/` + `the-directory` where you are placing that weeks homework assignments.
