---
title: "Blog"
layout: gridlay
sitemap: false
permalink: /blog/
---

## Blog

I cry, laugh, and reflect in Mandarin. I analyse, reassure, and claim in English.

You can find my Mandarin blog at <a href="http://t.cn/A66XOoJh">坚瓠</a>.

<div style="background-color: #f8f9fa; border-left: 4px solid #6c757d; padding: 12px 16px; margin: 16px 0; font-size: 0.9em; color: #555; border-radius: 4px;">
  <strong>Note:</strong> <a href="http://t.cn/A66XOoJh">坚瓠</a> is hosted within an in-app publishing ecosystem. Consequently, external web links may not provide an optimal viewing experience.
</div>

<div style="background-color: #fffdf5; border-left: 4px solid #d4af37; padding: 12px 16px; margin: 16px 0; font-size: 0.9em; color: #5c4308; border-radius: 4px;">
  <strong>Note:</strong> Important clarification or reminder goes here.
</div>

<p style="font-size: 0.85em; color: #666; border-top: 1px dashed #ddd; padding-top: 8px; margin-top: 16px;">
  <span style="text-transform: uppercase; font-weight: bold; letter-spacing: 1px; font-size: 0.9em; color: #444;">Note —</span> Your short footnote or additional context goes here.
</p>

Below are selected entries, interpreted with the help of GPT.

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
