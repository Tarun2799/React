// It's just a js class.
// by adding "extends React.Component" React will know it is a class component

import React from "react";
class UserClass extends React.Component{
    
    // to receive props, we will add a constructor
    constructor(props){

        super(props); // we can avoid it.WHY DO WE WRITE SUPER(PROPS)?

        // Now i can use this props in my class.

        // State was created whenever an instance is created of class.
        // Loading a class based component on the webpage means i"m creating an instance of this class.
        
        // this state object which holds al the state variables
        this.state = {
            count : 0,
            count2 : 0, 
            count3 : 0, 
            count4 : 0,  
        }
    }
    // Let's see how to set state variables.
    
    render(){
        
        const {name, location} = this.props;
        const {count, count2} = this.state;
        
        return (<div className='user-card p-5 border border-black mx-5 my-10'>
            {/* <h1>Count: {count}</h1> */}
            {/* <button onClick={()=> {
                // never update state variable directly this.state.count =  this.state.count +1; not do this. DO this by setState. whenever click on the btn react re-render this component.
                // If i'm update only count, count2 in the setState then react only changes the the count and count2 in the state.
                this.setState({
                    count: this.state.count + 1,
                    count2: this.state.count2 +1,
                })
            }} className="border border-black px-2">Count Increases</button> */}
            <h2>Name: {this.props.name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: rajatjhamb1599@gmail.com</h4>
        </div>);
    }
}

export default UserClass;