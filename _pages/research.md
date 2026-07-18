---
title: "Research"
layout: gridlay
sitemap: false
permalink: /research/
---

## Research

<div class="research-grid" markdown="0">

{% for research in site.data.research %}
<div class="research-card">
<img src="{{ site.url }}{{ site.baseurl }}/images/research/{{ research.image }}" class="research-thumb" alt="{{ research.title }}">
<div class="research-body">
<h4 class="research-title">{{ research.title }}</h4>
{% if research.date != empty or research.category != empty %}
<p class="research-date">{% if research.date != empty %}{{ research.date }}{% endif %}{% if research.date != empty and research.category != empty %} <span aria-hidden="true">·</span> {% endif %}{% if research.category != empty %}{{ research.category }}{% endif %}</p>
{% endif %}
{% if research.supervisor != empty %}
<dl class="research-meta">
<div><dt>Supervisor</dt><dd>{{ research.supervisor }}</dd></div>
</dl>
{% endif %}
<p class="research-desc">{{ research.desc }}</p>
</div>
</div>
{% endfor %}

</div>

---
title: "Research"
layout: gridlay
sitemap: false
permalink: /research/
---

## Research

<div class="research-grid" markdown="0">

{% for research in site.data.research %}
<div class="research-card">
<img src="{{ site.url }}{{ site.baseurl }}/images/research/{{ research.image }}" class="research-thumb" alt="{{ research.title }}">
<div class="research-body">
<h4 class="research-title">{{ research.title }}</h4>
{% if research.date != empty or research.category != empty %}
<p class="research-date">{% if research.date != empty %}{{ research.date }}{% endif %}{% if research.date != empty and research.category != empty %} <span aria-hidden="true">·</span> {% endif %}{% if research.category != empty %}{{ research.category }}{% endif %}</p>
{% endif %}
{% if research.supervisor != empty %}
<dl class="research-meta">
<div><dt>Supervisor</dt><dd>{{ research.supervisor }}</dd></div>
</dl>
{% endif %}
<p class="research-desc">{{ research.desc }}</p>
</div>
</div>
{% endfor %}

</div>

