import React ,{ Component } from "react"
import back from  "../../image/back.png"
import List from  "../../image/list.png"

class Header extends Component {
    handleBack(){
        window.history.back()
    }
    render(){
        return (
            <div className="app-header">
                <img  src={back} onClick={this.handleBack.bind(this)} className="user"/>
                <div className="title ellipsis">{this.props.title}</div>
                <img src={List} className="list"/>
            </div>
        )
    }
}
export default Header