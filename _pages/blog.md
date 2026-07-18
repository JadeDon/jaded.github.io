---
title: "Blog"
layout: blog
sitemap: false
permalink: /blog/
---

## Blog

I cry, laugh, and reflect in Mandarin. I analyse, reassure, and claim in English.

My Mandarin blog can be found at <a href="http://t.cn/A66XOoJh">坚瓠</a>.

<p style="font-size: 0.85em; color: #666; border-top: 1px dashed #ddd; padding-top: 2px; margin-top: -4px;">
  <span style="text-transform: uppercase; font-weight: bold; letter-spacing: 1px; font-size: 0.9em; color: #444;">Note —</span> External web links may not provide an optimal viewing experience.
</p>

Below are selected entries, translated with the help of GPT.

{% if site.posts.size > 0 %}
<div class="section-card" markdown="0">
{% for post in site.posts %}
<div class="news-item" style="padding: 1rem 0; border-bottom: 1px solid var(--border-color);">
<span class="news-date">{{ post.date | date: "%b %-d, %Y" }}</span><br>
<a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}" style="font-weight: 600;">{{ post.title }}</a>
</div>
{% endfor %}
</div>
{% else %}
<p class="text-muted">No blog posts yet.</p>
{% endif %}
