---
title: "Teaching"
layout: gridlay
sitemap: false
permalink: /teaching/
---

{% if site.data.teaching.ta_experience %}
## Teaching Assistant

<div class="section-card">
  <ul>
  {% for item in site.data.teaching.ta_experience %}
    <li>
      {{ item.course }}
      {% if item.type %} &#8211; {{ item.type }}{% endif %}, 
      {{ item.institution }} ({{ item.year }})
    </li>
  {% endfor %}
  </ul>
</div>
{% endif %}

{% if site.data.teaching.training %}
## Received Training

<div class="section-card">
  {% for group in site.data.teaching.training %}
    <p><strong>{{ group.category }}</strong></p>
    <ul>
      {% for course in group.courses %}
        <li>{{ course }}</li>
      {% endfor %}
    </ul>
  {% endfor %}
</div>
{% endif %}
