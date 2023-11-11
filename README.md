# Podtron Site
This is the rather basic website that's used as part of Podtron Pipeline.  To run locally, you need to set up a .env file, 
but once deployed, everything is passed in via the build environment for the pipeline.  The environment 
variables you need are:

* CONTENT_BUCKET - the bucket where the site will be hosted
* GATSBY_RSS_FEED_URL - the RSS feed for the podcast
* SITE_URL - URL for this website
* SITE_TITLE - Title for the website
* SITE_SUBTITLE - Subtitle for the website
* GATSBY_API_ENDPOINT - the endpoint for the API 

As you can see, two of these variables are prefixed with "GATSBY".  This is so that Gatsby (the underlying site framework) can surface
these values in the website.  Everything else is only needed at build time.

## Bootstraping

There's a bit of a chicken and egg issue to get this running.  When you get started, you'll have no RSS feed because you have no episodes.
You'll need to get the pipeline running and generating the feed before this is going to work.  So it's probably best to bootstrap with a short
recording, and then delete that later once you're running.  I haven't totally thought that through because I had episodes when I started this
whole project.
