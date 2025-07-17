import resList from "../../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../../utils/mockData";
const Body = () => {
  // state Variable - Powerful variable  - useState.
  const [listOfRestaurants, setListOfRestaurants] = useState( resList);
 
    let listOfRestaurantsJs = [
      {
        data: {
          type: "F",
          id: "12345",
          name: "KFC",
          cloudinaryImageId: "12345",
          cuisines: ["east", "fast food", "west"],
          costForTwo: 40000,
          deliveryTime: 35,
          avgRating: "4.4",
        },
      },
      {
        data: {
          type: "F",
          id: "123567",
          name: "Dominos",
          cloudinaryImageId: "12345",
          cuisines: ["east", "fast food", "west"],
          costForTwo: 20000,
          deliveryTime: 35,
          avgRating: "3.5",
        },
      },
      {
        data: {
          type: "F1",
          id: "443344",
          name: "MCD",
          cloudinaryImageId: "12345",
          cuisines: ["east", "fast food", "west"],
          costForTwo: 20000,
          deliveryTime: 35,
          avgRating: "4",
        },
      }
  ];
    return (
      <div className="body">
        <div className="filter">
         
          <button className="filter-btn" onClick={() => {
           const  filteredList = listOfRestaurants.filter((res) => {
              return res.data.avgRating > 4;
            });
            setListOfRestaurants(filteredList);
          }}> Top Rated Restaurant </button>
        </div>
        <div className="res-container">
          {/* Restaurant card */}
          {listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
  
          {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" /> */}
        </div>
      </div>
    );
  };

  export default Body;