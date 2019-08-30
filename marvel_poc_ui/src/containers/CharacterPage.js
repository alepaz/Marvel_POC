import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeroCard from '../components/HeroCard';
import { fetchHeroes } from '../actions';
import {
  getErrorMsg,
  getHeroes,
  getIsLoading,
  getPaginationData,
} from '../selectors/heroesSelectors';
import Paginator from '../components/Paginator';
import CharacterFilter from '../components/CharacterFilterForm';

class CharacterPage extends Component {
  static getDerivedStateFromProps(nextProps) {
    const { heroes } = nextProps;
    if (
      heroes &&
      heroes.pagination &&
      heroes.pagination.total &&
      heroes.pagination.limit
    )
      return { pageCount: heroes.pagination.total / heroes.pagination.limit };

    return null;
  }

  state = { pageCount: 0, orderBy: 'name', offset: 0 };

  componentDidMount() {
    const { fetchHeroes } = this.props;
    fetchHeroes();
  }

  handlePageClick = data => {
    const selected = data.selected;
    const { heroes, fetchHeroes } = this.props;
    const offset = Math.ceil(selected * heroes.pagination.limit);
    const { orderBy } = this.state;
    this.setState({ offset: offset });
    fetchHeroes({ offset, orderBy });
  };

  handleOrderByChange = value => {
    this.setState({ orderBy: value });
  }

  render() {
    const { heroes } = this.props;
    const { pageCount, offset } = this.state;
    return (
      <React.Fragment>
          <CharacterFilter offset={offset} onOrderByChange={this.handleOrderByChange} />
        <div className="row">
          {heroes.isLoading ? (
            <p>Loading...</p>
          ) : heroes.results ? (
            heroes.results.map(hero => <HeroCard {...hero} key={hero.id} />)
          ) : (
            <p>There aren't any character to display</p>
          )}
        </div>
        <Paginator pageCount={pageCount} onPageChange={this.handlePageClick} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  heroes: {
    errorMsg: getErrorMsg(state),
    isLoading: getIsLoading(state),
    pagination: getPaginationData(state),
    results: getHeroes(state),
  },
});

export default connect(
  mapStateToProps,
  { fetchHeroes }
)(CharacterPage);
