---
title: GitHub Cheatsheet
---

# Github cheatsheet

This cheatsheet explains how to do various things in GitHub. If you're looking for explanations of what some of the terms we use mean, have a look at the [GitHub Glossary](https://help.github.com/articles/github-glossary) 

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
You just forked this awesome project but it got more awesome... what do you do?

### Through GitHub
> Note:  This is assuming none of the updates made to the main repository conflict with changes you have made to yours.  Conflicts can make things a bit trickier but hopefully this is useful in most situations.

Go to your repository on GitHub and click the green Pull Request button.

 ![]({{site.baseurl}}/img/tools/github-upstream-step-1.png)

If you haven't made any updates to your repository it will tell you there is nothing to compare.  Click 'switching the base' and jump past the next couple steps to 'Create pull request.'  If you have made updates to your repository click the 'Edit' button.

 ![]({{site.baseurl}}/img/tools/github-upstream-step-2.png)

Change the base fork to your repository
 
  ![]({{site.baseurl}}/img/tools/github-upstream-step-2-1.png)
 
It will tell you that there isn't anything to compare (Which is true! You are comparing your respository to itself!).
 
Click 'Edit' again and click 'compare across forks.'
 
  ![]({{site.baseurl}}/img/tools/github-upstream-step-2-2.png) 
 
Change the head fork to main respository (p2pu in this case).

  ![]({{site.baseurl}}/img/tools/github-upstream-step-2-3.png)

Click 'Create pull request.'
 
 ![]({{site.baseurl}}/img/tools/github-upstream-step-3.png)

Fill out your merge request that will be submitted to yourself.

 ![]({{site.baseurl}}/img/tools/github-upstream-step-4.png)

Go to the bottom of the page and click 'Merge pull request.'

 ![]({{site.baseurl}}/img/tools/github-upstream-step-5.png)

Click 'Confirm merge.'

 ![]({{site.baseurl}}/img/tools/github-upstream-step-6.png)

That's it!  
 
### Through Git
> Note: This can only be done using git directly and cannot be done through the GitHub website

1. Open a terminal (for Mac and Linux users) or command line (for Windows users).

1. Add a new remote that points to the original repository.

        git remote add upstream https://github.com/p2pu/course-in-a-box.git

1. Update your repository so it knows about all the stuff that has been going on since you forked.

        git fetch upstream

1. Merge the changes from the upstream repository into yours.  This will bring your repository up-to-date without losing any of your local changes.

        git merge upstream/gh-pages

1. Push the changes up to your repository on GitHub.

        git push origin gh-pages

## How to create a new repository
