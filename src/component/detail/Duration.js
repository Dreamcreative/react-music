import React ,{ Component } from "react"
export default class extends Component{
    constructor(props){
        super( props)
        this.state={
            eCoordinate:this.props.percent
        }
    }
    handleMouseMove(e){
        e = e|| window.e;
        // const target = e.target ;
        const eScreenX = e.screenX;
        const Pcurrent = document.getElementsByClassName("Pcurrent")[0];
        Pcurrent.screenX = eScreenX;
        // Pcurrent.style.
        console.log(Pcurrent.offsetLeft, Pcurrent.screenX)
    }
    render(){
        return(
            <div id="musicDuration" >
                <span>{this.props.currentTime}</span>
                <div className="musicDuration">
                    <div>
                        <p className="Pcurrent" 
                        onMouseDown={this.handleMouseMove.bind(this)}
                        style={{"width":this.state.eCoordinate}} ></p>
                        <p className="Pduration" id="Pduration"
                        onMouseDown={this.handleMouseMove.bind(this)}
                        ></p>
                    </div>
                </div>
                <span>{this.props.duration}</span>
            </div>
        )
    }
}