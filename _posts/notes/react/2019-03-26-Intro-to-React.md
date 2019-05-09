---
layout: post
title:  "Introduction to ReactJS"
date:   2019-03-13
categories: notes
tags: react
---

#### Intro
Following the ReactJS [tutorial](https://reactjs.org/tutorial/tutorial.html) from the official react website.  Won't be listing the steps from the website here, just going to write down my thoughts and notes.
React is a JAVASCRIPT LIBRARY used for building USER INTERFACES based around COMPONENTS.

{% highlight javascript %}
React.createElement(
  'type',
  {property1: 'property1', property2: 'property2'},
  [React.createElement('child1', ...), React.createElement('child2', ...), ...]
)
{% endhighlight %}

{% highlight javascript %}
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      values: []
    }
  }

  handleClick(i){
    const values = this.state.values.slice(0, this.state.value + 1);
    this.setState({
      value: i,
    })
  }
  exampleFunc(x){
    this.setState({
      this.setState(
        value: x + 1,
      )
    })
  }

  render() {
    return (
      <div>
        <h1> {this.props.name} </h1>
          <button onClick={() => this.handleClick(this.state)}>click me</button>
          <button onClick={() => this.jumpTo(this.state)}>example function</button>
      </div>
      /* insert html code here */
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));
{% endhighlight %}
Sidenote: `const` variables can't be reassigned and are consistent within the block its declared in.  You can change properties of a const variable (like changing entries in a dictionary), but you can't reassign the actual variable.

#### The Component Lifecycle
React components come with methods that are executed throughout their lifespan.  These methods can/are meant to be override to give the components functionality.  The catogories of lifecycle methods include 'Mounting', 'Updating', 'Unmounting', and 'Error Handling'

##### Mounting
These methods are executed when an instance of a component is instantiated.
1. constructor()
2. static getDerivedStateFromProps()
* called before the render method during the mount and during any updates
3. render()
4. componentDidMount()
* best place to create network requests and/or any subscriptions
* calling setState() will still render before the browser screen is updated

##### Updating
These methods are called in order when re-rendering a component after a change to a prop or state.
1. static getDerivedFromProps()
2. shouldComponentUpdate()
* primarily used for performance optimizations (can ignore for now)
3. render()
4. getSnapshotBeforeUpdate()
* executed before rendered output is commited to the DOM.  Commonly used for cases where scroll position in the DOM needs to be handled in a specific way.
5. componentDidUpdate()
* best place to insert new network requests based on updated component data.
* should wrap network requests in a conditional statement to prevent any loops

##### Unmounting
1. componentWillUnmount()
* perform any necessary cleanup here

##### Error Handling
1. static getDerivedStateFromError()
2. componentDidCath()

##### Other Component Methods/Properties
1. setState()
2. forceUpdate()
* forces component to re-render regardless of changes
3. props
4. state

After going through the tutorial and skimming through the docs, the next step is to now figure out how to connect a backend and/or make components from API calls.
The most common way to make API calls is to use the native fetch API in JavaScript:

{% highlight javascript %}
const API_URL = 'https://ntoledo.api/';

class Example extends React.Component {
  ...
  componentDidMount() {
    fetch(API_URL)
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          value: data.value
        })
      );
  }
}

/*
  Sidenote: Arrow Functions
  (parameters) => {statements}
  () => {statements}
*/
{% endhighlight %}

The fetch statement should be called in the higher order components and will propogate the data down to the actual components interested in the data.

##### Render Props
Render prop is a react pattern for sharing code between components.
* The Wrapper component contains the utility variables and methods it wants to supply, and returns them in its render return value
* The Higher Order Component (HOC) will will create a Wrapper component in the HOC's render function and use the Wrapper's exposed methods/variables and reference/use them in the HTML the HOC actually wants to return in the render function.

Here's the best [example](https://css-tricks.com/an-overview-of-render-props-in-react/#article-header-id-2) I could find.

#### Starting a React App
Update npm and create a new react project:

> `curl -L https://www.npmjs.com/install.sh | sh`

> `npm init react-app my-app`

Run the app and/or build for production:

> `npm start`

> `npm run build`







#### Add to different post later

##### Parent Children Communication
1. use props to propogate data downward
2. pass functions as props to children to propogate signals upward