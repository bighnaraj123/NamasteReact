import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props)=>{ 
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, costForTwo} = resData.info;
    const imggall = CDN_URL;
    return(
        <div className="card">
            { <img src={imggall+cloudinaryImageId} alt="Restaurant 1" /> }
            <div className="cardDetails">
                <h3 >{name}</h3>
                <p>{cuisines.join(",")}</p>
                <div className="info">
                    <span className="price">{costForTwo}</span>
                    <span className="stars">★★★</span>
                </div>
            </div>
        </div>
    );
};
export default RestaurantCard;