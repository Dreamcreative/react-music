import React ,{Component} from "react"
import api from "../../api"
import FindLists from "./FindLists"
export default class extends Component{
    
    constructor(){
        super()
        this.state={
            data:[]
        }
    }
    componentWillMount(){
        fetch( `${api.recommandSongList}&song_id=877578&num=35`,
        {
            method:"get",
            headers: {"Content-type":"application/x-www-form-urlencoder;charset=UTF-8"},
        }).then( res=> res.json() )
        .then( data => {
            const songList=data.result.list;
            console.log(songList)
            this.setState({
                data : songList
            })
        })
    }
   
    render(){
        const {data} = this.state
        return(
            <div>
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