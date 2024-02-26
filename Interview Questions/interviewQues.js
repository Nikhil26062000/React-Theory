//! these questions are from simplilearn.com

//? ----------- What are the features of React --------------------
    //1. jsx
    //2. components
    //3. virtual dom : React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, virtual DOM changes only that object in the real DOM, rather than updating all the objects.
    //4. one-way data binding : React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, virtual DOM changes only that object in the real DOM, rather than updating all the objects.
    //5. High Performance :  React updates only those components that have changed, rather than updating all the components at once. This results in much faster web applications.

//? ----------------------- What is the virtual DOM ----------------------
    //React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, the virtual DOM changes only that object in the real DOM, rather than updating all the objects

//? ---------------- What is the difference between the ES6 and ES5 standards? --------------
    //ES5 and ES6 refer to different versions of the ECMAScript standard, which is the specification that JavaScript is based on. Here are some key differences between ES6 (also known as ECMAScript 2015) and ES5:

    //1. Syntax Enhancements
    //2. Block-Scoped Variables: ES6 introduced let and const declarations, which allow variables to be scoped to the nearest enclosing block, rather than function-scoped like variables declared with var in ES5. This helps in avoiding common pitfalls related to variable hoisting and unintended variable reassignments.
    //3. Arrow Functions
    //4. Classes
    //5. Promises
    //6. Modules
    //7. Iterators and Generators

//? -------------- What is an event in React ----------------------------------------------------------------
    //An event is an action that a user or system may trigger, such as pressing a key, a mouse click, etc.
    //<Button onPress={lightItUp} />


//? ------------------ What are synthetic events in React ---------------------
    //Synthetic events combine the response of different browser's native events into one API, ensuring that the events are consistent across different browsers.
    //The application is consistent regardless of the browser it is running in. Here, preventDefault is a synthetic event.


//? --------------- What are forms in React ------------------
    //Using forms, users can interact with the application and enter the required information whenever needed. Form contain certain elements, such as text fields, buttons, checkboxes, radio buttons, etc

//? ------------ What is an arrow function and how is it used in React -----------
    //An arrow function is a short way of writing a function to React.
    //It is unnecessary to bind ‘this’ inside the constructor when using an arrow function. This prevents bugs caused by the use of ‘this’ in React callbacks.


//* Functional Components: These types of components have no state of their own and only contain render methods, and therefore are also called stateless components. They may derive data from other components as props (properties).Before the introduction of hooks, functional components were stateless. However, with React 16.8, you can implement states with the useState hook to create a stateful component (just like the class component)

//* Class Components: These types of components can hold and manage their own state and have a separate render method to return JSX on the screen. They are also called Stateful components as they can have a state.


//? ------------- What is the use of render() in React ------------------
    // It is required for each component to have a render() function. This function returns the HTML, which is to be displayed in the component.
    //If you need to render more than one element, all of the elements must be inside one parent tag like <div>, <form>.


//? ------------------- What is a state in React -------------------
    // The state is a built-in React object that is used to contain data or information about the component. The state in a component can change over time, and whenever it changes, the component re-renders.
    // The change in state can happen as a response to user action or system-generated events. It determines the behavior of the component and how it will render.


//? -------------  How do you update the state of a component --------------
    //We can update the state of a component by using the built-in ‘setState()’ method:

//? ------------- What are props in React -------------
    //Props are short for Properties. It is a React built-in object that stores the value of attributes of a tag and works similarly to HTML attributes.
    //Props provide a way to pass data from one component to another component. Props are passed to the component in the same way as arguments are passed in a function

//? -------------- What are the differences between state and props -----------
    //State :
        //1. Holds information about the components
        //2. Is mutable
        //3. Can be changed
        //4. Child components cannot access 
    //Props :
        //1. Allows to pass data from one component to other components as an argument
        //2. Are immutable
        //3. Are read-only
        //4. Child component can access


//? ---------------- Explain the lifecycle methods of components. -------------
    //1. getInitialState(): This is executed before the creation of the component.
    //2. componentDidMount(): Is executed when the component gets rendered and placed on the DOM.
    //3. shouldComponentUpdate(): Is invoked when a component determines changes to the DOM and returns a “true” or “false” value based on certain conditions.
    //4. componentDidUpdate(): Is invoked immediately after rendering takes place
    //5. componentWillUnmount(): Is invoked immediately before a component is destroyed and unmounted permanently.


//? ---------- How is React routing different from conventional routing --------------
    //1. React Routing
        //- Single HTML page
        //- The user navigates multiple views in the same file
        //- The page does not refresh since it is a single file
        //- Improved performance

    //2. Conventional routing
        //- Each view is a new HTML file
        //- The user navigates multiple files for each view
        //- The page refreshes every time user navigates
        //- Slower performance


//? ---------------- Explain the use of CSS modules in React ----------------- 
    //CSS Modules are a way to scope CSS locally to individual React components. They provide a way to write CSS that is scoped to a specific component, preventing styles from leaking and conflicting with styles from other components. 