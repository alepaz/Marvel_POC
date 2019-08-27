import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeroCard from '../components/HeroCard';
import { fetchHeroes } from '../actions';
import {
  getHeroes,
  getIsLoading,
  getErrorMsg,
} from '../selectors/heroesSelectors';

class CharacterPage extends Component {
  componentDidMount() {
    this.props.fetchHeroes();
  }

  render() {
    const { heroes } = this.props;
    return (
      <div className="row">
        {heroes.isLoading ? (
          <p>Loading...</p>
        ) : heroes.results ? (
          heroes.results.map(hero => <HeroCard {...hero} key={hero.id} />)
        ) : (
          <p>There aren't any character to display</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  heroes: {
    errorMsg: getErrorMsg(state),
    isLoading: getIsLoading(state),
    results: getHeroes(state),
  },
});

export default connect(
  mapStateToProps,
  { fetchHeroes }
)(CharacterPage);
