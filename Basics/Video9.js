


/*

1. How to make seperate bundle file for seperate section:
-In technical React term its called in many names:
    -1. chunking
    -2.code splitting
    -3.Dynamic Bundling
    -4.lazy loading
    -5.on demand loading
    -6.dynamic import

    -so what happened in react is all the code will be bundled together in a single js file and if the code is too much then our application will take very large amount of time to load . To overcome this problem we use this feature .

    -we hava to use lazy() and suspense to achieve this.
    - when we use lazy loading this will make seperate bundle file for that component which will be inside lazy loading.Remember that component will not be inside the lazy() but its path will be inside lazy() and that component will be wrapped inside <suspense></suspense> .
    !- if we not put that component inside suspense then it will through error becz when we use lazy loading, utill we dont click on that section that bundle file will not come in network tab and when we click then it will take some time to load that section but as we are seperating the bundle file react find that is that code available in base bundle file and it will not be there so react throw error


! Point 1 is explained in simpler way by chatGPT below 👍
        -In a typical React application, all the JavaScript code for various components is bundled together into a single JavaScript file. This can become problematic as the application grows larger because the user may have to wait for a long time for the entire bundle to be downloaded before they can start using the application.

        -To solve this issue, React provides a feature called code splitting or lazy loading. This allows you to split your code into separate bundles and load them only when they are needed. This can significantly reduce the initial load time of your application.

        -When you use lazy loading, you wrap the component that you want to split into a separate bundle with the lazy() function. This tells React that this component should be loaded asynchronously when it is needed, rather than being included in the main bundle.

        -However, because the component is loaded asynchronously, there might be a short delay before it becomes available. To handle this, React provides a <Suspense> component, which allows you to specify a fallback UI to display while the component is loading.

        -If you forget to wrap the lazy-loaded component with <Suspense>, React won't know how to handle the loading state, and it will throw an error when you try to render the lazy-loaded component. This is because React expects a fallback UI to display while the component is loading, and without it, it doesn't know how to proceed.

        -So, in summary, lazy loading and suspense are used in React to split your code into separate bundles and load them asynchronously, improving the performance of your application by reducing the initial load time. Make sure to wrap lazy-loaded components with <Suspense> to handle loading states properly and prevent errors.









*/