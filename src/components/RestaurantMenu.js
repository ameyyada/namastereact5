
import Shimmer from "./Shimmer"
import { useParams } from "react-router"

import useRestaurantMenu from "../utils/useRestaurantMenu"

const  RestaurantMenu =()=>{

const {resID}=useParams()


    const ResInfo = useRestaurantMenu(resID)


    


    if(ResInfo ==null){
        return <Shimmer />

    }

    const{name,cuisines ,costForTwoMessage } = ResInfo?.cards[2]?.card?.card?.info

const{itemCards}=ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card








    return(
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {
                    itemCards?.map((item)=> 
                         <li key={item.card.info.id}>{item.card.info.name} - {"Rs. "} 
                         {item.card.info.price/100 || item.card.info.defaultPrice/100 }</li>
                )
                }
            </ul>
        </div>
    )
}


export default  RestaurantMenu