import React ,{Component} from "react" 

export default class extends Component{
    render(){
        return(
            <div className="clearfix searchInputList"  >
                <span className="searchInputListLeft ellipsis">
                    {this.props.data.songname}
                </span>
                <span className="searchInputListRight ellipsis">
                    {this.props.data.artistname}
                </span>
            </div>
        )
    }
}