---
title: "Blog"
layout: gridlay
sitemap: false
permalink: /blog/
---

## Blog

I cry in Mandarin and laugh in English. Only this year have I started to trust English as I trust Mandarin.

You can find my blog at <a href="http://t.cn/A66XOoJh">坚瓠</a>. 

Note: my blog is hosted within an in-app publishing ecosystem. Consequently, external web links may not provide an optimal viewing experience.

Below are selected entries from my blog, interpreted with the help of GPT.

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
