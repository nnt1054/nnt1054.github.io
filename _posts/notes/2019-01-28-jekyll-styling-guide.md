---
layout: post
title:  "Jekyll Stlying Guide"
date:   2019-01-28 19:46:40 -0800
categories: notes
tags: jekyll
---

`Lorem ipsum` dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>

<s> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </s>
<b> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</b>

{% highlight python %}
def print_hi(name):
  print("Hi, " + str(name))
print_hi('Neil')
#=> prints 'Hi, Neil' to STDOUT.
{% endhighlight %}

Create Links using `[link text][link variable]` in the post  
and including`[link_var]: http://url.com` at the bottom of the .md file.
Here's an example linking to [my website][ntoledo.me] :)

Adding two spaces after a line of text  
will continue the paragraph on the next line!

Use `{: class="cssClass"}` and `{: style="color:red"}` to add CSS classes and html attributes to a paragraph in markdown
{: class="cssClass" style="color:red"}

{% highlight python %}
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
{% endhighlight %}



<br>
to include images use: `![Mushu :)](/assets/images/mushu.jpg)`

![Mushu :)](/assets/images/mushu.jpg){: class="column" style="width: 512px; border: 1px solid black"}
{: class="column"}

[ntoledo.me]: http://ntoledo.me
[jekyll-docs]: http://jekyllrb.com/docs/home