---
title: Your own course
layout: course_page
---
# Your own course

By signing up for this course you also created your own version of this course! You can view your version by going to `https://yourgithubname.github.io/jekyll-course-experiment/`, just replace yourgithubname with your github username.

During this course you will be working on the version you forked and by the end of this course your own course should be ready!

## Possible error: pages not displayed
You can get an email after forking the repository with the following message: "The page build failed with the following error: Page build failed". To solve this issue, check you have [enabled the automatic page generator](https://help.github.com/articles/creating-pages-with-the-automatic-generator) on your repository. Another possible cause would be a missing whitespace in your newly added content. Double check it and commit again to trigger page generation.

## Update your course landing page

Get started and add some information to the landing page of your course. You don't have to settle on the final copy, this is to share with the other people here to start talking about your ideas.

To update your course landing page, edit the file called `index.html` in your forked repository. Not sure how to do it? See [this section]({{site.baseurl}}{% post_url 2000-01-02-github-cheatsheet %}) in our github cheatsheet about editing a page on github.

To updated the title of your course, edit `_data/course.yml` in your forked repository: {% highlight yaml %}title: "Course Title"{% endhighlight %}

When you are done, update [_data/course.yml]({{site.github.repository_url}}/edit/gh-pages/_data/course.yml) with a link to your github username in the p2pu branch and submit a pull request. If you just follow the link you'll be able to submit a pull request without the changes you've made to your course.

## What are the other people doing?

{% for user in site.data.course.signups %}
  {% if user.github_username != blank %}[{{user.github_username}}](http://{{user.github_username}}.github.io/jekyll-course-experiment/){% endif %}
{% endfor %}

