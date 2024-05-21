import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props, showItems, setShowIndex) => {

  const items = props.data.itemCards;
console.log(items);
  const accordionFunction = () => {
    props.setShowIndex();
  }
    
    return (
        <div className="border-red-500  mb-4 border-solid border">
            {/* {Category Heading} */}
            <div className="bg-red-700 relative shadow-slate-400" onClick={accordionFunction}>
                <h2 className="text-white font-bold text-lg p-2 pl-2 pr-12 cursor-pointer">{props.data.title} ({props.data.itemCards.length})</h2>
                <span className="absolute text-2xl right-10 text-white z-10 top-2">{showItems? '-' : '+'}</span>
                
            </div>
            {/* {Category Details} */}
            
           <div >
            
            { 

            items.map(
                 (item) => props.showItems && <ItemList key={item.card.info.id} item= {item.card}/>
                )
            }
           </div> 
        </div>
    )
}

export default RestaurantCategory;