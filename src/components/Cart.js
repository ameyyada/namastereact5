import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice"

const Cart = ()=>{


const cartItems =useSelector((store)=> store.cart.items)




const dispatch =useDispatch()

const handleClearCart = ()=>{

    dispatch(clearCart())
}

    return(
        <div  className="text-center p-4 m-4  ">
                   <h1 className="font-bold text-2xl">Cart</h1>
                   
                   <div className=" w-6/12 m-auto  ">
                   <button className="bg-black rounded-lg text-white p-1 m-2"  onClick={handleClearCart}>Clear Cart</button>
                   {cartItems.length ===0 && <h1>Cart is empty . Add Items to the Cart !</h1>}
                   <ItemList items={cartItems}  />
                   </div>
          
        </div>
    )
}


export  default  Cart