import React ,{ Component } from "react"
import $ from "jquery"
import List from "./List"
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
        $.ajax({
        url:`http://tingapi.ting.baidu.com/v1/restserver/ting?from=qianqian&version=2.1.0&method=baidu.ting.song.play&songid=877578` ,
        dataType:"jsonp",
        success: (res)=>{
            let songList = res.bitrate;
            console.log(songList)
            this.setState({
                data:songList
            })

            }
        })
    }
    render(){
        return(
            // this.state.data.map(( item ,index)=>{
                //  return (
                    <List data={this.state.data}/> 
                // )
            // })
             
            
        )
    }
}
export default Body