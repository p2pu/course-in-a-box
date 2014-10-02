---
title: Your own course
layout: course_page
---

# Start by creating your own course

During this course we will learn the theoretical and technical parts of creating an online course while creating our own onlie course! To get started you should fork this repository on GitHub. You can do this by clicking the link below. You may need to log in or create a GitHub account.

<a class="btn btn-primary" href="https://github.com/p2pu/jekyll-course-experiment/fork" target="_blank"><i class="fa fa-code-fork"></i> Fork</a>

By doing this you have just created a copy of this course. This copy is where you will be working during this course. Some of the technical things may be hard or frustrating, but by tackling it bit by bit and asking your peers for help, you’ll soon be an expert and helping other people!

Before we can have a look at your version of the course, you will first need to make a single update to your course. Head over to your repository, it should be called something like `https://github.com/<your user  name>/jekyll-course-experiment/`. 

Now that you have a space to work, you can start building out your course framework.

What will you call your course?  To update the title of your course, head over to `https://github.com/<your-github-username>/jekyll-course-experiment/` and edit the file called `_data/course.yml`. You will see the title for this course there, change that to the name you decided on. Don't worry too much if you don't have the perfect name, you now know how to change the title for your course and you can update it at any time!

{% highlight yaml %}title: "Course Title"{% endhighlight %}

Who is the audience of your course and what will they learn? Will they be building something during the course. It is a good idea to put this basic information on the front page of the course. To update the info on the front page, go to `index.markdown` and replace the text currently there to reflect what your course will be about. Once again, you can update it at any time and we will come back to this at a later stage.

So lets have a look at your course! you can view it by going to `https://yourgithubname.github.io/jekyll-course-experiment/`, just replace yourgithubname with your GitHub username.

## Resources and help

See our <a href="{{site.baseurl}}{% post_url 2000-01-02-github-cheatsheet %}">GitHub Cheatsheet</a> if you get stuck with any git related things. Failing that, you can always ask us a question on [our forum](http://community.p2pu.org).
 

### Possible error: pages not displayed
You can get an email after forking the repository with the following message: "The page build failed with the following error: Page build failed". To solve this issue, check you have [enabled the automatic page generator](https://help.github.com/articles/creating-pages-with-the-automatic-generator) on your repository. Another possible cause would be a missing whitespace in your newly added content. Double check it and commit again to trigger page generation.
