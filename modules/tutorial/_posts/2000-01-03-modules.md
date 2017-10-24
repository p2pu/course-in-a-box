---
title: Modules
published: true
---

# Modules

Course in Box use a 2 level content structure, at the top are **modules**. The modules for Course in a Box are **tutorial**, **resources** and **references** and can be seen at the very top of this page. 

Inside every module, we'll put the actual content inside sections, but more on that later.

## Let's Make Some Modules!

Now it's time to start building your course! 

In your GitHub repository, there is a folder called `modules`: [https://github.com/your-github-username/course-in-a-box/blob/gh-pages/modules/](https://github.com/your-github-username/course-in-a-box/blob/gh-pages/modules/). 

This folder contains a folder for each of the modules in your course. Since you copied this course, you should see `tutorial`, `resources` and `references` there.

The name of the folder corresponds to the URLs for that module. If you look at the URL for this page, you will notice the first part of the URL is 'modules/tutorial/' and that is also the name of the [folder in the GitHub repository](https://github.com/p2pu/course-in-a-box/tree/gh-pages/modules/tutorial/).

Inside each of these folders, there should be another folder called `_posts`. This is the folder that will hold the actual content for your course. Every module can have multiple sections. Look at the [tutorial folder](https://github.com/p2pu/course-in-a-box/tree/gh-pages/modules/tutorial/) for this course and you'll see `_posts`. 

Lets create a new module called **introduction**. Go to [https://github.com/your-github-username/course-in-a-box/tree/gh-pages/modules](https://github.com/your-github-username/course-in-a-box/tree/gh-pages/modules) and click the "Create new file" button. This will take you to a page with a text box asking you to "name your file". Let's create a module called introduction - type `introduction/_posts/2000-01-01-test.md` in the "name your file" text box, scroll down and click on the green "Commit new file" button.

You should now see a folder named `introduction` inside the `modules` folder. The `introduction` folder should contain a folder called `_posts` and the `_posts` folder should contain a file called `2000-01-01-test.md`. That last file is a section of your module, but more on that in the next section.

Once you are done with this tutorial, you should add all the modules that you wish to use. You can also create your modules by renaming the modules that are already there.

## Add the modules to your course

If you view your course you will notice that the introduction module we created is not showing up on your course site.

For modules to show up in the top navigation, you need to update the list modules in [https://github.com/your-github-username/course-in-a-box/blob/gh-pages/_data/course.yml](https://github.com/your-github-username/course-in-a-box/blob/gh-pages/_data/course.yml)

Change the line containing

{% highlight yaml %}
modules: [tutorial, resources, references]
{% endhighlight %}

to 

{% highlight yaml %}
modules: [introduction, tutorial, resources, reference]
{% endhighlight %}

After a while, the new module should now show at the top of your course site: [https://your-github-username.github.io/course-in-a-box/](https://your-github-username.github.io/course-in-a-box/)

## Extra resources

The video below shows all the steps for adding a module called 'variables' to a course.

<video src="{{site.baseurl}}/img/add-module.webm" width="640" height="360" controls></video>

You are now ready to get to the meat and potatoes of building your course, the sections containing the content!
