const React = require('react');
require('../public/assets/css/admin.css');

class Admin extends React.Component{
  constructor(){
      super();
      this.state={
          sections: []
      }
  }

  componentDidMount(){
    fetch('/api/section') // fetch from Express server
     .then(response => response.json())
     .then(result => this.setState({ sections: result }));
  }

  render(){

    function prepareOptions(data){
      var options = data.map((option, index) => <option key={index}>{option.name}</option>)

      return options;
    }

    //preparing object to be sent to an API
    function prepareQuestion(e){
      e.preventDefault();
      var form = e.target;
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

      var question = prepareQuestion(e);
      console.log(question);

      //console.log(section);
      //fetch('/api/question/'+section, {method: 'post'})
       //.then(response => response.json())
       //.then(result => this.setState({todos: result}));
      //Boolean(document.querySelector('input[name="counts"]:checked').value);
    }

    return(
        <form method="post" onSubmit={handleSubmit} id="addQuestion">

          <label>
            Dodaj pytanie:
            <input type="text" placeholder="Treść pytania" id="questionName" required/>
          </label>

          <fieldset>
            <label>
              Odpowiedź 1:
              <input type="text" name="answer"/>
            </label>
            <label>
              Punkty do oceny:
              <input type="text" name="points"/>
            </label>
            <label>
              Opis odpowiedzi:
              <textarea name="description"></textarea>
            </label>
          </fieldset>

          <label>
            Liczy się do oceny: <br/>
            <input type="radio" value="true" name="counts" defaultChecked/>Tak
            <input type="radio" value="false" name="counts"/>Nie
          </label>

          <label>
            Kategoria pytania:
            <select defaultValue = "Wybierz z listy">
              {prepareOptions(this.state.sections)}
            </select>
          </label>

          <input type="submit" value="Dodaj pytanie" id="submitQuestion"/>

        </form>
    )
  }
}

module.exports = Admin;
