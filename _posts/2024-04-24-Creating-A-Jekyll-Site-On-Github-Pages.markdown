---
layout: single
toc: true
toc_sticky: true
title: "A Cost-Effective Journey to Building a Blog with Jekyll and GitHub Pages"
author_profile: true
read_time: true
related: true
show_date: true
header:
  teaser: /assets/images/image.png

excerpt: "How I built a portfolio using Jekyll and GitHub Pages for just $20/year."
breadcrumbs: true
---

*(Or: How I Stopped Paying So Damn Much for Web Hosting)*

---

I spent ages thinking about how to build my portfolio site. WordPress felt bloated, Squarespace was expensive, and writing everything from scratch seemed like overkill. After a bit of research I stumbled across Jekyll and GitHub Pages. A few hours later, I had a working site for practically nothing.

*Here's how I did it.*

## Why I Built This Site

1. **I Keep Forgetting What I've Done**  
   Last month, I spent an hour hunting through old Google Docs trying to find how I'd fixed a Docker networking issue. Never again. Now everything goes here.
2. **It's Hard to Get a Job without a Portfolio**  
   I've been looking for a job for a while now, and I've found that most companies want to see what I've done. This site is my portfolio.
3. **I'm Tired of Paying for Web Hosting**  
   I don't imagine many people will read these posts, other than the occasional recruiter so why pay for hosting?

## Step 1: Domain

### Finding a Domain Name

I bought **wildermoth.com** through GoDaddy for **~$20/year** (including domain privacy to keep my info off spam lists). I use this domain for my email aswell so it's a win-win.  

### Hosting

Many providers charge **$100+/year** for basic plans. Then I discovered **GitHub Pages**, which offers *free hosting* with seamless Git integration. Setting it up took minutes:  

1. Create a repository named `<username>.github.io`.  
2. Push your site files.  
3. Boom. Live at `https://<username>.github.io`.  

[GitHub Pages’ official guide](https://pages.github.com/) walks you through it.  

## Step 2: DNS

To point my GoDaddy domain to GitHub Pages, I had to update DNS records—a task that sounds scarier than it is.  

### The A Records

In GoDaddy’s DNS Manager, I added four **A records** pointing to GitHub’s IP addresses:

```markdown
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

These ensure traffic to `wildermoth.com` reaches GitHub’s servers.  

### The CNAME File

Next, I added a `CNAME` file to my GitHub repo containing my domain (`wildermoth.com`). Then, I created a **CNAME record** in GoDaddy pointing `www.wildermoth.com` to `<username>.github.io`.  

![DNS A Records]({{ site.url }}{{ site.baseurl }}/assets/images/dnsRecords.png)  
*Adding A records in GoDaddy’s DNS Manager*  

![CNAME Configuration]({{ site.url }}{{ site.baseurl }}/assets/images/cname.png)  
*Setting up the CNAME record*  

**Patience is key**: DNS changes can take up to 48 hours to propagate. Mine went live in about 3!  

## Step 3: Jekyll

Static site generators like **Jekyll** let you create blogs using Markdown—no databases, no CMS. Perfect for writers who love code editors over dashboards.  

### Why Jekyll?  

- **Simplicity**: Write posts in Markdown, Jekyll compiles them into HTML.  
- **Themes**: I chose the [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) theme for its clean design and responsiveness.  
- **Git Integration**: Edit locally, push to GitHub, and your site updates automatically.  

I followed [Jekyll’s documentation](https://jekyllrb.com/docs/) to set up the basics. The `_posts` folder now houses all my articles, and the `_config.yml` file handles site-wide settings.  

## Why This Beats WordPress (For Me)

- **Cost**: $20/year vs. $100+/year for hosting + premium themes.  
- **Control**: Everything lives in a Git repo. No plugins breaking after updates.  
- **Learning**: Understanding DNS, static sites, and GitHub Actions.  

## Final Thoughts  

Building this site was equal parts rewarding and frustrating. But the payoff is a fully customizable, cost-effective platform.
