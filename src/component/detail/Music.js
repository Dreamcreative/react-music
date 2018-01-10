import React ,{ Component} from "react"
import Header from "./Header"
import api from "../../api"
import cross from "../../cross"
import MusicList from "./MusicList"
import Duration from "./Duration"
class Music extends Component{
    constructor(props){
        super(props);
        this.state = {
            song: null ,
            currentTime: "00:00" ,
            percent:"0%"
        }
    }
    componentDidMount(){
        const songId = this.props.match.params.songId;
        fetch(`${cross}${api.play}&songid=${songId}`).then(res => {
            res.json().then(data => {
                this.setState({
                    song: data
                })
            })
        })

    }
    getAudioTime(  currentTime){
        currentTime = Math.ceil(currentTime)
        const oneMin = 60 ;
        const duration = this.state.song.bitrate.file_duration
        let Min = Math.floor(currentTime/oneMin)%oneMin ;
        let Sec = Math.ceil(currentTime%oneMin) ; 
        let percent = parseFloat(currentTime /duration*100).toFixed(2) +"%"
        // console.log( persect)
        // currentTime = currentTime>60 ? 
        // Min = Min>=10?`${Min}` : `0${Min}`
        // Sec = Sec>=10?`${Sec}`:`0${Sec}`
        currentTime = this.handleTime( Min ,Sec)
        this.setState({
            currentTime,
            percent
        })
    }
    handleTime( Min , Sec){
        Min = Min>=10?`${Min}` : `0${Min}`
        Sec = Sec>=10?`${Sec}`:`0${Sec}`
        return  `${Min}:${Sec}`
        
    }
    render(){
        const song =this.state.song
        if( song ){
            let [title,src,duration ,oneMin ] = [song.songinfo.title ,song.bitrate.file_link ,song.bitrate.file_duration ,60 ] 
            const [Min ,Sec ,progress] = [parseInt(duration/oneMin),parseInt(duration%oneMin) , ] 
            duration =this.handleTime(Min , Sec)
            return (
                <div>
                    <Header title={title}/>
                    <div className="musicControl">
                        <Duration currentTime={ this.state.currentTime} 
                        duration={duration} percent={this.state.percent}
                        />
                        <MusicList getAudioTime={this.getAudioTime.bind(this)} src={src}/>
                    </div>
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