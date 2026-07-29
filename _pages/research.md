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
<a href="{{ '/research/' | append: research.slug | append: '/' | relative_url }}" class="research-image-link" aria-label="Read more about {{ research.title }}">
<img src="{{ site.url }}{{ site.baseurl }}/images/research/{{ research.image }}" class="research-thumb" alt="{{ research.title }}">
</a>
<div class="research-body">
<h4 class="research-title"><a class="research-card-link" href="{{ '/research/' | append: research.slug | append: '/' | relative_url }}">{{ research.title | escape | newline_to_br }}</a></h4>
{% if research.date != empty or research.category != empty %}
<p class="research-date">{% if research.date != empty %}{{ research.date }}{% endif %}{% if research.date != empty and research.category != empty %} <span aria-hidden="true">·</span> {% endif %}{% if research.category != empty %}{{ research.category }}{% endif %}</p>
{% endif %}
{% assign research_pi_name = research.pi_name | default: "" | strip %}
{% assign research_pi_link = research.pi_link | default: "" | strip %}
{% if research_pi_name != "" %}
<dl class="research-meta">
  <div>
    <dt>PI </dt>
    <dd>{% if research_pi_link != "" %}<a href="{{ research_pi_link }}">{{ research_pi_name }}</a>{% else %}{{ research_pi_name }}{% endif %}</dd>
  </div>
</dl>
{% endif %}
<p class="research-desc">{{ research.desc }}</p>
</div>
</article>
{% endfor %}

</div>
