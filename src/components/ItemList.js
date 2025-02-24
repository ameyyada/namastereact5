

import { CDN_URL } from "../utils/constants"
import { addItem } from "../utils/cartSlice"
import { useDispatch } from "react-redux"





const  ItemList  =({items})=>{

    //console.log(items)

   const dispatch =useDispatch()

   const handleClick =(item)=>{

    dispatch(addItem(item))
   }



    return(
        <div>
         {
            items.map((item)=>
            <div  key={item.card.info.id} className="border-gray-200  border-b-2  p-2 m-2 text-left  flex justify-between  ">
          <div  className="w-9/12 p-2">
          <div className="py-2  ">
          <span >{item.card.info.name} </span>
          <span> - ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
          </div>
           
    
           <p className="text-xs">
            {item.card.info.description}
           </p>
          </div>

         
           <div  className="w-3/12">
           <div className="absolute">
           <button className=" bg-black text-white mx-10 shadow-lg p-1" onClick={()=>handleClick(item)}  >Add +</button>
           </div>

             <img   src={ CDN_URL + item.card.info.imageId } />
             
          </div> 
            </div>
            
            )
         }
        </div>
    )
}



export default  ItemList