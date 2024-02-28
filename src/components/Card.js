import CDN_URL from "../utils/constants";


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

    return (<div className="res-card">
            <img src={ CDN_URL + cloudinaryImageId}alt="res-logo"></img>
        <div className="data">
            <h3>{name}</h3>
            <h4>{avgRating} star</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
        
    </div>)
};


export default Card;