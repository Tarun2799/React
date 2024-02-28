import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// const heading = (
//     <div className="heading">
//         <h1 className="head">Hey, there</h1>;
//     </div>
// )

// This is how we give style as an object to an element in JSX.
// const styleCard = {
//     backgroundColor: "yellow",
//     color: "#000"
// }



// const resObj = {
//     "info": {
//       "id": "2811",
//       "name": "Art Of Delight - Ice Creams, Sundaes And Desserts",
//       "cloudinaryImageId": "is2o7hybgplitgac9vtf",
//       "locality": "Residency Road",
//       "areaName": "Residency Road",
//       "costForTwo": "₹350 for two",
//       "cuisines": [
//         "Ice Cream",
//         "Desserts",
//         "Beverages"
//       ],
//       "avgRating": 4.6,
//       "parentId": "474822",
//       "avgRatingString": "4.6",
//       "totalRatingsString": "10K+",
//       "promoted": true,
//       "adTrackingId": "cid=11457544~p=1~eid=0000018d-e0a2-0494-31db-39fa004c0176~srvts=1708870730900~45995",
//       "sla": {
//         "deliveryTime": 27,
//         "lastMileTravel": 2.1,
//         "serviceability": "SERVICEABLE",
//         "slaString": "25-30 mins",
//         "lastMileTravelString": "2.1 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-02-26 01:00:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "textExtendedBadges": {
            
//           },
//           "textBased": {
            
//           },
//           "imageBased": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "10% OFF",
//         "subHeader": "UPTO ₹40"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=2811",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   }








const App = ()=>(
    <div className="App-layout">
        <Header/>
        <Body/>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(App());
root.render(<App/>);