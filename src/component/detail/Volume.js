import React ,{ Component } from "react"

export default class extends  Component{
    constructor( props){
        super(props)
        this.state={
            inputRangeValue: 50
        }
    }
    componentDidMount(){
        const audio = document.getElementById("audio")
        audio.volume = this.state.inputRangeValue /100
    }
    handleChangeVolume( e ){
         e = e || window.e
         const target= e.target,
            audio = document.getElementById("audio"),
            value = target.value,
            inputRange= document.getElementById("inputRange")
            ;
        audio.volume = (value)/100
        this.setState({
            inputRangeValue:value
        })
       
    }
    render(){
        return(
            <div  className="volumeComponent" id="volumeComponent">
                <div className="volume">
                    <input id="inputRange"
                        onChange={this.handleChangeVolume.bind(this)}
                     type="range" min="0" max="100" value={this.state.inputRangeValue}  />
                </div>
            </div>
        )
    }
}