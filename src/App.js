import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./component/Header/Header"
import Footer from "./component/Footer/Footer"
import Body from "./component/Body/Body"
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//          , edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
class App extends Component{
  render(){
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}
export default App;
