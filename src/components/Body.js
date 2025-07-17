import resList from "../../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../../utils/mockData";
import Shimmer from "./Shimmer";
const Body = () => {
  // state Variable - Powerful variable  - useState.
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState();

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);
  //   let listOfRestaurantsJs = [
  //     {
  //       data: {
  //         type: "F",
  //         id: "12345",
  //         name: "KFC",
  //         cloudinaryImageId: "12345",
  //         cuisines: ["east", "fast food", "west"],
  //         costForTwo: 40000,
  //         deliveryTime: 35,
  //         avgRating: "4.4",
  //       },
  //     },
  //     {
  //       data: {
  //         type: "F",
  //         id: "123567",
  //         name: "Dominos",
  //         cloudinaryImageId: "12345",
  //         cuisines: ["east", "fast food", "west"],
  //         costForTwo: 20000,
  //         deliveryTime: 35,
  //         avgRating: "3.5",
  //       },
  //     },
  //     {
  //       data: {
  //         type: "F1",
  //         id: "443344",
  //         name: "MCD",
  //         cloudinaryImageId: "12345",
  //         cuisines: ["east", "fast food", "west"],
  //         costForTwo: 20000,
  //         deliveryTime: 35,
  //         avgRating: "4",
  //       },
  //     }
  // ];

  const fetchData  = async () => {
    const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const data = await res.json();
    setListOfRestaurants(data?.data?.cards[4]?.card?.card.gridElements.infoWithStyle.restaurants|| []);
    setFilteredRestaurants(data?.data?.cards[4]?.card?.card.gridElements.infoWithStyle.restaurants|| []);

    // optional chaining
    // console.log(data?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info|| [], "data");
  }
  // conditional rendering
  if (listOfRestaurants.length ===0) {
    return <Shimmer></Shimmer>;
  }
    return (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e) => {
              setSearchText(e.target.value);
            }}></input>
            <button onClick={()=> {
              if (searchText != '') {
                const filteredRes =  listOfRestaurants.filter((res)=> {
                  return res?.info?.name?.toLowerCase().includes( searchText.toLowerCase());
                })
                setFilteredRestaurants(filteredRes);
              } else {
                fetchData();
              }
           
              console.log(searchText, "test");
            }}>Search</button>
          </div>
          <button className="filter-btn" onClick={() => {
           const  filteredList = listOfRestaurants.filter((res) => {
              return res?.info?.avgRating > 4;
            });
            setListOfRestaurants(filteredList);
          }}> Top Rated Restaurant </button>
        </div>
        <div className="res-container">
          {/* Restaurant card */}
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
          ))}
  
          {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" /> */}
        </div>
      </div>
    );
  };

  export default Body;