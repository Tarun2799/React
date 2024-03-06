import Card from "./Card";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = ()=>{
    
    // Local State Variable - super powerful Variable.
    // const [listOfRestuarnts] = useState()  { In this we give the state variable: A Default value} . We can use this as NORMAL VARIABLE.(listOfRestuarnts)
    // const [listOfRestaurants] = useState([]) , Here,we are giving DEAFAULT VALUE AS AN "EMPTY ARRAY". Whatever we will pass over here, becomes the DEFAULT VALUE of this State Variable.

    // We can give single value: const [listOfRestaurants] = useState([{object: "1"}, {object: "2"}])


    // Another way to declare this, Because of this useState() returning Array and we are doing Array destructuring: let arr = useState(resList);
    // let [ listOfRestaurants, setListOfRestuarants] = arr; ==> Array destructuring.

    // ANOTHER WAY : let listOfResturants = arr[0];
                  // let setListOfResturants = arr[1];

    // Normal variable let listOfRestaurants;

    // 2.. USEEFFECT HOOK : useEffect(callback, dependency array);
    // when will this call back be called? when it written inside a function component , first the component is going to render, after that this useEffect callback will called.

    // let [listOfRestaurants, setlistOfRestaurants] = useState(resList);
    let [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [filteredRestuarants, setFilteredRestuarants] = useState([]);

    const [searchText, setSearchText] = useState("");

    // useEffect(()=>{
    //     // console.log("useEffect called");
    //     fetchData();
    // },[]); //My mistake to give an empty array i.e. why api is not laoading.

    useEffect(()=>{
        // console.log("useEffect called");
        fetchData();
    }, []);

    const fetchData = async ()=>{
        // this fetch is given by the BROWSERS.
        
        // const data = await fetch(
        //     "https://www.swiggy.com/mapi/homepage/getCards?lat=21.1458004&lng=79.0881546"
        // );
        const data = await fetch(
            "https://www.swiggy.com/mapi/homepage/getCards?lat=28.7040592&lng=77.10249019999999"
        );

        // const data = await fetch(
        //     "https://www.swiggy.com/mapi/homepage/getCards?lat=29.6856929&lng=76.9904825"
        // );

        const json = await data.json();

        console.log(json);
        // setlistOfRestaurants(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        setlistOfRestaurants(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestuarants(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    }


    // "Conditional rendering": Having a condition to render our components.
    // if (listOfRestaurants.length === 0){
    //     return <Shimmer/>;
    // }

    // Conditional Rendering
    return listOfRestaurants.length === 0? <Shimmer/> :  (
    <div className="body">
        <div className="Tools">
            <div className="search-btn">
                <input type="search" placeholder="search" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}></input>
                <button onClick={
                    ()=>{
                        console.log(searchText);
                        const filteredRestaurants = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        // setlistOfRestaurants(filteredRestaurants);
                        setFilteredRestuarants(filteredRestaurants);
                    }
                }>Search</button>
            </div>

            <div className="filter">
                <button className="filter-btn"
                onClick={
                    ()=>{
                        let filteredList = listOfRestaurants.filter( (res)=> res.info.avgRating > 4.2 )
                        // listOfRestaurants = filteredList;
                        // setlistOfRestaurants(filteredList);
                        // due to this(filteredRestaurant) we are also, search from all the list of resturants
                        setFilteredRestuarants(filteredList);
                    }
                } >Top Rated Restaurant</button>
            </div>
        </div>
        <div className="cards-container">
            
        {
            // listOfRestaurants.map( (restaurant) => (
            //     <Card key={restaurant.info.id} resData={restaurant} />
            // ) )

            filteredRestuarants.map( (restaurant) => (
                <Card key={restaurant.info.id} resData={restaurant} />
            ) )
        }
            
        </div>
    </div>
);
};

export default Body;


// We want to search for cafes. Thw Input boxe is hvaving an important cancept: onclick of this search button, Filter the res-cards and update the UI. So, I need search text over there. And to get the search text from input box, i need to get value from Input box and I have to BIND THIS TO A LOCAL STATE VARIABLE of react. SO, i defined searchText and bind this to input box : value={searchText}.

// And on click of this Search button , i want my search text. But doing this i'm not getting anythoing after typing into the search box    Why input box is not working?
// BECAUSE the value is bind to search text and searchtext is empty , this input box will not change unless we change the search text. So, to do this, we write a onChange handler over here. As soon as this input changes, my onchange function change this searchtext with the help of setSearchText(e.target.value) and when i press SEARCh button we will get this text.

//We are chnging the Local state VAriable, SO as we know whenever we can the local state variable REACT RE=RENDER THE COMPONENTS: THis means on every key press our Whole components is re-rendering. How it is efficiently rendrring it.

// First answer why it is rebdering TWICE. because first time we are rendering after this we are fteching the api from useEffect() and inside this we are settig our listRestaurants. i.e why and after this on every key press it is rendering once again. so we write the Logic in thesearch butto .After getting filtered-res . NOw we have to update oue UI with this filteres res.[LOGIC: listOfRestaurants.filter( (res)=>{return res.info.name.includes(searchText)}) ] =========================================== Now there is a bug in our app. if USER sedarch with capital or small letters it will not work. SO, we have to change searchtesh to all lower/capital with res-name. listOfRestuarants.filter( (res)=> res.info.name.toLowerCase().includes( searchText.toLowerCase() ) ). Now this is not case-sensitive.
// ==============::: NOW THERE IS ANOTHER BUG IN OUR APP. if we search cafe again, after once searching , our console not giving any error but all of the cards are gone. what has happened? because we are flitering on from the filtered list rather than whole list of restaurants JSON. we are getting from the swiggy API. We have LOST the data.  So what will do this, we will keep a copy of this Whole listOfResturants. And WILL CREATE A STATE VARIABLE FOR THE FILTERED LISTOFRESTAURANTSA. And we will map on to our filteredResturants rather than listOfResturants. And we will search from the listOfResturants all the time. BUt there is one problem AT FIRST OR FILTEREDLIST is EMPTY so what we will do is : set this filtered list also with the json data that is we are setting in the listOfRestaurants, so due to this we are preserve our data for filtering. And we have to 




// ::::::::: Whenever State variable update, react triggers a reconconciliation cycle(re-renders the components).

// why is react doing all re-renders? This is because its efficient ALGORITHM. REACT EFFICIENTLY DO THE DOM MANIPULATION.

// VirtualDOM is the Object respresentation of the JSX. React Fibre is new reconciliation(Milan) process to efficiently manipulate the DOM.