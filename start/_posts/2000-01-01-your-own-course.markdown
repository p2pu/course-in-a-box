---
title: Your own course
layout: course_page
---
# Your own course

By signing up for this course you also created your own version of this course! You can view this version of the course by going to `https://yourgithubname.github.io/jekyll-course-experiment/`, just replace yourgithubname with your github username.

During this course you will be working on the version you forked and by the end of this course your own course should be ready!

## Update your course landing page

How about getting started and updating your course landing page by adding some information about what your course will be about. You don't have to settle on the final copy, this is to share with the other people taking this course.

To update your course landing page, you need to edit the file called `index.html` in your forked repository. Not sure how to do it? See [this section]({{site.baseurl}}{% post_url 2000-01-02-github-cheatsheet %}) in our github cheatsheet about editing a page on github.


Update [_data/course.yml]({{site.github.repository_url}}/edit/gh-pages/_data/course.yml) with a link to your github username in the p2pu branch and submit a pull request. If you just follow the link you'll be able to submit a pull request without the changes you've made to your course.

## What are the other people doing?

{% for user in site.data.course.signups %}
  {% if user.github_username != blank %}[{{user.github_username}}](http://{{user.github_username}}.github.io/jekyll-course-experiment/){% endif %}
{% endfor %}

