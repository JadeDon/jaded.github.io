---
title: "Publications"
layout: gridlay
sitemap: false
permalink: /publications/
---

## Publications

<input type="text" class="pub-search" id="pubSearch" placeholder="Filter by title, author, or year...">

<div class="section-card" id="pubList">
<h3>Preprints</h3>

{% bibliography --query @unpublished --template bibtemplate %}

<!--
<h3>Refereed Journal Articles</h3>

{% bibliography --query @article --template bibtemplate %}
-->

<h3>Refereed Conference Proceedings</h3>

{% bibliography --query @inproceedings --template bibtemplate %}
</div>
