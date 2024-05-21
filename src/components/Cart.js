
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = () =>{
    const cartItems =  useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className="container  mx-auto mt-10">
            <h1 className="font-bold text-2xl">Cart Page</h1>
            <div className="w-6/12 m-auto">
            <button className=" p-2 m-2 bg-red-700 font-bold rounded-lg text-white"
                onClick={handleClearCart}
            >
                Clear Cart</button>
                {
                    cartItems.length == 0 && <p className="font-bold">Add Items to Cart</p>
                }
                { 
                     cartItems.map(
                    (item) => 
                        <ItemList key={item.item.info.key}  item= {item.item}/>
                    )
                }
            </div>

        </div>
    );
}

export default Cart;