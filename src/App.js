import React, { lazy, Suspense, useContext, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Body from "./components/Body"
import Header from "./components/Header"
import {  createBrowserRouter, Outlet, RouterProvider } from "react-router"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
 // import Grocery from "./components/Grocery"
import userContext from "./utils/userContext"


// const heading= React.createElement("h1",{id:"heading"}, "Namaste  React")

const Grocery =lazy(()=>

  import("./components/Grocery")
)




const AppLayout =()=>{

  const[userName , setuserName] =useState()




  useEffect(()=>{
 
    //make an API  call  and send username and password
const data ={
  name :"Amey yadav"
}

setuserName(data.name)
  },[])

  return  (
    <userContext.Provider  value={{ loggedInUser:userName  , setuserName}}>
  <div className="app">
   <Header/>
   <Outlet />
  </div>
  </userContext.Provider>
  )
  
}





const appRouter =createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children:[
      {
       path:"/",
       element:<Body />
      },
      {
        path:"/about",
        element:<About />
        
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/grocery",
        element:(
          <Suspense><Grocery /></Suspense> 
      )
      }
    ],
    errorElement:<Error />
  },
  {
 path:"/restaurants/:resID",
 element:<RestaurantMenu />
  }
 
])







const Root = ReactDOM.createRoot(document.getElementById("root"))



Root.render(<RouterProvider  router={appRouter} />)