import {CDN_URL} from "../utils/constants";


const Card = (props)=>{
    // <div className="card" style={styleCard}>

    // sometimes, we see this also.
    // const {resName, cuisine} = props;

    // Let's work on Live data, it's also an object
    const {resData} = props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla
    } = resData?.info;
    // here, to keep in mind: we use return syntax so that we can destructure props in the Component.

    return (<div className="res-card m-4 p-4 w-[250px] bg-gray-0 rounded-lg hover:bg-gray-200">
            <img className="h-[150px] w-[100%] rounded-lg" src={ CDN_URL + cloudinaryImageId}alt="res-logo"></img>
        <div className="data">
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4>{avgRating} star</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
        
    </div>)
};

// Higher Order Component
// input - RestaurantCard ==> ResCardPromoted

//this function is returning a function/component that is returning JSX.
export const withPromotedLabel = (Card)=>{

    return (props)=>{

        return(
            <div>
                <label className="absolute bg-lime-500 text-white m-2 p-2 rounded-lg">Open</label>
                <Card {...props}/>
            </div>
        )
    }

}


export default Card;