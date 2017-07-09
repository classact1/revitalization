const React = require('react');
const ReactDOM = require('react-dom');
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

let Revit = require('./revit');
let Admin = require('./admin');

class App extends React.Component{
   render(){
       return(
           <Router>
              <div>
                  <Route exact path={'/'} component={Revit}></Route>
                  <Route path={'/admin'} component={Admin}></Route>
              </div>
           </Router>
       )
   }
}

ReactDOM.render(<App/>, document.getElementById('container'));
