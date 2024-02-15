

/*

! Always put all the hardcorded things in seperate file.
eg : constant.js,utils.js etc

! In a file there should be only one default export.but we can export multiple variable in a single file using named export.
eg of named export :
     export const="Nikhil";


! there are two type of export and import
    1.default export/import
    2.named export/import

! we can use named export and default export for same component at same time. but then when at time of import, we will have 2 option to import the same component. either named or default we can import by any one of them

! React is fast beacuse the UI layer and data layer both are always in sync . i.e when my data layer changes my UI will change and this is the power react has .

! REACT IS FAST IN DOM MANIPULATION OR CAN SAY DOM OPERATION.REACT CAN DO EFFICIENT DOM MANIPULATION.

1.React hook : its a normal javascript function with some special power.It is also called utility function.
        - useState() : It is state variable which maintains the state of the component
                -eg: when we call useState() it will give us state variable and then we will store it as const variable.
                !const [item,setItem] = useState();
                -Here item is the current value of the state , setItem is the function to update the state variable item.
                -This super variable will be sync our UI layer with data layer
                !Most important point : whenever a state variable "item" is updates React re-render the component.
                - we need setItem function to trigger the diff algrithm. see diff algo concept in point 2 .

                - another eg-2 : const [item,setItem]=useState(); 
                And const arr = useState();
                const item=arr[0];
                const setItem = arr[1];

                -In eg-2 these two are same things.
                
? 2. RECONCILIATION ALGORITHM (React Fiber):
        - when something changes in UI its called Reconciiation.
        -There are lots of topic in this to understand .
        !see video at -24:00

























*/