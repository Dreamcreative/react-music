import React ,{Component} from "react"
import api from "../../api"
import { Link } from 'react-router-dom'
export default class extends Component{
   handleClick(){
       const data = this.props.data;
        console.log(data.song_id)
        fetch(`${api.play}&method=baidu.ting.song.play&songid=241856352`,
        {
            method:"get",
            headers: {"Content-type":"application/x-www-form-urlencoder;charset=UTF-8"},

        }).then( res=> res.json())
        .then( data => {
            console.log(data)
        })
    }
    render(){
        const {data} = this.props
        const songId = data.song_id
        return(

                <Link to="/musicList/"  className="recommandSongA">
                <div className="recommandSong clearfix"
                 onClick={this.handleClick.bind(this)}>
                
                    <p className="title ellipsis">{data.title}</p>
                    <p className="author ellipsis">{data.author}</p>
                
                </div> 
                </Link>
                  
            
        )
    }
}