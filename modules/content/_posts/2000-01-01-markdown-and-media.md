---
title: Markdown & Media
---

## Formatting Text with Markdown

Course-in-a-Box uses **Markdown**, a text-to-HTML conversion tool which uses different combinations of punctuation marks to add emphasis and formatting to content written for the web. Any file name in your GitHub project that ends in `.md` will be interpreted using Markdown rules. (Markdown also supports HTML tags which are used for embedding media or more complicated formatting if needed.)

This guide focuses on editing your course directly through GitHub, which offers a Preview tab above the code editor so you can see how your Markdown edits look before you commit your changes and wait for them to appear live:

<center><img src="/img/preview-changes.png" alt="screenshot of github's Preview Changes function" width="75%"/></center>

If you want to write your text in other software before bringing it into Course-in-a-Box, here are a few options to convert your formatting into Markdown before bringing it into Course-in-a-Box:
* [GSuite Tool: Google Docs to Markdown](https://github.com/evbacher/gd2md-html/wiki#installing-docs-to-markdown)
* [Microsoft Word to Markdown Converter](https://word2md.com/)
* [StackEdit: a visual Markdown editor](https://stackedit.io/app#)

<br>

## Markdown Cheatsheet
Below are previews of Markdown formatting options and the code needed to make them happen. We've added the most common options here — for more, check out [Mastering Markdown](https://guides.github.com/features/mastering-markdown/).

<br>

----
#### Emphasis 

```
Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with double **asterisks** or __underscores__.

Combined emphasis with **_asterisks and underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~
```

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with double **asterisks** or __underscores__.

Combined emphasis with **_asterisks and underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

<br>

----

#### Headings

```
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

<br>

----

#### Bulleted + Numbered Lists

```
* list item
* list item
  * indented list item (two spaces before the *)
    * secondary indented list item (four spaces before the *)
```

* list item
* list item
  * indented list item 
    * secondary indented list item 
    
```
1. numbered list item 1
1. numbered list item 2
1. numbered list item 3
  * mixed list 1 
  * mixed list 2
```

1. numbered list item 1
1. numbered list item 2
1. numbered list item 3
  * mixed list 1 
  * mixed list 2
 
<br>

----

#### Links

Markdown supports a few types of links, but we're just sharing the most common version here. For more details, see [Markdown Links](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links).

```
[External link](https://p2pu.org)
```

[External link](https://p2pu.org)
 
<br>

----
#### Fancy Buttons
(This is HTML, not Markdown, but just in case you want to get fancy...)

```
<a class="btn btn-primary" href="link address"><i class="fa fa-home"></i> A fancy button</a>
```

<a class="btn btn-primary" href="https://www.p2pu.org/en/"><i class="fa fa-home"></i> A fancy button</a>

<br>

----

<br>

## Media cheetsheat

While Markdown supports adding images, its capacities for media are generally limited. Fortunately, Markdown is designed to support and work alongside HTML, which has vast options for customizing your course content with images, videos, and other interactive features.

<br>

----
##### Using Existing Images
If you're using an image that is already uploaded somewhere, you can copy the URL and use it like in the example below:

```
![alt](https://www.p2pu.org/assets/images/p2pu-logo.png)
```

![alt text for image](https://www.p2pu.org/assets/images/p2pu-logo.png)

<br> 

----
##### Hosting Images on Github

You can also host images for your course for free through GitHub. Head to the `img` folder, click *Add File > Upload Files* (top right above the list of files), and use the upload tool to add your images. When you add an image to your course, you'll link to it with the code below and replace `logo.png` with the name of the image.

<!-- {% raw %} -->
```
![alt]({{site.baseurl}}/img/logo.png)
```
<!-- {% endraw %} -->
![alt]({{site.baseurl}}/img/logo.png)

<br>

----
##### YouTube Videos
If you want to place a video in your course, the easiest way is to upload it to YouTube and grab the automatically-generated embed code† from the **Share** button on the video's YouTube page. You can plop this directly into a submodule's `.md` file:

<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

```
<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

The code above includes specific values for width and height which lets you control exactly how big your video will appear. This can be helpful in many cases, but it can also make it harder for mobile users to view the video. If you want your video size to be "responsive" (aka changing its size relative to the size of the browser window), you can copy the URL† to your YouTube video into the code below:

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>
</div>

```
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>
</div>
```
 
† Note that these codes use an _embed_ version of a YouTube video's URL and won't work with the normal link to a video page. If you copy these codes directly, you'll want to replace `watch?v=` with `embed/` in your video's URL before you add them to the code block.

<br>
