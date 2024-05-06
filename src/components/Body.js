import RestaurantCard from "./Restaurantcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = ()=> {
    const [ListofRestaurant, setListofRestaurant] = useState([]);
    const [FIlterListofRestaurant, setFIlterListofRestaurant] = useState([]);
    const [SearchField, setSearchField] = useState();
    useEffect(()=>{
        fetchData();
    }, []);
    
    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json(); 
        console.log(json);

        //Optional chaining
        setListofRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFIlterListofRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    //Conditional Rendering
    // if(ListofRestaurant.length === 0){
    //     return <Shimmer/>
    // }

    return ListofRestaurant.length === 0 ?  <Shimmer/> :(
    <main>
        <div>
            <input 
                type="text" 
                className="form-control " 
                value={SearchField}
                onChange={(e)=>{
                   setSearchField(e.target.value);
                }}
            />

            <div className="btn btn-danger"
                onClick={()=>{
                    const FIlterListofRestaurant = ListofRestaurant.filter((res)=>
                    res.info.name.toLowerCase().includes(SearchField.toLowerCase()))
                    setFIlterListofRestaurant(FIlterListofRestaurant);
                }}

            >Search</div>
        </div>
        <div className="btn btn-primary" 
            onClick={() => {
                const filterData = ListofRestaurant.filter(
                    (res) => res.info.avgRating > 4.2 );
                    setFIlterListofRestaurant(filterData);
            }
            
        }>Top Rated Restaurant</div>
         <div className="btn btn-success" 
            onClick={
                () => {
                const filterData = ListofRestaurant.filter(
                    (res) => res.info.veg==true );
                    setFIlterListofRestaurant(filterData);
            }
            }
        >Veg</div>
        <div className="btn btn-warning" 
            onClick={
                () => {
                    setFIlterListofRestaurant(ListofRestaurant);
                }
            }
        >Re-set</div>
        <div className="resCardContainer">
          
          {  FIlterListofRestaurant.map((restaurant) => 
                <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            )}

            
        </div>
    </main>
);
};
export default Body;