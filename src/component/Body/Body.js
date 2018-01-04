import React ,{ Component } from "react"
import $ from "jquery"
import List from "./List"
import api from "../../api"
class Body extends Component{
    constructor(){
        super()
        this.state={
            data:[]
        }
    }
    componentWillMount(){
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
                this.setState({
                data:songList
            })
        })
    }
    render(){
        return(
            <ul className="Bodyul">
            {
                this.state.data.map((item ,index )=>{
                    return(
                        <li key={index}>
                            <List data={item}/> 
                        </li>
                    )
                })
            }
            </ul>
            
        )
    }
}
export default Body