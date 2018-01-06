import React,{Component } from "react"
import Header from "../Header/Header"
import InputList from "./InputList"
import { Link } from "react-router-dom"
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
            data ,
            value 
        })
        // console.log( data ,value )
    }
    render(){
        const {data , value} = this.state
        return (
            <div>
                <Header handleSearch={this.handleSearch.bind(this)}/>
                { 
                    data ===null && value === undefined ?
                
                <div>loading...</div>
                :
                <ul className="searchContent">
                    {data.map((item , index) => {
                        return (
                            <li key={index}>
                            <Link to="/musicList/:url" className="toSearchList">
                                <InputList  data={item}/>
                            </Link>
                            </li>
                        )
                    })
                    }
                </ul> 
                }
                
            </div>
            )
    }
}