import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchHeroes } from "../actions";
import "../css/landing.css";

class Landing extends Component {
  componentDidMount() {
    this.props.fetchHeroes();
  }

  renderHeroes() {
    try {
      return this.props.heroes.data.results.map(heroe => {
        return (
          <div className="card col s6 m4" key={heroe.id}>
            <div className="card-image waves-effect waves-block waves-light">
              <img
                className="activator hero-image"
                src={heroe.thumbnail.path + "." + heroe.thumbnail.extension}
              />
            </div>
            <div className="card-content">
              <span className="activator grey-text text-darken-4">
                {heroe.name.length > 15
                  ? heroe.name
                      .substring(0, 15)
                      .split("")
                      .concat("...")
                      .join("")
                  : heroe.name}
                <i className="material-icons right">more_vert</i>
              </span>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                {heroe.name}
                <i className="material-icons right">close</i>
              </span>
              <p>
                {heroe.description
                  ? heroe.description
                  : "No description available"}
              </p>

              <span className="card-title grey-text text-darken-4">Comics</span>
              {heroe.comics.items.map((x, i) => {
                return (
                  <div className="chip" key={heroe.id + "comic" + i}>
                    {x.name}
                  </div>
                );
              })}
              <span className="card-title grey-text text-darken-4">
                Stories
              </span>
              {heroe.stories.items.map((x, i) => {
                return (
                  <div className="chip" key={heroe.id + "story" + i}>
                    {x.name}
                  </div>
                );
              })}
            </div>
          </div>
        );
      });
    } catch (err) {
      return ;
    }
  }

  render() {
    return <div className="row">{this.renderHeroes()}</div>;
  }
}

function mapStateToProps({ heroes }) {
  return { heroes };
}

export default connect(
  mapStateToProps,
  { fetchHeroes }
)(Landing);
