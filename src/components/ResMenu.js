import { useEffect , useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import ShimmerList from "./ShimmerList";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useResMenu from "../utils/useResMenu";
import RestaurantCategory from "./RestaurantCategory";

function ResMenu(){

    
    // const params = useParams();
    // console.log(params); // gives us resId
    const {resId} = useParams();

    const resInfo = useResMenu(resId);
    // we are controoling the state of RestaurantCategory by this showIndex. How can a child change the STATE VARIABLE OF PARENT? It's not posiible directly but it's possible. by passing setShowIndex() to the child.
    const [showIndex, setShowIndex] = useState(null);

    if(resInfo === null) return <ShimmerList/>;
    
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    
    const { itemCards } =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    
    console.log(itemCards)
    // we can write .card = ["card"] like that i.e. why we write["@type"], we are not able to write this as .@type.
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

        // console.log(categories);

    return (
        <>
            <Link to={"/"}> <h1 className="w-32 font-semibold p-2 m-4 rounded-xl bg-black text-white shadow-lg">Back to Home</h1></Link>
        <div className="res-menu text-center">

            <h1 className="text-2xl font-bold px-20 my-4">{name}</h1>
            <p className="px-20 font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage} person</p>
            <br></br>

            {/* categories accordians, And we are controlling the state by showItems prop.  */}
            {categories.map((category, index) => (
                <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} showItems={index === showIndex ? true : false} setShowIndex={() => setShowIndex(index)}/> 
            ))}

            {/* <h2 className="px-10 ">Menu</h2> */}
            
            {/* {
                itemCards.map( (item) => (
                    <li className="px-30" key={ item.card.info.id}> {item.card.info.name}-{" Rs"} {item.card.info.price/100 || item.card.info.defaultPrice/100} </li>
                ) )
            } */}
        </div>
        </>
    )
};

export default ResMenu;

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=252607&catalog_qa=undefined&submitAction=ENTER

// https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.11610&lng=79.07060&restaurantId=252607&catalog_qa=undefined&submitAction=ENTER

// https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.11610&lng=79.07060&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING