---
layout: single
toc: true
title: false
---

After doing some reading about setting up a blog and a portfolio I decided I wanted one for a few reasons.

1. To remember what I've done.
2. To remember how I did it.
3. To Showcase my work.

It makes sense to me then that the first blog post should be about setting up a Jekyll site on github pages.

## Domain

I obtained the domain from GoDaddy.com. Purchasing and renewing a domain is fairly cheap. Around 20 usd per year if you get protection for your domain details. I also use this domain for my emails via google workspace.

## Hosting

Hosting is the expensive part. I looked into different options. Inmotion, wix, web.com etc. They all cost atleast $100 usd per year which is a hard sell considering this will mainly just be a personal blog/portfolio. That's when I found GitHub Pages. They allow you to host a website for free and also you gain access to a lot of great GitHub functionality. I followed the instructions [here](https://pages.github.com/) to set up my site.

## Changing The GitHub Pages Domain

Once my page was set up I now needed to change the domain to the one I purchased from GoDaddy.com. To do this I added a CNAME file to my repository that simply contained the domain (wildermoth.com).

I then went to the DNS manager in GoDaddy and added 4 new "A" records. The IP addresses can be found [here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

![alt]({{ site.url }}{{ site.baseurl }}/assets/images/dnsRecords.png)

I also created a CNAME record

![alt]({{ site.url }}{{ site.baseurl }}/assets/images/cname.png)

Once that was set I waited a few hours and my website was officially live, free of charge, domain name and all.

## Jekyll

Now I needed a simple means of generating the webiste. Making it possible to add posts quickly, similar to a wordpress. Enter Jekyll - Jekyll is a static site generator. It allows you to create a website using markdown files and templates. I followed the instructions [here](https://jekyllrb.com/docs/) to get started. I also used the [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) theme.

## Conclusion

So far Jekyll has been really easy to use. Since I can work on it directly out of my chosen IDE I'd say I prefer it to wordpress.
