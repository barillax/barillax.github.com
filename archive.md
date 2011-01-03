---
layout: default
title: Archive
---

<div id="posts">
  <div class="post">
    <div class="date_posted">
      <span class="month"></span>
      <span class="day"></span>
    </div>
    <div class="post_title">
      <h2>{{ page.title }}</h2>
    </div>
    <div class="inner_post">
      <ul class="post_index">
        {% for post in site.posts %}
          <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
        {% endfor %}
      </ul>
    </div>
  </div>
</div>