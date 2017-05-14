const React = require('react');
require('../public/assets/css/admin.css');

let Answer = require('./answer');

class Admin extends React.Component{
  constructor(){
      super();
      this.state={
          sections: [],
          questionsNumber: 2
      }
  }

  //api call to get section names and put them in state
  componentDidMount(){
    fetch('/api/section') // fetch from Express server
     .then(response => response.json())
     .then(result => this.setState({ sections: result }));
  }

  render(){

    //getting amount of answers from state and rendering them
    function prepareAnswers(howMany){
      var answers = [];

      for(var i = 0 ; i < howMany ; i++)
        answers.push(<Answer num={i+1} key={i}/>)

      return answers;
    }

    //displaying sections as options in select box
    function prepareOptions(data){
      var options = data.map((option, index) => <option key={index}>{option.name}</option>)

      return options;
    }

    //button handler for adding more answers to a question
    function addAnswerFields(e){
      e.preventDefault();
      this.setState((prevState, props) => {
        return {questionsNumber: prevState.questionsNumber + 1};
      });
    }

    //preparing object to be sent to an API
    function prepareQuestion(event){
      var form = event.target;
      var section = form.querySelector('select').value; //section to which user wants to add a question

      var question = {
        name: '',
        answers: [],
        counts: ''
      }

      //grabbing values from form and populating question object
      question.name = form.querySelector('#questionName').value;
      question.counts = form.querySelector('input[name="counts"]').checked;
      question.answers = Array.from(form.querySelectorAll('fieldset')).map(function(formData){
        var answer = {};
        answer.name = formData.querySelector('input[name="answer"]').value;
        answer.points = Number(formData.querySelector('input[name="points"]').value);
        answer.description = formData.querySelector('textarea[name="description"]').value;

        return answer;
      });

      return question;
    }

    //sending form data to an API
    function handleSubmit(e){
      e.preventDefault();
      var question = prepareQuestion(e);
      var section = document.querySelector('select').value;

      // fetch('/api/question/'+section, {method: 'POST', body: JSON.stringify(question)})
      //  .then(response => response.json())

      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

       fetch('/api/question/'+section, {
           method: 'POST',
           headers: myHeaders,
           mode: 'same-origin',
           cache: 'default',
           body: JSON.stringify(question)
       })
        .then(response => response.json())
        .then(result => console.log(result))
    }

    return(
        <form method="post" onSubmit={handleSubmit} id="addQuestion">

          <label>
            Dodaj pytanie:
            <input type="text" placeholder="Treść pytania" id="questionName" required/>
          </label>

          {prepareAnswers(this.state.questionsNumber)}

          <button onClick={addAnswerFields.bind(this)}>Dodaj kolejną odpowiedź</button>

          <label>
            Liczy się do oceny: <br/>
            <input type="radio" value="true" name="counts" defaultChecked/>Tak
            <input type="radio" value="false" name="counts"/>Nie
          </label>

          <label>
            Kategoria pytania:
            <select>
              {prepareOptions(this.state.sections)}
            </select>
          </label>

          <input type="submit" value="Dodaj pytanie" id="submitQuestion"/>

        </form>
    )
  }
}

module.exports = Admin;
