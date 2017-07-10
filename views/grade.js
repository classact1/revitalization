const React = require('react');
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

require('../public/assets/css/grade.css');

class Grade extends React.Component{
  constructor(props){
      super(props);
      this.state = {}
  }

  calculatePoints(){
    let total = 0;
    for(let question in window.points)
      total += window.points[question].points;
    return total;
  }

  componentDidMount(){
    this.setState({grade: this.calculatePoints()})
  }

  gradeDescription(){
    const total = this.state.grade;

    if(total < 150)
      return "Ocena niedostateczna";
    else if(total < 225)
      return "Ocena dostateczna";
    else if(total < 300)
      return "Ocena dobra";
    else
      return "Ocena bardzo dobra";
  }

  advice(){
    const total = this.state.grade;

    if(total < 150)
      return "Rewitalizacja niezalecana";
    else if(total < 225)
      return "Rewitalizacja z problemami";
    else if(total < 300)
      return "Rewitalizacja zalecana";
    else
      return "Rewitalizacja z dużym prawdopodobieństwem sukcesu";
  }

  render(){
      return(
        <div className="gradeContainer">
          <h1 className="grade">{this.state.grade}</h1>
          <span>pkt.</span>
          <h2 className="gradeDescription">{this.gradeDescription()}</h2>
          <h3 className="advice">{this.advice()}</h3>
        </div>
      )
  }
}

module.exports = Grade;
