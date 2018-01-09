import React ,{ Component } from "react"
import music from  "../../image/music.png"
import List from  "../../image/list.png"
import Input from "./Input"
import { Link } from 'react-router-dom'
class Header extends Component { 
    getInputValue(data){
        if(this.props.handleSearch){
            this.props.handleSearch(data )
        }
    }
    render(){
        return (
            <div className="app-header">
                <img  src={music} className="user"/>
                <Link to="/search" className="inputDiv">
                    <Input  getInputValue={this.getInputValue.bind(this)}/>
                </Link>
                <img src={List} className="list"/>
            </div>
        )
    }
}
export default Header