---
layout: default
title: Home
---

{% for post in site.posts limit:5 %}

<div class="post">
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  {{ post.content }}
  <div class="date_posted">{{ post.date }}.</div>
</div>

{% endfor %}