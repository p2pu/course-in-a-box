---
title: Your own course
published: true
---

# Let's Dig In: Ideas + Technical Bits

![Image of maze with starting point indicated]({{site.baseurl}}/img/start.jpg)

Image [CC-BY-SA](https://creativecommons.org/licenses/by-sa/2.0/) by [mikecogh](https://www.flickr.com/photos/mikecogh/11300349426) on Flickr.

During this course you will learn the theoretical and technical parts by creating your own online course! [Applause](http://media.giphy.com/media/Hc8PMCBjo9BXa/giphy.gif)!

## Steps to Get Your Own Course (via Copying)
1. Fork the repository. This course is built using [GitHub Pages](https://pages.github.com/), to make a copy of this course, you need to fork the repository on GitHub. You can do this by clicking the link below. You may need to log in or create a GitHub account.

<a class="btn btn-primary" href="https://github.com/p2pu/course-in-a-box/fork" target="_blank"><i class="fa fa-code-fork"></i> Copy this course</a>

This copy is where you will be working during the rest course. Some of the technical things may be challenging or frustrating, but by tackling it bit by bit and asking your peers for help, you’ll soon be an expert and helping other people!

2. Tweak a few items. 
There are two updates that you need to make to your course to get started, the first to change

{% highlight yaml %}baseurl:{% endhighlight %}

to

{% highlight yaml %}baseurl: /course-in-a-box{% endhighlight %}

in the file [https://github.com/your-github-username/course-in-a-box/blob/gh-pages/_config.yml](https://github.com/your-github-username/course-in-a-box/blob/gh-pages/_config.yml)

Next, delete the file called CNAME [https://github.com/your-github-username/course-in-a-box/blob/gh-pages/CNAME](https://github.com/your-github-username/course-in-a-box/blob/gh-pages/CNAME)

Now that you have a space to work, lets put a draft framework in place for your course.

3. Give your course a name. To update the title of your course, go to [https://github.com/your-github-username/course-in-a-box/](https://github.com/your-github-username/course-in-a-box/edit/gh-pages/_data/course.yml) and edit the file called `_data/course.yml`. You will see the title for this course there, change that to the name you decided on. Don't worry too much if you don't have the perfect name, you now know how to change the title for your course and you can update it at any time!

{% highlight yaml %}title: "Course Title"{% endhighlight %}

4. Who is the course for & what will they learn? Will they be building something during the course. Put this basic information on the front page of the course to give a short overview of what to expect. To update the info on the front page, go to `index.markdown` and replace the text currently there to reflect what your course will be about. Once again, you can update it at any time and we will come back to this at a later stage.

So lets have a look at your course! you can view it by going to [https://your-github-username.github.io/course-in-a-box/](https://your-github-username.github.io/course-in-a-box/), just replace your-github-username with your GitHub username.

## Resources and Help

- See our <a href="{{site.baseurl}}{% post_url 2000-01-02-github-cheatsheet %}">GitHub Cheatsheet</a> if you get stuck with any git related things. 
- Ask a question on the [P2PU community forum](http://community.p2pu.org/category/tech).

You may have noticed that the `index.markdown` file contained a few funny caracters. This is called [Markdown](https://en.wikipedia.org/wiki/Markdown), an easy way of writing files for the web. For some tips on how to get the most out of Markdown, see [our Markdown cheetsheet]({{site.baseurl}}/references/markdown-cheatsheet/).
 
**Possible error: pages not displayed.** You can get an email after forking the repository with the following message: "The page build failed with the following error: Page build failed". To solve this issue, check you have [enabled the automatic page generator](https://help.github.com/articles/creating-pages-with-the-automatic-generator) on your repository. Another possible cause would be a missing whitespace in your newly added content. Double check it and commit again to trigger page generation.