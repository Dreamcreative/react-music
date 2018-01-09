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
            song: null
        }
    }
    componentDidMount(){
        const songId = this.props.match.params.url;
        fetch(`${cross}${api.play}&songid=${songId}`).then(res => {
            res.json().then(data => {
                this.setState({
                    song: data
                })
            })
        })

    }
    render(){
        if(this.state.song){
        // console.log(this.state.song.bitrate.file_duration)
        console.log(this.state.song)
            const title = this.state.song.songinfo.title
            const src = this.state.song.bitrate.file_link
            return (
                <div>
                    <Header title={title}/>
                    <div className="musicControl">
                        <Duration />
                        <MusicList />
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