---
title: "Sales KPI Dashboard built on Tableau"
layout: single
excerpt: "Using tableau to create a KPI dashboard"
header:
  teaser: /assets/images/tableau-dashboard.png

author_profile: true
toc: true
toc_sticky: false
---


{% include video id="2hUpfWJuRnw" provider="youtube" %}

[At the bottom of this page](#kpi-dashboard) is the interactive dashboard created using Tableau. This dashboard was built for a sales agency to track their key performance indicators (KPIs). For demonstration purposes, I've populated it with dummy data to maintain security.

<!-- markdownlint-disable MD034 -->

## Dashboard Features

### Interactive Filtering

The dashboard offers multiple ways to filter and analyze data:

- Date range selectors at the top
- A filter toggle button for cleaner screenshot exports
- Click-to-filter functionality on every metric displayed

### Custom Tooltips

Each visualization comes with detailed tooltips that provide additional context. For complex metrics, these tooltips can be expanded to include comprehensive explanations and calculations.

### Navigation Bar

The left-side navigation bar includes:

- Quick links to relevant websites (Company website, LinkedIn, YouTube)
- A PDF download button for easy sharing with clients and colleagues
- Access to the detail dashboard.

### Detailed Data View

The "Detail Dash" provides access to the raw data behind all visualizations. Users can:

- Filter and sort data directly
- Export filtered datasets to CSV
- Troubleshoot discrepancies
- Share raw data with clients when needed

### Data Visualization

The dashboard presents several key metrics:

- Dial and connection rates
- Campaign performance across different channels (Mobile, Email, LinkedIn)
- Call dispositions with detailed breakdowns
- Performance metrics by vertical market

## KPI Dashboard
<style>
  .tableau-container {
    max-width: 1400px; /* Maximum desktop size */
    margin: 20px auto; /* Center container */
    width: 100%;
    overflow: hidden; /* Prevent overflow */
  }

  /* Mobile-first media queries */
  @media (max-width: 768px) {
    .tableau-container {
      margin: 10px 0;
    }
  }
</style>

<div class="tableau-container">
  <!-- Keep existing Tableau embed code -->
</div>

<script type='text/javascript'>
  var divElement = document.getElementById('viz1738273781365');
  var vizElement = divElement.querySelector('object');
  
  // Set responsive dimensions
  function resizeViz() {
    var containerWidth = divElement.offsetWidth;
    var aspectRatio = 827/1400; // Original aspect ratio
    var mobileHeight = Math.min(containerWidth * aspectRatio, 800); // Limit mobile height
    
    if (containerWidth > 768) {
      vizElement.style.width = '1400px';
      vizElement.style.height = '827px';
    } else {
      vizElement.style.width = '100%';
      vizElement.style.height = mobileHeight + 'px';
    }
  }

  // Initial resize
  resizeViz();
  
  // Add resize listener with debounce
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resizeViz, 100);
  });

  var scriptElement = document.createElement('script');
  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  vizElement.parentNode.insertBefore(scriptElement, vizElement);
</script>
