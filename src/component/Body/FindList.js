import React ,{Component} from "react"
import api from "../../api"
import FindLists from "./FindLists"
import Header from "../detail/Header"

export default class extends Component{
    
    constructor(){
        super()
        this.state={
            data:[]
        }
    }
    componentWillMount(){
        const songId = "877578"
        fetch( `${api.recommandSongList}&song_id=${songId}&num=35`,
        {
            method:"get",
            headers: {"Content-type":"application/x-www-form-urlencoder;charset=UTF-8"},
        }).then( res=> res.json() )
        .then( data => {
            const songList=data.result.list;
            const songIdArr = [];
            songList.forEach(( v ,i ,self )=>{
                songIdArr.push( v.song_id )
            })
            localStorage.setItem("songIdArr" ,JSON.stringify(songIdArr))
            this.setState({
                data : songList
            })
        })
    }
   
    render(){
        const {data} = {... this.state}
        return(
            <div>
            <Header title={`发现音乐`}/>
                <ul className="findlistsUl">
                { data.length ===0  ? <div>正在加载...</div>:
                    data.map(( item ,index)=>{
                        return (
                            <li key={index}>
                                <FindLists data={item}/>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}