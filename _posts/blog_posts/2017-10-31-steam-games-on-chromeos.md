---
layout: post
title: Running Steam on a Chromebook
category: blog_post
tags: deployment
---

## Setting Up:

I installed another chroot on my Samsung Chromebook Pro using:

```md
sudo sh ~/Downloads/crouton -t xfce4 -n xenial2
```

I wanted to make this a seperate chroot from my main CLI only one since I'll probably end up deleting this one later.  Once the new xfce4 was installed I started it up and installed steam.

```md
sudo startxfce4
sudo apt-get install steam
```

Once steam was installed, I bought Hollow Knight and Polybridge while it was still on sale and installed Hollow Knight.  There were no issues with the installation suprisingly.

## Performance:

After launching Hollow Knight, I made it to the loading screen perfectly fine.  There was however a very noticeable input lag, so I had to actually reduce the resolution from 2400x1600 all the way to 480p.  The input lag was no longer an issue for any resolutions under 720p.  At 480p, I was able to max the framerates at 60fps and was the most part playable.  However, the frames were too unstable and would stutter too often for comfort, especially for certain areas in the game.  Using the Chromebook Pro for faster paced games like Hollow Knight, it IS playable but only to a certain degree.

I'll be trying out Polybridge next time, but as far as I can tell, I'm almost certain the Chromebook Pro will be able to hold up for more slower paced games.