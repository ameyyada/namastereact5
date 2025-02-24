import { useContext, useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus"
import userContext from "../utils/userContext"
import { useDispatch, useSelector } from "react-redux"
import { addItem } from "../utils/cartSlice"



const Header=()=>{

  const[btnNameReact, setbtnNameReact]=useState("login")
const onlineStatus  = useOnlineStatus()
const {loggedInUser }= useContext(userContext)
//console.log(loggedInUser)


const cartItems =useSelector((store)=> store.cart.items)
console.log(cartItems)






    return(
  <div className="flex justify-between  mt-1 mx-1 bg-pink-100   shadow-lg   sm:bg-yellow-50  lg:bg-green-50"   >
    <div className="logo-container  ">
     <img  className="w-32" src={LOGO_URL}/>
    </div>
    <div className="p-4 m-4 content-center">
     <ul className="flex">
      <li className="px-4" >
        Online Staus:{ onlineStatus ? "✅" : "🛑" }
      </li>
      <li  className="px-4">
       <Link to={"/"}>Home</Link> 
      </li>
      <li  className="px-4">
        <Link to={"/about"}>About Us</Link>
        </li>
      <li  className="px-4">
        <Link to={"/contact"}>Contact Us</Link>
        </li>
        <li className="px-4">
          <Link to={"/grocery"}>Grocery</Link>
        </li>
      <li className="px-4 ">
         <Link  to={"/cart"}>Cart-{cartItems.length} items
         </Link></li>
      <button className="login px-4 w-24"
      onClick={()=>{
        btnNameReact=="login"? setbtnNameReact("logout"):setbtnNameReact("login")
      }}
      >
        {btnNameReact}
        </button>
        <li>{loggedInUser}</li>
     </ul>
    </div>
  </div>
    )
  }


  export default Header