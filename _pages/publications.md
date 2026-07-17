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


<script>
document.getElementById('pubSearch').addEventListener('input', function(e) {
  const query = e.target.value.toLowerCase().trim();
  const sectionCard = document.getElementById('pubList');
  const lists = sectionCard.querySelectorAll('ol, ul');

  lists.forEach(list => {
    const items = list.querySelectorAll('li');
    let hasAnyMatch = false;

    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (text.includes(query)) {
        item.style.display = "";
        hasAnyMatch = true;
      } else {
        item.style.display = "none";
      }
    });

    let heading = list.previousElementSibling;
    while (heading && heading.tagName !== 'H3') {
      heading = heading.previousElementSibling;
    }

    if (hasAnyMatch) {
      list.style.display = "";
      if (heading) heading.style.display = "";
    } else {
      list.style.display = "none";
      if (heading) heading.style.display = "none";
    }
  });
});
</script>
