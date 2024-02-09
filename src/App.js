import React from "react";
import Home from "./screens/Home";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Hello from "./components/Hello.js";
import Login from "./screens/Login.js"
function App ()  {
  return (
   
      <div>
        <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
   
       </>
      </div>
  
     
  )
}
export default App;