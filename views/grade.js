const React = require('react');

require('../public/assets/css/grade.css');

class Grade extends React.Component{
  constructor(props){
      super(props);
      this.state = {}
  }

  render(){
      return(
        <div className="gradeContainer">
          <h1 className="grade">38</h1>
          <span>pkt.</span>
          <h2 className="gradeDescription">Ocena niedostateczna</h2>
          <h3 className="advice">Rewitalizacja niezalecana</h3>
        </div>
      )
  }
}

module.exports = Grade;
