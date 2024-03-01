

//? ------- Virtual Dom -----------
    // there is a corresponding virtual DOM object(copy), which has the same properties. The main difference between the real DOM object and the virtual DOM object is that any changes in the virtual DOM object will not reflect on the screen directly. Consider a virtual DOM object as a blueprint of the real DOM object. Whenever a JSX element gets rendered, every virtual DOM object gets updated.

    // Note- One may think updating every virtual DOM object might be inefficient, but that’s not the case. Updating the virtual DOM is much faster than updating the real DOM since we are just updating the blueprint of the real DOM.

    // React uses two virtual DOMs to render the user interface. One of them is used to store the current state of the objects and the other to store the previous state of the objects. Whenever the virtual DOM gets updated, react compares the two virtual DOMs and gets to know about which virtual DOM objects were updated. After knowing which objects were updated, react renders only those objects inside the real DOM instead of rendering the complete real DOM. This way, with the use of virtual DOM, react solves the problem of inefficient updating.

//? ------------ Controlled vs UnControlled components ---------------------
    //!Controlled Components:
    //In controlled components, form data is handled by React component state. The input value is controlled by React and stored in the component's state.
    //When the value of the input changes, the component's state is updated, and the input is re-rendered with the new value.
    //Controlled components are typically implemented using event handlers like onChange to update the component's state in response to user input.
    //These components are commonly used when you need to perform validation or manipulate the input value before it's displayed.

    //! Uncontrolled Components:
    // In uncontrolled components, the form data is handled by the DOM itself. React doesn't control the input value; instead, it's managed by the browser
    // You can still access the input value through the DOM using a ref, but React doesn't maintain its state.
    // Uncontrolled components are useful for integrating React with non-React code or when you want to rely more on HTML form behavior.


//! Note- State object is not available in functional components but, we can use React Hooks to add state to a functional component.

//? ---------------- Explain about types of side effects in React component. ----------------------
    //1.Synchronous Side Effects:
    // These are side effects that can be performed synchronously within the component.
    // Examples include setting up and cleaning up timers, updating the component state immediately after rendering, or manipulating the DOM directly.
    //!EXAMPLE:
            // {
            //     import React, { useEffect, useState } from 'react';

            //     function Timer() {
            //     const [count, setCount] = useState(0);

            //     useEffect(() => {
            //         const intervalId = setInterval(() => {
            //         setCount(prevCount => prevCount + 1);
            //         }, 1000);

            //         return () => {
            //         clearInterval(intervalId);
            //         };
            //     }, []); // Empty dependency array ensures effect runs only once

            //     return <div>{count}</div>;
            //     }

            // }

            //!Explaination : In the Timer example, the cleanup code with clearInterval is indeed necessary despite the fact that the effect runs only once.
            // Even though the effect runs only once due to the empty dependency array [], the cleanup function returned by useEffect is important because it ensures that the interval is properly cleared when the component unmounts. Without this cleanup function, the interval would continue to run even after the component unmounts, which could lead to memory leaks and unexpected behavior.
            // So, in both the synchronous and asynchronous examples, even if the effect runs only once, it's still good practice to include cleanup code if there are any resources or side effects that need to be cleaned up when the component unmounts. This ensures proper memory management and prevents potential issues.

    //2.Asynchronous Side Effects:
    // These are side effects that involve asynchronous operations, such as data fetching, API calls, or interacting with external resources.
    // React provides a way to manage these asynchronous side effects using hooks like useEffect or lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components.
    //!EXAMPLE:
            {
                // import React, { useEffect, useState } from 'react';

                // function DataFetcher() {
                // const [data, setData] = useState(null);

                // useEffect(() => {
                //     fetchData();
                // }, []); // Empty dependency array ensures effect runs only once

                // const fetchData = async () => {
                //     try {
                //     const response = await fetch('https://api.example.com/data');
                //     const result = await response.json();
                //     setData(result);
                //     } catch (error) {
                //     console.error('Error fetching data:', error);
                //     }
                // };

                // return (
                //     <div>
                //     {data ? (
                //         <ul>
                //         {data.map(item => (
                //             <li key={item.id}>{item.name}</li>
                //         ))}
                //         </ul>
                //     ) : (
                //         <p>Loading...</p>
                //     )}
                //     </div>
                // );
                // }

            }

            //!explaination:In this example, since the effect runs only once (due to the empty dependency array []), there's no need for cleanup code because there's nothing that needs to be cleaned up when the component unmounts or when the dependencies change. The asynchronous operation (fetchData) doesn't need to be canceled or cleaned up because it's just a single fetch operation that doesn't need to be managed after it's initiated.
            //!However, if you had a scenario where the effect could potentially run multiple times (e.g., if there were dependencies in the dependency array), and each time it initiated some asynchronous operation, you would need to handle cleanup to ensure that any pending asynchronous operations are canceled or cleaned up properly when the effect re-runs or when the component unmounts. For example, if fetchData were to be called on every render due to changes in dependencies, you might need to cancel any ongoing fetch operations before starting a new one to prevent race conditions or memory leaks. In such cases, you would include cleanup code in the effect's return function, similar to how it was done in the synchronous example.


//? -------------- What are error boundaries ------------------------------------------
        //Error boundaries are a feature in React that allows you to catch JavaScript errors that occur during the rendering process of a component tree and gracefully handle them without crashing the entire application. They are implemented using special React component classes or React hooks.


//! Using Hook, all features of React can be used without writing class components. For example, before React version 16.8, it required a class component for managing the state of a component. But now using the useState hook, we can keep the state in a functional component


//? ----------- What are the rules that must be followed while using React Hooks ---------------------------------------
    //React Hooks must be called only at the top level. It is not allowed to call them inside the nested functions, loops, or conditions.
    // It is allowed to call the Hooks only from the React Function Components


//? --------------------------------Why do React Hooks make use of refs--------------------------------
        //React Hooks, including the useRef hook, provide a way to interact with and manage DOM elements and other mutable values without necessarily triggering a re-render of the component. The useRef hook specifically is used to create a mutable ref object that persists for the entire lifetime of the component.
        //1.Accessing DOM Elements: Refs are commonly used to access DOM elements directly within functional components
        //2.Preserving Values Across Renders: Refs created using useRef persist across re-renders of a component, but changing their current property does not cause a re-render. This makes them suitable for holding values that need to persist between renders without triggering a component update.
        //3.Storing Mutable Values


//!The disadvantage of Custom Hooks is it cannot be used inside of the classes.