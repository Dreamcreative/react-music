import React ,{ Component} from "react"
import left from "../../image/left.png"
import right from "../../image/right.png"
import stop from "../../image/stop.png"
import start from "../../image/start.png"

export default class extends Component{
    render(){
        return(
            <ul className="MusicListUl clearfix">
                <li><img src={left}/></li>
                <li><img src={stop}/></li>
                <li><img src={right}/></li>
            </ul>
        )
    }
}