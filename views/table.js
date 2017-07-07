// const React = require('react');
//
// require('../public/assets/css/table.css');
// let Title = require('./title');
// let Question = require('./question');
//
// class Table extends React.Component{
//
//      //mapping data sent via parent component
//     prepareQuestions(data){
//
//         var questions = data;
//         questions = questions.map(function(question,index){
//             return(
//                 <Question content = {question} key = {index}/>
//             );
//         });
//
//         return questions;
//     }
//
//     render(){
//         return(
//             <div>
//                 <div className="row">
//                     <div className="col-xs-12 title">
//                         <h2>Ocena stanu formalno-prawnego</h2>
//                     </div>
//                 </div>
//                     {this.prepareQuestions(this.props.questions)}
//             </div>
//         )
//     }
// }
//
// module.exports = Table;
