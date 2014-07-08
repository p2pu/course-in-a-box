---
title: Your own course
layout: course_page
---
# Your own course

By signing up for this course you also created your own version of this course! You can view this version of the course by going to `https://yourgithubname.github.io/jekyll-course-experiment/`, just replace yourgithubname with your github username.

During this course you will be working on the version you forked and by the end of this course your own course should be ready!

## A bit about branches

Create a new branch in your repository called p2pu. This will be the branch that you will be using to submit your "homework".

## Update your course landing page

Update index.html in your repository on the gh-pages branch

Update [data.yml]({{site.github.repository_url}}/edit/gh-pages/index.html) with a link to your github username in the p2pu branch and submit a pull request.

## What are the other people doing?

{% for user in site.data.course.signups %}
  {% if user.github_username != blank %}[{{user.github_username}}](http://{{user.github_username}}.github.io/jekyll-course-experiment/){% endif %}
{% endfor %}

