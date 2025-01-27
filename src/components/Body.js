 import RestaurantCard from "./RestaurantCard"

import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
 




 const  Body=()=>{

const[listOfRetaurant, setlistOfRestaurant]=useState([])
const[filteredRestaurant, setFilteredRestaurant]=useState([])
const[searchText, setsearchText]=useState("")


useEffect(()=>{
fetchData()
},[])


const  fetchData= async ()=>{

  const data=  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
const json= await data.json()
setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)


}


if(listOfRetaurant.length === 0){
  return <Shimmer />
}

    return(
      <div className="body">
        <div className="filter">
        <div className="search"> 
           <input value={searchText}  onChange={(e)=> {setsearchText(e.target.value)}}/>
           <button
           onClick={()=>{

            const filteredList =listOfRetaurant.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredRestaurant(filteredList)
           }}
           >search
           </button>
        </div>
          <button 
          className="filter-btn"
          onClick={
            ()=>{
              
              let filteredList =listOfRetaurant.filter((res)=> res.info.avgRating >4)
              setlistOfRestaurant(filteredList)
            }
          }>
            Top  Rated Restaurant
          </button>
  
        </div>
        <div className="res-container">
          {filteredRestaurant.map((restaurant) => <RestaurantCard key={restaurant.info.id} resdata={restaurant}/>)}
  
          
        </div>
  
      </div>
    )
  }

  

  export default Body