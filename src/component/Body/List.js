import React ,{ Component }from "react"
class List extends Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        console.log(this.props)
        return(
                <div >
                    <video src={this.props.data.file_link} controls="controls" autoPlay="autoplay">
                        您的浏览器不支持播放该视频！
                    </video>
                </div>   
        )
    }
}
export default List