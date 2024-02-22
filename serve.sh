#!/bin/bash

docker run -i -t --rm -u 1000:1000 \
    -p 4000:4000 -v $(pwd):/opt/app \
    -v $(pwd)/.bundler/:/opt/bundler \
    -e BUNDLE_PATH=/opt/bundler \
    -w /opt/app ruby:2.7 bash \
    -c "bundle install && bundle exec jekyll serve --watch -H 0.0.0.0"
