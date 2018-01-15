import React ,{ Component } from "react"
import $ from "jquery"
import List from "./List"
import Header from "../Header/Header"
import api from "../../api"
import { Link } from "react-router-dom"
class Body extends Component{
    constructor(){
        super()
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        this.handleClick()
    }
    handleClick(){
        // $.ajax({
        // url:`${api}method=baidu.ting.billboard.billList&method=baidu.ting.billboard.billList&type=1&size=10&offset=0` ,
        // dataType:"jsonp",
        // success: (res)=>{
        //     let songList = res.song_list;
        //         this.setState({
        //         data:songList
        //     })
        //     } 
        // })
        /** h获取列表 */
        fetch(`${api.getList}&type=1&size=10&offset=0`,{
             method:"get",
           headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" }
        }).then(res=> res.json())
        .then(res=>{
                let songList = res.song_list;
                console.log(songList)
                this.setState({
                data:songList
            })
        })

        //歌手歌曲列表
        fetch(`${api.songList}&tinguid=1579&limits=6&use_cluster=1&order=2`)
        .then( res => res.json())
        .then(res=>{
            console.log(res)
        })
    }
    render(){
        const {data} = this.state
        return(
            <div className="Body ">
            <Header />
            <ul className="Bodyul clearfix">
            { data.length ===0? <div>正在加载...</div>:
                data.map((item ,index )=>{
                    return(
                        <li key={index}>
                        <Link to={`/find`}>
                            <List data={item}/> 
                        </Link>
                        </li>
                    )
                })
            }
            </ul>
            </div>
            
        )
    }
}
export default Body