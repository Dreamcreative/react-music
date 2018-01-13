import React ,{Component} from "react"
import api from "../../api"
import { Link } from 'react-router-dom'
export default class extends Component{
    // constructor(){
    //     super()
    //     this.state={
    //         data:[]
    //     }
    // }
    render(){
        const {data} = this.props
        const songId = data.song_id
        return(
            <Link to={`/musicList/${songId}`}  className="recommandSongA">
                <div className="recommandSong clearfix">
                    <p className="title ellipsis">{data.title}</p>
                    <p className="author ellipsis">{data.author}</p>
                </div> 
            </Link>   
        )
    }
}