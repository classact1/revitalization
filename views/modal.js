const React = require('react');

require('../public/assets/css/modal.css');

class Modal extends React.Component{
  constructor(props){
      super(props);
  }

    render(){
        let modalStyle;
        if(this.props.isOpen)
          modalStyle = {visibility: 'visible', opacity: '1'};

        // function description(){
        //   let answers = this.props.answers;
        //   answers = answers.map
        // }
        // let descriptionBound = description.bind(this);

        let descriptionBound = () => {
          let answers = this.props.answers;
          let description = answers.map((answer, index) => {
            return (
              <div>
                <h1>{answer.name}</h1>
                <p>{answer.description}</p>
              </div>
            )
          })
          return description;
        };

        return(
          <div className="modal" style={modalStyle}>
            <i className="fa fa-window-close" aria-hidden="true" onClick={this.props.close}></i>
            {descriptionBound()}
          </div>
        )
    }
}

module.exports = Modal;
