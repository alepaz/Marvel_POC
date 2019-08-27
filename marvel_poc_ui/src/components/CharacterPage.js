import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchHeroes } from "../actions";
import "../css/landing.css";
import HeroCard from "./HeroCard";

class CharacterPage extends Component {
  componentDidMount() {
    this.props.fetchHeroes();
  }

  render() {
    const { heroes } = this.props;
    return (
      <div className="row">
        {heroes && heroes.data && heroes.data.results ? (
          heroes.data.results.map(hero => <HeroCard {...hero} />)
        ) : (
          <p>There aren't any character to display</p>
        )}
      </div>
    );
  }
}

function mapStateToProps({ heroes }) {
  return { heroes };
}

export default connect(
  mapStateToProps,
  { fetchHeroes }
)(CharacterPage);