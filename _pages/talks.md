---
title: "Talks"
layout: gridlay
permalink: /talks/
---

## Talks

<input type="text" class="pub-search" id="pubSearch" placeholder="Filter by title, author, or year...">
  
<div class="section-card" id="pubList">
<h3>Invited Talks</h3>

{% bibliography --query @incollection[keywords ^= invited] %}

<h3>Regular Talks</h3>

{% bibliography --query @incollection[keywords != invited] %}
</div>

<script>
document.getElementById('pubSearch').addEventListener('input', function(e) {
  const query = e.target.value.toLowerCase().trim();
  const rawQuery = e.target.value;
  const sectionCard = document.getElementById('pubList');
  const lists = sectionCard.querySelectorAll('ol, ul');
  let anyMatchInWholePage = false;

  lists.forEach(list => {
    const items = list.querySelectorAll('li');
    let hasAnyMatch = false;

    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (text.includes(query)) {
        item.style.display = "";
        hasAnyMatch = true;
        anyMatchInWholePage = true;
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

  let noResultsMessage = document.getElementById('noResults');
  if (!noResultsMessage) {
    noResultsMessage = document.createElement('div');
    noResultsMessage.id = 'noResults';
    noResultsMessage.style.textAlign = 'center';
    noResultsMessage.style.padding = '20px';
    noResultsMessage.style.color = '#777';
    noResultsMessage.style.fontSize = '1.1em';
    sectionCard.appendChild(noResultsMessage);
  }

  if (anyMatchInWholePage || query === '') {
    noResultsMessage.style.display = 'none';
  } else {
    noResultsMessage.textContent = 'No results for "' + rawQuery + '"';
    noResultsMessage.style.display = '';
  }
});
</script>
