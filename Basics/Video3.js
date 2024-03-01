/*
------------------------- TOPICS ----------------------------------

1. DOM Elements : HTML elements are dom elements.
    - DOM elements are the individual components of a web page, such as paragraphs, headings, images, buttons, forms, etc.

2. React.createElement : this will create a React element which is an object .
    - when we render this using ReactDOM, it becomes React components or DOM elements, not HTML elements

3. For displaying on to browser we use "ReactDOM".
    - import ReactDOM from "react-dom/client" or we can write
    - import ReactDOM from "react-dom"
    - both above imports works
    ! - React element is basically a object.

4. JSX(Javascript XML) : It is not part of React.
    - we can create a React app without jsx
    - It is not html inside javascript.Lot of dev thinks it html inside javascript
    - it's just syntax that looks like html but it's not actually html
    - jsx is different than html
    - jsx is different and React is different
    !- JSX is a syntax extension for JavaScript that allows us to write HTML-like code within JavaScript. However, JSX is not directly understood by web browsers. Instead, JSX code is transformed into standard JavaScript code by tools like Babel during the build process. This transformed JavaScript code is what actually gets executed by the browser. Therefore, JSX is just a developer-friendly syntax that simplifies writing React components, but it's ultimately converted into JavaScript code that the browser can understand.
    
5. Babel - Transpiler / Js compiler

! in jsx we write className and in html we write class . its proof that jsx and html both are different 

? 6. React functional component
        - it just normal js function which return some jsx / we can say it returns React elements because React element is also a jsx.
        - always make component name starting with      capital letter
        ? - component composition

                // this is 1st component
                const Title = () =>{
                    return <h1>hello title</h1>
                }

                // this is 2nd component
                const Heading = () =>{
                    return(
                        <>
                            <Title />
                            <h1>This is heading</h1>
                        </>
                    )
                }

                !we are rendering one component inside other . THIS IS CALLED COMPONENT COMPOSITION.

                - we can also do {Title()} instead of <Title /> and it will also run the same because inside {} we can write any js code in react

        - if we want to put any react element in other component then we can write like this 
         const ele = {
                       
                <h1>React element
                    {ele2}//see below point
                </h1>
            }

         const Heading = () =>{
                 return(
                    <>
                        {ele}
                        <h1>This is heading</h1>
                    </>
                 )
            }
        - if we want to put one element inside other we can write the same way we do  putting element inside component.suppose there is "ele2" as element and we want to put this in "ele" element then see above.

8. jsx is so powerful that it prevent from malicious attack. supoose if we get malicious attack from any api . jsx will take care of this

        

*/
