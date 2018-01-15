import React,{Component } from "react"
import InputList from "./InputList"
import Header from "../Header/Header"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import SearchedList from "./searchedList"
export default class extends Component{
    constructor(){
        super()
        this.state={
            data: [],
            value:""
        }
    }
    handleSearch( data ,value ){
        this.setState({
            data 
        })
    }
    handleClickSearched(e){
        this.setState({
            value: e.target.innerHTML
        })
    }
    render(){
        const {data , value} = this.state
        let  searchArr = [] ;
        if( localStorage.getItem("searchArr")){
            searchArr = JSON.parse(localStorage.getItem("searchArr"));
        }
        return (
            <div>
                <Header handleSearch={this.handleSearch.bind(this)}/>
                <ul className="searchContent">
                { 
                data == undefined 
                ?
                <div>
                    {searchArr.map(( item, index)=>{
                        return (
                            <li key={index} onClick={this.handleClickSearched.bind(this)}>                               
                                <SearchedList searched={item}/>
                            </li>
                        )
                    })}
                </div>
                :
               <div>
                    {data.map((item , index) => {
                        return (
                            <li key={index}>
                            <Link to={`/musicList/${item.songid}`} className="toSearchList">
                                <InputList  data={item} />
                            </Link>
                            </li>
                        )
                    })
                    }
                </div>
                }
                </ul> 
                
            </div>
            )
    }
}