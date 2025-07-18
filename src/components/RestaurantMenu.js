import { useEffect , useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import {MENU_API} from "./../../utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();
    useEffect(()=>{
      fetchMenu();
    },[]);


    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);

        const json = await data.json();
       
        setResInfo(json.data);
    }
    if (resInfo === null) {
      return <Shimmer/>
    }

    const {name, cuisines, cloudinaryImageId, costForTwoMessage}  = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info?.name , "item cards");

    return (
      <div className="menu" >
          <h1>{name}</h1>
          <h3>{cuisines.join(", ")}</h3>
          <h3>{costForTwoMessage}</h3>
          <ul>
            {itemCards.map((item)=> {
             return <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {item?.card?.info?.price || item?.card?.info?.defaultprice }</li>
            })}
{/*             
            <li>Coke</li>
            <li>Curd Rice</li> */}


          </ul>
       
      </div>
    );
  };

  export default RestaurantMenu;