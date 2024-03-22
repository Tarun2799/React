import { useEffect , useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useResMenu from "../utils/useResMenu";

function ResMenu(){

    
    // const params = useParams();
    // console.log(params); // gives us resId
    const {resId} = useParams();

    const resInfo = useResMenu(resId);

    if(resInfo === null) return <Shimmer/>;
    
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    
    const { itemCards } =resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    
    console.log(itemCards)


    return (
        <div className="res-menu">

            <Link to={"/"}> <h1 className="back">Back to Home</h1></Link>
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage} person</p>
            <br></br>
            <h2>Menu</h2>
            
            {
                itemCards.map( (item) => (
                    <li key={ item.card.info.id}> {item.card.info.name}-{" Rs"} {item.card.info.price/100 || item.card.info.defaultPrice/100} </li>
                ) )
            }
        </div>
    )
};

export default ResMenu;

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=252607&catalog_qa=undefined&submitAction=ENTER

// https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.11610&lng=79.07060&restaurantId=252607&catalog_qa=undefined&submitAction=ENTER

// https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.11610&lng=79.07060&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING