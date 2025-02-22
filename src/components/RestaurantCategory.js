import { useState } from "react"
import ItemList from "./ItemList"




const RestaurantCategory  =({data , showItems , setshowIndex  })=>{

    // const[showItems , setshowItems]  =useState(false)
 //console.log(data)


 const  handleClick=()=>{

   setshowIndex()
 }


    return(

    <div>
        {/* Header */}
      <div className="w-6/12  bg-gray-50  shadow-lg   my-4 p-4  mx-auto    ">
        
        <div   onClick={handleClick} className=" flex  justify-between  ">
        <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
        </div>
        

        {/* Accordion body */}

        { showItems &&   <ItemList  items={data.itemCards} />}
        
        
        
        
      </div>
      
    </div>
       
    )
}



export default RestaurantCategory