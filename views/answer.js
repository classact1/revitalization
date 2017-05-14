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
        <label>
          Odpowiedź {this.props.num}:
          <input type="text" name="answer"/>
        </label>
        <label>
          Punkty do oceny:
          <input type="number" name="points"/>
        </label>
        <label>
            Opis odpowiedzi:
            <div className="description"><textarea name="description"></textarea></div>
        </label>
      </fieldset>
    )
  }
}

module.exports = Answer;
