import RestaurantCard from "./Restaurantcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {RESTAURANT_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Body = ()=> {
    const [ListofRestaurant, setListofRestaurant] = useState([]);
    const [FIlterListofRestaurant, setFIlterListofRestaurant] = useState([]);
    const [SearchField, setSearchField] = useState();
    useEffect(()=>{
        fetchData();
    }, []);
   // console.log(ListofRestaurant);
    const fetchData = async () =>{
        //const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await fetch(RESTAURANT_URL);
        const json = await data.json(); 
        //console.log(json);

        //Optional chaining
        setListofRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFIlterListofRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    //Conditional Rendering
    // if(ListofRestaurant.length === 0){
    //     return <Shimmer/>
    // }

    return ListofRestaurant.length === 0 ?  <Shimmer/> :(
    <main className="container  mx-auto mt-10">
        <div className="flex mt-5 justify-between">
            <div className="flex">
                <input 
                    type="text" 
                    
                    className="mr-5 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={SearchField}
                    onChange={(e)=>{
                    setSearchField(e.target.value);
                    }}
                    
                />

                <div className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={()=>{
                        const FIlterListofRestaurant = ListofRestaurant.filter((res)=>
                        res.info.name.toLowerCase().includes(SearchField.toLowerCase()))
                        setFIlterListofRestaurant(FIlterListofRestaurant);
                    }}

                >Search</div>
            </div>
            <div className="flex "> 
                <div className="bg-blue-500 mr-2 hover:bg-blue-700 inline-block text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    onClick={() => {
                        const filterData = ListofRestaurant.filter(
                            (res) => res.info.avgRating > 4.2 );
                            setFIlterListofRestaurant(filterData);
                    }
                    
                }>Top Rated Restaurant</div>
                <div className="bg-green-500  mr-2 hover:bg-green-700 inline-block text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    onClick={
                        () => {
                        const filterData = ListofRestaurant.filter(
                            (res) => res.info.veg==true );
                            setFIlterListofRestaurant(filterData);
                    }
                    }
                >Veg</div>
                <div className="bg-yellow-500  mr-2 hover:bg-yellow-700 inline-block text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    onClick={
                        () => {
                            setFIlterListofRestaurant(ListofRestaurant);
                        }
                    }
                >Re-set</div>

            </div>
        </div>


        <div className="flex flex-wrap  justify-between mt-5">
          
          {  FIlterListofRestaurant.map((restaurant) => 
                <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id} className="mb-5 rounded-b-lg w-[275px] bg-base-100 hover:shadow-slate-400 shadow-xl"><RestaurantCard  resData={restaurant}/></Link>
            )}

            
        </div>
    </main>
);
};
export default Body;