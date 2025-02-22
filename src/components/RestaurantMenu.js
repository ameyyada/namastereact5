
import Shimmer from "./Shimmer"
import { useParams } from "react-router"

import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory"
import { useState } from "react"






const  RestaurantMenu =()=>{
// const[showItems , setshowItems]  =useState(false)
const {resID}=useParams()


 const ResInfo = useRestaurantMenu(resID)

 const[showindex , setshowIndex]= useState(null)


    


    if(ResInfo ==null){
        return <Shimmer />

    }

    const{name,cuisines ,costForTwoMessage } = ResInfo?.cards[2]?.card?.card?.info

const{itemCards}=ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card


//console.log(ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

const categories = ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>

        c.card.card["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
)

  //console.log(categories)


    return(
        <div className="text-center">
            <h1 className="my-6 font-bold text-2xl">{name}</h1>
            <p className="font-bold">{cuisines.join(", ")} - {costForTwoMessage}</p>
            { categories.map((category , index)=>
            <RestaurantCategory key={category.card.card.title} data={category.card.card}  showItems={index== showindex ? true : false}  setshowIndex={ ()=> setshowIndex(showindex == index ? null : index)}/>
            )}
        </div>
    )
}


export default  RestaurantMenu