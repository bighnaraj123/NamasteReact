import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props)=>{ 
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, costForTwo} = resData.info;
    const imggall = CDN_URL;
    return(
        <div className="cursor-pointer">
            { <img src={imggall+cloudinaryImageId} alt="Restaurant 1" className="h-40 w-full object-cover" /> }
            <div className="px-2 pt-6 pb-8 text-wrap">
                <h3 className="text-2xl">{name}</h3>
                <p className="text-lg">{cuisines.join(", ")}</p>
                <div className="info flex justify-between">
                    <span className="price text-red-600">{costForTwo}</span>
                    <span className="stars  text-yellow-600" >★★★</span>
                </div>
            </div>
        </div>
    );
};
export default RestaurantCard;