---
title: Understanding the Course Template
---

## Understanding the Course Template

Once you’ve forked the course, you’ll see the course guts as a list of folders and file names. This contains all of the learning content for the course as well as the code that holds it all together. Below is a full list of each folder and file in the main project folder and what they're used for.

This tutorial will show you exactly where to look to update the relevant parts of the course, so you don’t need to memorize this section in order to proceed. We’ve included it in case you’re curious!

<br>

#### Directory Layout

```
📁 _data - course metadata
📁 _includes - html for the ‘theme’
📁 _layouts - more html for the ‘theme’
📁 _sass - css for the ‘theme’
📁 css - more css for the ‘theme’
📁 fonts - fonts used by the ‘theme’
📁 img - images both used for the ‘theme’, but also used 
📁 js - JavaScript for the ‘theme’
📁 modules - the actual content
.gitignore - a github file (for if you want to do things on the console)
CNAME - used if you want your site to live at a custom domain
Gemfile - used by jekyll/GitHub pages
README.md - a file with instructions
_config.yml - jekyll/GitHub pages config
index.md - content for landing page
```

Each folder on GitHub also contains a file called README.md which includes more detailed instructions about the files inside. Check those out for further information!
