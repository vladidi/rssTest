app.controller("rssCtrl", ["$scope", "$routeParams", "rssService", function ($scope, $routeParams, rssService) {
    $scope.id = $routeParams.id;
    $scope.feeds = [];
    $scope.search = '';
    $scope.searchFeeds = function(feed) {
      var index = feed.feedUrl.toLowerCase().indexOf($scope.search.toLowerCase());
      return index > -1;
    };
    $scope.selectFeed = function(feed, index) {
      $scope.feeds.splice(index, 1);
      $scope.feeds.unshift(feed);
      $scope.selected = feed;
    };
    $scope.getSelected = function(feed) {
      return feed.feedUrl === $scope.selected.feedUrl;
    };
    $scope.removeFeed = function(index) {
      $scope.feeds.splice(index, 1);
      if($scope.feeds.length)
        $scope.selected = $scope.feeds[0];
      else
        $scope.selected = {};
    };
    ($scope.init = function () {
      rssService.getFeeds().then(function (res) {
        // The request give "No 'Access-Control-Allow-Origin' header is present on the requested resource.
        // Origin 'http://localhost:8000' is therefore not allowed access."
        // Adding headers in request not helping seems like googleapis blocking it, so I gonna hardcode the feeds...
        $scope.feeds = [{
          "feedUrl": "http://www.feedforall.com/blog-feed.xml",
          "title": "An RSS Daily News Feed from FeedForAll - RSS Feed Creation.",
          "link": "http://www.feedforall.com/blog.htm",
          "author": "",
          "description": "RSS is a fascinating technology. The uses for RSS are expanding daily. Take a closer look at how various industries are using the benefits of RSS in their businesses. New information related to RSS feeds and using RSS for marketing is posted on a regular basis.",
          "type": "rss20",
          "entries": [
            {
              "title": "Why Independent Artists and Musicians Should Podcast",
              "link": "http://www.feedforall.com/blog.htm#914",
              "author": "",
              "publishedDate": "Wed, 21 Sep 2016 06:58:39 -0700",
              "contentSnippet": "Independent artists have long struggled to gain recognition and attract an audience. Without the backing of a major label it ...",
              "content": "Independent artists have long struggled to gain recognition and attract an audience. Without the backing of a major label it can be very difficult for independent artists to obtain radio play time, that is, until now. Podcasting a revolutionary new medium, has opened new distribution channels for independent artists. Podcasting is the process of distributing audio files using the RSS format and has become very popular with the younger generations. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/musicians-should-podcast.htm\"\u003eWhy Independent Artists and Musicians Should Podcast\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Podcasting Knowledgebase",
              "link": "http://www.feedforall.com/blog.htm#913",
              "author": "",
              "publishedDate": "Mon, 19 Sep 2016 06:57:02 -0700",
              "contentSnippet": "Common questions about podcasting, itunes, namespace extensions and videocasting. Feel free to send our webmasters any podcast ...",
              "content": "Common questions about podcasting, itunes, namespace extensions and videocasting. Feel free to send our webmasters any podcast questions and we will post the answers in the podcasting knowledgebase.\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/podcasting-knowledgebase.htm\"\u003ePodcasting Knowledgebase\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "What Exactly Is Podcasting?",
              "link": "http://www.feedforall.com/blog.htm#912",
              "author": "",
              "publishedDate": "Sat, 17 Sep 2016 06:55:52 -0700",
              "contentSnippet": "One great thing about podcasting is the wide variety of content formats it can contain. And unlike radio or television ...",
              "content": "One great thing about podcasting is the wide variety of content formats it can contain. And unlike radio or television broadcasts, the recipient can listen or view at their leisure, choosing for themselves when and where they wish to listen or view a podcast. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/what-exactly-is-podcasting.htm\"\u003eWhat Exactly Is Podcasting?\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "How Do I Promote My Podcast",
              "link": "http://www.feedforall.com/blog.htm#911",
              "author": "",
              "publishedDate": "Thu, 15 Sep 2016 06:54:17 -0700",
              "contentSnippet": "There are a variety of things you can do to promote your podcast and increase its popularity... \n\n1. Auto-Discovery\n\nInclude ...",
              "content": "There are a variety of things you can do to promote your podcast and increase its popularity... \u003cbr\u003e\n\u003cb\u003e\u003c/b\u003e\u003cbr\u003e\n\u003cb\u003e1. Auto-Discovery\u003c/b\u003e\u003cbr\u003e\n\u003cbr\u003e\nInclude auto-discovery tags in the HTML header of the web page. Some podcasting and RSS readers will automatically detect that an RSS feed or podcast is available if such auto-discovery tags are included in the web page header tags. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/how-do-i-promote-my-podcast.htm\"\u003eHow Do I Promote My Podcast\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "FutureRSS",
              "link": "http://www.feedforall.com/blog.htm#910",
              "author": "",
              "publishedDate": "Tue, 13 Sep 2016 06:52:40 -0700",
              "contentSnippet": "The future-rss.php script is used to automatically delay the publication of Items in an RSS feed. This allows Items in a RSS ...",
              "content": "The future-rss.php script is used to automatically delay the publication of Items in an RSS feed. This allows Items in a RSS feed to be created ahead of time, and then slowly released over a period of time. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/future-rss.htm\"\u003eFutureRSS\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Search Engine Optimization for RSS Feeds",
              "link": "http://www.feedforall.com/blog.htm#909",
              "author": "",
              "publishedDate": "Sun, 11 Sep 2016 06:51:10 -0700",
              "contentSnippet": "Tips for Helping Your RSS Feed Perform!\nIn some ways RSS is very similar to HTML, the language commonly used to create ...",
              "content": "\u003cb\u003eTips for Helping Your RSS Feed Perform!\u003c/b\u003e\u003cbr\u003e\nIn some ways RSS is very similar to HTML, the language commonly used to create websites. Just as with HTML, webmasters using traditional search engine optimization tactics when creating an RSS feed will find that their RSS feed receives additional exposure and interest. \u003cbr\u003e\n\u003cbr\u003e\nSimple steps to optimize an RSS feed for search engines:\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/seo-for-rss.htm\"\u003eSearch Engine Optimization for RSS Feeds\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Podcasting Software Bundle",
              "link": "http://www.feedforall.com/blog.htm#908",
              "author": "",
              "publishedDate": "Fri, 09 Sep 2016 06:48:27 -0700",
              "contentSnippet": "RecordForAll and FeedForAll makes it simple to record audio files, layer audio files, edit audio files and publish podcast ...",
              "content": "RecordForAll and FeedForAll makes it simple to record audio files, layer audio files, edit audio files and publish podcast feeds. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.recordforall.com/podcasting-bundle.htm\"\u003ePodcasting Software Bundle\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Submit RSS Feeds",
              "link": "http://www.feedforall.com/blog.htm#907",
              "author": "",
              "publishedDate": "Wed, 07 Sep 2016 06:47:56 -0700",
              "contentSnippet": "Large list of directories you can submit RSS feeds to for additional exposure.",
              "content": "Large list of directories you can \u003ca href\u003d\"http://www.rss-specifications.com/rss-submission.htm\"\u003esubmit RSS feeds\u003c/a\u003e to for additional exposure.",
              "categories": [

              ]
            },
            {
              "title": "Create RSS Feeds | Make RSS Feeds",
              "link": "http://www.feedforall.com/blog.htm#906",
              "author": "",
              "publishedDate": "Mon, 05 Sep 2016 06:00:00 -0700",
              "contentSnippet": "Create RSS | Make RSS Feeds\n\nRSS is a standard for syndicating content on the Internet. RSS feeds are used in a variety of ways ...",
              "content": "Create RSS | Make RSS Feeds\u003cbr\u003e\n\u003cbr\u003e\nRSS is a standard for syndicating content on the Internet. RSS feeds are used in a variety of ways to distribute all types of content via the Internet. The benefits for individuals subscribing to RSS feeds have resulted in a rapid growth and adoption rate. Software and tools have made RSS feed creation and management easy, even for non-technical individuals, which has also fueled the growth of RSS feeds. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/create-rss-make-rss.htm\"\u003eCreate RSS Feeds | Make RSS Feeds\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Selecting an RSS Feed Reader",
              "link": "http://www.feedforall.com/blog.htm#905",
              "author": "",
              "publishedDate": "Fri, 02 Sep 2016 06:00:40 -0700",
              "contentSnippet": "While many have resisted the urge to decipher the meaning behind the acronym RSS, the vast majority of technically ...",
              "content": "While many have resisted the urge to decipher the meaning behind the acronym RSS, the vast majority of technically knowledgeable online surfers have begun incorporating RSS into their daily routines. Why go through the hassle of understanding something new, the novice might want to know? Because it saves time, and time is a precious commodity these days.\u003cbr\u003e\n\u003cbr\u003e\nThe contents of an RSS feed can be read any number of ways. A variety of tools, both fee based and free, to read RSS feeds are available on the Internet.\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/selecting-an-rss-reader.htm\"\u003eSelecting an RSS Feed Reader\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Creative Podcasting for Businesses",
              "link": "http://www.feedforall.com/blog.htm#904",
              "author": "",
              "publishedDate": "Wed, 31 Aug 2016 06:00:00 -0700",
              "contentSnippet": "Podcasting content comes in a wide variety of shapes and sizes. Businesses are finding many different and creative ways of ...",
              "content": "Podcasting content comes in a wide variety of shapes and sizes. Businesses are finding many different and creative ways of incorporating podcasts into their business strategies and marketing plans.\u003cbr\u003e\n\u003cbr\u003e\nHere are just some of the various types of content that businesses are turning into podcasts... \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/creative-podcasting-for-businesses.htm\"\u003eCreative Podcasting for Businesses\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Audio File Optimization",
              "link": "http://www.feedforall.com/blog.htm#903",
              "author": "",
              "publishedDate": "Mon, 29 Aug 2016 06:00:00 -0700",
              "contentSnippet": "Optimize your audio files to increase their popularity, just as you would optimize a website. Audio search engines are becoming ...",
              "content": "Optimize your audio files to increase their popularity, just as you would optimize a website. Audio search engines are becoming more advanced as audio files become more commonplace on the Internet. Here are some tips to optimize your audio offerings... \u003cbr\u003e\n\u003cbr\u003e\n1. Optimize Landing Page\u003cbr\u003e\n\u003cbr\u003e\nCreate a landing page for the audio files. The landing page should explain the audio content and encourage subscriptions. Outline the steps the visitor should take in order to subscribe or listen to the audio file. Make an effort to interact with the visitor on the landing page, and make it as easy as possible for them to subscribe or listen to your podcast. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/audio-file-optimization-tips.htm\"\u003eAudio File Optimization\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Podcasting Content",
              "link": "http://www.feedforall.com/blog.htm#902",
              "author": "",
              "publishedDate": "Fri, 26 Aug 2016 06:00:00 -0700",
              "contentSnippet": "Podcasting content comes in a wide variety of shapes and sizes. Businesses are finding many different and creative ways of ...",
              "content": "Podcasting content comes in a wide variety of shapes and sizes. Businesses are finding many different and creative ways of incorporating podcasts into their business strategies and marketing plans. \u003cbr\u003e\n\u003cbr\u003e\nHere are just some of the various types of content that businesses are turning into podcasts... \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/podcasting-content.htm\"\u003ePodcasting Content\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Blog Tips for SEO",
              "link": "http://www.feedforall.com/blog.htm#901",
              "author": "",
              "publishedDate": "Wed, 24 Aug 2016 06:00:00 -0700",
              "contentSnippet": "Blogs are the current rage, and many webmasters have blogs but fail to use their blog to it's full potential. Blogs provide a ...",
              "content": "Blogs are the current rage, and many webmasters have blogs but fail to use their blog to it's full potential. Blogs provide a steady stream of fresh content, and if this content is written and managed properly, blogs have the ability to increase a website's ranking in the search engines. \u003cbr\u003e\n\u003cbr\u003e\n1. Host Your Own Blog \u003cbr\u003e\nIn order to prosper from a blog, be sure to host it on your own domain. Hosting the blog on your own server will maximize the links to your website. Link popularity is one of the factors search engines use to rank websites. Resist the urge to use free hosting services, do not give away your link popularity!\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/blog-tips-for-seo.htm\"\u003eBlog Tips for SEO\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Etiquette for RSS Feeds",
              "link": "http://www.feedforall.com/blog.htm#900",
              "author": "",
              "publishedDate": "Mon, 22 Aug 2016 06:00:00 -0700",
              "contentSnippet": "The arguments continue to rage over the ambiguities in the RSS specifications. But the fact is: RSS is here to stay, and the ...",
              "content": "The arguments continue to rage over the ambiguities in the RSS specifications. But the fact is: RSS is here to stay, and the current defined RSS 2.0 specification is likely going to be as good as it is going to get. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/etiquette-for-feeds.htm\"\u003eEtiquette for RSS Feeds\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "RSS Feed Filtering Script",
              "link": "http://www.feedforall.com/blog.htm#899",
              "author": "",
              "publishedDate": "Wed, 31 Aug 2016 06:00:00 -0700",
              "contentSnippet": "RSSFilter is a PHP script that filters the contents of an RSS feed. The filters can be defined by the publisher so that the ...",
              "content": "RSSFilter is a PHP script that filters the contents of an RSS feed. The filters can be defined by the publisher so that the resulting RSS feed contains only the information they want. RSSFilter uses rules to filter the items that are included from a feed in the resulting feed. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/rssfilter.htm\"\u003eRSS Filter\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Creative Podcasting for Businesses",
              "link": "http://www.feedforall.com/blog.htm#898",
              "author": "",
              "publishedDate": "Mon, 29 Aug 2016 06:00:00 -0700",
              "contentSnippet": "Podcasting content comes in a wide variety of shapes and sizes. Businesses are finding many different and creative ways of ...",
              "content": "Podcasting content comes in a wide variety of shapes and sizes. Businesses are finding many different and creative ways of incorporating podcasts into their business strategies and marketing plans.\u003cbr\u003e\n\u003cbr\u003e\nHere are just some of the various types of content that businesses are turning into podcasts... \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/creative-podcasting-for-businesses.htm\"\u003eCreative Podcasting for Businesses\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "RSS2HTML Templates",
              "link": "http://www.feedforall.com/blog.htm#897",
              "author": "",
              "publishedDate": "Fri, 26 Aug 2016 06:00:00 -0700",
              "contentSnippet": "The following are rss2html HTML templates that can be used in conjunction with the rss2html.php script to display RSS feeds as ...",
              "content": "The following are rss2html HTML templates that can be used in conjunction with the rss2html.php script to display RSS feeds as HTML web pages.\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/rss2html/index.htm\"\u003eRSS2HTML Templates\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Promote A Blog",
              "link": "http://www.feedforall.com/blog.htm#896",
              "author": "",
              "publishedDate": "Wed, 24 Aug 2016 06:00:00 -0700",
              "contentSnippet": "Syndication is conceptually simple. It allows publishers to distribute content that can be displayed in another location or ...",
              "content": "Syndication is conceptually simple. It allows publishers to distribute content that can be displayed in another location or context. Using RSS, publishers are able to easily create and disseminate content feeds that include news headlines, blog summaries and related links. RSS is the defined syndication standard that has become mainstream. All types of information are now available in a syndicated format.\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/promote-a-blog.htm\"\u003ePromote a Blog\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "The Rewards of Podcasting",
              "link": "http://www.feedforall.com/blog.htm#895",
              "author": "",
              "publishedDate": "Mon, 22 Aug 2016 06:00:00 -0700",
              "contentSnippet": "Getting started with podcasting is a relatively inexpensive venture. The equipment and software required for podcasting is ...",
              "content": "Getting started with podcasting is a relatively inexpensive venture. The equipment and software required for podcasting is inexpensive for a business contemplating podcasting as a new marketing and communication adventure. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/the-rewards-of-podcasting.htm\"\u003eThe Rewards of Podcasting\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Pros and Cons of RSS Feeds",
              "link": "http://www.feedforall.com/blog.htm#894",
              "author": "",
              "publishedDate": "Fri, 19 Aug 2016 06:00:00 -0700",
              "contentSnippet": "If you are struggling with the decision of whether to implement RSS feeds or not, consider the following pros and cons for ...",
              "content": "If you are struggling with the decision of whether to implement RSS feeds or not, consider the following pros and cons for webmasters who use RSS feeds as part of their content and communication plan... \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/pros-and-cons-of-rss-feeds.htm\"\u003ePros and Cons of RSS Feeds\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "RSS2HTML Pro",
              "link": "http://www.feedforall.com/blog.htm#893",
              "author": "",
              "publishedDate": "Wed, 17 Aug 2016 06:00:00 -0700",
              "contentSnippet": "The RSS2HTML Pro is an add on script that expands the functionality of the RSS2HTML script. \n\nRSS2HTML Pro",
              "content": "The RSS2HTML Pro is an add on script that expands the functionality of the RSS2HTML script. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/rss2html-pro.htm\"\u003eRSS2HTML Pro\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Podcast Audio Recording Tips",
              "link": "http://www.feedforall.com/blog.htm#892",
              "author": "",
              "publishedDate": "Mon, 15 Aug 2016 06:00:00 -0700",
              "contentSnippet": "Before you begin podcasting develop a plan and a format for your show. Determine the focus of your podcast and what types of ...",
              "content": "Before you begin podcasting develop a plan and a format for your show. Determine the focus of your podcast and what types of guests you would like to interview. Time spent planning your show will contribute to it's success.\u003cbr\u003e\n\u003cbr\u003e\nLocation, Location, Location \u003cbr\u003e\nWhen you are producing a podcast on a regular basis it is important that you select an appropriate location for the recording to take place. The location should be free of external distractions and relatively quiet. It is easiest if you use the same location each time, that way the equipment can remain in place and will not require moving or setup each time you produce a show.\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/podcast-audio-recording-tips.htm\"\u003ePodcast Audio Recording Tips\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Tips for Blogs",
              "link": "http://www.feedforall.com/blog.htm#891",
              "author": "",
              "publishedDate": "Fri, 12 Aug 2016 06:00:00 -0700",
              "contentSnippet": "Tips for creating a blog.\nThere are no hard and fast rules on how to blog. Having said that, bloggers will likely increase ...",
              "content": "Tips for creating a blog.\u003cbr\u003e\nThere are no hard and fast rules on how to blog. Having said that, bloggers will likely increase their exposure by following some simple blog guidelines. \u003cbr\u003e\n\u003cbr\u003e\n1.) Stay on topic.\u003cbr\u003e\nOpinions are generally accepted but the content of the items in the blog should all relate to a general theme. Unless you have an uncanny knack for wit, humor or cynicism, the majority of your readers will be interested in the content that relates to a specific defined theme or loosely defined area of interest. Most readers won't care that you eat Cheerios for breakfast. They may, however, be interested in the fact that vinegar takes out stains and that toilet paper rolls make great wreaths. Define a topic and stick to it. This will ensure that you create a loyal following of interested readers.\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/tips-for-blogs.htm\"\u003eTips for Blogs\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "What Can be Published Using RSS Feeds?",
              "link": "http://www.feedforall.com/blog.htm#890",
              "author": "",
              "publishedDate": "Wed, 10 Aug 2016 06:00:00 -0700",
              "contentSnippet": "With all the vast amounts of information available on the web, it is becoming more and more difficult to sort through and find ...",
              "content": "With all the vast amounts of information available on the web, it is becoming more and more difficult to sort through and find what you are looking for. RSS significantly lowers the signal-to-noise ratio. RSS has the unique ability to compile information and filter it, so you only see unique and relevant content. The information superhighway has become packed with content, and those familiar with technology are using RSS to filter the content, allowing them to drill down and access only the content they want, without having to wade through all the noise. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/what-can-be-published-using-rss.htm\"\u003eWhat Can be Published Using RSS Feeds?\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "RSS Mesh",
              "link": "http://www.feedforall.com/blog.htm#889",
              "author": "",
              "publishedDate": "Mon, 08 Aug 2016 06:00:00 -0700",
              "contentSnippet": "The RSS Mesh script is used to merge multiple RSS feeds into a single RSS feed. \n\nRSS Mesh",
              "content": "The RSS Mesh script is used to merge multiple RSS feeds into a single RSS feed. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/rssmesh.htm\"\u003eRSS Mesh\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Set Your Podcast Up for Success",
              "link": "http://www.feedforall.com/blog.htm#888",
              "author": "",
              "publishedDate": "Fri, 05 Aug 2016 06:00:46 -0700",
              "contentSnippet": "\n1. Plan Accordingly. \nWhen making the decision and commitment to podcast, it is important to think beyond the moment. Before ...",
              "content": "\u003cbr\u003e\n1. Plan Accordingly. \u003cbr\u003e\nWhen making the decision and commitment to podcast, it is important to think beyond the moment. Before starting, think about the time the podcast production will take. How will podcasting fit into a current schedule? How frequently will you podcast?\u003cbr\u003e\n\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/podcasting-tips.htm\"\u003eSet Your Podcast Up for Success\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Advertising in RSS Feeds",
              "link": "http://www.feedforall.com/blog.htm#887",
              "author": "",
              "publishedDate": "Mon, 01 Aug 2016 06:00:00 -0700",
              "contentSnippet": "As publishers have moved towards monetizing RSS feeds, their have been vibrant discussions as to whether advertisements in ...",
              "content": "As publishers have moved towards monetizing RSS feeds, their have been vibrant discussions as to whether advertisements in feeds are viable or whether they will drive subscribers away. At the end of the day while it appears that many are discussing the philosophical approaches to ads in RSS feeds few are taking the time to examine the options available for inserting advertisements in feeds. Ultimately the advertisements served are going to determine the success of RSS as an advertising medium. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/advertising-in-rss.htm\"\u003eAdvertising in RSS Feeds\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "RSS Feed Innovation",
              "link": "http://www.feedforall.com/blog.htm#886",
              "author": "",
              "publishedDate": "Fri, 29 Jul 2016 06:00:00 -0700",
              "contentSnippet": "RSS, or Really Simple Syndication, is a new way to broadcast corporate news and structured information. RSS offers a quick, ...",
              "content": "RSS, or Really Simple Syndication, is a new way to broadcast corporate news and structured information. RSS offers a quick, easy corporate communication channel. The RSS contents are published as a feed and the feed's content keep customers, partners and journalists abreast of corporate news and information. The RSS feeds are read using a tool referred to as a news aggregator, or an RSS reader. The aggregator periodically checks to see if the RSS feed has been updated. As the feed is updated, new information will automatically appear in the RSS reader. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/innovative-rss.htm\"\u003eRSS Feed Innovation\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "RSS Feed Security",
              "link": "http://www.feedforall.com/blog.htm#885",
              "author": "",
              "publishedDate": "Wed, 27 Jul 2016 06:00:00 -0700",
              "contentSnippet": "RSS is growing at a lightening speed. What was once only known as a techie tool, RSS is becoming a tool that is continuously ...",
              "content": "RSS is growing at a lightening speed. What was once only known as a \u003ci\u003etechie tool,\u003c/i\u003e RSS is becoming a tool that is continuously being used by the general population. Along with the good comes, the not so good. And while some have mentioned the emergence of RSS spam, where content publishers dynamically generate nonsensical feeds stuffed with keywords, the real concern relates to security. While an annoyance to the search engines, spam in RSS feeds pales in comparison to the possible security concerns that could be in RSS future. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/rss-security.htm\"\u003eRSS Feed Security\u003c/a\u003e\u003cbr\u003e\n\u003cbr\u003e",
              "categories": [

              ]
            },
            {
              "title": "How to Add and Remove Files to RecordForAll",
              "link": "http://www.feedforall.com/blog.htm#884",
              "author": "",
              "publishedDate": "Mon, 25 Jul 2016 06:00:00 -0700",
              "contentSnippet": "\nIn this tutorial, we will be going over how to add and remove files from the list.\n\nThe first step is to run the program, so, ...",
              "content": "\u003cbr\u003e\nIn this tutorial, we will be going over how to add and remove files from the list.\u003cbr\u003e\n\u003cbr\u003e\nThe first step is to run the program, so, find the icon on your desktop and double click on it.\u003cbr\u003e\n\u003cbr\u003e\nIf you're using the trial version, you'll see this prompt. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.recordforall.com/videos/how-to-add-remove-files.htm\"\u003eHow to Add and Remove Files to RecordForAll\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Content Syndication",
              "link": "http://www.feedforall.com/blog.htm#883",
              "author": "",
              "publishedDate": "Thu, 21 Jul 2016 06:00:00 -0700",
              "contentSnippet": "It is All About Content Syndication\n\nCreating Content\nNew websites are being launched daily. In order to compete, webmasters ...",
              "content": "It is All About Content Syndication\u003cbr\u003e\n\u003cbr\u003e\nCreating Content\u003cbr\u003e\nNew websites are being launched daily. In order to compete, webmasters need to find alternative ways of producing themed websites. Highly focused articles are often sought by wembasters. Why? Because content on the web is still king! In order to attract search engines and site visitors, webmasters rely heavily on providing new, innovative and fresh content. If the web site content is rich, visitors will come. If the website content is updated regularly, visitors will return. When evaluating a website's traffic it is easy to see that the low cost of syndicated content can increase a website's value. Sites that contain multiple pages related to a specific topic increase the likelihood of being 'found' when a variety of search phrases are used for that topic.\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/content-syndication.htm\"\u003eContent Syndication\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Publicize Your RSS Feed",
              "link": "http://www.feedforall.com/blog.htm#882",
              "author": "",
              "publishedDate": "Tue, 19 Jul 2016 06:00:00 -0700",
              "contentSnippet": "There is little argument from webmasters and publishers that RSS brings in traffic. So once you've made the leap and created a ...",
              "content": "There is little argument from webmasters and publishers that RSS brings in traffic. So once you've made the leap and created a feed, how do you tell your visitors about the feed?\u003cbr\u003e\n\u003cbr\u003e\n \u003cbr\u003e\n1. Submit Your RSS Feed to RSS Directories. \u003cbr\u003e\nThis will not only increase the number of sites linking to your website and increasing your link popularity, it will also increase the RSS feeds profile. A number of RSS search engines and RSS directories exist that allow you to freely submit RSS feeds. Feeds are generally categorized and grouped together by subject. Web surfers looking for RSS feeds about a specific subject will often search the RSS directories, to locate a feed that matches their specific criteria. Topic specific RSS feed and podcasting directories are also emerging. Choose a web feed's category carefully and only submit relevant feeds to topic specific directories.\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/publicize-your-rss-feed.htm\"\u003ePublicize Your RSS Feed\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "RSS2HTML Script",
              "link": "http://www.feedforall.com/blog.htm#881",
              "author": "",
              "publishedDate": "Mon, 18 Jul 2016 06:00:20 -0700",
              "contentSnippet": "In addition to making your RSS feed available to your visitors for use with their RSS Feed Reader, as a webmaster you may also ...",
              "content": "In addition to making your RSS feed available to your visitors for use with their RSS Feed Reader, as a webmaster you may also want to make the same feed available on your website for viewing with a regular web browser. \u003cbr\u003e\n\u003cbr\u003e\nThere are several ways to do this, some have advantages or disadvantages compared to others. The best solution is one where the webpage is automatically updated on-the-fly, is easily spidered by search engine robots, and easy to implement. \u003cbr\u003e\n\u003cbr\u003e\nTo attain this optimal solution, the developers of FeedForAll have created a free RSS to HTML PHP script, aptly named RSS2HTML. When used, this script will allow you to create webpages that will always display the most current information from your RSS feed, and because the resulting page is pure HTML, it will be in a format friendly to search engine robots.\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/free-php-script.htm\"\u003eRSS2HTML Script\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Podcasting Just Might Be the Tool to Revolutionize Education",
              "link": "http://www.feedforall.com/blog.htm#880",
              "author": "",
              "publishedDate": "Sat, 16 Jul 2016 06:00:00 -0700",
              "contentSnippet": "Schools all over the country have flocked to podcasting as a new medium to assist the teaching profession. Professors are using ...",
              "content": "Schools all over the country have flocked to podcasting as a new medium to assist the teaching profession. Professors are using podcasts to instruct students and get their messages out. Podcasting is not restricted to one educational sector, professors at prestigious colleges from Bentley to Purdue have flocked to this medium.\u003cbr\u003e\n\u003cbr\u003e\n \u003ca href\u003d\"http://www.feedforall.com/podcasting-revolutionize-education.htm\"\u003ePodcasting Just Might Be the Tool to Revolutionize Education\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Re-Using Content",
              "link": "http://www.feedforall.com/blog.htm#879",
              "author": "",
              "publishedDate": "Thu, 14 Jul 2016 06:00:00 -0700",
              "contentSnippet": "Repurposing content is not a terribly new concept. Webmasters that picked up on the trend have benefited from traffic surges ...",
              "content": "Repurposing content is not a terribly new concept. Webmasters that picked up on the trend have benefited from traffic surges for a while now. Repurposing content is all about presenting the same content in a variety of different ways, or using different mediums to present the same content. Webmasters can manipulate content in order to provide the same content in any number of different formats. \u003cbr\u003e\n\u003cbr\u003e\nWhy would publishers want to do this? There are a number of benefits to repurposing content, not the least of which is that it allows customers to select the format they wish to access your information. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/re-using-content.htm\"\u003eRe-Using Content\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Hallmarks of a Good Podcast",
              "link": "http://www.feedforall.com/blog.htm#878",
              "author": "",
              "publishedDate": "Tue, 12 Jul 2016 06:00:00 -0700",
              "contentSnippet": "There are many, many things that separate a good podcast from all the rest. Here are a few to consider... \nRecording ...",
              "content": "There are many, many things that separate a good podcast from all the rest. Here are a few to consider... \u003cbr\u003e\nRecording Quality\u003cbr\u003e\n\u003cbr\u003e\nThe quality of the recording is probably the most critical component of a podcast. A good podcast is easy to understand, and should be recorded at a volume level that makes it easy for listeners to hear all that is said.\u003cbr\u003e\n\u003cbr\u003e\n\u003cb\u003eSound Balance\u003c/b\u003e\u003cbr\u003e\n\u003cbr\u003e\nAdding background music polishes a podcast, but be careful that the music does not overpower the primary content. The background music should be subtle and not distracting. Create a balance that does not compromise the quality of the recording. Also, be sure that the music is not the focal point of a podcast show, unless the topic is about the music -- the emphasis should be on the primary content, and not on the musical arrangements.\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/hallmarks-of-a-good-podcast.htm\"\u003eHallmarks of a Good Podcast\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Podcasting for Business",
              "link": "http://www.feedforall.com/blog.htm#877",
              "author": "",
              "publishedDate": "Sun, 10 Jul 2016 06:00:00 -0700",
              "contentSnippet": "Regardless of the size of your business, or whether your company is public, private, a government agency, or a non-profit... ...",
              "content": "Regardless of the size of your business, or whether your company is public, private, a government agency, or a non-profit... there is little doubt that you should consider podcasting. Podcasting is a 21st century medium, and has proven that it is far more than just a passing fad.\u003cbr\u003e\nWhat is podcasting?\u003cbr\u003e\n\u003cbr\u003e\nPodcasting is a relatively new communication medium. Podcasting's increasing popularity and low cost of entry makes it a great communication and promotional channel for companies to experiment with.\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/podcasting-for-businesses.htm\"\u003ePodcasting for Business\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "13 Tips to Maintaining an RSS Feed Subscriber Base",
              "link": "http://www.feedforall.com/blog.htm#876",
              "author": "",
              "publishedDate": "Thu, 07 Jul 2016 06:00:00 -0700",
              "contentSnippet": "You have an RSS feed and you have worked hard to get the word out. According to your logs you have subscribers! Now the hard ...",
              "content": "You have an RSS feed and you have worked hard to get the word out. According to your logs you have subscribers! Now the hard part: how to retain the subscribers to your RSS feed. Follow these simple steps to insure that your subscriber base will grow. \u003cbr\u003e\n\u003cbr\u003e\n\u003cb\u003e1. Original Content \u003c/b\u003e\u003cbr\u003e\nA consistent stream of original content will do well to earn subscribers loyalty. The best RSS feeds provide content that is compelling and unique. Do not rehash existing content, look for a unique angle or spin if you wish to cover something that is hot in the blogosphere.\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/tips-for-maintaining-subscribers.htm\"\u003e13 Tips to Maintaining an RSS Feed Subscriber Base\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Why Niche RSS Feeds Matter",
              "link": "http://www.feedforall.com/blog.htm#875",
              "author": "",
              "publishedDate": "Tue, 05 Jul 2016 06:00:00 -0700",
              "contentSnippet": "Just as the second generation of search engines and directories evolved into niche topic specific portals we are seeing the ...",
              "content": "Just as the second generation of search engines and directories evolved into niche topic specific portals we are seeing the same occur in the area of RSS feed directories and search engines. While some directories are admittedly more niche than others the trend is obvious. \u003cbr\u003e\nFinancial Industry\u003cbr\u003e\nIf you are in the finance industry you can monitor currency exchange rates, bank rates and track investments using RSS feeds. Financial institutions have found RSS to be an optimum way to communicate CD rates, interest rates, currency conversions, and even investors are using to monitor stocks. Use RSS to track currency conversions, stocks, bonds, bank rates and other financial related information.\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/niche-feeds.htm\"\u003eWhy Niche RSS Feeds\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Places to Get Ideas for Blog Posts",
              "link": "http://www.feedforall.com/blog.htm#874",
              "author": "",
              "publishedDate": "Fri, 01 Jul 2016 06:00:00 -0700",
              "contentSnippet": "The best blogs and feeds are those that contain unique, fresh, compelling, content. So where do these prolific posters get ...",
              "content": "The best blogs and feeds are those that contain unique, fresh, compelling, content. So where do these prolific posters get their ideas? I talked to a handful of bloggers to determine where their inspiration originated for their content. \u003cbr\u003e\n\u003cbr\u003e\nNot surprisingly, ideas for blog posts or RSS feed items originate or are influenced by other web content. The following are venues for finding your online muse: \u003cbr\u003e\n\u003cbr\u003e\n\u003cb\u003e1.Google News \u003c/b\u003e\u003cbr\u003e\nMonitor Google News for keywords related to your industry. If you find a story you disagree with or wholeheartedly agree with write about it. Add your thoughts, and editorialize the content. This does not mean you should just repost Google news summaries. The value is not only in the news aggregation, but in the commentary that you provide. Tie news items to specific events, conditions, or the impact of specific news on the industry. Adding a view point or reference to a news article adds genuine value. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/blog-post-ideas.htm\"\u003ePlaces to Get Ideas for Blog Posts\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Audio File Optimization",
              "link": "http://www.feedforall.com/blog.htm#873",
              "author": "",
              "publishedDate": "Wed, 29 Jun 2016 06:00:00 -0700",
              "contentSnippet": "Optimize your audio files to increase their popularity, just as you would optimize a website. Audio search engines are becoming ...",
              "content": "Optimize your audio files to increase their popularity, just as you would optimize a website. Audio search engines are becoming more advanced as audio files become more commonplace on the Internet. Here are some tips to optimize your audio offerings... \u003cbr\u003e\n\u003cbr\u003e\n\u003cb\u003e1. Optimize Landing Page\u003c/b\u003e\u003cbr\u003e\n\u003cbr\u003e\nCreate a landing page for the audio files. The landing page should explain the audio content and encourage subscriptions. Outline the steps the visitor should take in order to subscribe or listen to the audio file. Make an effort to interact with the visitor on the landing page, and make it as easy as possible for them to subscribe or listen to your podcast. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/audio-file-optimization-tips.htm\"\u003eAudio File Optimization\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "RSS Filter",
              "link": "http://www.feedforall.com/blog.htm#872",
              "author": "",
              "publishedDate": "Mon, 27 Jun 2016 06:00:00 -0700",
              "contentSnippet": "RSSFilter is a PHP script that filters the contents of an RSS feed. The filters can be defined by the publisher so that the ...",
              "content": "RSSFilter is a PHP script that filters the contents of an RSS feed. The filters can be defined by the publisher so that the resulting RSS feed contains only the information they want. RSSFilter uses rules to filter the items that are included from a feed in the resulting feed. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/rssfilter.htm\"\u003eRSS Filter\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "How to Conduct a Podcast Interview",
              "link": "http://www.feedforall.com/blog.htm#871",
              "author": "",
              "publishedDate": "Thu, 16 Jun 2016 06:00:00 -0700",
              "contentSnippet": "Conducting a successful podcast interview can be a tricky proposition for a podcaster starting out. Once you have determined ...",
              "content": "Conducting a successful podcast interview can be a tricky proposition for a podcaster starting out. Once you have determined individuals that will appeal to your target audience contact potential interviewees and arrange a time to conduct the interview. Following this guide will insure that the interview goes off without a hitch.\u003cbr\u003e\n\u003cbr\u003e\n\u003cb\u003e1. Prepare Questions in Advance \u003c/b\u003e\u003cbr\u003e\nPrepare a list of questions prior to the interview, contemplate possible follow-up questions based on the expected responses. Create a list of notes along with the questions that are accessible during the interview and will help you direct the conversation.\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/how-to-conduct-podcast-interview.htm\"\u003eHow to Conduct a Podcast Interview\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Great Ideas for Blog Post Topics",
              "link": "http://www.feedforall.com/blog.htm#870",
              "author": "",
              "publishedDate": "Tue, 14 Jun 2016 06:00:00 -0700",
              "contentSnippet": "26 Great Ideas for Blog Posts!\nBlogs have increased in popularity because they provide a steady stream of new and unique ...",
              "content": "\u003cb\u003e26 Great Ideas for Blog Posts!\u003c/b\u003e\u003cbr\u003e\nBlogs have increased in popularity because they provide a steady stream of new and unique content. The only issue presented by this quality of blogs is that it may become difficult for those who run blogs to think of interesting and novel posts. If you have jumped on the blogging bandwagon but suffer writer's block, do not panic: we have created a list of 26 ideas for blog posts.\u003cbr\u003e\n\u003cbr\u003e\n\u003cb\u003e1. Make it visual. \u003c/b\u003e\u003cbr\u003e\nInclude a photo or other graphic in a blog post to break up the text, attract your reader's interest, or help illustrate a point. Better yet, talk about the image you have included to further incorporate it into the post.\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/great-ideas-for-blog-post-topics.htm\"\u003e26 Great Ideas for Blog Posts!\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "10 Podcast Tips To A Great Sound",
              "link": "http://www.feedforall.com/blog.htm#869",
              "author": "",
              "publishedDate": "Sun, 12 Jun 2016 06:00:05 -0700",
              "contentSnippet": "What defines a good podcast? Make no mistake -- there is a difference between a good podcast and a not-so-good podcast. A ...",
              "content": "What defines a good podcast? Make no mistake -- there is a difference between a good podcast and a not-so-good podcast. A high-caliber podcast is much more than just decent content. The sound quality, and the way a podcast is recorded, will impact the value of the podcast as well. Podcast structure and pre-planning are also important; do not skimp on the production, as it too can make or break a podcast. \u003cbr\u003e\n\u003cbr\u003e\nPodcast production takes effort, but anything worth doing is worth doing right. Use these tips to help produce a quality podcast that will be distinguished above other related podcasts... \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/top-podcasting-great-sound.htm\"\u003e10 Podcast Tips to a Great Sound\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Attention Getting Blog Posts",
              "link": "http://www.feedforall.com/blog.htm#868",
              "author": "",
              "publishedDate": "Fri, 10 Jun 2016 06:00:00 -0700",
              "contentSnippet": "Blogs are now a dime a dozen, and bloggers need to make their blog posts stand out. Developing a blog following is not as easy ...",
              "content": "Blogs are now a dime a dozen, and bloggers need to make their blog posts stand out. Developing a blog following is not as easy as it once was. Learn how to write blog posts that attract readers and retain their attention. Follow these guidelines to cultivate readers... \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/attention-getting-blog-posts.htm\"\u003eAttention Getting Blog Posts\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Text to Podcast",
              "link": "http://www.feedforall.com/blog.htm#867",
              "author": "",
              "publishedDate": "Wed, 08 Jun 2016 06:00:00 -0700",
              "contentSnippet": "Instant Content; Converting a Text Article to a Podcast\n\nWe are taught to recycle paper, cans, bottles and plastic but ...",
              "content": "Instant Content; Converting a Text Article to a Podcast\u003cbr\u003e\n\u003cbr\u003e\nWe are taught to recycle paper, cans, bottles and plastic but marketers rarely discuss the value of repackaging and repurposing content. Publishers and marketers alike have embraced content syndication and RSS but few have considered the value beyond the actual syndication. Consider an alternative communication channel that reaches a new or different audience. \u003cbr\u003e\n\u003cbr\u003e\nRepurposing and repackaging content or information so that it can be consumed through a variety of mediums is not a new concept. Many businesses today sight increased communication as a common goal. Cost conscious businesses with tight budges are often interested in minimizing work loads and cost, while increasing communication. By presenting the same information in different ways and formats, businesses are able to increase the reach and communication, while remaining cost conscious. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/text-to-podcast.htm\"\u003eText to Podcast\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Tools for Podcasting",
              "link": "http://www.feedforall.com/blog.htm#866",
              "author": "",
              "publishedDate": "Mon, 06 Jun 2016 06:00:00 -0700",
              "contentSnippet": "Podcasting is increasing in popularity and, realizing that many are interested in providing audio content in a podcast, we have ...",
              "content": "Podcasting is increasing in popularity and, realizing that many are interested in providing audio content in a podcast, we have assembled a collection of tools that make creation, promotion and listening to podcasts a little easier. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/tools-for-podcasting.htm\"\u003eTools for Podcasting\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "RSS Scripts Directory",
              "link": "http://www.feedforall.com/blog.htm#865",
              "author": "",
              "publishedDate": "Sat, 04 Jun 2016 06:00:00 -0700",
              "contentSnippet": "Access means that you can use all of the directory scripts for an unlimited amount of time. The RSS Scripts directory currently ...",
              "content": "Access means that you can use all of the directory scripts for an unlimited amount of time. The RSS Scripts directory currently includes the following scripts.\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/scripts-directory.htm\"\u003eRSS Scripts Directory\u003c/a\u003e",
              "categories": [

              ]
            }
          ]
        },{
          "feedUrl": "http://www.sss.com/blog-feed.xml",
          "title": "An RSS Daily News Feed from FeedForAll - RSS Feed Creation.",
          "link": "http://www.sss.com/blog.htm",
          "author": "",
          "description": "RSS is a fascinating technology. The uses for RSS are expanding daily. Take a closer look at how various industries are using the benefits of RSS in their businesses. New information related to RSS feeds and using RSS for marketing is posted on a regular basis.",
          "type": "rss20",
          "entries": [
            {
              "title": "Podcasting Knowledgebase",
              "link": "http://www.feedforall.com/blog.htm#913",
              "author": "",
              "publishedDate": "Mon, 19 Sep 2016 06:57:02 -0700",
              "contentSnippet": "Common questions about podcasting, itunes, namespace extensions and videocasting. Feel free to send our webmasters any podcast ...",
              "content": "Common questions about podcasting, itunes, namespace extensions and videocasting. Feel free to send our webmasters any podcast questions and we will post the answers in the podcasting knowledgebase.\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/podcasting-knowledgebase.htm\"\u003ePodcasting Knowledgebase\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "What Exactly Is Podcasting?",
              "link": "http://www.feedforall.com/blog.htm#912",
              "author": "",
              "publishedDate": "Sat, 17 Sep 2016 06:55:52 -0700",
              "contentSnippet": "One great thing about podcasting is the wide variety of content formats it can contain. And unlike radio or television ...",
              "content": "One great thing about podcasting is the wide variety of content formats it can contain. And unlike radio or television broadcasts, the recipient can listen or view at their leisure, choosing for themselves when and where they wish to listen or view a podcast. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/what-exactly-is-podcasting.htm\"\u003eWhat Exactly Is Podcasting?\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "How Do I Promote My Podcast",
              "link": "http://www.feedforall.com/blog.htm#911",
              "author": "",
              "publishedDate": "Thu, 15 Sep 2016 06:54:17 -0700",
              "contentSnippet": "There are a variety of things you can do to promote your podcast and increase its popularity... \n\n1. Auto-Discovery\n\nInclude ...",
              "content": "There are a variety of things you can do to promote your podcast and increase its popularity... \u003cbr\u003e\n\u003cb\u003e\u003c/b\u003e\u003cbr\u003e\n\u003cb\u003e1. Auto-Discovery\u003c/b\u003e\u003cbr\u003e\n\u003cbr\u003e\nInclude auto-discovery tags in the HTML header of the web page. Some podcasting and RSS readers will automatically detect that an RSS feed or podcast is available if such auto-discovery tags are included in the web page header tags. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/how-do-i-promote-my-podcast.htm\"\u003eHow Do I Promote My Podcast\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "FutureRSS",
              "link": "http://www.feedforall.com/blog.htm#910",
              "author": "",
              "publishedDate": "Tue, 13 Sep 2016 06:52:40 -0700",
              "contentSnippet": "The future-rss.php script is used to automatically delay the publication of Items in an RSS feed. This allows Items in a RSS ...",
              "content": "The future-rss.php script is used to automatically delay the publication of Items in an RSS feed. This allows Items in a RSS feed to be created ahead of time, and then slowly released over a period of time. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/future-rss.htm\"\u003eFutureRSS\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Search Engine Optimization for RSS Feeds",
              "link": "http://www.feedforall.com/blog.htm#909",
              "author": "",
              "publishedDate": "Sun, 11 Sep 2016 06:51:10 -0700",
              "contentSnippet": "Tips for Helping Your RSS Feed Perform!\nIn some ways RSS is very similar to HTML, the language commonly used to create ...",
              "content": "\u003cb\u003eTips for Helping Your RSS Feed Perform!\u003c/b\u003e\u003cbr\u003e\nIn some ways RSS is very similar to HTML, the language commonly used to create websites. Just as with HTML, webmasters using traditional search engine optimization tactics when creating an RSS feed will find that their RSS feed receives additional exposure and interest. \u003cbr\u003e\n\u003cbr\u003e\nSimple steps to optimize an RSS feed for search engines:\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/seo-for-rss.htm\"\u003eSearch Engine Optimization for RSS Feeds\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Podcasting Software Bundle",
              "link": "http://www.feedforall.com/blog.htm#908",
              "author": "",
              "publishedDate": "Fri, 09 Sep 2016 06:48:27 -0700",
              "contentSnippet": "RecordForAll and FeedForAll makes it simple to record audio files, layer audio files, edit audio files and publish podcast ...",
              "content": "RecordForAll and FeedForAll makes it simple to record audio files, layer audio files, edit audio files and publish podcast feeds. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.recordforall.com/podcasting-bundle.htm\"\u003ePodcasting Software Bundle\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Submit RSS Feeds",
              "link": "http://www.feedforall.com/blog.htm#907",
              "author": "",
              "publishedDate": "Wed, 07 Sep 2016 06:47:56 -0700",
              "contentSnippet": "Large list of directories you can submit RSS feeds to for additional exposure.",
              "content": "Large list of directories you can \u003ca href\u003d\"http://www.rss-specifications.com/rss-submission.htm\"\u003esubmit RSS feeds\u003c/a\u003e to for additional exposure.",
              "categories": [

              ]
            },
            {
              "title": "Create RSS Feeds | Make RSS Feeds",
              "link": "http://www.feedforall.com/blog.htm#906",
              "author": "",
              "publishedDate": "Mon, 05 Sep 2016 06:00:00 -0700",
              "contentSnippet": "Create RSS | Make RSS Feeds\n\nRSS is a standard for syndicating content on the Internet. RSS feeds are used in a variety of ways ...",
              "content": "Create RSS | Make RSS Feeds\u003cbr\u003e\n\u003cbr\u003e\nRSS is a standard for syndicating content on the Internet. RSS feeds are used in a variety of ways to distribute all types of content via the Internet. The benefits for individuals subscribing to RSS feeds have resulted in a rapid growth and adoption rate. Software and tools have made RSS feed creation and management easy, even for non-technical individuals, which has also fueled the growth of RSS feeds. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/create-rss-make-rss.htm\"\u003eCreate RSS Feeds | Make RSS Feeds\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Selecting an RSS Feed Reader",
              "link": "http://www.feedforall.com/blog.htm#905",
              "author": "",
              "publishedDate": "Fri, 02 Sep 2016 06:00:40 -0700",
              "contentSnippet": "While many have resisted the urge to decipher the meaning behind the acronym RSS, the vast majority of technically ...",
              "content": "While many have resisted the urge to decipher the meaning behind the acronym RSS, the vast majority of technically knowledgeable online surfers have begun incorporating RSS into their daily routines. Why go through the hassle of understanding something new, the novice might want to know? Because it saves time, and time is a precious commodity these days.\u003cbr\u003e\n\u003cbr\u003e\nThe contents of an RSS feed can be read any number of ways. A variety of tools, both fee based and free, to read RSS feeds are available on the Internet.\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/selecting-an-rss-reader.htm\"\u003eSelecting an RSS Feed Reader\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Creative Podcasting for Businesses",
              "link": "http://www.feedforall.com/blog.htm#904",
              "author": "",
              "publishedDate": "Wed, 31 Aug 2016 06:00:00 -0700",
              "contentSnippet": "Podcasting content comes in a wide variety of shapes and sizes. Businesses are finding many different and creative ways of ...",
              "content": "Podcasting content comes in a wide variety of shapes and sizes. Businesses are finding many different and creative ways of incorporating podcasts into their business strategies and marketing plans.\u003cbr\u003e\n\u003cbr\u003e\nHere are just some of the various types of content that businesses are turning into podcasts... \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/creative-podcasting-for-businesses.htm\"\u003eCreative Podcasting for Businesses\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Audio File Optimization",
              "link": "http://www.feedforall.com/blog.htm#903",
              "author": "",
              "publishedDate": "Mon, 29 Aug 2016 06:00:00 -0700",
              "contentSnippet": "Optimize your audio files to increase their popularity, just as you would optimize a website. Audio search engines are becoming ...",
              "content": "Optimize your audio files to increase their popularity, just as you would optimize a website. Audio search engines are becoming more advanced as audio files become more commonplace on the Internet. Here are some tips to optimize your audio offerings... \u003cbr\u003e\n\u003cbr\u003e\n1. Optimize Landing Page\u003cbr\u003e\n\u003cbr\u003e\nCreate a landing page for the audio files. The landing page should explain the audio content and encourage subscriptions. Outline the steps the visitor should take in order to subscribe or listen to the audio file. Make an effort to interact with the visitor on the landing page, and make it as easy as possible for them to subscribe or listen to your podcast. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/audio-file-optimization-tips.htm\"\u003eAudio File Optimization\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Podcasting Content",
              "link": "http://www.feedforall.com/blog.htm#902",
              "author": "",
              "publishedDate": "Fri, 26 Aug 2016 06:00:00 -0700",
              "contentSnippet": "Podcasting content comes in a wide variety of shapes and sizes. Businesses are finding many different and creative ways of ...",
              "content": "Podcasting content comes in a wide variety of shapes and sizes. Businesses are finding many different and creative ways of incorporating podcasts into their business strategies and marketing plans. \u003cbr\u003e\n\u003cbr\u003e\nHere are just some of the various types of content that businesses are turning into podcasts... \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/podcasting-content.htm\"\u003ePodcasting Content\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Blog Tips for SEO",
              "link": "http://www.feedforall.com/blog.htm#901",
              "author": "",
              "publishedDate": "Wed, 24 Aug 2016 06:00:00 -0700",
              "contentSnippet": "Blogs are the current rage, and many webmasters have blogs but fail to use their blog to it's full potential. Blogs provide a ...",
              "content": "Blogs are the current rage, and many webmasters have blogs but fail to use their blog to it's full potential. Blogs provide a steady stream of fresh content, and if this content is written and managed properly, blogs have the ability to increase a website's ranking in the search engines. \u003cbr\u003e\n\u003cbr\u003e\n1. Host Your Own Blog \u003cbr\u003e\nIn order to prosper from a blog, be sure to host it on your own domain. Hosting the blog on your own server will maximize the links to your website. Link popularity is one of the factors search engines use to rank websites. Resist the urge to use free hosting services, do not give away your link popularity!\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/blog-tips-for-seo.htm\"\u003eBlog Tips for SEO\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Etiquette for RSS Feeds",
              "link": "http://www.feedforall.com/blog.htm#900",
              "author": "",
              "publishedDate": "Mon, 22 Aug 2016 06:00:00 -0700",
              "contentSnippet": "The arguments continue to rage over the ambiguities in the RSS specifications. But the fact is: RSS is here to stay, and the ...",
              "content": "The arguments continue to rage over the ambiguities in the RSS specifications. But the fact is: RSS is here to stay, and the current defined RSS 2.0 specification is likely going to be as good as it is going to get. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/etiquette-for-feeds.htm\"\u003eEtiquette for RSS Feeds\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "RSS Feed Filtering Script",
              "link": "http://www.feedforall.com/blog.htm#899",
              "author": "",
              "publishedDate": "Wed, 31 Aug 2016 06:00:00 -0700",
              "contentSnippet": "RSSFilter is a PHP script that filters the contents of an RSS feed. The filters can be defined by the publisher so that the ...",
              "content": "RSSFilter is a PHP script that filters the contents of an RSS feed. The filters can be defined by the publisher so that the resulting RSS feed contains only the information they want. RSSFilter uses rules to filter the items that are included from a feed in the resulting feed. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/rssfilter.htm\"\u003eRSS Filter\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Creative Podcasting for Businesses",
              "link": "http://www.feedforall.com/blog.htm#898",
              "author": "",
              "publishedDate": "Mon, 29 Aug 2016 06:00:00 -0700",
              "contentSnippet": "Podcasting content comes in a wide variety of shapes and sizes. Businesses are finding many different and creative ways of ...",
              "content": "Podcasting content comes in a wide variety of shapes and sizes. Businesses are finding many different and creative ways of incorporating podcasts into their business strategies and marketing plans.\u003cbr\u003e\n\u003cbr\u003e\nHere are just some of the various types of content that businesses are turning into podcasts... \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/creative-podcasting-for-businesses.htm\"\u003eCreative Podcasting for Businesses\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "RSS2HTML Templates",
              "link": "http://www.feedforall.com/blog.htm#897",
              "author": "",
              "publishedDate": "Fri, 26 Aug 2016 06:00:00 -0700",
              "contentSnippet": "The following are rss2html HTML templates that can be used in conjunction with the rss2html.php script to display RSS feeds as ...",
              "content": "The following are rss2html HTML templates that can be used in conjunction with the rss2html.php script to display RSS feeds as HTML web pages.\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/rss2html/index.htm\"\u003eRSS2HTML Templates\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Promote A Blog",
              "link": "http://www.feedforall.com/blog.htm#896",
              "author": "",
              "publishedDate": "Wed, 24 Aug 2016 06:00:00 -0700",
              "contentSnippet": "Syndication is conceptually simple. It allows publishers to distribute content that can be displayed in another location or ...",
              "content": "Syndication is conceptually simple. It allows publishers to distribute content that can be displayed in another location or context. Using RSS, publishers are able to easily create and disseminate content feeds that include news headlines, blog summaries and related links. RSS is the defined syndication standard that has become mainstream. All types of information are now available in a syndicated format.\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/promote-a-blog.htm\"\u003ePromote a Blog\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "The Rewards of Podcasting",
              "link": "http://www.feedforall.com/blog.htm#895",
              "author": "",
              "publishedDate": "Mon, 22 Aug 2016 06:00:00 -0700",
              "contentSnippet": "Getting started with podcasting is a relatively inexpensive venture. The equipment and software required for podcasting is ...",
              "content": "Getting started with podcasting is a relatively inexpensive venture. The equipment and software required for podcasting is inexpensive for a business contemplating podcasting as a new marketing and communication adventure. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/the-rewards-of-podcasting.htm\"\u003eThe Rewards of Podcasting\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Pros and Cons of RSS Feeds",
              "link": "http://www.feedforall.com/blog.htm#894",
              "author": "",
              "publishedDate": "Fri, 19 Aug 2016 06:00:00 -0700",
              "contentSnippet": "If you are struggling with the decision of whether to implement RSS feeds or not, consider the following pros and cons for ...",
              "content": "If you are struggling with the decision of whether to implement RSS feeds or not, consider the following pros and cons for webmasters who use RSS feeds as part of their content and communication plan... \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/pros-and-cons-of-rss-feeds.htm\"\u003ePros and Cons of RSS Feeds\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "RSS2HTML Pro",
              "link": "http://www.feedforall.com/blog.htm#893",
              "author": "",
              "publishedDate": "Wed, 17 Aug 2016 06:00:00 -0700",
              "contentSnippet": "The RSS2HTML Pro is an add on script that expands the functionality of the RSS2HTML script. \n\nRSS2HTML Pro",
              "content": "The RSS2HTML Pro is an add on script that expands the functionality of the RSS2HTML script. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/rss2html-pro.htm\"\u003eRSS2HTML Pro\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Podcast Audio Recording Tips",
              "link": "http://www.feedforall.com/blog.htm#892",
              "author": "",
              "publishedDate": "Mon, 15 Aug 2016 06:00:00 -0700",
              "contentSnippet": "Before you begin podcasting develop a plan and a format for your show. Determine the focus of your podcast and what types of ...",
              "content": "Before you begin podcasting develop a plan and a format for your show. Determine the focus of your podcast and what types of guests you would like to interview. Time spent planning your show will contribute to it's success.\u003cbr\u003e\n\u003cbr\u003e\nLocation, Location, Location \u003cbr\u003e\nWhen you are producing a podcast on a regular basis it is important that you select an appropriate location for the recording to take place. The location should be free of external distractions and relatively quiet. It is easiest if you use the same location each time, that way the equipment can remain in place and will not require moving or setup each time you produce a show.\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/podcast-audio-recording-tips.htm\"\u003ePodcast Audio Recording Tips\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Tips for Blogs",
              "link": "http://www.feedforall.com/blog.htm#891",
              "author": "",
              "publishedDate": "Fri, 12 Aug 2016 06:00:00 -0700",
              "contentSnippet": "Tips for creating a blog.\nThere are no hard and fast rules on how to blog. Having said that, bloggers will likely increase ...",
              "content": "Tips for creating a blog.\u003cbr\u003e\nThere are no hard and fast rules on how to blog. Having said that, bloggers will likely increase their exposure by following some simple blog guidelines. \u003cbr\u003e\n\u003cbr\u003e\n1.) Stay on topic.\u003cbr\u003e\nOpinions are generally accepted but the content of the items in the blog should all relate to a general theme. Unless you have an uncanny knack for wit, humor or cynicism, the majority of your readers will be interested in the content that relates to a specific defined theme or loosely defined area of interest. Most readers won't care that you eat Cheerios for breakfast. They may, however, be interested in the fact that vinegar takes out stains and that toilet paper rolls make great wreaths. Define a topic and stick to it. This will ensure that you create a loyal following of interested readers.\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/tips-for-blogs.htm\"\u003eTips for Blogs\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "What Can be Published Using RSS Feeds?",
              "link": "http://www.feedforall.com/blog.htm#890",
              "author": "",
              "publishedDate": "Wed, 10 Aug 2016 06:00:00 -0700",
              "contentSnippet": "With all the vast amounts of information available on the web, it is becoming more and more difficult to sort through and find ...",
              "content": "With all the vast amounts of information available on the web, it is becoming more and more difficult to sort through and find what you are looking for. RSS significantly lowers the signal-to-noise ratio. RSS has the unique ability to compile information and filter it, so you only see unique and relevant content. The information superhighway has become packed with content, and those familiar with technology are using RSS to filter the content, allowing them to drill down and access only the content they want, without having to wade through all the noise. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/what-can-be-published-using-rss.htm\"\u003eWhat Can be Published Using RSS Feeds?\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "RSS Mesh",
              "link": "http://www.feedforall.com/blog.htm#889",
              "author": "",
              "publishedDate": "Mon, 08 Aug 2016 06:00:00 -0700",
              "contentSnippet": "The RSS Mesh script is used to merge multiple RSS feeds into a single RSS feed. \n\nRSS Mesh",
              "content": "The RSS Mesh script is used to merge multiple RSS feeds into a single RSS feed. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/rssmesh.htm\"\u003eRSS Mesh\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Set Your Podcast Up for Success",
              "link": "http://www.feedforall.com/blog.htm#888",
              "author": "",
              "publishedDate": "Fri, 05 Aug 2016 06:00:46 -0700",
              "contentSnippet": "\n1. Plan Accordingly. \nWhen making the decision and commitment to podcast, it is important to think beyond the moment. Before ...",
              "content": "\u003cbr\u003e\n1. Plan Accordingly. \u003cbr\u003e\nWhen making the decision and commitment to podcast, it is important to think beyond the moment. Before starting, think about the time the podcast production will take. How will podcasting fit into a current schedule? How frequently will you podcast?\u003cbr\u003e\n\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/podcasting-tips.htm\"\u003eSet Your Podcast Up for Success\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Advertising in RSS Feeds",
              "link": "http://www.feedforall.com/blog.htm#887",
              "author": "",
              "publishedDate": "Mon, 01 Aug 2016 06:00:00 -0700",
              "contentSnippet": "As publishers have moved towards monetizing RSS feeds, their have been vibrant discussions as to whether advertisements in ...",
              "content": "As publishers have moved towards monetizing RSS feeds, their have been vibrant discussions as to whether advertisements in feeds are viable or whether they will drive subscribers away. At the end of the day while it appears that many are discussing the philosophical approaches to ads in RSS feeds few are taking the time to examine the options available for inserting advertisements in feeds. Ultimately the advertisements served are going to determine the success of RSS as an advertising medium. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/advertising-in-rss.htm\"\u003eAdvertising in RSS Feeds\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "RSS Feed Innovation",
              "link": "http://www.feedforall.com/blog.htm#886",
              "author": "",
              "publishedDate": "Fri, 29 Jul 2016 06:00:00 -0700",
              "contentSnippet": "RSS, or Really Simple Syndication, is a new way to broadcast corporate news and structured information. RSS offers a quick, ...",
              "content": "RSS, or Really Simple Syndication, is a new way to broadcast corporate news and structured information. RSS offers a quick, easy corporate communication channel. The RSS contents are published as a feed and the feed's content keep customers, partners and journalists abreast of corporate news and information. The RSS feeds are read using a tool referred to as a news aggregator, or an RSS reader. The aggregator periodically checks to see if the RSS feed has been updated. As the feed is updated, new information will automatically appear in the RSS reader. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/innovative-rss.htm\"\u003eRSS Feed Innovation\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "RSS Feed Security",
              "link": "http://www.feedforall.com/blog.htm#885",
              "author": "",
              "publishedDate": "Wed, 27 Jul 2016 06:00:00 -0700",
              "contentSnippet": "RSS is growing at a lightening speed. What was once only known as a techie tool, RSS is becoming a tool that is continuously ...",
              "content": "RSS is growing at a lightening speed. What was once only known as a \u003ci\u003etechie tool,\u003c/i\u003e RSS is becoming a tool that is continuously being used by the general population. Along with the good comes, the not so good. And while some have mentioned the emergence of RSS spam, where content publishers dynamically generate nonsensical feeds stuffed with keywords, the real concern relates to security. While an annoyance to the search engines, spam in RSS feeds pales in comparison to the possible security concerns that could be in RSS future. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/rss-security.htm\"\u003eRSS Feed Security\u003c/a\u003e\u003cbr\u003e\n\u003cbr\u003e",
              "categories": [

              ]
            },
            {
              "title": "How to Add and Remove Files to RecordForAll",
              "link": "http://www.feedforall.com/blog.htm#884",
              "author": "",
              "publishedDate": "Mon, 25 Jul 2016 06:00:00 -0700",
              "contentSnippet": "\nIn this tutorial, we will be going over how to add and remove files from the list.\n\nThe first step is to run the program, so, ...",
              "content": "\u003cbr\u003e\nIn this tutorial, we will be going over how to add and remove files from the list.\u003cbr\u003e\n\u003cbr\u003e\nThe first step is to run the program, so, find the icon on your desktop and double click on it.\u003cbr\u003e\n\u003cbr\u003e\nIf you're using the trial version, you'll see this prompt. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.recordforall.com/videos/how-to-add-remove-files.htm\"\u003eHow to Add and Remove Files to RecordForAll\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Content Syndication",
              "link": "http://www.feedforall.com/blog.htm#883",
              "author": "",
              "publishedDate": "Thu, 21 Jul 2016 06:00:00 -0700",
              "contentSnippet": "It is All About Content Syndication\n\nCreating Content\nNew websites are being launched daily. In order to compete, webmasters ...",
              "content": "It is All About Content Syndication\u003cbr\u003e\n\u003cbr\u003e\nCreating Content\u003cbr\u003e\nNew websites are being launched daily. In order to compete, webmasters need to find alternative ways of producing themed websites. Highly focused articles are often sought by wembasters. Why? Because content on the web is still king! In order to attract search engines and site visitors, webmasters rely heavily on providing new, innovative and fresh content. If the web site content is rich, visitors will come. If the website content is updated regularly, visitors will return. When evaluating a website's traffic it is easy to see that the low cost of syndicated content can increase a website's value. Sites that contain multiple pages related to a specific topic increase the likelihood of being 'found' when a variety of search phrases are used for that topic.\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/content-syndication.htm\"\u003eContent Syndication\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Publicize Your RSS Feed",
              "link": "http://www.feedforall.com/blog.htm#882",
              "author": "",
              "publishedDate": "Tue, 19 Jul 2016 06:00:00 -0700",
              "contentSnippet": "There is little argument from webmasters and publishers that RSS brings in traffic. So once you've made the leap and created a ...",
              "content": "There is little argument from webmasters and publishers that RSS brings in traffic. So once you've made the leap and created a feed, how do you tell your visitors about the feed?\u003cbr\u003e\n\u003cbr\u003e\n \u003cbr\u003e\n1. Submit Your RSS Feed to RSS Directories. \u003cbr\u003e\nThis will not only increase the number of sites linking to your website and increasing your link popularity, it will also increase the RSS feeds profile. A number of RSS search engines and RSS directories exist that allow you to freely submit RSS feeds. Feeds are generally categorized and grouped together by subject. Web surfers looking for RSS feeds about a specific subject will often search the RSS directories, to locate a feed that matches their specific criteria. Topic specific RSS feed and podcasting directories are also emerging. Choose a web feed's category carefully and only submit relevant feeds to topic specific directories.\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/publicize-your-rss-feed.htm\"\u003ePublicize Your RSS Feed\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "RSS2HTML Script",
              "link": "http://www.feedforall.com/blog.htm#881",
              "author": "",
              "publishedDate": "Mon, 18 Jul 2016 06:00:20 -0700",
              "contentSnippet": "In addition to making your RSS feed available to your visitors for use with their RSS Feed Reader, as a webmaster you may also ...",
              "content": "In addition to making your RSS feed available to your visitors for use with their RSS Feed Reader, as a webmaster you may also want to make the same feed available on your website for viewing with a regular web browser. \u003cbr\u003e\n\u003cbr\u003e\nThere are several ways to do this, some have advantages or disadvantages compared to others. The best solution is one where the webpage is automatically updated on-the-fly, is easily spidered by search engine robots, and easy to implement. \u003cbr\u003e\n\u003cbr\u003e\nTo attain this optimal solution, the developers of FeedForAll have created a free RSS to HTML PHP script, aptly named RSS2HTML. When used, this script will allow you to create webpages that will always display the most current information from your RSS feed, and because the resulting page is pure HTML, it will be in a format friendly to search engine robots.\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/free-php-script.htm\"\u003eRSS2HTML Script\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Podcasting Just Might Be the Tool to Revolutionize Education",
              "link": "http://www.feedforall.com/blog.htm#880",
              "author": "",
              "publishedDate": "Sat, 16 Jul 2016 06:00:00 -0700",
              "contentSnippet": "Schools all over the country have flocked to podcasting as a new medium to assist the teaching profession. Professors are using ...",
              "content": "Schools all over the country have flocked to podcasting as a new medium to assist the teaching profession. Professors are using podcasts to instruct students and get their messages out. Podcasting is not restricted to one educational sector, professors at prestigious colleges from Bentley to Purdue have flocked to this medium.\u003cbr\u003e\n\u003cbr\u003e\n \u003ca href\u003d\"http://www.feedforall.com/podcasting-revolutionize-education.htm\"\u003ePodcasting Just Might Be the Tool to Revolutionize Education\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Re-Using Content",
              "link": "http://www.feedforall.com/blog.htm#879",
              "author": "",
              "publishedDate": "Thu, 14 Jul 2016 06:00:00 -0700",
              "contentSnippet": "Repurposing content is not a terribly new concept. Webmasters that picked up on the trend have benefited from traffic surges ...",
              "content": "Repurposing content is not a terribly new concept. Webmasters that picked up on the trend have benefited from traffic surges for a while now. Repurposing content is all about presenting the same content in a variety of different ways, or using different mediums to present the same content. Webmasters can manipulate content in order to provide the same content in any number of different formats. \u003cbr\u003e\n\u003cbr\u003e\nWhy would publishers want to do this? There are a number of benefits to repurposing content, not the least of which is that it allows customers to select the format they wish to access your information. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/re-using-content.htm\"\u003eRe-Using Content\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Hallmarks of a Good Podcast",
              "link": "http://www.feedforall.com/blog.htm#878",
              "author": "",
              "publishedDate": "Tue, 12 Jul 2016 06:00:00 -0700",
              "contentSnippet": "There are many, many things that separate a good podcast from all the rest. Here are a few to consider... \nRecording ...",
              "content": "There are many, many things that separate a good podcast from all the rest. Here are a few to consider... \u003cbr\u003e\nRecording Quality\u003cbr\u003e\n\u003cbr\u003e\nThe quality of the recording is probably the most critical component of a podcast. A good podcast is easy to understand, and should be recorded at a volume level that makes it easy for listeners to hear all that is said.\u003cbr\u003e\n\u003cbr\u003e\n\u003cb\u003eSound Balance\u003c/b\u003e\u003cbr\u003e\n\u003cbr\u003e\nAdding background music polishes a podcast, but be careful that the music does not overpower the primary content. The background music should be subtle and not distracting. Create a balance that does not compromise the quality of the recording. Also, be sure that the music is not the focal point of a podcast show, unless the topic is about the music -- the emphasis should be on the primary content, and not on the musical arrangements.\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/hallmarks-of-a-good-podcast.htm\"\u003eHallmarks of a Good Podcast\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Podcasting for Business",
              "link": "http://www.feedforall.com/blog.htm#877",
              "author": "",
              "publishedDate": "Sun, 10 Jul 2016 06:00:00 -0700",
              "contentSnippet": "Regardless of the size of your business, or whether your company is public, private, a government agency, or a non-profit... ...",
              "content": "Regardless of the size of your business, or whether your company is public, private, a government agency, or a non-profit... there is little doubt that you should consider podcasting. Podcasting is a 21st century medium, and has proven that it is far more than just a passing fad.\u003cbr\u003e\nWhat is podcasting?\u003cbr\u003e\n\u003cbr\u003e\nPodcasting is a relatively new communication medium. Podcasting's increasing popularity and low cost of entry makes it a great communication and promotional channel for companies to experiment with.\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/podcasting-for-businesses.htm\"\u003ePodcasting for Business\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "13 Tips to Maintaining an RSS Feed Subscriber Base",
              "link": "http://www.feedforall.com/blog.htm#876",
              "author": "",
              "publishedDate": "Thu, 07 Jul 2016 06:00:00 -0700",
              "contentSnippet": "You have an RSS feed and you have worked hard to get the word out. According to your logs you have subscribers! Now the hard ...",
              "content": "You have an RSS feed and you have worked hard to get the word out. According to your logs you have subscribers! Now the hard part: how to retain the subscribers to your RSS feed. Follow these simple steps to insure that your subscriber base will grow. \u003cbr\u003e\n\u003cbr\u003e\n\u003cb\u003e1. Original Content \u003c/b\u003e\u003cbr\u003e\nA consistent stream of original content will do well to earn subscribers loyalty. The best RSS feeds provide content that is compelling and unique. Do not rehash existing content, look for a unique angle or spin if you wish to cover something that is hot in the blogosphere.\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/tips-for-maintaining-subscribers.htm\"\u003e13 Tips to Maintaining an RSS Feed Subscriber Base\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Why Niche RSS Feeds Matter",
              "link": "http://www.feedforall.com/blog.htm#875",
              "author": "",
              "publishedDate": "Tue, 05 Jul 2016 06:00:00 -0700",
              "contentSnippet": "Just as the second generation of search engines and directories evolved into niche topic specific portals we are seeing the ...",
              "content": "Just as the second generation of search engines and directories evolved into niche topic specific portals we are seeing the same occur in the area of RSS feed directories and search engines. While some directories are admittedly more niche than others the trend is obvious. \u003cbr\u003e\nFinancial Industry\u003cbr\u003e\nIf you are in the finance industry you can monitor currency exchange rates, bank rates and track investments using RSS feeds. Financial institutions have found RSS to be an optimum way to communicate CD rates, interest rates, currency conversions, and even investors are using to monitor stocks. Use RSS to track currency conversions, stocks, bonds, bank rates and other financial related information.\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/niche-feeds.htm\"\u003eWhy Niche RSS Feeds\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Places to Get Ideas for Blog Posts",
              "link": "http://www.feedforall.com/blog.htm#874",
              "author": "",
              "publishedDate": "Fri, 01 Jul 2016 06:00:00 -0700",
              "contentSnippet": "The best blogs and feeds are those that contain unique, fresh, compelling, content. So where do these prolific posters get ...",
              "content": "The best blogs and feeds are those that contain unique, fresh, compelling, content. So where do these prolific posters get their ideas? I talked to a handful of bloggers to determine where their inspiration originated for their content. \u003cbr\u003e\n\u003cbr\u003e\nNot surprisingly, ideas for blog posts or RSS feed items originate or are influenced by other web content. The following are venues for finding your online muse: \u003cbr\u003e\n\u003cbr\u003e\n\u003cb\u003e1.Google News \u003c/b\u003e\u003cbr\u003e\nMonitor Google News for keywords related to your industry. If you find a story you disagree with or wholeheartedly agree with write about it. Add your thoughts, and editorialize the content. This does not mean you should just repost Google news summaries. The value is not only in the news aggregation, but in the commentary that you provide. Tie news items to specific events, conditions, or the impact of specific news on the industry. Adding a view point or reference to a news article adds genuine value. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/blog-post-ideas.htm\"\u003ePlaces to Get Ideas for Blog Posts\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Audio File Optimization",
              "link": "http://www.feedforall.com/blog.htm#873",
              "author": "",
              "publishedDate": "Wed, 29 Jun 2016 06:00:00 -0700",
              "contentSnippet": "Optimize your audio files to increase their popularity, just as you would optimize a website. Audio search engines are becoming ...",
              "content": "Optimize your audio files to increase their popularity, just as you would optimize a website. Audio search engines are becoming more advanced as audio files become more commonplace on the Internet. Here are some tips to optimize your audio offerings... \u003cbr\u003e\n\u003cbr\u003e\n\u003cb\u003e1. Optimize Landing Page\u003c/b\u003e\u003cbr\u003e\n\u003cbr\u003e\nCreate a landing page for the audio files. The landing page should explain the audio content and encourage subscriptions. Outline the steps the visitor should take in order to subscribe or listen to the audio file. Make an effort to interact with the visitor on the landing page, and make it as easy as possible for them to subscribe or listen to your podcast. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/audio-file-optimization-tips.htm\"\u003eAudio File Optimization\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "RSS Filter",
              "link": "http://www.feedforall.com/blog.htm#872",
              "author": "",
              "publishedDate": "Mon, 27 Jun 2016 06:00:00 -0700",
              "contentSnippet": "RSSFilter is a PHP script that filters the contents of an RSS feed. The filters can be defined by the publisher so that the ...",
              "content": "RSSFilter is a PHP script that filters the contents of an RSS feed. The filters can be defined by the publisher so that the resulting RSS feed contains only the information they want. RSSFilter uses rules to filter the items that are included from a feed in the resulting feed. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/rssfilter.htm\"\u003eRSS Filter\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "How to Conduct a Podcast Interview",
              "link": "http://www.feedforall.com/blog.htm#871",
              "author": "",
              "publishedDate": "Thu, 16 Jun 2016 06:00:00 -0700",
              "contentSnippet": "Conducting a successful podcast interview can be a tricky proposition for a podcaster starting out. Once you have determined ...",
              "content": "Conducting a successful podcast interview can be a tricky proposition for a podcaster starting out. Once you have determined individuals that will appeal to your target audience contact potential interviewees and arrange a time to conduct the interview. Following this guide will insure that the interview goes off without a hitch.\u003cbr\u003e\n\u003cbr\u003e\n\u003cb\u003e1. Prepare Questions in Advance \u003c/b\u003e\u003cbr\u003e\nPrepare a list of questions prior to the interview, contemplate possible follow-up questions based on the expected responses. Create a list of notes along with the questions that are accessible during the interview and will help you direct the conversation.\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/how-to-conduct-podcast-interview.htm\"\u003eHow to Conduct a Podcast Interview\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Great Ideas for Blog Post Topics",
              "link": "http://www.feedforall.com/blog.htm#870",
              "author": "",
              "publishedDate": "Tue, 14 Jun 2016 06:00:00 -0700",
              "contentSnippet": "26 Great Ideas for Blog Posts!\nBlogs have increased in popularity because they provide a steady stream of new and unique ...",
              "content": "\u003cb\u003e26 Great Ideas for Blog Posts!\u003c/b\u003e\u003cbr\u003e\nBlogs have increased in popularity because they provide a steady stream of new and unique content. The only issue presented by this quality of blogs is that it may become difficult for those who run blogs to think of interesting and novel posts. If you have jumped on the blogging bandwagon but suffer writer's block, do not panic: we have created a list of 26 ideas for blog posts.\u003cbr\u003e\n\u003cbr\u003e\n\u003cb\u003e1. Make it visual. \u003c/b\u003e\u003cbr\u003e\nInclude a photo or other graphic in a blog post to break up the text, attract your reader's interest, or help illustrate a point. Better yet, talk about the image you have included to further incorporate it into the post.\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/great-ideas-for-blog-post-topics.htm\"\u003e26 Great Ideas for Blog Posts!\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "10 Podcast Tips To A Great Sound",
              "link": "http://www.feedforall.com/blog.htm#869",
              "author": "",
              "publishedDate": "Sun, 12 Jun 2016 06:00:05 -0700",
              "contentSnippet": "What defines a good podcast? Make no mistake -- there is a difference between a good podcast and a not-so-good podcast. A ...",
              "content": "What defines a good podcast? Make no mistake -- there is a difference between a good podcast and a not-so-good podcast. A high-caliber podcast is much more than just decent content. The sound quality, and the way a podcast is recorded, will impact the value of the podcast as well. Podcast structure and pre-planning are also important; do not skimp on the production, as it too can make or break a podcast. \u003cbr\u003e\n\u003cbr\u003e\nPodcast production takes effort, but anything worth doing is worth doing right. Use these tips to help produce a quality podcast that will be distinguished above other related podcasts... \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/top-podcasting-great-sound.htm\"\u003e10 Podcast Tips to a Great Sound\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Attention Getting Blog Posts",
              "link": "http://www.feedforall.com/blog.htm#868",
              "author": "",
              "publishedDate": "Fri, 10 Jun 2016 06:00:00 -0700",
              "contentSnippet": "Blogs are now a dime a dozen, and bloggers need to make their blog posts stand out. Developing a blog following is not as easy ...",
              "content": "Blogs are now a dime a dozen, and bloggers need to make their blog posts stand out. Developing a blog following is not as easy as it once was. Learn how to write blog posts that attract readers and retain their attention. Follow these guidelines to cultivate readers... \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/attention-getting-blog-posts.htm\"\u003eAttention Getting Blog Posts\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Text to Podcast",
              "link": "http://www.feedforall.com/blog.htm#867",
              "author": "",
              "publishedDate": "Wed, 08 Jun 2016 06:00:00 -0700",
              "contentSnippet": "Instant Content; Converting a Text Article to a Podcast\n\nWe are taught to recycle paper, cans, bottles and plastic but ...",
              "content": "Instant Content; Converting a Text Article to a Podcast\u003cbr\u003e\n\u003cbr\u003e\nWe are taught to recycle paper, cans, bottles and plastic but marketers rarely discuss the value of repackaging and repurposing content. Publishers and marketers alike have embraced content syndication and RSS but few have considered the value beyond the actual syndication. Consider an alternative communication channel that reaches a new or different audience. \u003cbr\u003e\n\u003cbr\u003e\nRepurposing and repackaging content or information so that it can be consumed through a variety of mediums is not a new concept. Many businesses today sight increased communication as a common goal. Cost conscious businesses with tight budges are often interested in minimizing work loads and cost, while increasing communication. By presenting the same information in different ways and formats, businesses are able to increase the reach and communication, while remaining cost conscious. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/text-to-podcast.htm\"\u003eText to Podcast\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "Tools for Podcasting",
              "link": "http://www.feedforall.com/blog.htm#866",
              "author": "",
              "publishedDate": "Mon, 06 Jun 2016 06:00:00 -0700",
              "contentSnippet": "Podcasting is increasing in popularity and, realizing that many are interested in providing audio content in a podcast, we have ...",
              "content": "Podcasting is increasing in popularity and, realizing that many are interested in providing audio content in a podcast, we have assembled a collection of tools that make creation, promotion and listening to podcasts a little easier. \u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/tools-for-podcasting.htm\"\u003eTools for Podcasting\u003c/a\u003e",
              "categories": [

              ]
            },
            {
              "title": "RSS Scripts Directory",
              "link": "http://www.feedforall.com/blog.htm#865",
              "author": "",
              "publishedDate": "Sat, 04 Jun 2016 06:00:00 -0700",
              "contentSnippet": "Access means that you can use all of the directory scripts for an unlimited amount of time. The RSS Scripts directory currently ...",
              "content": "Access means that you can use all of the directory scripts for an unlimited amount of time. The RSS Scripts directory currently includes the following scripts.\u003cbr\u003e\n\u003cbr\u003e\n\u003ca href\u003d\"http://www.feedforall.com/scripts-directory.htm\"\u003eRSS Scripts Directory\u003c/a\u003e",
              "categories": [

              ]
            }
          ]
        },{
          "feedUrl": "http://www.feedforall.com/sample.xml",
          "title": "FeedForAll Sample Feed",
          "link": "http://www.feedforall.com/industry-solutions.htm",
          "author": "",
          "description": "RSS is a fascinating technology. The uses for RSS are expanding daily. Take a closer look at how various industries are using the benefits of RSS in their businesses.",
          "type": "rss20",
          "entries": [
            {
              "title": "RSS Solutions for Restaurants",
              "link": "http://www.feedforall.com/restaurant.htm",
              "author": "",
              "publishedDate": "Tue, 19 Oct 2004 08:09:11 -0700",
              "contentSnippet": "FeedForAll helps Restaurant's communicate with customers. Let your customers know the latest specials or events.\n\nRSS feed uses ...",
              "content": "\u003cb\u003eFeedForAll \u003c/b\u003ehelps Restaurant's communicate with customers. Let your customers know the latest specials or events.\u003cbr\u003e\n\u003cbr\u003e\nRSS feed uses include:\u003cbr\u003e\n\u003ci\u003e\u003cfont color\u003d\"#FF0000\"\u003eDaily Specials \u003cbr\u003e\nEntertainment \u003cbr\u003e\nCalendar of Events \u003c/font\u003e\u003c/i\u003e",
              "categories": [
                "Computers/Software/Internet/Site Management/Content Management"
              ]
            },
            {
              "title": "RSS Solutions for Schools and Colleges",
              "link": "http://www.feedforall.com/schools.htm",
              "author": "",
              "publishedDate": "Tue, 19 Oct 2004 08:09:09 -0700",
              "contentSnippet": "FeedForAll helps Educational Institutions communicate with students about school wide activities, events, and schedules.\n\nRSS ...",
              "content": "FeedForAll helps Educational Institutions communicate with students about school wide activities, events, and schedules.\u003cbr\u003e\n\u003cbr\u003e\nRSS feed uses include:\u003cbr\u003e\n\u003ci\u003e\u003cfont color\u003d\"#0000FF\"\u003eHomework Assignments \u003cbr\u003e\nSchool Cancellations \u003cbr\u003e\nCalendar of Events \u003cbr\u003e\nSports Scores \u003cbr\u003e\nClubs/Organization Meetings \u003cbr\u003e\nLunches Menus \u003c/font\u003e\u003c/i\u003e",
              "categories": [
                "Computers/Software/Internet/Site Management/Content Management"
              ]
            },
            {
              "title": "RSS Solutions for Computer Service Companies",
              "link": "http://www.feedforall.com/computer-service.htm",
              "author": "",
              "publishedDate": "Tue, 19 Oct 2004 08:09:07 -0700",
              "contentSnippet": "FeedForAll helps Computer Service Companies communicate with clients about cyber security and related issues. \n\nUses ...",
              "content": "FeedForAll helps Computer Service Companies communicate with clients about cyber security and related issues. \u003cbr\u003e\n\u003cbr\u003e\nUses include:\u003cbr\u003e\n\u003ci\u003e\u003cfont color\u003d\"#0000FF\"\u003eCyber Security Alerts \u003cbr\u003e\nSpecials\u003cbr\u003e\nJob Postings \u003c/font\u003e\u003c/i\u003e",
              "categories": [
                "Computers/Software/Internet/Site Management/Content Management"
              ]
            },
            {
              "title": "RSS Solutions for Governments",
              "link": "http://www.feedforall.com/government.htm",
              "author": "",
              "publishedDate": "Tue, 19 Oct 2004 08:09:05 -0700",
              "contentSnippet": "FeedForAll helps Governments communicate with the general public about positions on various issues, and keep the community ...",
              "content": "FeedForAll helps Governments communicate with the general public about positions on various issues, and keep the community aware of changes in important legislative issues. \u003cb\u003e\u003ci\u003e\u003cbr\u003e\n\u003c/i\u003e\u003c/b\u003e\u003cbr\u003e\nRSS uses Include:\u003cbr\u003e\n\u003ci\u003e\u003cfont color\u003d\"#00FF00\"\u003eLegislative Calendar\u003cbr\u003e\nVotes\u003cbr\u003e\nBulletins\u003c/font\u003e\u003c/i\u003e",
              "categories": [
                "Computers/Software/Internet/Site Management/Content Management"
              ]
            },
            {
              "title": "RSS Solutions for Politicians",
              "link": "http://www.feedforall.com/politics.htm",
              "author": "",
              "publishedDate": "Tue, 19 Oct 2004 08:09:03 -0700",
              "contentSnippet": "FeedForAll helps Politicians communicate with the general public about positions on various issues, and keep the community ...",
              "content": "FeedForAll helps Politicians communicate with the general public about positions on various issues, and keep the community notified of their schedule. \u003cbr\u003e\n\u003cbr\u003e\nUses Include:\u003cbr\u003e\n\u003ci\u003e\u003cfont color\u003d\"#FF0000\"\u003eBlogs\u003cbr\u003e\nSpeaking Engagements \u003cbr\u003e\nStatements\u003cbr\u003e\n \u003c/font\u003e\u003c/i\u003e",
              "categories": [
                "Computers/Software/Internet/Site Management/Content Management"
              ]
            },
            {
              "title": "RSS Solutions for Meteorologists",
              "link": "http://www.feedforall.com/weather.htm",
              "author": "",
              "publishedDate": "Tue, 19 Oct 2004 08:09:01 -0700",
              "contentSnippet": "FeedForAll helps Meteorologists communicate with the general public about storm warnings and weather alerts, in specific ...",
              "content": "FeedForAll helps Meteorologists communicate with the general public about storm warnings and weather alerts, in specific regions. Using RSS meteorologists are able to quickly disseminate urgent and life threatening weather warnings. \u003cbr\u003e\n\u003cbr\u003e\nUses Include:\u003cbr\u003e\n\u003ci\u003e\u003cfont color\u003d\"#0000FF\"\u003eWeather Alerts\u003cbr\u003e\nPlotting Storms\u003cbr\u003e\nSchool Cancellations \u003c/font\u003e\u003c/i\u003e",
              "categories": [
                "Computers/Software/Internet/Site Management/Content Management"
              ]
            },
            {
              "title": "RSS Solutions for Realtors \u0026 Real Estate Firms",
              "link": "http://www.feedforall.com/real-estate.htm",
              "author": "",
              "publishedDate": "Tue, 19 Oct 2004 08:08:59 -0700",
              "contentSnippet": "FeedForAll helps Realtors and Real Estate companies communicate with clients informing them of newly available properties, and ...",
              "content": "FeedForAll helps Realtors and Real Estate companies communicate with clients informing them of newly available properties, and open house announcements. RSS helps to reach a targeted audience and spread the word in an inexpensive, professional manner. \u003cfont color\u003d\"#0000FF\"\u003e\u003cbr\u003e\n\u003c/font\u003e\u003cbr\u003e\nFeeds can be used for:\u003cbr\u003e\n\u003ci\u003e\u003cfont color\u003d\"#FF0000\"\u003eOpen House Dates\u003cbr\u003e\nNew Properties For Sale\u003cbr\u003e\nMortgage Rates\u003c/font\u003e\u003c/i\u003e",
              "categories": [
                "Computers/Software/Internet/Site Management/Content Management"
              ]
            },
            {
              "title": "RSS Solutions for Banks / Mortgage Companies",
              "link": "http://www.feedforall.com/banks.htm",
              "author": "",
              "publishedDate": "Tue, 19 Oct 2004 08:08:57 -0700",
              "contentSnippet": "FeedForAll helps Banks, Credit Unions and Mortgage companies communicate with the general public about rate changes in a prompt ...",
              "content": "FeedForAll helps \u003cb\u003eBanks, Credit Unions and Mortgage companies\u003c/b\u003e communicate with the general public about rate changes in a prompt and professional manner. \u003cbr\u003e\n\u003cbr\u003e\nUses include:\u003cbr\u003e\n\u003ci\u003e\u003cfont color\u003d\"#0000FF\"\u003eMortgage Rates\u003cbr\u003e\nForeign Exchange Rates \u003cbr\u003e\nBank Rates\u003cbr\u003e\nSpecials\u003c/font\u003e\u003c/i\u003e",
              "categories": [
                "Computers/Software/Internet/Site Management/Content Management"
              ]
            },
            {
              "title": "RSS Solutions for Law Enforcement",
              "link": "http://www.feedforall.com/law-enforcement.htm",
              "author": "",
              "publishedDate": "Tue, 19 Oct 2004 08:08:56 -0700",
              "contentSnippet": "FeedForAll helps Law Enforcement Professionals communicate with the general public and other agencies in a prompt and efficient ...",
              "content": "\u003cb\u003eFeedForAll\u003c/b\u003e helps Law Enforcement Professionals communicate with the general public and other agencies in a prompt and efficient manner. Using RSS police are able to quickly disseminate urgent and life threatening information. \u003cbr\u003e\n\u003cbr\u003e\nUses include:\u003cbr\u003e\n\u003ci\u003e\u003cfont color\u003d\"#0000FF\"\u003eAmber Alerts\u003cbr\u003e\nSex Offender Community Notification \u003cbr\u003e\nWeather Alerts \u003cbr\u003e\nScheduling \u003cbr\u003e\nSecurity Alerts \u003cbr\u003e\nPolice Report \u003cbr\u003e\nMeetings\u003c/font\u003e\u003c/i\u003e",
              "categories": [
                "Computers/Software/Internet/Site Management/Content Management"
              ]
            }
          ]
        }];
        if($scope.id){
          var index = $scope.feeds.map(function (item) {
            return item.feedUrl;
          }).indexOf($scope.id);
          if(index > -1)
            $scope.selected = $scope.feeds[index];
          else {
            $scope.selected = $scope.feeds[0];
          }
        }
        else {
            $scope.selected = $scope.feeds[0];
        }
      });
    })();
}]);
