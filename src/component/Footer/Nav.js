import React ,{ Component} from "react"
import {NavLink} from "react-router-dom"
import music from "../../image/mymusic.png"
import find from "../../image/findmusic.png"
import user from "../../image/user.png"
const NavBar =()=>(
    <div className="nav">
        <ul className="navUl clearfix">
        <li><NavLink exact to="/"> <img  src={find}/></NavLink></li>
        <li><NavLink to="/Mymusic"><img  src={music}/></NavLink></li>
        <li><NavLink to="/other"><img  src={user}/> </NavLink></li>
        </ul>
    </div>
)
export default NavBar