---
title: Use Google Analytics
---

## Use Google Analytics

Google Analytics is a free web analytics service that tracks and reports website traffic. If you're interested in seeing information like how people are finding your course, what country they live in, and how long they spend on different pages, you'll like Google Analytics!

1. Head to [analytics.google.com](https://analytics.google.com/) and sign in with or create a Google account
1. Create a new property ([more info](https://support.google.com/analytics/answer/1042508)) for your Course-in-a-Box website (You'll need to enter the URL it lives at, so if you want to set up a custom domain, you should do that first)
1. Copy the Tracking ID information (should look like "UA-000000000-0")
1. Add your tracking code after the `ga_tracking_code:` line of `_config.yml` 

[https://github.com/your-github-username/course-in-a-box/blob/gh-pages/_config.yml](https://github.com/your-github-username/course-in-a-box/blob/gh-pages/_config.yml)

This will take a while to update and won't look very exciting until you start widely sharing your course. If you want to test it now, send the link to a few friends and check the analytics dashboard 24 hours later to make sure things are functioning properly.
