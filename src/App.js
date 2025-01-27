import React from "react"
import ReactDOM from "react-dom/client"
import Body from "./components/Body"
import Header from "./components/Header"
import About from "./components/About"
import Contact from "./components/Contact"

// const heading= React.createElement("h1",{id:"heading"}, "Namaste  React")






const AppLayout =()=>{



  return  (
    
  <div className="app">
   <Header/>
   <Body/>
  </div>
  )
  
}









const Root = ReactDOM.createRoot(document.getElementById("root"))



Root.render(<AppLayout />)