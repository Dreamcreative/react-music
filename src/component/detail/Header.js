import React ,{ Component } from "react"
import back from  "../../image/back.png"
import List from  "../../image/list.png"

class Header extends Component {
    render(){
        return (
            <div className="app-header">
                <img  src={back} className="user"/>
                <span>歌曲</span>
                <img src={List} className="list"/>
            </div>
        )
    }
}
export default Header