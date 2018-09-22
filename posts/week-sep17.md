_[<< Back to main page](https://maggievu.github.io/learning-reactjs/)_

## Framework Overview

### What is React JS?
The reason I chose to learn React JS is because it's a flexible and efficient JavaScript library for building beautiful user interfaces. It's also powerful, lightweight and fast rendering to increase higher web performance.

### Components
Let's take a closer look at React JS.
In simpler words, React JS takes up a webpage and splits into elements (same as HTML elements) and allows developers to write or build these elements using JavaScript. These elements and components are reusable to be called as necessary throughout the webpage. This is an important feature which makes React so powerful.
Basically, React JS uses HTML syntax and at the same time, incorporates JavaScript logic (such as functions, classes, events) to display the elements onto the webpage.
![Components](assets/images/components.jpg)
Elements are the smallest building blocks of React and they usually represent DOM tags in an HTML document.
Elements are what components are “made of”, these 2 concepts are not exactly the same thing, but let’s not worry too much about them right now.
Components are like functions in JavaScript logic. They take in “props” (which means parameters, arguments) and render outputs to be displayed on screen.
Components can also be defined using the class concept in JavaScript. The reason for this is because components can change and to keep track of updates we use the concept of state.

![States](assets/images/lifecycle.png)
A React component can be any of the following three statuses: mounted, update and unmounted. As you can see, mounting is the initial state when the component is first inserted into the DOM. Updating is when the component’s props have been modified and unmounting is when the component has been removed completely from the DOM.

### React Virtual DOM
I have mentioned a lot about the DOM, let’s make this clear. React JS does not operate directly on the browser’s DOM.
It has its own virtual DOM to operate on. This is different from the browser’s DOM.
![React Virtual DOM](assets/images/operations.png)
What happens is that React components are first rendered into a virtual DOM built and run entirely in memory. The virtual DOM performs an optimized diff (which means a comparison-like) against the browser's DOM and then will intelligently decides the minimal updates to the browser’s DOM.

### JSX (JavaScript eXtension)
React also allows developers to write easy structures using its special syntax called JSX. This is a syntax extension that lets us declare elements in a manner that closely resembles HTML. Simply put, developers can use JSX to write JavaScript that looks like HTML.


High-level overview of your framework, it's components, and their interactions.

Begin with an architecture diagram and 1 or 2 paragraph explanation appropriate for a lay audience.

1 or 2 paragraph technical introductions.

Then 3 to 5 paragraph body + diagram on the framework.

1 paragraph conclusion.

eg: "REST is a way for two programs to communicate over the internet. A lot of applications use a client-server architecture where a client sends a request to a server, and the server sends back a response. REST is a standardized way to format those requests and responses. It's built on the same way that web browsers send requests and receive web pages from websites. REST applies that web way of interacting to general client-server programs that need to communicate with each other. Using REST allows programs running on different computers written by different people can talk to one another."

< DIAGRAM for above >

"REST is a presentation layer protocol that formats and sends requests and responses over HTTP. Request and response parameters are encoded in the HTTP message. Small requests (GET, PUT, HEAD, DELETE) put parameters into the query part of the HTTP URL. Larger requests use a HTTP POST message. All data is encoded as it would be for a standard HTTP message. HTTP headers and cookies can also be used to send information.

"Previous standards faced many architectural issues when run over the internet. Many did not work properly through firewalls, were very complex and heavy-weight, and failed to leverage the existing network infrastructure in place to support the web. REST was built with several architectural constraints so that it would work anywhere that HTTP worked. Since HTTP was ubiquitous, and had a plethora of supporting technologies and systems already in place, REST was able to run almost anywhere and could benefit from those technologies that supported HTTP.

< One sentence for each of the 6 architecture constraints. What they are and what they mean. >

< Discussion of RESP API at the application layer, and then the presentation layer protocol. >

< DIAGRAM for the below section of the messages in flight. >

< Track a request / response through a round-trip showing receipt at each layer and the conversion between them. >

"The REST protocol leverages decades of work and infrastructure to support HTTP requests. It is lightweight, and simple to understand and use. It's underlying protocol (HTTP) is a robust workhorse of the internet. REST is uniformly defined at the presentation layer, and there are many libraries available for virtually all network capable modern programming languages.  REST is flexible enough to service any application layer protocol that does not violate its design constraints. Those constraints mirror the restraints of HTTP, so it can be applied to a very broad range of client-server interactions. REST is a natural choice for the presentation layer in web applications."
