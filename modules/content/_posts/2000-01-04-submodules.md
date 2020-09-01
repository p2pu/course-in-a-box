---
title: Submodules
---

# Submodules

**Submodules** are the subsections of a module where your learning content lives. What you're looking at right now is a submodule about submodules. Meta!

<br>

#### Creating Submodules

Submodules need to follow a specific naming convention to work correctly. 

Example: `2000-01-01-test.md`

The file name starts with a valid date in the format `YYYY-MM-DD`. The actual date you use doesn't matter, bu it will be used to determine the order of the sections inside your module.

After the date, you should put the section name and finally, you should append `.md` to the end of the file name so that to format for the full file name is `YYYY-MM-DD-your-section-name.md`.

Content will show up automatically as soon as you commit and save (booyah!). To check how your spiffy content looks, you can go to [http://your-github-username.github.io/course-in-a-box/](http://your-github-username.github.io/course-in-a-box/) to look at it.

## Editing content

There are two important parts to your content. First is what is called the 'front matter' This is a fancy way to describe some extra data that will be used to display your section.

Have a look at this section [https://github.com/your-github-username/course-in-a-box/tree/gh-pages/modules/setup/_posts/2000-01-04-content.md](https://github.com/your-github-username/course-in-a-box/tree/gh-pages/modules/setup/_posts/2000-01-04-content.md)

If you edit that file, you'll notice

{% highlight yaml %}
---
title: Sections
---
{% endhighlight %}

at the top. You can update the title to change the title displayed in the sidebar when viewing the section.

Secondly, you'll notice the text for this section below that:

{% highlight yaml %}
# Sections

Sections are where the actual content for you course lives. Together they make up a bunch of modules and the modules together is what makes your course.

What content you put in your sections is up to you, it can be mostly textual, a tutorial like this section, a video, a project, or anything you'd like to use in your course.

## Add Content to Your Course

To add content, you need to create a section in a module. You can do so the same way you created a test section inside the introduction module before. Go to the folder for the module ex. [https://github.com/your-github-username/course-in-a-box/tree/gh-pages/modules/introduction/_posts](https://github.com/your-github-username/course-in-a-box/tree/gh-pages/modules/introduction/_posts) and create a new file for every section that you want within the module.
{% endhighlight %}

While the text should be more or less, readable, you will notice some characters that you don't see on this page. That is because you will use Markdown to write the content for your course.
