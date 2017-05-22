const React = require('react');
const ReactDOM = require('react-dom');
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//module requires
require('../public/assets/css/index.css');
let Table = require('./table');
let Title = require('./title');
let Question = require('./question');
let Admin = require('./admin');

var App = React.createClass({
   render: function(){
       return(
           <Router>
              <div>
                  <Route exact path={'/'} component={Revit}></Route>
                  <Route path={'/admin'} component={Admin}></Route>
              </div>
           </Router>
       )
   }
});

class Revit extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: [],
            section: ''
        };
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
      fetch('/api/section') // fetch from Express server
       .then(response => response.json())
       .then(result => this.setState({ data: result }));
    }

    //map questions
    prepareQuestions(data){
      console.log(data);
      var questions = data;
      questions = questions.map(function(question,index){
          return(
              <Question content = {question} key = {index}/>
          );
      });

      return questions;
    }

    onChange(value){
      this.setState({section: value});
    }

    render(){
        return (
          <div>
            <Title sections={this.state.data} onChange={this.onChange}/>
            {this.prepareQuestions(this.state.data)}
            <Link to="/admin">Admin</Link>
          </div>
        )
    }

};

ReactDOM.render(<App/>, document.getElementById('container'));
