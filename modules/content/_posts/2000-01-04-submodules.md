---
title: Submodules
---

## Submodules

**Submodules** are the subsections of a module where your learning content lives. What you're looking at right now is a submodule about submodules. Meta!

<br>

#### Naming Submodules

All submodule files need to follow a specific naming convention to work correctly: 

`YYYY-MM-DD-your-section-name.md`

* **YYYY-MM-DD** - Each file name starts with a valid date in the format `YYYY-MM-DD`—the actual date doesn't matter, but the order of the submodules will be determined by chronological date (for these purposes, you can think of each submodule as a blog post, where the earliest post appears first). We use `2000-01-01` for the first submodule and increment the day (01, 02, 03, etc.) to define the order.

* **your-section-name** - This is a short title for your submodule and will appear in the URL linking to it. You can hyphenate between multiple words if needed and edit this anytime.

* **.md** – Typing `.md` at the end of your name will set the file type as a Markdown document which tells the course how to read the content that's inside. 

<br>

#### Creating Submodules 

To add a new blank submodule, open the `modules` folder in your GitHub repository. 

[https://github.com/your-github-username/course-in-a-box/blob/gh-pages/modules/](https://github.com/your-github-username/course-in-a-box/blob/gh-pages/modules/)

Find the module folder you want to create content for and click into it, then into its `_posts` subfolder. (If these doesn't exist yet, check out [Creating New Modules](../modules).) Click the *Add File* > *Create new file* button and enter your personalized version of `YYYY-MM-DD-your-section-name.md` into the "Name your file..." field.

Below the name, you'll see a vast white space, full of possibility and eagerly awaiting your learning content! If you're not ready to add text yet, you can scroll to the bottom to commit the change and create a blank page.

<br>

#### Adding a Page Title

To set the name of your submodule in the left-hand side bar, you’ll need to add something called “front matter” to the top of your document. This sets meta-information about your page – while it won't be visible on the page itself, it will establish the information that shows up in bookmarks, link previews, and search results. We primarily use `title` in Course-in-a-Box — all you need to do is plop the text below into the beginning of your `.md.` files and replace the word(s) after `title:` with the name of your page. 

```
---
title: Submodules
---
```

<br>

#### Add Your Content

After that, it's all you! Below the title, add in your learning content using Markdown and (optionally) HTML. Keep the [Markdown & Media](../markdown-and-media) guide handy to speed up the process.

If you're learning this as you go, it can be immensely helpful to peek under the hood of other projects to see how they're made. To compare this page with its Markdown guts, check out `2000-01-04-submodules.md`:

[https://github.com/your-github-username/course-in-a-box/tree/gh-pages/modules/content/_posts/2000-01-04-submodules.md](https://github.com/your-github-username/course-in-a-box/tree/gh-pages/modules/content/_posts/2000-01-04-submodules.md)
