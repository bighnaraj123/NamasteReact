import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    //const [showItem, setShowItem]  = useState(true);
    const [showIndex, setShowIndex]  = useState(0);
    const {resId} =useParams();
    const resInfo = useRestaurantMenu(resId);
    if(resInfo ===null) return <Shimmer/>;
  
    //const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const categories = 
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) =>
             c.card?.card?.["@type"] ==  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    //const categoriesData = categories.card.card.text;
    //console.log(categories);
    const {name, cuisines} = resInfo?.cards[2]?.card?.card?.info;
  
    return (
        <div className="container mx-auto mt-10 mb-10">
            <h1 className="text-2xl font-bold text-red-500">{name}</h1>
            <h2><span className="font-bold">Cuisines: </span>{cuisines.join(", ")}</h2>
            <div className="resCardContainer">
            <h3 className="font-bold text-red-800">Menu</h3>
            <ul>
                {
                // itemCards.map(
                //     item => <li key={item.card.info.id}>
                //         {item.card.info.name} - 
                //         Rs. {item.card.info.defaultPrice/100  || item.card.info.price/100}</li>
                //     )
                categories.map((category, index) => 
                    <RestaurantCategory 
                        key={category.card.card.title} 
                        data = {category.card.card} 
                        showItems = {index == showIndex ? true : false}
                         setShowIndex = {() => setShowIndex(index)}
                    />
                )
                }
            </ul>

            
            </div>
        </div>
    )
}

export default RestaurantMenu;