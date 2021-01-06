# An open-source project for creating online courses, built by P2PU
Course-in-a-Box is a free tool for building and publishing online courses — no prior coding experience required. 

To create your own course, simply fork this repository and delete the CNAME file. Detailed documentation is available at [course-in-a-box.p2pu.org](https://course-in-a-box.p2pu.org).

To make changes to the template itself, a good place to start is the [`_layouts`](/_layouts), [`_includes`](/_includes) and [`css`](/css) directories. These directories contain all the layout and style files used.

Questions? Ask on P2PU's [Community Forum](https://community.p2pu.org/c/tech/course-in-a-box/78).

# Running locally
- [install docker](https://docs.docker.com/engine/install/) 
- Run `docker run -i -t --rm -u 1000:1000 -p 4000:4000 -v `pwd`:/opt/app -v `pwd`/.bundler/:/opt/bundler -e BUNDLE_PATH=~/opt/bundler -w /opt/app ruby:2.7 bash -c "bundle install && bundle exec jekyll serve --watch -H 0.0.0.0"`

---
Course-in-a-Box was built by [Peer 2 Peer University](https://www.p2pu.org) using the [P2PU Jekyll course template](https://github.com/p2pu/jekyll-course-template) and shared under an MIT License.

Course content ("Modules") are shared under a [CC BY-SA 4.0 license](https://creativecommons.org/licenses/by-sa/4.0/).
