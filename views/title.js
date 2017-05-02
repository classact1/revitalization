const React = require('react');

require('../public/assets/css/title.css');

class Title extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs-12 title">
                    <h2>Ocena stanu formalno-prawnego</h2>
                </div>
            </div>
        )
    }
}

module.exports = Title;
