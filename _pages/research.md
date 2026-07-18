---
title: "Research"
layout: gridlay
sitemap: false
permalink: /research/
---

## Research

<div class="research-grid">
  {% for project in site.data.research %}
  <div class="research-card">
    <img src="{{ site.url }}{{ site.baseurl }}/images/research/{{ project.image }}" class="research-thumb" alt="{{ project.title }}">
    <div class="research-body">
      <h3 class="research-title">{{ project.title }}</h3>
      <div class="research-desc">
        {{ project.desc }}
        
        {% if project.pub_link or project.talk_link %}
          <span class="research-links" style="display: block; margin-top: var(--space-3); font-size: 0.8125rem;">
            {% if project.pub_link %}[<a href="{{ project.pub_link }}">📄 Publication</a>]{% endif %}
            {% if project.talk_link %}[<a href="{{ project.talk_link }}">🗣️ Talk</a>]{% endif %}
          </span>
        {% endif %}
      </div>
    </div>
  </div>
  {% endfor %}
</div>
