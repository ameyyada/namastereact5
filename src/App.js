import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import Body from "./components/Body"
import Header from "./components/Header"
import {  createBrowserRouter, Outlet, RouterProvider } from "react-router"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
 // import Grocery from "./components/Grocery"



// const heading= React.createElement("h1",{id:"heading"}, "Namaste  React")

const Grocery =lazy(()=>

  import("./components/Grocery")
)




const AppLayout =()=>{



  return  (
    
  <div className="app">
   <Header/>
   <Outlet />
  </div>
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