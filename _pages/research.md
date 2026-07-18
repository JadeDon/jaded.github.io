---
title: "Research"
layout: gridlay
sitemap: false
permalink: /research/
---

## Research

<div class="research-grid" markdown="0">

{% for research in site.data.research %}
<article class="research-card">
<img src="{{ site.url }}{{ site.baseurl }}/images/research/{{ research.image }}" class="research-thumb" alt="{{ research.title }}">
<div class="research-body">
<h4 class="research-title"><a class="research-card-link" href="{{ '/research/' | append: research.slug | append: '/' | relative_url }}">{{ research.title }}</a></h4>
{% if research.date != empty or research.category != empty %}
<p class="research-date">{% if research.date != empty %}{{ research.date }}{% endif %}{% if research.date != empty and research.category != empty %} <span aria-hidden="true">·</span> {% endif %}{% if research.category != empty %}{{ research.category }}{% endif %}</p>
{% endif %}
{% if research.pi_name != empty %}
<dl class="research-meta">
  <div>
    <dt>PI</dt>
    <dd>{% if research.pi_link != empty %}<a href="{{ research.pi_link }}">{{ research.pi_name }}</a>{% else %}{{ research.pi_name }}{% endif %}</dd>
  </div>
</dl>
{% endif %}
<p class="research-desc">{{ research.desc }}</p>
<a class="research-link" href="{{ '/research/' | append: research.slug | append: '/' | relative_url }}">View<span aria-hidden="true">→</span></a>
</div>
</article>
{% endfor %}

</div>
