import React ,{ Component } from "react"
import { BrowserRouter as Router , Route ,Switch , Redirect} from "react-router-dom"
import Find from "./Find"
import Mymusic from "./Mymusic"
import Nav from "./Nav"
class Footer extends Component{
    render(){
        return (
            <div className="app-footer">
            <Router>
                <Nav>
                
                    <Route exact path="/" Component={Find} />
                    <Route exact path="/Mymusic" Component={Mymusic} />
                  
                
                </Nav>
            </Router>
            </div>
        )
    }
}
export default Footer