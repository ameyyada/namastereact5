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
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Cart from "./components/Cart"


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
    <Provider store={appStore}>
    <userContext.Provider  value={{ loggedInUser:userName  , setuserName}}>
  <div className="app">
   <Header/>
   <Outlet />
  </div>
  </userContext.Provider>
  </Provider>
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
      } ,
      {
        path:"/restaurants/:resID",
        element:<RestaurantMenu />
         },

         {
          path:"/cart",
          element:<Cart />
           }

    ],
    errorElement:<Error />
  },
  
 
])







const Root = ReactDOM.createRoot(document.getElementById("root"))



Root.render(<RouterProvider  router={appRouter} />)