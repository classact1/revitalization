const React = require('react');

require('../public/assets/css/title.css');

class Title extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  sectionsSelect(data){
    var sections = data.map(function(section, index){
      return <option key={index}>{section.name}</option>
    })

    return sections;
  }

  //sending change of select value to parent component
  handleChange(event){
    this.props.onChange(event.target.value);
  }

  render(){
      return(
          <div className="row">
              <div className="col-xs-12 title">
                  <select onChange={this.handleChange}>
                    {this.sectionsSelect(this.props.sections)}
                  </select>
              </div>
          </div>
      )
  }
}

module.exports = Title;
