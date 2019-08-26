import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchHeroes } from '../actions';

class Landing extends Component {
  componentDidMount() {
      this.props.fetchHeroes();
  }

  renderHeroes() {
    console.log(this.props.heroes);
    try{
      return this.props.heroes.data.results.map( heroe => {
        return (
          <div className="card col s3">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={heroe.thumbnail.path+"."+heroe.thumbnail.extension} />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                {heroe.name}<i className="material-icons right">more_vert</i>
              </span>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
              {heroe.name}<i className="material-icons right">close</i>
              </span>
              <p>
                { heroe.description ? heroe.description : "No description available" }
              </p>
            </div>
          </div>
        );
      });
    }catch(err){
      return '';
    }

  }

  render() {
    return (
      <div className="row">
        {this.renderHeroes()}
      </div>
    );
  }
}

function mapStateToProps({ heroes }) {
  return { heroes };
}

export default connect(mapStateToProps, { fetchHeroes })(Landing);
