---
layout: post
title:  "Anibook Building in React"
date:   2019-03-26
categories: projects
tags: anibook
---


#### Introduction
This post is techincally a continuation of the [previous post](/blog/projects/anibook-overview).  I'll be mostly going through the lessons I learned rather than explaining how I actually implmented each part of the PWA.

#### ReactDOM
[![ReactDom](/assets/images/anibook_reactdom.png){: class="column post-image"}](/assets/images/anibook_reactdom.png)
{: class="column"}
I realized later on that some of the Components didn't really need to be actual Component's, but decided to leave as is for the organization.  I also decided to remove the 'Popular' page and to change the 'GenreContainer', to be a preset hard coded list of genres and remove its toggle button.  These changes were made to sort of simplify the code as well as reduce the amount of API calls, since I found the API I chose to be relatively slow.

#### Component States

###### App States
1. Genres
* need to keep a dictionary of active and inactive genre filters
2. Page
* need to keep track and switch between different actual pages (ie: search, favorites, this season)
3. FilterText
* the data passed up from the search box
4. Shows
* the actual json data of anime shows
5. Days
* an ordered list of day strings to display shows starting with the current day
* looking back on it, this could've been a prop rather than a state

###### Show States
1. Favorite
* shows can keep track if they've been favorited or not since that data will be stored locally (using the localStorage API)

#### Switching Pages
Rather than just creating new React Components for each specific page, I decided it would be easier to just change how I filter the shows dataset, and change the title string of the page.  The filter functions will all be defined in the MainContent Component, which will use the page name passed to it as a prop with a dictionary to map to the correct filter function in `render()`

{% highlight javascript %}
let filterFunctions = {
    'search': (show) => this.filterText(show, this.props.filterText),
    'favorites': (show) => this.filterFavorites(show, favorites),
    'season': this.filterNothing,
    'popular': this.filterNothing,
    'genre': (show) => this.filterGenres(show, genres),
}
{% endhighlight %}

The data will additionally always be passed through the genre filter if the user has toggled any of them on.

#### Jikan API
A main reason the scope of the project changed was due to the API I was using itself.  [Jikan](https://jikan.docs.apiary.io/) responses were fairly slow, so to avoid multiple API calls, I decided to base the project around just getting the [schedule](https://jikan.docs.apiary.io/#reference/0/schedule) resource that lists the currently airing shows by what day they're released.  To access the API, I used the fetch command in the componentDidMount() function of the App component through another proxy URL (so I could test it locally).  In the future, I'd like to include a loading screen and use the PWA service worker to intercept the fetcg request and cache the data since usually the response data is unchanging.

#### Lessons Learned
* use Component props to pass data downward
* define functions in the higher Component and pass the function to lower Components to pass data upward
* there's more I can include here but those two seemed the most important to me
