const React = require('react');
require('../public/assets/css/answer.css');

class Answer extends React.Component{
  // constructor(){
  //     super();
  //     this.state={
  //         sections: []
  //     }
  // }

  render(){
    return(
      <fieldset>
        <label>Odpowiedź 1:</label>
        <input type="text"></input>
        <label>Punkty do oceny:</label>
        <input type="text"></input>
        <label>Opis odpowiedzi:</label>
        <textarea></textarea>
      </fieldset>
    )
  }
}

module.exports = Answer;
