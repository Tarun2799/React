
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {LOGO_URL} from "../utils/constants";
import logo from "../public/JHAMB.png";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { useAuth0, User } from "@auth0/auth0-react";

// Whenever this State variable will be change using this SetbtnName(), react will re-render this Header component and all the updated value will be there. Calculating tht diff between old state of vDOM and new state of UPDATED vDOM. and updating the UI, everything is happening. AS soon as we click on the button

//  QUES(imp): is react refreshing the whole header or just the button?
//  It will re-render the whole component. by render means: calling this functional component. And how can we able to modify this const variable we define? React calling this function once again(rendering), but every time we invoke this function , const variable a NEW VARIABLE then it was before.
// LET'S MAKE THIS BUTTON A TOGGLE. btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");



const Header = ()=>{
    // I want this login keyword writtr in button dynamic.How will i do that react? To do this we cancreate a local state variable. 

    const [btnName, setBtnName] = useState("Login");
    const {user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

    const onlineStatus = useOnlineStatus();

    // I can access that global Context using react hook 
    const {loggedInUser} = useContext(UserContext);

    // SUSCRIBING TO THE STORE USING THE SELECTOR
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems)

    return(
    <div className="header bg-pink-100 shadow-lg">
        <nav className="flex justify-between">
            <div className="w-32 ml-20  rounded-lg"><Link to="/"><img src={logo}></img></Link></div>
            <div className="nav-items">
                <ul className="flex m-6 p-4">
                    <li className="mx-3 font-bold"> Online Status: {onlineStatus ? "✅" : "🛑"} </li>
                    <li className="mx-3 font-bold"><Link to="/">Home</Link> </li>
                    <li className="mx-3 font-bold"> <Link to="/about" >About</Link></li>
                    <li className="mx-3 font-bold"> <Link to="/contact">Contact Us📞</Link></li>
                    <li className="mx-3 font-bold text-xl"> <Link to="/cart">🛒({cartItems.length} items)</Link></li>
                    {/* <button className="login px-3 w-20 bg-gray-200 rounded-lg" onClick={()=>{
                        btnName === "Login" ? setBtnName("Logout"): setBtnName("Login");
                        console.log(btnName)
                    }} > {btnName}</button> */}
                    {isAuthenticated ? <button className="login px-3 w-20 bg-gray-300 rounded-lg font-bold" onClick={e=> logout()}>Logout</button> : <button className="login px-3 w-20 bg-gray-200 rounded-lg font-bold" onClick={(e)=>{
                        loginWithRedirect();
                    }} >Login</button>}
                    {/* <li className="mx-3 font-bold text-xl">{loggedInUser}</li> */}
                    {isAuthenticated && <li className="mx-3 font-bold text-xl">{user.name}</li>}
                </ul>
            </div>
        </nav>
    </div>
);
};

export default Header;