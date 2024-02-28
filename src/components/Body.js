import Card from "./Card";
import resList from "../utils/mockData";

const Body = ()=>{
    
    
    return(
    <div className="body">
        <div className="Tools">
            <div className="search-btn">
                <input type="search" placeholder="search"></input>
                <button>Search</button>
            </div>

            <div className="filter">
                <button className="filter-btn">Top Rated Restaurant</button>
            </div>
        </div>
        <div className="cards-container">
            
        {
            resList.map( (restaurant) => (
                <Card key={restaurant.info.id} resData={restaurant} />
            ) )
        }
            
        </div>
    </div>
);
};

export default Body;