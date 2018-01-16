import React ,{Component } from "react"
import api from "../../api"
import cross from "../../cross"
import FindLists from "../Body/FindLists"
import Header from  "../detail/Header"
export default class extends Component{
    constructor(){
        super()
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        this.handleSongList()
    }
    handleSongList (){
        const tinguid = this.props.match.params.tinguid
        console.log(tinguid)
        fetch(`${cross}${api.songList}&tinguid=${tinguid}`).then(res => {
            res.json().then(data => {
                const songList =data.songlist
                console.log(songList)
                this.setState({
                    data:songList
                })
            })
        })
    }
    render(){
        const songAuthor = this.props.match.params.author
        return (
            <div>
            <Header title={`${songAuthor}歌曲列表`}/>
            <div className="toTop">
            <ul className="singerSongUl">
                {
                    this.state.data.map((item ,index )=>{
                     return( 
                           <li key={index}>
                                <FindLists  data={item}/>

                           </li>
                     )
                    })
                }
                </ul>
            </div>
            </div>
        )
    }
}