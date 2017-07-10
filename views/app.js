const React = require('react');
const ReactDOM = require('react-dom');
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

let Revit = require('./revit');
let Admin = require('./admin');
let Grade = require('./grade');

//super stupid no other way without Redux
window.points = {};

class App extends React.Component{
   render(){
       return(
           <Router>
              <div>
                  <Route exact path={'/'} component={Revit}></Route>
                  <Route path={'/admin'} component={Admin}></Route>
                  <Route path={'/grade'} component={Grade}></Route>
              </div>
           </Router>
       )
   }
}

ReactDOM.render(<App/>, document.getElementById('container'));
