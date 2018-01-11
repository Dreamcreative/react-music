import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './reset.css';
import Header from "./component/Header/Header"
import Footer from "./component/Footer/Footer"
import Body from "./component/Body/Body"
import Find from "./component/Body/Find"
import Search from "./component/Search/Search"
import MusicList from "./component/detail/Music"
import { BrowserRouter as Router , Route ,Switch , Redirect} from "react-router-dom"
import Nav from "./component/Router/Nav"
class App extends Component{
  render(){
    return (
      
      <Router>
        <div style={{ "height":"100%"}}>
        
        <Nav />
          <Route exact path="/" component={Body} />
          <Route  path="/find" component={Find} />
          <Route  path="/user" component={Search} />
          <Route  path="/musicList/:songId" component={MusicList} />
          <Route  path="/search" component={Search} />
        </div>
    
        </Router >
    )
  }
}
export default App;

