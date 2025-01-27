import { CDN_URL } from "../utils/constants"

const RestaurantCard=(props)=>{
    const{resdata}=props
    const{name, costForTwo,slaString,avgRating,cuisines,cloudinaryImageId}=resdata?.info
    
    
    
      return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
          <img 
          alt="res-logo"
          className="res-logo"
          src={CDN_URL+ cloudinaryImageId} 
          />
         <h3>{name}</h3>
         <h4>{cuisines.join(" ,")}</h4>
         <h4>{avgRating} stars</h4>
         <h4>{slaString}</h4>
         <h4>{costForTwo}</h4>
        </div>
      )
    }

    export default  RestaurantCard