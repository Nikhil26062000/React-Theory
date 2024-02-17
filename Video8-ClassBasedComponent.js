
/*

1.class components 👍 
        ?-below is example of class components:
        class UserClass extends React.Component{
            constructor(props){
                super(props);

                ?state variables will be inside a big object i.e this.state:
                this.state-{
                    count:0,
                    count2:2
                }
                !remember in functional component also all the state variable get stored in big object behind the scene
            }
            render(){
                return{
                    <div>
                        <h1>User Class</h1>
                        <p>{this.props.name}</p>
                        <h2>Count:{this.state.count}</h2>
                        <h2>Count2:{this.state.count2}</h2>
                    </div>
                }
            }
        }
        !-In React, when you define a constructor in a class-based component, you should always call super(props) as the first statement within the constructor. This is because React.Component itself has its own constructor method, and if you define a constructor in a subclass (such as your UserClass component), you must call super(props) before you can use this.props.
                -Here's why you should call super(props):

                - Access to this.props: When you call super(props), you're calling the constructor of the parent class (React.Component) and passing props to it. This is necessary to initialize the this.props object so that you can access props within your component's constructor or any other methods.

2. Life cycle of class components:

        {
         - Parent's constructor called
         - Parent's render called

            -child1 constructor called
            -child1 render called
            -child1 componentDidMount called
            

         -Parent's componentDidMount called
        }
        
        {
         - Parent's constructor called
         - Parent's render called

            -child1 constructor called
            -child1 render called

            -child2 constructor called
            -child2 render called

            -child1 componentDidMount called
            -child2 componentDidMount called

         -Parent's componentDidMount called
        }

        !- see video at -1:58:00 to -46:00 (very imp for interview)

3. Cons of SPA(Single page Application):
        !see video at 2:22:00

!4. important thing at video at -14:00  when it comes to functional component. this is also about unmounting in functional component.
       









*/