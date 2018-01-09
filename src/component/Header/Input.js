import React ,{ Component} from "react"
import api from "../../api"
import {Link} from "react-router-dom"
import InputList from "../Search/InputList"
class Input extends Component{
    constructor(){
        super()
        this.state={
            data:[]
        }
    }
    handleInputBlur( e ){
        const [value , searchArr]= [ e.target.value , [] ];
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
            if(this.props.getInputValue){
                this.props.getInputValue( this.state.data  )
            }
        })
    }
    handleInputOnblur( e ){
        let  [value ,searchArr ]= [e.target.value ,[]] ;   
        value = value.replace(/\s/g,'')
        if( value ){
            if( localStorage.searchArr ){
                searchArr = JSON.parse(localStorage.getItem("searchArr"));
            }
            if(searchArr.length >="10" ){searchArr.shift()}
            if(searchArr.indexOf( value) !=-1){
                return ;
            }else{
                searchArr.push(value)
            }
            localStorage.setItem("searchArr",JSON.stringify( searchArr ))
        }
        
    }
    render(){
        const data= this.state.data;
        return(
            <div >
                <input type="text" placeholder="请输入关键字" onChange={this.handleInputBlur.bind(this)} 
                    onBlur={ this.handleInputOnblur.bind(this)}
                 />
            </div>
        )
    }
}
export default Input