import React ,{ Component} from "react"
import Header from "./Header"

class Music extends Component{
    render(){
        return (
            <div>
                <Header />
                <audio id="audio"  controls="controls" >
                你的浏览器不支持
                </audio>
                
            </div>
        )
    }
}
export default Music