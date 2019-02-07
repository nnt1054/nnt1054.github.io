---
layout: post
title:  "Jekyll Markdown Stlying Guide"
date:   2019-01-28 19:46:40 -0800
categories: notes
tags: jekyll
---

This page is just a bunch of examples of how to style text and other things in the jekyll posts.  None of the this probably makes sense though since you can't see the actual markdown file lol :)

`Lorem ipsum` dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>

<p><s> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </s> <b> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</b></p>

## Header 2 (H1 is reserved for post titles)##

### Header 3

#### Header 4

<b>Bold:</b> with some text on same line 

> Indent 1
>> Indent 2
>>> Indent 3

Bulleted Lists:

- hello
- world
- :)

Create Links using `[link text][link variable]` in the post
and including`[link_var]: http://url.com` at the bottom of the .md file.
Here's an example linking to [my website][ntoledo.me] :)

Adding two spaces after a line of text
will continue the paragraph on the next line!

{% highlight python %}
def print_hi(name):
  print("Hi, " + str(name))
print_hi('Neil')
#=> prints 'Hi, Neil' to STDOUT.
{% endhighlight %}

Use `{: class="cssClass"}` and `{: style="color:red"}` to add CSS classes and html attributes to a paragraph in markdown
{: class="cssClass" style="color:red"}

```
.
├── _config.yml
├── _data
|   └── members.yml
├── _drafts
|   ├── begin-with-the-crazy-ideas.md
|   └── on-simplicity-in-technology.md
├── _includes
|   ├── footer.html
|   └── header.html
├── _layouts
|   ├── default.html
|   └── post.html
├── _posts
|   ├── 2007-10-29-why-every-programmer-should-play-nethack.md
|   └── 2009-04-26-barcamp-boston-4-roundup.md
├── _sass
|   ├── _base.scss
|   └── _layout.scss
├── _site
├── .jekyll-metadata
└── index.html # can also be an 'index.md' with valid front matter
```


<br>
to include images use: `![Mushu :)](/assets/images/mushu.jpg)`

![Mushu :)](/assets/images/mushu.jpg){: class="column post-image" }
{: class="column"}

[ntoledo.me]: http://ntoledo.me
[jekyll-docs]: http://jekyllrb.com/docs/home