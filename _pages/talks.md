---
title: "Talks"
layout: gridlay
sitemap: false
permalink: /talks/
---

## Talks

<input type="text" class="pub-search" id="pubSearch" placeholder="Filter by title, author, or year...">
  
<div class="section-card" id="pubList">
<h3>Invited Talks</h3>

{% bibliography --query @unpublished[keywords ^= invited] %}

<h3>Regular Talks</h3>

{% bibliography --query @unpublished[keywords != invited] %}
</div>
