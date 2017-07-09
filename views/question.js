const React = require('react');

require('../public/assets/css/question.css');

class Question extends React.Component{
  constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        value: 'Wybierz ocenę'
      }
  }

    prepareOptions(data){

        var options = data;
        options = options.map(function(option,index){
            return(
                <option key={index} value={option.name}>{option.name}</option>
            );
        });

        return options;
    }

    handleClick(){
      this.props.onClick(this.props.content.answers);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    render(){
        return(
            <div className="row question">
                <div className="col-xs-8 ">
                  <h3>{this.props.content.name}</h3>
                </div>
                <div className="col-xs-1 help" >
                  <i className="fa fa-question-circle" aria-hidden="true" onClick={this.handleClick} ></i>
                </div>
                <div className="col-xs-3 options">
                    <select className="styled-select" value={this.state.value} onChange={this.handleChange}>
                      <option  value="Wybierz ocenę">Wybierz ocenę</option>
                      {this.prepareOptions(this.props.content.answers)}
                    </select>
                </div>
            </div>
        )
    }
}

module.exports = Question;
