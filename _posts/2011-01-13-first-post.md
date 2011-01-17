---
layout: post
title: Ori has a Colophon
---

After five long years, orihasawebsite is reborn!

For a while now, I've need a place to keep track of interesting projects and diversions, but working with my old PHP-based site was a bit of a pain. Besides being ugly as sin, it was designed more like a portfolio than a living site that could be updated frequently. Yep, it was time for a blog.

I looked into the usual suspects like [Wordpress][] and [Blogger][], and determined that my meager needs were dwarfed by the capabilities of both products. But, both solutions were so damned *boring*. I realized that if I went with either solution, I could have a new website up that very same day, no coding or design required. 

Where's the fun in that?

So, I decided to make life hard on myself, and built the thing you're looking at here. Here's a quick rundown of the approach.

  [wordpress]: http://www.wordpress.com
  [blogger]: http://www.blogger.com

## Jekyll and GitHub

Rather than stuff my content into a database, or use one of those fancy-pants WYSIWYG editors, I went with [Jekyll][], a slick tool that builds on a number of [well][liquid] [established][markdown] [libraries][pygments] to provide a complete static-site generation framework. By authoring content with Markdown or Textile, I can build and version my entire site as plaintext in standard source control.

Even better: Jekyll is the system behind [GitHub pages][github]. Essentially, GitHub looks for a specially named repository under your account named something like `username.github.com`. If found, Jekyll will be automatically invoked upon any `git push` request to the repo. Thus, you can publish to your site simply by checking in new content. More details [here][github].

  [jekyll]: http://jekyllrb.com/
  [liquid]: http://www.liquidmarkup.org/
  [markdown]: https://github.com/nex3/maruku
  [pygments]: http://pygments.org/
  [github]: http://pages.github.com/

## Code

Mark Pilgrim's excellent [Dive into HTML5][1] was my original impetus for revamping OHaW. I've dabbled in HTML, CSS, and JS over the years, but I rarely felt like my output went much beyond hacking. I wanted to use this website as an opportunity to go deeper with these technologies.

Most of the HTML is factored into two Jekyll [layouts][]: one for main pages (i.e.: the blog and the archive), and one for individual post pages. Both layouts are actually composed via Liquid's  `include` tag. Feel free to check out the [source for the site on GitHub][sitesource].

  [layouts]: https://github.com/mojombo/jekyll/wiki/Template-Data
  [sitesource]: https://github.com/barillax/barillax.github.com

Javascript is pretty minimal at this point. For example, some JQuery to make all external links open in a new tab:

{% highlight js %}
$('a[href^="http"]').attr("target","_blank");
{% endhighlight %}

For image rollovers, I cribbed an approach described at [Self Contained][2] to use HTML5 custom data as the identifier and URL for images that contain a rollover state:

{% highlight js %}
$(function() {
  $('img[data-hover]').hover(function() {
      $(this).attr('tmp', $(this).attr('src')).attr('src', $(this).attr('data-hover')).attr('data-hover', $(this).attr('tmp')).removeAttr('tmp');
  }).each(function() {
      $('<img />').attr('src', $(this).attr('data-hover'));
  });
});
{% endhighlight %}

To create an image with a rollover, I can use code like:

{% highlight html %}
<img src="/img/pixelmator_desat.png" data-hover="/img/pixelmator.png" alt="Pixelmator">
{% endhighlight %}

...which results in: 

<div style="text-align: center; margin: 0px 0px 1em;">
<img src="/img/pixelmator_desat.png" data-hover="/img/pixelmator.png" alt="Pixelmator" style="vertical-align: middle;"> 
Mouse over me!
</div>

Static site generation precludes a traditional CGI comments system. Instead, I'm using [Disqus][] to insert discussion threads at page-load time via a snippet of javascript. 

The actual coding was done using a combination of [Textmate][] and [Kod][]. The latter is a cool new editor by [Rasmus Andersson][rsms], of Spotify fame. While I wouldn't recommend it as a replacement for Textmate, it does have a number of intriguing features, like Chrome-style tear-off tabs, NodeJS-based scripting, and full editor styling via CSS3. Definitely one to watch, especially given the [questionable status][future] of Textmate 2.0.

  [1]: http://www.diveintohtml5.org
  [2]: http://www.selfcontained.us/2008/03/08/simple-jquery-image-rollover-script/
  [textmate]: http://www.macromates.com
  [kod]: http://www.kodapp.com
  [rsms]: http://hunch.se/
  [future]: http://blog.macromates.com/2010/why-2-0-is-not-developed-in-the-open/
  [disqus]: http://www.disqus.com

## Design

Going along with the "making work for myself" theme, I wanted an excuse to do some visual design. Originally, I planned to create a minimal, "programmer"-esque theme, but after perusing the many examples around the web, I realized that: 

 1. The best were distinguished by carefully selected fonts, precise grid layouts, and subtle color choices
 2. I'm not good at any of those tasks
 3. I actually prefer [goofier styling][wacky].

So, I ended up with the rather baroque theme you see today. Faux-leather and purple patterned wallpaper may not scream "technologist," but at least you won't confuse this place with the more refined sites out there.

I'm a long-time Photoshop user, but in the past year I've found [Pixelmator][] to be a great 80/20 option. It's an intuitive Mac OS image editor that won't make you re-learn all of your PS keyboard shortcuts. And it even has a few features over PS, like drag-to-set-tolerance for tools like the magic wand and instant selection visualization.

  [day job]: http://www.rosettastone.com
  [pixelmator]: http://www.pixelmator.com
  [wacky]: http://www.branded07.com/

## Summary

Is all of this worth it? I'm hoping that the flexibility afforded by everything being Plain Old HTML will allow for easier addition of unique content down the road; the only question is whether this will outweigh the benefits of the many tools I'd get as part of the Wordpress/Blogger ecosystem. At the very least, it was a fun excuse to learn a new framework and get back to some classic webdev work.

And so ends my first self-indulgent blog post. Stay tuned for more interesting content!