---
title: Create your course
---

## Taking your course out of the box

You're going to be building your course in GitHub. GitHub is web-based repository hosting service, which allows you to manage your code, and see revisions you've made via a good-looking, easy-to-use web interface. It's newbie-friendly, and a great collaboration tool, which is why we're using it for Course in a Box.

Your course will live on GitHub (so you don't need to worry about hosting) and you'll do all the building work there, but you'll be able to view it as a web page.

Some of the technical things may be challenging or frustrating, but by tackling it bit by bit, you’ll soon be an expert and helping other people! If you get stuck at any point, be sure to ask the community forum.

### Fork this repository

The first step is to fork this repository. You may need to create a GitHub account if you don't already have one. Go ahead and fork the repository below.

<a class="btn btn-primary" href="https://github.com/p2pu/course-in-a-box/fork" target="_blank"><i class="fa fa-code-fork"></i> Fork this repository on GitHub.</a> 

When you forked the repository you copied this course and all it's content to your own repository! This copy is where you will be working during the course. 

<div id="ghUsername-intro">
If you tell us your username, we can prepare some links and make things a bit easier for you. If for some reason it doesn't work, replace 'your-github-username' with your GitHub username where you see links containing 'your-github-username'
</div>

[your-github-username](https://github.com/your-github-username-set/course-in-a-box/)

### Some setup
There are two updates that you need to make to your course to get it working. First, change

{% highlight yaml %}baseurl:{% endhighlight %}

to

{% highlight yaml %}baseurl: /course-in-a-box{% endhighlight %}

in the file [https://github.com/your-github-username/course-in-a-box/blob/gh-pages/_config.yml](https://github.com/your-github-username/course-in-a-box/blob/gh-pages/_config.yml)

Next, delete the file called CNAME [https://github.com/your-github-username/course-in-a-box/blob/gh-pages/CNAME](https://github.com/your-github-username/course-in-a-box/blob/gh-pages/CNAME)


### Give your course a name
To update the title of your course, go to [https://github.com/your-github-username/course-in-a-box/blog/gh-pages/_data/course.yml](https://github.com/your-github-username/course-in-a-box/edit/gh-pages/_data/course.yml) and edit the file called `_data/course.yml`. You will see the title for this course there, change that to the name you decided on. Don't worry too much if you don't have the perfect name, you now know how to change the title for your course and you can update it at any time!

{% highlight yaml %}title: "Course Title"{% endhighlight %}

### Who is the course for & what will they learn?
Will they be building something during the course. Put this basic information on the front page of the course to give a short overview of what to expect. To update the info on the front page, go to the file [https://github.com/your-github-username/course-in-a-box/blob/gh-pages/index.markdown](https://github.com/your-github-username/course-in-a-box/blob/gh-pages/index.markdown) and replace the text currently there to reflect what your course will be about. Once again, you can update it at any time and we will come back to this at a later stage.

### Lets have a look at your course!

You can view it by going to [https://your-github-username.github.io/course-in-a-box/](https://your-github-username.github.io/course-in-a-box/).

### Other resources

Still not sure what a repository is, how to fork it or how to update contents?  Have a look at the <a href="https://help.github.com/articles/github-glossary" target="blank">GitHub Glossary</a> for explanations of all of these terms. 
