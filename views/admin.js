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

    return(
      <div>
        <form method="post">
          <label>Dodaj pytanie:</label>
          <br/>
          <input type="text" placeholder="Treść pytania" required></input>
          <br/>
          <label>Dodaj odpowiedzi:</label>
          <br/>
          <input type="text" placeholder="Każda odpowiedź zakończona przecinkiem"></input>
          <br/>
          <label>Kategoria pytania:</label>
          <br/>
          <select defaultValue = "Wybierz z listy">
            {prepareOptions(this.state.sections)}
          </select>
        </form>
      </div>
    )
  }
}

module.exports = Admin;
