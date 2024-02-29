
import { useState } from "react";

// Whenever this State variable will be change using this SetbtnName(), react will re-render this Header component and all the updated value will be there. Calculating tht diff between old state of vDOM and new state of UPDATED vDOM. and updating the UI, everything is happening. AS soon as we click on the button

//  QUES(imp): is react refreshing the whole header or just the button?
//  It will re-render the whole component. by render means: calling this functional component. And how can we able to modify this const variable we define? React calling this function once again(rendering), but every time we invoke this function , const variable a NEW VARIABLE then it was before.
// LET'S MAKE THIS BUTTON A TOGGLE. btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");



const Header = ()=>{
    // I want this login keyword writtr in button dynamic.How will i do that react? To do this we cancreate a local state variable. 

    const [btnName, setBtnName] = useState("Login");

    return(
    <div className="header">
        <nav className="navbar">
            <div className="logo">Logo</div>
            <div className="nav-items">
                <ul className="items">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contacts</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        btnName === "Login" ? setBtnName("Logout"): setBtnName("Login");
                        console.log(btnName)
                    }} >{btnName}</button>
                </ul>
            </div>
        </nav>
    </div>
);
};

export default Header;