const React = require('react');
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//module requires
require('../public/assets/css/index.css');
let Table = require('./table');
let Title = require('./title');
let Question = require('./question');
let Admin = require('./admin');
let Modal = require('./modal');

class Revit extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: [],
            section: 'Ocena stanu formalno-prawnego',
            isModalOpen: false,
            modalData: [],
            savedAnswers: {}
        };
        this.onChange = this.onChange.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.showModal = this.showModal.bind(this);
        this.saveAnswer = this.saveAnswer.bind(this);
    }

    //fetching data from database
    componentDidMount(){
      fetch('/api/section') // fetch from Express server
        .then(response => response.json())
        .then(result => this.setState({data: result}));

      fetch('/api/questions') // fetch from Express server
        .then(response => response.json())
        .then(result => {
          let questionsObject = {};
          result.forEach(question => questionsObject[question] = '');
          this.setState({savedAnswers: questionsObject});
        });
    }

    //map questions based on chosen group
    prepareQuestions(){
      for(var i = 0 ; i < this.state.data.length ; i++)
        if(this.state.data[i].name == this.state.section){
          var questions = this.state.data[i].questions;
          questions = questions.map((question,index) => {
              return(
                  <Question content = {question} key = {index} onClick={this.showModal} onChange={this.saveAnswer}/>
              );
          });
          return questions;
        }
    }

    //passed to Title component to change questions based on chosen group
    onChange(value){
      this.setState({section: value});
    }

    saveAnswer(question, answer){
      //creating deep copy of savedAnswers object to modify it
      const answers = JSON.parse(JSON.stringify(this.state.savedAnswers));
      answers[question] = answer;
      this.setState({savedAnswers: answers});
    }

    //passed to Modal component to close it when X is clicked
    closeModal(){
      this.setState({isModalOpen: false});
    }

    //passed to Question component to show modal and set its content
    showModal(answers){
      this.setState({isModalOpen: true, modalData: answers});
    }

    render(){
        return (
          <div className="container-fluid">
            <Title sections={this.state.data} onChange={this.onChange}/>
            {this.prepareQuestions()}
            <Link to="/admin"></Link>
            <Modal isOpen={this.state.isModalOpen} close={this.closeModal} answers={this.state.modalData}/>
            <button type="button" className="btn btn-default">Zakończ ocenianie</button>
            <Link to="/admin">Admin</Link>
          </div>
        )
    }

};

module.exports = Revit;
