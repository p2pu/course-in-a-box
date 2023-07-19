---
title: Add Single Pages
---

## Add Single Pages

If you have extra content that you don’t want to fit within a course module (contact page, credits, reference guides, etc), you can also set up single pages. These pages will appear with no left-hand sidebar, just a top navigation and a central space to fill with your content.

<center><img src="/img/example-single-page.png" alt="Screenshot of an example single page" width="75%"/></center>
<br>

Adding a single page is similar to [making a submodule](../../content/submodules/). Create a new `.md` file in the root folder of your project. You can name it anything you want—the name of the file will turn into its URL in the browser. (Ex: `single-page.md` turns into `https://course-in-a-box.p2pu.org/single-page`)

Add this chunk of code (aka front matter) at the top of your file:

```
---
layout: page
---
```

Underneath that, you can add your Markdown-formatted content however you’d like. 😎

Note that this file won’t automatically appear in the top navigation bar of your course or anywhere else unless you specifically link to it. For information on adding links, see the [Markdown and Media](../../content/markdown-and-media) page. To add a link to your nav bar, head to the next section, [Add Links to the Top Menu](../top-menu).
