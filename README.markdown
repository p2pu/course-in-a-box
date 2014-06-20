A Jekyll template for running an open online course (no, not a MOOC)

See http://p2pu.github.io/jekyll-course-template for an example of what it looks like

---

## What do I get when I use this?

- Simple course site
- Google Analytics tracking for your course
- Comments using [disqus](http://disqus.com/)

## How do I use it?

- Read about [github pages](http://pages.github.com/).
- Download the files [here](https://github.com/p2pu/jekyll-course-template/archive/gh-pages.zip).
- Create a new git repository on your local machine: `git init .`
- Create and use the branch gh-pages as the default: `git checkout -b gh-pages`.
- Create a new repository on [github](https://github.com).
- Add the new repository as the origin for your repository `git remote add origin git@github.com:username/repositoryname.git`.
- Copy the files into your repository.
- Update _data/course.yml with the relevant info.
- Update index.md with the basic info about your course.
- Create course contents in _posts/. Have a look at the examples [here](https://github.com/p2pu/course-2-jekyll/tree/gh-pages/_posts).
 - File names need to start with a date and that this date will determine the order. 
 - Add the category 'contents' to the post, otherwise it won't show up on your course about page.
- Update _config.yml.
 - Update the URLs appropriately - `baseurl` will be the name of your repository & url should be the username.github.io/repositoryname.
 - Create a new Google Analytics account and put the site ID in _config.yml.
 - Create a new disqus account if you want to enable comments and put the disqus_shortname in _config.yml.
- Push to the gh-pages branch of your github reposity: `git push origin gh-pages`.

## Do you wish to contribute?

If you would like to contribute, there are lots that needs to be done. Fork the repository and get hacking!

- Add [LRMI metadata](http://www.lrmi.net) to the template.
- Pull in the external CSS and JS files we are currently using.
- Figure out how we can support signups - something like Google forms where we can show the results in the document as profile pictures.
- Add support for badges
- Figure out how to do translation

## Have comment and suggestions?

Come and tell us all about it at [thepeople.p2pu.org](http://thepeople.p2pu.org).
