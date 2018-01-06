import React ,{ Component} from "react"
import Header from "./Header"
import api from "../../api"
import cross from "../../cross"

class Music extends Component{
    constructor(props){
        super(props);
        this.state = {
            song: null
        }
    }
    // constructor(){
    //     super()
    //     this.state={
    //         url:""
    //     }
    // }
    componentDidMount(){
        const songId = this.props.match.params.url;
        

        fetch(`${cross}${api.play}&songid=${songId}`).then(res => {
            res.json().then(data => {
                console.log(data);
                this.setState({
                    song: data
                })
            })
        })

    }
    render(){
        
        if(this.state.song){
            const title = this.state.song.songinfo.title
            
            return (
            <div>
                <Header title={title}/>
                <audio id="audio" src={this.state.song.bitrate.file_link} 
                autoPlay="autoplay "controls="controls" width="100%">
                你的浏览器不支持
                </audio>
                
            </div>
            )
        }else{
            return(
                <div>loading...</div>
            )
        
        }
        
    }
}
export default Music