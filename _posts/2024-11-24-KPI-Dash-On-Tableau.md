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
  .sidebar {
  position: relative !important;
}
.tableau-container {
  display: flex;
  justify-content: center;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
<div class="tableau-container">
  <div class='tableauPlaceholder' id='viz1738273781365' style='position: relative'>
    <noscript>
      <a href='#'>
        <img alt='Main Dash ' src='https://public.tableau.com/static/images/KP/KPIDashboard_17382724142130/MainDash/1_rss.png' style='border: none' />
      </a>
    </noscript>
    <object class='tableauViz' style='display:none;'>
      <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
      <param name='embed_code_version' value='3' />
      <param name='site_root' value='' />
      <param name='name' value='KPIDashboard_17382724142130/MainDash' />
      <param name='tabs' value='no' />
      <param name='toolbar' value='yes' />
      <param name='static_image' value='https://public.tableau.com/static/images/KP/KPIDashboard_17382724142130/MainDash/1.png' />
      <param name='animate_transition' value='yes' />
      <param name='display_static_image' value='yes' />
      <param name='display_spinner' value='yes' />
      <param name='display_overlay' value='yes' />
      <param name='display_count' value='yes' />
      <param name='language' value='en-US' />
    </object>
  </div>
</div>
<script type='text/javascript'>
  var divElement = document.getElementById('viz1738273781365');
  var vizElement = divElement.querySelector('object');
  
  // Set initial size immediately
  vizElement.style.width='1400px';
  vizElement.style.height='827px';
  
  // Adjust size based on viewport after load
  function resizeViz() {
    if ( divElement.offsetWidth > 800 ) {
      vizElement.style.width='1400px';
      vizElement.style.height='827px';
    } else if ( divElement.offsetWidth > 500 ) {
      vizElement.style.width='1400px';
      vizElement.style.height='827px';
    } else {
      vizElement.style.width='100%';
      vizElement.style.height='3927px';
    }
  }
  
  window.addEventListener('resize', resizeViz);
  
  var scriptElement = document.createElement('script');
  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  vizElement.parentNode.insertBefore(scriptElement, vizElement);
</script>

<!-- markdownlint-enable MD034 -->