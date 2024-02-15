

/*

1. we can write inline css in React in this way
        const cssStyle={
            backgroundColor:"red",
            fontSize:"10px",
            color:"white"
        }
        and then we can pass this "cssStyle" at place
        style={cssStyle}

        for example : <h1 style={cssStyle}>Hello</h1>

2. we can write inline css in React in this way also
        <h1 style={{backgroundColor:"red"}}>hello</h1>

        ! this case we dont need to define variable like we did in point 1

3. props : when we pass a props to any component this props will be object when we get that props in another component where we pass earlier.

! Config driven UI : Its a topic of System design. suppose if we fetch a api data which shows different data at different place . eg : if we have swiggy banner which is different in Bihar and different in Mumbai and different in delhi then will be going to make different website for different cities ? No the answer is no and this can be handle be config driven UI

4. why we have to give key as a prop when we use map function in react : 
        - In React, whenever we use map() function, we have to give a key as a prop. Because, in React, React treats all the components equally. So, if we don't give id to any of the React component, which we are rendering with the help of map() function, React will re-render all the components if we don't give key as a prop. But, if we give key as a prop in React, what React will do is, React will know if a new component is being added. And then, React will only render that new component. Because, React knows that these id's were already present. And the new id, which is present, is all I have to render. So, convert it into your own language.

        above line is my own language explaination and below the same explaineation is explained by chatgpt :
            !In React, when using the map() function to render components, it's crucial to provide a unique key prop for each component. This allows React to efficiently track changes and know when a new component is added. Without keys, React might unnecessarily re-render all components. By providing keys, React can identify new components and render only those, optimizing performance by rendering only what's necessary.
*/