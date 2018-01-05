import React ,{ Component } from "react"
import music from  "../../image/music.png"
import List from  "../../image/list.png"
import Input from "./Input"
class Header extends Component {
    render(){
        return (
            <div className="app-header">
                <img  src={music} className="user"/>
                <Input />
                <img src={List} className="list"/>
            </div>
        )
    }
}
export default Header