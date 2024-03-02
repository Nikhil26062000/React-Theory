


/*
!https://www.interviewbit.com/react-interview-questions/#explain-strict-mode



? 1.  -------------------------------------- Explain Strict Mode in React. ---------------------------------------
Answer :
-StrictMode is a tool added in version 16.3 of React to highlight potential problems in an application. It performs additional checks on the application.
-To enable StrictMode, <React.StrictMode> tags need to be added inside the application
-StrictMode currently helps with the following issues:
        1.Identifying components with unsafe lifecycle methods:
                -Certain lifecycle methods are unsafe to use in asynchronous react applications. With the use of third-party libraries, it becomes difficult to ensure that certain lifecycle methods are not used.
                -StrictMode helps in providing us with a warning if any of the class components use an unsafe lifecycle method.
        2.Warning about the usage of legacy string API:
                -If one is using an older version of React, callback ref is the recommended way to manage refs instead of using the string refs. StrictMode gives a warning if we are using string refs to manage refs.
        3.Warning about the usage of findDOMNode:
                -Previously, findDOMNode( ) method was used to search the tree of a DOM node. This method is deprecated in React. Hence, the StrictMode gives us a warning about the usage of this method

!In React, there are certain lifecycle methods in class components that are considered "unsafe" because they are prone to causing bugs and performance issues. These methods are marked as unsafe because they may be deprecated or removed in future versions of React. Here are the unsafe lifecycle methods:
                -componentWillMount(): This method is called just before the component is mounted to the DOM. However, it's considered unsafe because it can lead to side effects and inconsistencies, especially when dealing with asynchronous data fetching or DOM manipulation. It's recommended to use constructor() or componentDidMount() instead.
                -componentWillReceiveProps(nextProps): This method is called when the component is receiving new props from its parent. It's unsafe because it can lead to confusing behavior and bugs, especially when not handled correctly. It's recommended to use componentDidUpdate() along with comparing nextProps to this.props to handle prop changes.


? 2. ----------------------------------------- How to prevent re-renders in React? ----------------------------
Answer 👍
        -The Parent component is the parent component and the Message is the child component. Any change in the parent component will lead to re-rendering of the child component as well. To prevent the re-rendering of child components, we use the shouldComponentUpdate( ) method:

        -As one can see in the code above, we have returned false from the shouldComponentUpdate( ) method, which prevents the child component from re-rendering. 

        *for detailed explaination see example on website/chatgpt.
        According to chatgpt:
                1.Use PureComponent or React.memo: PureComponent in class components and React.memo in functional components perform shallow comparisons of props and state. If the props or state have not changed, they prevent re-renders of the component. However, ensure that the props are immutable or use immutable data structures to benefit from this optimization.
                2.Memoize Functions: If you have expensive computations within a component that don't depend on props or state, memoize those functions using libraries like memoize-one or useMemo hook.
                Note: there are lot more inchatgpt . search to see those points also.


? 3.--------------------------------- What are the different ways to style a React component? ------------------------------------------
Answer:
    1.Inline Styling
    2.Using JavaScript object
    3.CSS Stylesheet
    !4.CSS Modules:
            -We can create a separate CSS module and import this module inside our component. Create a file with “.module.css”‘ extension, styles.module.css:

            .paragraph{
                color:"red";
                border:1px solid black;
            }
            -We can import this file inside the component and use it:
                    -import styles from  './styles.module.css';
                    - <p className={styles.paragraph} >This is a paragraph</p>



? 4. -------------------------------Name a few techniques to optimize React app performance. ---------------------------------
Answer:
    1.Using useMemo( ) :
            -It is a React hook that is used for caching CPU-Expensive functions.Sometimes in a React app, a CPU-Expensive function gets called repeatedly due to re-renders of a component, which can lead to slow rendering.useMemo( ) hook can be used to cache such functions. By using useMemo( ), the CPU-Expensive function gets called only when it is needed.
    2.Using React.PureComponent :
            -It is a base component class that checks the state and props of a component to know whether the component should be updated.
            -Instead of using the simple React.Component, we can use React.PureComponent to reduce the re-renders of a component unnecessarily.
    3.Maintaining State Colocation:
            -Sometimes in React app, we have a lot of unnecessary states inside the parent component which makes the code less readable and harder to maintain. Not to forget, having many states inside a single component leads to unnecessary re-renders for the component.It is better to shift states which are less valuable to the parent component, to a separate component.
    4>Lazy Loading.


? 5. ---------------------------- What are the different phases of the component lifecycle------------------------------------
Answer:
            -Initialization: During this phase, React component will prepare by setting up the default props and initial state for the upcoming tough journey.
            -Mounting: Mounting refers to putting the elements into the browser DOM. Since React uses VirtualDOM, the entire browser DOM which has been currently rendered would not be refreshed. This phase includes the lifecycle methods componentWillMount and componentDidMount
            -Updating: In this phase, a component will be updated when there is a change in the state or props of a component. This phase will have lifecycle methods like componentWillUpdate, shouldComponentUpdate, render, and componentDidUpdate.
            -Unmounting: In this last phase of the component lifecycle, the component will be removed from the DOM or will be unmounted from the browser DOM. This phase will have the lifecycle method named componentWillUnmount.



? 6. --------------------------------  What are the lifecycle methods of React? -----------------------------------------------
Answer:
            The various lifecycle methods are:
                1.constructor(): This method will be called when the component is initiated before anything has been done. It helps to set up the initial state and initial values.
                2.getDerivedStateFromProps(): This method will be called just before element(s) rendering in the DOM. It helps to set up the state object depending on the initial props. The getDerivedStateFromProps() method will have a state as an argument and it returns an object that made changes to the state. This will be the first method to be called on an updating of a component.
                3.render(): This method will output or re-render the HTML to the DOM with new changes. The render() method is an essential method and will be called always while the remaining methods are optional and will be called only if they are defined.
                4.componentDidMount(): This method will be called after the rendering of the component. Using this method, you can run statements that need the component to be already kept in the DOM.
                5.shouldComponentUpdate(): The Boolean value will be returned by this method which will specify whether React should proceed further with the rendering or not. The default value for this method will be True.
                6.getSnapshotBeforeUpdate(): This method will provide access for the props as well as for the state before the update. It is possible to check the previously present value before the update, even after the update.
                7.componentDidUpdate(): This method will be called after the component has been updated in the DOM.
                8.componentWillUnmount(): This method will be called when the component removal from the DOM is about to happen.


? 7. ----------------------------- Does React Hook work with static typing -------------------------------

? 8. -----------------------------  How does the performance of using Hooks will differ in comparison with the classes---------------
Answer : 
            React Hooks will avoid a lot of overheads such as the instance creation, binding of events, etc., that are present with classes.



? 9. -----------------------  Do Hooks cover all the functionalities provided by the classes --------------------------------
Answer:
            -React Hooks provide most of the functionalities provided by class components. With the introduction of Hooks, functional components can now manage state, handle side effects, and access lifecycle methods previously available only to class components. However, there are a few differences and limitations to consider:
                    1.State Management: Hooks like useState allow functional components to manage local state, similar to how this.state works in class components.
                    2.Lifecycle Methods: Hooks like useEffect cover the functionality of lifecycle methods such as componentDidMount, componentDidUpdate, and componentWillUnmount. However, they work slightly differently. For example, while componentDidMount runs after the first render, useEffect runs after every render by default. You can control this behavior by providing dependency arrays.
                    3.Context: Hooks like useContext provide access to context in functional components, similar to how this.context works in class components
                    4.Ref: Hooks like useRef allow functional components to hold references to DOM elements or values across renders, similar to how this.refs works in class components
                    5.Reducer: The useReducer hook provides an alternative to this.setState in class components, allowing more complex state management scenarios.
                    6.Memoization: The useMemo and useCallback hooks allow for memoization of values and functions, respectively, optimizing performance by preventing unnecessary recalculations.
                    7.Custom Hooks: Hooks can be used to create custom reusable logic, encapsulating stateful logic and side effects, similar to how higher-order components (HOCs) or render props work in class components.

                    !However, there are some differences and limitations to consider:
                            1.No this Keyword: Functional components don't have access to this. Instead, Hooks are called directly inside the function body.
                            2.No Lifecycle Method Equivalents: Hooks do not have exact equivalents for getDerivedStateFromProps, shouldComponentUpdate, and getSnapshotBeforeUpdate. However, most use cases can be covered by useEffect and other Hooks.
                            3.Class Instance Methods: Class components allow for defining instance methods, which can be useful for organizing logic. Functional components don't have instance methods, but you can achieve similar organization using custom Hooks or regular JavaScript functions.


! webpack :It is a module bundler
!renderComponent is a necessary API for every React.js component.










*/