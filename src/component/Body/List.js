import React ,{ Component }from "react"
class List extends Component{
    render(){

        return(
            <div>
                <img src={this.props.data.pic_small} />
                <span className="ellipsis">{this.props.data.album_title}</span>
            </div>    
        )
    }
}
export default List