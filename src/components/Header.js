
import { useState } from "react";
import { Link } from "react-router-dom";
import {LOGO_URL} from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

// Whenever this State variable will be change using this SetbtnName(), react will re-render this Header component and all the updated value will be there. Calculating tht diff between old state of vDOM and new state of UPDATED vDOM. and updating the UI, everything is happening. AS soon as we click on the button

//  QUES(imp): is react refreshing the whole header or just the button?
//  It will re-render the whole component. by render means: calling this functional component. And how can we able to modify this const variable we define? React calling this function once again(rendering), but every time we invoke this function , const variable a NEW VARIABLE then it was before.
// LET'S MAKE THIS BUTTON A TOGGLE. btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");



const Header = ()=>{
    // I want this login keyword writtr in button dynamic.How will i do that react? To do this we cancreate a local state variable. 

    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    return(
    <div className="header bg-pink-100 shadow-lg">
        <nav className="flex justify-between">
            <div className="w-20 mt-3 ml-20 rounded-lg"><img src={LOGO_URL}></img></div>
            <div className="nav-items">
                <ul className="flex m-6 p-4">
                    <li className="mx-3"> Online Status: {onlineStatus ? "✅" : "🛑"} </li>
                    <li className="mx-3"><Link to="/">Home</Link> </li>
                    <li className="mx-3"> <Link to="/about" >About</Link></li>
                    <li className="mx-3"> <Link to="/contact"> Contact Us</Link></li>
                    <li className="mx-3">Cart</li>
                    <button className="login px-3 w-20 bg-gray-200 rounded-lg" onClick={()=>{
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