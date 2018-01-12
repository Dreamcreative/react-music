import React ,{ Component} from "react"
import left from "../../image/left.png"
import right from "../../image/right.png"
import stop from "../../image/stop.png"
import start from "../../image/start.png"

export default class extends Component{
    constructor(){
        super()
        this.state={
            ifPlay: true
        }
    }
    componentDidMount(){
        const audio = document.getElementById("audio")
        audio.addEventListener('ended', () => { this.setState({ ifPlay : false}) }, false);  
        // console.log(audio.duration ,audio.currentTime)
    }
    componentWillUnmount(){
        clearInterval( this.timer)
        clearInterval( this.timers)
    }
    handleClickStart(){
        const audio = document.getElementById("audio")
        this.state.ifPlay?audio.pause():audio.play() ;
        this.setState({
            ifPlay:!this.state.ifPlay
        })
    }
    getAudioTime( e ){
        const audio = e.target
        if(this.props.getAudioTime ){
            this.timer = setInterval(()=>{
            this.props.getAudioTime( audio.currentTime )
            } ,1000)
        }    
    }
    handleLrc( e ){
        const audio = e.target
        if(this.props.onTimeUpdate){
            this.timers = setInterval( ()=>{

                this.props.onTimeUpdate( audio.currentTime )
            },1)
        }
        
    }
    render(){
        return(
            <div>
                <ul className="MusicListUl clearfix">
                    <li><img src={left}/></li>
                    <li onClick={this.handleClickStart.bind(this)}><img src={this.state.ifPlay?stop:start}/></li>
                    <li><img src={right}/></li>
                </ul>
                <audio id="audio" autoPlay="true" 
                onTimeUpdate={this.handleLrc.bind(this)}
                onPlay={this.getAudioTime.bind(this)}  >
                    <source src={this.props.src} />
                    您的浏览器不支持
                </audio>
            </div>
        )
    }
}