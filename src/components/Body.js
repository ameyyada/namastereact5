 import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard"

import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus"
 




 const  Body=()=>{

const[listOfRetaurant, setlistOfRestaurant]=useState([])
const[filteredRestaurant, setFilteredRestaurant]=useState([])
const[searchText, setsearchText]=useState("")



const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard)

useEffect(()=>{
fetchData()
},[])


const  fetchData= async ()=>{

  const data=  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
const json= await data.json()
setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)


}

const onlineStatus = useOnlineStatus()

if(onlineStatus == false){

return (
  <h1>Looks  Like  you're offline !! Please  check  your Internet  Connection</h1>
)
}






if(listOfRetaurant.length === 0){
  return <Shimmer />
}

    return(
      <div className="body">
        <div className="flex ">
        <div className="search  py-1 ml-1" > 
           <input    className="border border-black  p-0.5 "  value={searchText}  onChange={(e)=> {setsearchText(e.target.value)}}/>
           <button className="px-2 py-1 m-2 bg-green-100 rounded-lg"
           onClick={()=>{

            const filteredList =listOfRetaurant.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredRestaurant(filteredList)
           }}
           >search
           </button>
        </div>
        <div className="py-1">
        <button  
          className="px-2 py-1 m-2 bg-green-100 rounded-lg"
          onClick={
            ()=>{
              
              let filteredList =listOfRetaurant.filter((res)=> res.info.avgRating >4)
              setlistOfRestaurant(filteredList)
            }
          }>
            Top  Rated Restaurant
          </button>
        </div>
         
  
        </div>
        <div className="flex  flex-wrap">
          {filteredRestaurant.map((restaurant) => 

          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} >
   {  restaurant.info.avgRating >4.3 ?  <RestaurantCardPromoted  resdata={restaurant} /> :  <RestaurantCard  resdata={restaurant}/> }
            
          </Link>

          )}
  
          
        </div>
  
      </div>
    )
  }

  

  export default Body