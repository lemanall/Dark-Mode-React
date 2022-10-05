import react from "react"
import "./App.css"
import Button from "./component/button"
import { useState } from "react"
function App() {
const  [Dark, setDark] = useState(false)
function changeMode(){
  setDark(!Dark)
 
}
const DarkModes={
  color: "#fff",
  backgroundColor: "#000"
}
const LightModes={
  color:"#000",
  backgroundColor:"#fff"
}


  return (
    <div style={Dark ? DarkModes : LightModes} className="container">
      <p style={Dark ? DarkModes : LightModes}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus sapiente magni eligendi veniam, rem consectetur, nulla sit et accusantium voluptatum asperiores ratione facere blanditiis aut in sed, dolores ipsa earum dolore quasi! Ex rerum accusamus neque possimus ducimus sit eius magni blanditiis ullam. Sed ad corrupti ex, ducimus voluptatem tenetur.</p>
     <div  > <Button style={Dark ? LightModes : DarkModes} changeMode={changeMode} >{Dark ? "Light" : "Dark"} Mode</Button></div>
    </div>
  )
}
export default App
