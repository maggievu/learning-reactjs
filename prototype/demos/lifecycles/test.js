// Lifecycle methods are methods that get called at certain moments in a component's life.
// You can write a lifecycle method that gets called right before a component renders for the first time.
// You can write a lifecycle method that gets called right after a component renders, every time except for the first time.
// You can attach lifecycle methods to a lot of different moments in a component's life. This has powerful implications!

// There are three categories of lifecycle methods: mounting, updating, and unmounting.

// A component "mounts" when it renders for the first time. This is when mounting lifecycle methods get called.
// There are three "mounting" lifecycle methods:
// • componentWillMount: only executed the first time that a component renders
// • render is a lifecycle method!!!: belongs to two categories: mounting lifecycle methods, and updating lifecycle methods.
// • componentDidMount: When a component renders for the first time, componentDidMount gets called right after the HTML from render has finished loading. If your React app uses AJAX to fetch initial data from an API, then componentDidMount is the place to make that AJAX call. More generally, componentDidMount is a good place to connect a React app to external applications, such as web APIs or JavaScript frameworks. componentDidMount is also the place to set timers using setTimeout or setInterval. (gets called once after component renders)
// When a component mounts, it automatically calls these three methods, in order.
