const  api = {
    getList:"v1/restserver/ting?method=baidu.ting.billboard.billList&method=baidu.ting.billboard.billList",
    search:"v1/restserver/ting?method=baidu.ting.search.catalogSug",
    play:"v1/restserver/ting?method=baidu.ting.song.play",
    lrc:"v1/restserver/ting?method=baidu.ting.song.lry",
    recommandSongList:"v1/restserver/ting?method=baidu.ting.song.getRecommandSongList",
    download:"v1/restserver/ting?method=baidu.ting.song.downWeb",
    singerInfo:"v1/restserver/ting?method=baidu.ting.artist.getInfo",
    songList:"v1/restserver/ting?method=baidu.ting.artist.getSongList"
};
export default  api     