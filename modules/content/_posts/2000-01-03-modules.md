---
title: Modules
published: true
---

## Modules

Course-in-a-Box organizes course content using **modules** and **submodules** which exist respectively as folders and Markdown (`.md`) files within those folders.

**Modules** index your course material into broad sections (topic, weeks, etc.) and appear in the top bar of the website to guide learners through the material. **Submodules** make up the modules and hold the content. 

<br>

#### Default Modules

The default modules for Course-in-a-Box are *Setup*, *Content*, and *Customize* which will appear in the menu bar above. In your GitHub repository, there's a folder called `modules` which contains a folder corresponding to each of these default modules. Inside each of these folders is another folder called `_posts` which contains your submodules (`.md` files). 

[https://github.com/your-github-username/course-in-a-box/blob/gh-pages/modules/](https://github.com/your-github-username/course-in-a-box/blob/gh-pages/modules/)

<br>

#### Creating New Modules

To add a new module, start by creating the first file that will live within that module.

To create a module called **introduction**: 
* Open the `modules` folder (link above)
* Click the *Add File* > *Create new file* button which will take you to a page with a text box asking you to name your file
* Enter the text `introduction/_posts/2000-01-01-test.md` into the box (You should see "introduction" and "_posts" convert to folders while `2000-01-01-test.md` remains as the file name)
* Scroll to the bottom of the page and commit your change 

This will generate a new hidden module called "introduction" with a subfolder called "_posts" that contains a file (aka a submodule) called `2000-01-01-test.md`. 🎉! 

<br>

#### Updating Modules in the Menu
New modules will remain hidden from public view until you add them to the course menu. To edit the modules that appear in the menu across the top of your Course-in-a-Box website, you'll manually update the list of module names in `_data/course.yml`.

[https://github.com/your-github-username/course-in-a-box/blob/gh-pages/_data/course.yml](https://github.com/your-github-username/course-in-a-box/blob/gh-pages/_data/course.yml)

Change the line containing:

`modules: [tutorial, resources, references]`

to include the name of your new module:

`modules: [introduction, tutorial, resources, reference]`

You can also remove or rearrange these however you'd like. Commit your changes, wait a minute or two, then refresh your course website to see the updated menu!

<br>

#### Deleting Modules

The primary way to delete a folder on GitHub is to clear out all of its files: as soon as a folder is empty, it will automatically disappear. To delete a module, you'll need to remove all of the files inside one-by-one by opening them, hitting the trash icon, and committing the change.

Fortunately, a module won't appear if its name isn't listed in your `course.yml` file, so you can leave P2PU's default folders in your GitHub repository without impacting the way your course looks on the web.

