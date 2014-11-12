This folder is where you should put the content for your course. Every module in your course should have a subfolder inside this folder, eg. `learning`.

Inside every module folder, you should create a special folder called `_posts`, eg. `learning/_posts`. Inside the folder called `_posts`, you should create a file for every section in the module. The name of the file should start with the date in the format `YYYY-MM-DD-sectionname.md`. The date determines the order of the sections in your module.

An example of the file layout for this course:

```
modules/community/_posts/2000-01-01-concepts.markdown
modules/community/_posts/2000-01-02-projects.markdown
modules/community/_posts/2000-01-03-resources.markdown
modules/community/_posts/2000-01-04-tools.markdown
modules/community/_posts/2000-01-05-reflect.markdown
modules/start/_posts/2000-01-01-about-this-course.markdown
modules/learning/_posts/2000-01-01-concepts.markdown
modules/learning/_posts/2000-01-02-projects.markdown
modules/learning/_posts/2000-01-03-resources.markdown
modules/references/_posts/2000-01-01-introduction.markdown
modules/references/_posts/2000-01-02-github-cheatsheet.markdown
modules/references/_posts/2000-01-02-markdown-cheatsheet.markdown
modules/references/_posts/2000-01-03-glossary.markdown
modules/references/_posts/2000-01-04-course-template.markdown
modules/references/_posts/2000-01-05-resources.markdown
modules/feedback/_posts/2000-01-01-concepts.markdown
modules/feedback/_posts/2000-01-02-projects.markdown
modules/feedback/_posts/2000-01-03-resources.markdown
modules/content/_posts/2000-01-01-concepts.markdown
modules/content/_posts/2000-01-02-projects.markdown
modules/content/_posts/2000-01-03-resources.markdown
```
