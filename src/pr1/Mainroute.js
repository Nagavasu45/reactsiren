import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Bollywood from "./Bollywood"
import Technology from "./Technology"
import Hollywood from "./Hollywood"
import Fitness from "./Fitness"
import Food from "./Food"
import "./sty.css"
import React, { useState } from "react"
import Datacompo from "./Datacompo"
import Detailcompo from "./Detailcompo"

function Mainroute(){
// const [count,setCount]=useState(0)
// var v1=document.getElementById('act1')
const [close,setClose]=useState(false)
const sty={

    display:close?'block':'none'
}

const handlebutton=(()=>{
    setClose(!close)

})
const handleaction=(()=>{
    // v1.classList.add('hide')
    setClose(false)
}

)
// console.log(v1)



    return(
        <>
        <div className="one">
        <div className="four">
            <div className="five">The</div>
            <div className="t1"><h1>Siren</h1></div>
            <button onClick={handlebutton} className="buttonhide"><img width='25px' height='25px' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAAB0dHTCwsLo6OgwMDDFxcVqampCQkLj4+PPz8/7+/uRkZGlpaXc3NwgICA5OTn19fUWFhZ9fX2vr6+5ubmNjY1VVVU0NDRxcXFBQUGampqDg4M7OzteXl4bGxvpTqPvAAABeElEQVR4nO3c20ojQRQF0DKX7tZotGOi0Xj5/78UwXkZGHOoGjklrPUFexMSQp9mlwIAAAAAAAAAAAAAAAAAwF8ur4Zlv4ary8Z+m8O4vujZejxsmhpe77IrnLW7bil4kx0/5Ka+4PY2O3zI7ba64UN29qCH6oaP2dGDHqsbHrOjBx2rG07Z0YOm6oZP2dGDnqobLrOjBy2rG5YxO3vIWF+wbO6y0wfcNRQsZV4c+/7ftjsu5qaGpQyn+0W/7k9DYz8AAAAAgKj9OK37NY37xn7zc/ZD7bOmpmfec3b8kJaK/X+Cn+oPpGWfnT2o/rv4O86HLQfE33LHf65u+JodPaj+RvqWHT3orbrhKTt60Km64arvNy//WK+qG5YhO3xI06H78J4d/6z3Q0vBUrYvff+gvr7Uv3r5ZV71rfVdEwAAAADgf7EakcxqxDlWI/pgNeIbViN6YTXi36xG9MJqxDesRuSzGgEAAAAAAAAAAAAAAAAAAMBP+ADA2i2mel3/IwAAAABJRU5ErkJggg==" alt="not loaded"/>
            </button>
        </div>
        <BrowserRouter>
        <div className="two" >
        <NavLink style={({isActive})=>({color:isActive ? "green" : "black"})} className="three" to="/">Home</NavLink>
        <NavLink style={({isActive})=>({color:isActive ? "green" : "balck"})} className="three" to="/Bollywood">Bollywood</NavLink>
        <NavLink  style={({isActive})=>({color:isActive ? "green" : "balck"})} className="three" to="/Technology">Technology</NavLink>
        <NavLink style={({isActive})=>({color:isActive ? "green" : "balck"})} className="three" to="/Hollywood">Hollywood</NavLink>
        <NavLink style={({isActive})=>({color:isActive ? "green" : "balck"})} className="three" to="/Fitness">Fitness</NavLink>
        <NavLink style={({isActive})=>({color:isActive ? "green" : "balck"})} className="three" to="/Food">Food</NavLink>
        </div>
        <div className="twohide" id="act1" style={sty}>
        <button className="mob1" onClick={handleaction}><NavLink style={({isActive})=>({color:isActive ? "green" : "black"})} className="three" to="/">Home</NavLink></button>
        <button className="mob1" onClick={handleaction}><NavLink style={({isActive})=>({color:isActive ? "green" : "balck"})} className="three" to="/Bollywood">Bollywood</NavLink></button>
        <button className="mob1" onClick={handleaction}><NavLink  style={({isActive})=>({color:isActive ? "green" : "balck"})} className="three" to="/Technology">Technology</NavLink></button>
        <button className="mob1" onClick={handleaction}><NavLink style={({isActive})=>({color:isActive ? "green" : "balck"})} className="three" to="/Hollywood">Hollywood</NavLink></button>
        <button className="mob1"onClick={handleaction} ><NavLink style={({isActive})=>({color:isActive ? "green" : "balck"})} className="three" to="/Fitness">Fitness</NavLink></button>
        <button className="mob1"onClick={handleaction}><NavLink style={({isActive})=>({color:isActive ? "green" : "balck"})} className="three" to="/Food">Food</NavLink></button>
        </div>
       <Datacompo  >
        <Routes>
            
            <Route path="/" element={<Home/>}/>

            <Route path="/Bollywood" element={<Bollywood /> }/>
            <Route path="/Technology" element={<Technology />} />
            <Route path="/Hollywood" element={<Hollywood />} />
            <Route path="/Fitness" element={<Fitness />} />
            <Route path="/Food" element={<Food />} />  
            <Route path="Detailcompo/:catageory/:id" element={<Detailcompo />}/>   
                   
        </Routes>
        </Datacompo>
        </BrowserRouter>
        </div>

        </>
    )

}
export default Mainroute