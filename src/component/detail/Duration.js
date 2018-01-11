import React ,{ Component } from "react"
export default class extends Component{
    // constructor(props){
    //     super( props)
    
    // }
    handleMouseMove(event){
        event.stopPropagation()
        let div = document.getElementById("musicDuration")
        const target = event.target
        if(target.id = "musicDuration"  ){
            const offsetLeft = div.offsetLeft
            const offsetWidth = target.offsetWidth
            const clientX = event.clientX
            let percent 
            if(clientX-offsetLeft <= offsetWidth){
                percent = parseFloat((clientX-offsetLeft) /offsetWidth).toFixed(2) *100 
            }
            if( this.props.getPercent ){
                this.props.getPercent( percent)
            }
        }
        
    }
    render(){
        const { currentTime , duration ,percent }={ ... this.props}
        const audio = document.getElementById("audio")
        
        return(
                <div className="musicDuration" >
                <span className="left">{currentTime}</span>
                <span className= "right">{duration}</span>
                    <div id="musicDuration"
                        onMouseDown={this.handleMouseMove.bind(this)}
                    >
                        <p className="Pcurrent" style={{"width":percent}} >
                            <span className="circle"></span></p>
                        <p className="Pduration"
                        ></p>
                    </div>
                </div>
            
        )
    }
}