import React ,{ Component} from "react"
import $ from "jquery"
import api from "../../api"
class Input extends Component{
    constructor(){
        super()
        this.state={
            data:[]
        }
    }
    componentWillMount(){

    }
    handleInputBlur( e ){
        const value= e.target.value;
        console.log(value)
        // $.ajax({
        //     url:`${api}method=baidu.ting.search.catalogSug&query=${value}`,
        //     dataType:'jsonp',
        //     success:( res )=>{
        //         const songs=res.song;
        //         this.setState({
        //             data:songs
        //         })
        //     }
        // })
        /** 搜索 */
        fetch( `${api.search}&query=${value}` ,
        { method:"get",
           headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
        }).then(res=> res.json())
        .then(data=>{
            data = data.song
            this.setState({
                data
            })
            console.log(this.state.data)
    })

    }
    render(){
        const data= this.state.data;
        return(
            <div className="inputDiv">
                <input type="text" placeholder="请输入关键字" onChange={this.handleInputBlur.bind(this)} />
            </div>
        )
    }
}
export default Input