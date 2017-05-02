const React = require('react');

require('../public/assets/css/question.css');

class Question extends React.Component{

    prepareOptions(data){

        var options = data;
        options = options.map(function(option,index){
            return(
                <option key={index}>{option}</option>
            );
        });

        return options;
    }

    render(){
        return(
            <div className="row question">
                <div className="col-xs-8 ">
                    <h3>{this.props.content.question}</h3>
                </div>
                <div className="col-xs-4 options">
                    <select name="" id="" className="styled-select">
                        {this.prepareOptions(this.props.content.answers)}
                    </select>
                </div>
            </div>
        )
    }
}

module.exports = Question;
