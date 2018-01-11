import React ,{ Component} from "react"
import Header from "./Header"
import api from "../../api"
import cross from "../../cross"
import MusicList from "./MusicList"
import Duration from "./Duration"
import Lrc from "./Lrc"
class Music extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentTime: "00:00" ,
            percent:"0%",
            duration:null,
            src :null,
            title:null,
            oneMin:60,
            lrc:[]
        }
    }
    componentDidMount(){
        const songId = this.props.match.params.songId;
        fetch(`${cross}${api.play}&songid=${songId}`).then(res => {
            res.json().then(data => {
                this.setState({
                    duration :data.bitrate.file_duration ,
                    src : data.bitrate.file_link,
                    title : data.songinfo.title
                })
            })
        })
        fetch( `${cross}${api.lrc}&songid=${songId}`).then( res => res.json())
        .then( data => {
            // console.log( this.handleLrc(data.lrcContent) )
            this.setState({
                lrc : this.handleLrc(data.lrcContent)
            })
        })

    }
    handleLrc(text){
          var lines = text.split('\n'),
        //用于匹配时间的正则表达式，匹配的结果类似[xx:xx.xx]
        pattern = /\[\d{2}:\d{2}.\d{2}\]/g,
        //保存最终结果的数组
        result = [];
        //去掉不含时间的行
        while (!pattern.test(lines[0])) {
            lines = lines.slice(1);
        };
        //上面用'\n'生成生成数组时，结果中最后一个为空元素，这里将去掉
        lines[lines.length - 1].length === 0 && lines.pop();
        lines.forEach(function(v /*数组元素值*/ , i /*元素索引*/ , a /*数组本身*/ ) {
            //提取出时间[xx:xx.xx]
            var time = v.match(pattern),
                //提取歌词
                value = v.replace(pattern, '');
            //因为一行里面可能有多个时间，所以time有可能是[xx:xx.xx][xx:xx.xx][xx:xx.xx]的形式，需要进一步分隔
            time.forEach(function(v1, i1, a1) {
                //去掉时间里的中括号得到xx:xx.xx
                var t = v1.slice(1, -1).split(':');
                //将结果压入最终数组
                result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value]);
            });
        });
        //最后将结果数组中的元素按时间大小排序，以便保存之后正常显示歌词
        result.sort(function(a, b) {
            return a[0] - b[0];
        });
        return result;
    }
    getAudioTime(  currentTime){
        currentTime = Math.ceil(currentTime)
        const oneMin = 60 ;
        const duration = this.state.duration
        let Min = Math.floor(currentTime/oneMin)%oneMin ;
        let Sec = Math.ceil(currentTime%oneMin) ; 
        let percent = parseFloat(currentTime /duration*100).toFixed(2) +"%"
        currentTime = this.handleTime( Min ,Sec)
        this.setState({
            currentTime,
            percent
        })
    }
    handleTime( Min , Sec){
        Min = Min>=10?`${Min}` : `0${Min}`
        Sec = Sec>=10?`${Sec}`:`0${Sec}`
        return  `${Min}:${Sec}` 
    }
    getPercent( percents){
        const audio = document.getElementById("audio")
        let currentTime = (this.state.duration*percents/100).toFixed(2)
        let oneMin = this.state.oneMin
        let duration = this.state.duration
        let Min = Math.floor(currentTime/oneMin)%oneMin ;
        let Sec = Math.ceil(currentTime%oneMin) ; 
        let percent = parseFloat(currentTime /duration*100).toFixed(2) +"%"
        audio.currentTime = currentTime
        currentTime = this.handleTime( Min ,Sec)
        this.setState({
            currentTime,
            percent
        })      
    }
    render(){
        const song = this.state
        if( song.src  ){
            let [title,src,duration ,oneMin ] = [song.title ,song.src ,song.duration ,song.oneMin ] 
            const [Min ,Sec ,progress] = [parseInt(duration/oneMin),parseInt(duration%oneMin) , ] 
            duration =this.handleTime(Min , Sec)
            return (
                <div style={{"height":"100%"}}>
                    <Header title={title}/>
                    <ul className="toTop lrcUl">
                    {
                        this.state.lrc.map(( item ,index) =>{
                           return ( 
                            <li key={index}>
                                <Lrc  lrc={item}/>
                            </li>
                           )
                        })
                    }
                    </ul>
                    <div className="musicControl">
                        <Duration currentTime={ this.state.currentTime} 
                        duration={duration} percent={this.state.percent}
                        getPercent= {this.getPercent.bind(this)}
                        />
                        <MusicList lrc={this.state.lrc}  getAudioTime={this.getAudioTime.bind(this)} src={src}/>
                    </div>
                </div>
            )
        }else{
            return(
                <div>loading...</div>
            )
        
        }
        
    }
}
export default Music