---
layout: splash
title: " "
author_profile: false
header:
  overlay_color: "#242424"
  overlay_filter: "0"

excerpt: "Software developer / Data Analyst focused on building efficient, scalable solutions."
---

### Recently Published

{% for post in site.posts limit:5 %}
  {% include archive-single.html type="list" %}
{% endfor %}
