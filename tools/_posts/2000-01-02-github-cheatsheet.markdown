---
title: GitHub Cheatsheet
layout: course_page
---

# Github cheatsheet

## How to fork a repository
To fork a repository, go to the repository you would like to fork.  Ex. "https://github.com/yourusername/repositoryname/"

Click "Fork" at the top right of the page.  That's it!  You will now have your own copy of the repository.

![]({{site.baseurl}}/img/tools/github-fork-step-1.png)

## How to submit a pull request

To submit a pull request, go to a repository that you forked. Ex. "https://github.com/yourusername/repositoryname/"

Select the "Pull Requests" tab.

![]({{site.baseurl}}/img/tools/github-pull-request-step-1-small.png)

Click on "New pull request".

![]({{site.baseurl}}/img/tools/github-pull-request-step-2-small.png)

See if the changes shown are correct and then click "Create pull request".

![]({{site.baseurl}}/img/tools/github-pull-request-step-3-small.png)

Fill in a title for the pull request and click on "Create".

![]({{site.baseurl}}/img/tools/github-pull-request-step-4-small.png)

You are done and the pull request will look something like this:

![]({{site.baseurl}}/img/tools/github-pull-request-step-5-small.png)

You can click on the "Files changed" tab to see the changes that was made.

![]({{site.baseurl}}/img/tools/github-pull-request-step-6-small.png)

## How to edit a file

Go to your repository

...

## How to upload an image

## How to keep your fork up-to-date
> Note: This can only be done using git directly and cannot be done through the GitHub website
You just forked this awesome project but it got more awesome... what do you do?

1. Add a new remote that points to the original repository.

        git remote add upstream https://github.com/p2pu/jekyll-course-experiment.git

1. Update your repository so it knows about all the stuff that has been going on since you forked.

        git fetch upstream

1. Merge the changes from the upstream repository into yours.  This will bring your repository up-to-date without losing any of your local changes.

        git merge upstream/gh-pages

1. Push the changes up to your repository on GitHub.

        git push origin gh-pages

## How to create a new repository
