
/*

1. Monolith and Microservices architecture:
        ! see video6 from start

2. useEffect(()=>{

},[])
        - useEffect() will be called once the component is rendered.
        -Some important points : 
                1. if we dont use [] then useEffect() will be called every time the component is rendered
                2.if we  use [] then useEffect() will be called only once when the component is rendered for the first time
                3. [] this is called empty dependecy array
                4. if we put something in [] suppose "isLoogedIn" variable then useEffect() will be called every time this variable is changed.

3. Conditional Rendering : Rendering component based on some condition .
        for eg: if the data is not fetched from API or backend untill we get the data we can render a shimmer UI.

4. When you want a variable's changes to be reflected in your website or React component, using a normal JavaScript variable won't automatically update the UI. However, if you use a state variable like useState in React, changes to the variable will also update the UI.
        - this is by chatGPT.
        - this is in my own language:If we want to change a variable, and we also want that whenever that variable will change, the changes will also reflect in my website or in my component in React. So, if we use a normal JavaScript variable, in that case, the variable value will be changed, but it will not reflect in the UI. But when we use a state variable like useState, then it will also change the value and the changes will also reflect in the UI part.

        !-eg: const [isLoggedIn, setIsLoggedIn] = useState("Login");
       
        - now if we want that on click we chnage the value of the state variable to "logout" then with the help of setIsLoggedIn() we can change the value and this will re-render whole component.

        const Header=()=>{
                const [isLoggedIn, setIsLoggedIn] = useState("Login");

                 - <h1 onclick={() =>setIsLoggedIn("logout")}>{isLoggedIn}</h1>
        }
        !-so when onClick func() called it will update isLoggedIn value and it will re-render the whole Header component again

!5. One more doubt can come in mind that when we use useState, if we use const variable in useState, then we can think that if it is const variable, then how it can change on click function. Like if someone clicks on H1 tag, how it will change if it is a const variable. So the point is that when we use the second argument of useState, which is a function to set the value of the first argument of useState, it will re-render the component. And when it re-renders the component, the whole component will re-render and there will be a new copy of const useState. The previous const variable which we used in useState will not be there and there will be a new copy, not say a new copy, there will be a new const variable and it will be updated.REMEMBER WHEN I SAY REACT WILL RE-RENDER THE COMPONENT IT WILL RE-RENDER THE COMPONENT BUT UPDATE ONLY THOSE VALUE WHICH GOT UPDATED AND HOW REACT KNOW THAT WHICH VALUE GET UPDATED ? THIS WILL ALL DONE BY RECONCILIATION ALGORITHM
        -above is my own lang explaination and below is by chatgpt:When we use useState in React and declare a variable with const, it might seem puzzling how it can change, especially in response to user interactions like clicking an H1 tag. However, the key lies in the second argument of useState, which is a function used to set the value of the state variable. When this function is called to update the state, it triggers a re-render of the component. During this re-render, a new instance of the const variable is created, effectively updating its value. So, while the variable is declared with const, its value can still change due to the re-rendering mechanism in React.

        ! one more thing when it re-render the component tab ek new const variable banega jo ki pichle wale const variable se different hoga and pichle wale varibale ka default value "login tha" jo ki point 4 me mention hai but jab re-render hoga component tab new wale const variable ka default value "logout" hoga.

!NOTE: if want to see how react is so fast . see video at -30:50








*/