
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = (items) => {


    //Dispatch action
    const dispatch  = useDispatch();
    const handleAddItem= (item) => {
        dispatch(addItem(item));
    }


    return(
        //const list = item.map()
        <div className="flex justify-between border-b-2 items-center">
            <div className=" p-4">
                <div className="flex items-center justify-center h-4 w-4">
                    <span ></span>
                    {
                    items.item.info.itemAttribute.vegClassifier === 'VEG'? 
                    <p className="bg-green-600 h-4 w-4  rounded-full"></p>  : 
                    <p className="bg-red-600 h-4 w-4  rounded-full"></p>
                    } 
                </div> 
                <div className="font-bold">{items.item.info.name}</div>
                <div>Rs. {items.item.info.price / 100}</div>
                <div>{items.item.info.description}</div>
            </div>
            <div className="p-4 relative">
            <img src={CDN_URL + items.item.info.imageId} className="w-36 h-36 rounded-lg" />
                <div onClick={() => handleAddItem(items)}  className="bg-black hover:bg-slate-950 text-white font-bold py-2 px-4  w-20 text-center rounded m-auto absolute bottom-1 left-[46px]">
                    Add</div>
            </div>
        </div>
    );

};

export default ItemList;