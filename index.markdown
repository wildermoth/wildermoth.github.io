---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

# Welcome to My Personal Website

## About Me
I am James Wildermoth, a passionate developer with a keen interest in creating innovative solutions.

## Projects
Here are some of my projects:
- **Project 1**: Description of project 1
- **Project 2**: Description of project 2
- **Project 3**: Description of project 3

## Blog
Check out my latest blog posts:
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

## Contact
Connect with me on [LinkedIn](https://www.linkedin.com/in/jameswildermoth/).