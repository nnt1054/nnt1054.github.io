---
layout: post
title:  "Jekyll Blog Overview"
date:   2019-01-28 19:46:40 -0800
categories: projects
tags: personal_website
---


#### Background
I wanted to make this site for three primary reasons:
1. Showcase personal projects/work along with my general work flow
2. Have a consolidated place to maintain school and technical notes
3. Develop some sort of online personality/brand/presence for self expression and recruitment purposes :)

Other reasons for making this site include practicing web design and development, gaining more experience with CSS animations and transitions, and learning another framework (jekyll).

#### Userflow
Here's a low quality H I G H spec of the site userflow :)
![Mushu :)](/assets/images/blog-userflow.png){: class="column post-image" }
{: class="column"}

#### Application Structure

```
.
├── _config.yml
├── CNAME
├── README.md
├── _includes
|   └── head.html
├── _layouts
|   ├── category.html
|   ├── default.html
|   ├── page.html
|   └── post.html
├── _posts/
|   ├── notes/
|   |	├── tagName01/
|   |	|	├── 2019-01-01-title01.md
|   |	|	└── 2019-01-01-title02.md
|   |	└── tagName02/
|   ├── projects/
|   |	├── tagName01/
|   |	|	├── 2019-01-01-title01.md
|   |	|	└── 2019-01-01-title02.md
|   |	└── tagName02/
├── assets/
|   ├── css/
|   ├── images/
|   └── js/
├── pages/
|   ├── index.html
|   ├── about.md
|   ├── work.html
|   ├── notes.md
|   └── projects.md
└── docs/
```
Some points to highlight:
* The `pages` folder is reserved for webpages that aren't associated with blog posts.  These include the index, about and work pages.  Since there won't be too many overall post categories, I also included category post directory pages (`notes.md` and `projects.md`), which both extend the `category` template.
* The docs/ folder is where the actual jekyll build is placed, so the site can be found by github pages.
* The about.md page uses the same stylings as normal blog posts. (uses post.html template)

#### Lazy Loading Images
I want to implement this later. Here's a [reference](https://medium.freecodecamp.org/using-svg-as-placeholders-more-image-loading-techniques-bed1b810ab2c) for when I do :)