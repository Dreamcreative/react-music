import React ,{ Component } from "react"
export default class extends Component{
    constructor(props){
        super( props)
        this.state={
            eCoordinate:this.props.percent
        }
    }
    changeCurrentTime( e ){
        e= e||window.e;
        const el = document.getElementById( e.target.id )
        // console.log(e.target.id)
        const eCoordinate = e.screenX;
        // this.setState({
        //     eCoordinate
        // })
        // console.log( e.clientX ,eCoordinate)
        console.log( e.refs)
    }
    render(){
        return(
            <div id="musicDuration" >
                <span>{this.props.currentTime}</span>
                <div className="musicDuration">
                    <div>
                        <p className="Pcurrent" 
                        style={{"width":this.state.eCoordinate}} ></p>
                        <p className="Pduration" id="Pduration"
                        ></p>
                    </div>
                </div>
                <span>{this.props.duration}</span>
            </div>
        )
    }
}