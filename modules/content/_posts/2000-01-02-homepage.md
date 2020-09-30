---
title: Homepage
---

## Homepage

The homepage is the part of your course that most people will see first. By default, it shows a "jumbotron" (large banner with the course title, headline, and icon) and an open space to describe the materials inside the course. This information can be changed at any time without affecting other parts of your course. 

<br>

#### Customize the Jumbotron

![default Course-in-a-Box Jumbotron](/img/example-jumbotron.png)

Settings for the background of the Jumbotron banner at the top of the page are made in the `_config.yml` file. If you've uploaded the images into the `img` folder, you can replace the text after `img/` with the file name for the image you want to use. You can also replace the link with an externally-hosted image.

[https://github.com/your-github-username/course-in-a-box/blob/gh-pages/_config.yml](https://github.com/your-github-username/course-in-a-box/blob/gh-pages/_config.yml)


```
jumbotron_color: "#FFF"
jumbotron_image: "img/jumbotron-image.svg"
jumbotron_mask: "img/jumbotron-mask.svg"
jumbotron_icon: "img/box-icon.png"
```

- `jumbotron_color` is the background color that will be used if nothing else is defined.
- `jumbotron_image` is the image that will be used as the background. If it’s a repeating pattern, it must be saved as an SVG file. All other image types will stretch to fit the space.
- `jumbotron_mask` is an optional dark tint that can be applied over your background image to improve legibility. By default, this is not enabled—to add it, remove the `# ` at the beginning of the line of code. (To turn it off, add the `# ` back in.)
- `jumbotron_icon` is the image that appears at the top of the jumbotron.

<br>

#### Set the Course Title + Headline

The name of a course is set by editing the `course.yml` in the `_data/` folder:

[https://github.com/your-github-username/course-in-a-box/blog/gh-pages/_data/course.yml](https://github.com/your-github-username/course-in-a-box/edit/gh-pages/_data/course.yml)

By default, the information in this file will read: 

```
title: Course-in-a-Box
description: An open-source project for creating online courses, built by <a href="https://www.p2pu.org">P2PU</a>
modules: [tutorial, resources, references]
```

- **Title:** This text appears as the title of the page in your browser. 
- **Description:** This text appears as the headline in the large banner on the course landing page.
- **Modules:** This list controls the modules that appear in the top menu of your course. (See the [Modules](../modules) section for more information).

Commit the changes when you’re finished and refresh your course page after a few minutes to see the edits appear.

<br>

#### Update the Course Description

The `index.md` file in the main folder of the course holds the information that appears on the bottom half of the homepage.

[https://github.com/your-github-username/course-in-a-box/blob/gh-pages/index.md](https://github.com/your-github-username/course-in-a-box/blob/gh-pages/index.md)

```
---
layout: index
published: true
---
```

You can leave this text alone (it’s called “front matter”—more about that in [Submodules](../submodules)) at the top of the document. Using Markdown formatting, add your content underneath. This is a good place to explain a basic overview of the course material, materials required, or instructions for sign-up. 
