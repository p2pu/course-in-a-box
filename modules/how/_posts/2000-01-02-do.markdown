---
title: Projects
published: true
---

# Projects

## Backwards Design: What Will People *Learn* in Your Course?
Everyone has their favorite readings, ideas and activities that they might want to pull into their courses. But designing a course is about selecting the right elements that will bring about transformation. 

*Start with what you want folks to know.* Work backwards from there. 

![3stages.gif]({{site.baseurl}}/img/3stages.gif)

*credit: http://techknowtools.files.wordpress.com/2012/04/3stages.gif*


1. What ideas or skills do you want students to master in your course? Make a list of 3-5. 
2. Think about what kinds of projects students might complete to show mastery of those ideas or skills. Jot down 1-2 ideas.
3. You now have the learning outcomes for your course. 

<a class="btn btn-primary" href="http://community.p2pu.org/t/course-in-a-box-backwards-learning-design/1224)"><i class="fa fa-comments"></i> Post your learning outcomes.</a>

Now you are ready to create (and play with) your modules!

## Let's Make Some Modules!

Now it's time to start building your course! 

1. In your GitHub repository, create a folder for every module inside the `modules` folder. The name of the folder will be reflected in the URLs of your course. If you look at the URL for this page, you will notice the first part of the URL is 'modules/learning' and that is also the name of the [folder in the GitHub repository](https://github.com/p2pu/course-in-a-box/tree/gh-pages/modules/learning/).
1. Inside the folder you just created, create another folder called `_posts`. This is the folder that will hold the actual content for your course. Every module can have multiple sections. One of these sections should be `projects`.
1. Create a new file called `2000-01-01-projects.md` inside the `_posts` folder for the module you just created. The date part determines the order of the sections in the module. For instance, you can see all the sections for the learning module [here](https://github.com/p2pu/course-in-a-box/tree/gh-pages/modules/learning/_posts).

If you don't want to create all the folders yourself, rename or copy one of the folders that are already there (start, community, learning, content) and update the sections appropriately.

For modules to show up in the top navigation, you need to update the list modules in [https://github.com/your-github-username/course-in-a-box/blob/gh-pages/_data/course.yml](https://github.com/your-github-username/course-in-a-box/blob/gh-pages/_data/course.yml).

Update the list of modules to reflect the modules for your course:

{% highlight yaml %}
modules: [start, community, learning, content, feedback, references]
{% endhighlight %}

The video below shows all the steps for adding a module called 'variables' to a course.

<video src="{{site.baseurl}}/img/add-module.webm" width="640" height="360" controls></video>

## From Learning Goals to Activities
We recall information best when we:

- design for all senses
- build a real-life project that is applicable to our lives
- present that project to others for feedback
- share our ideas with the wider world

For each learning goal / module, design an assignment prompt that's open-ended and empowers learners to personalize the project.

<a class="btn btn-primary" href="http://community.p2pu.org/t/course-in-a-box-activity-design/1225"><i class="fa fa-comment"></i> Post your activities</a>
