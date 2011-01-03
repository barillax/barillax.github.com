---
layout: default
title: Home
---

<div id="posts">
  
{% for post in site.posts limit:5 %}

<div class="post">
  <div class="date_posted">
    <span class="month">{{ post.date | date: "%b" | upcase }}</span>
    <span class="day">{{ post.date | date:" %d" }}</span>
  </div>
  <div class="post_title">
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  </div>
  <div class="inner_post">
    {{ post.content }}
    
    <p class="bottom_date">
      {{ post.date | date: "%B %d, %Y" }}
    </p>
  </div>
</div>
{% endfor %}

</div>