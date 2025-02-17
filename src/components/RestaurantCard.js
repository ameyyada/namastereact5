import { CDN_URL } from "../utils/constants"

const RestaurantCard=(props)=>{
    const{resdata}=props
    const{name, costForTwo,slaString,avgRating,cuisines,cloudinaryImageId}=resdata?.info
    
    
    
      return(
        <div className="w-[200px]  m-2 p-2 bg-gray-100 hover:bg-gray-200" >
          <img 
          alt="res-logo"
          className="rounded-lg"
          src={CDN_URL+ cloudinaryImageId} 
          />
         <h3 className="font-bold p-2  text-lg">{name}</h3>
         <h4 className="p-1">{cuisines.join(" ,")}</h4>
         <h4 className="p-1"> {avgRating} stars</h4>
         <h4 className="p-1">{slaString}</h4>
         <h4 className="p-1">{costForTwo}</h4>
        </div>
      )
    }




//higher order component

   export const WithPromotedLabel =(RestaurantCard)=>{



  return (props)=>{

    return(
      <div>
        <h1 className="bg-black text-white rounded-lg     left-2  absolute m-2 p-2 ">Promoted</h1>
        <RestaurantCard   {...props} />
      </div>
    )

  }




}






    export default  RestaurantCard