---
title: Submodules
---

# Submodules

**Submodules** are the subsections of a module where your learning content lives. What you're looking at right now is a submodule about submodules. Meta!

<br>

#### Naming Submodules

Before you make your submodules, note that submodules need to follow a specific naming convention to work correctly: 

`YYYY-MM-DD-your-section-name.md`

* **YYYY-MM-DD** - Each file name needs starts with a valid date in the format `YYYY-MM-DD`—the actual date doesn't matter, but the order of the submodules will be determined by chronological date. The easiest option is to use `2000-01-01` and increment the day (01, 02, 03, etc.) to define the order.

* **your-section-name** - This is a short title for your submodule and will appear in the URL linking to it. You can hyphenate between multiple words if needed and edit this anytime.

* **.md** – This sets the file type as a Markdown document which tells the course how to read the content that's inside. Things won't work right without this!

<br>

#### Creating Submodules 

To add a new submodule, create a new file within the module you want it to live in. You can do so the same way you created a test section inside the introduction module before. Go to the folder for the module ex. [https://github.com/your-github-username/course-in-a-box/tree/gh-pages/modules/introduction/_posts](https://github.com/your-github-username/course-in-a-box/tree/gh-pages/modules/introduction/_posts) and create a new file for every section that you want within the module.
{% endhighlight %}

While the text should be more or less, readable, you will notice some characters that you don't see on this page. That is because you will use Markdown to write the content for your course.

<br>

#### Editing content

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

<br> 
