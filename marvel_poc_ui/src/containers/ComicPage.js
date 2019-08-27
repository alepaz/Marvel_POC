import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComics } from '../actions';
import ComicCard from '../components/ComicCard';
import {
  getComics,
  getIsLoading,
  getErrorMsg,
} from '../selectors/comicsSelectors';
import Paginator from '../components/Paginator';

class ComicPage extends Component {
  static getDerivedStateFromProps(nextProps) {
    const { comics } = nextProps;
    if (comics.pagination.total && comics.pagination.limit)
      return { pageCount: comics.pagination.total / comics.pagination.limit };

    return null;
  }

  state = { pageCount: 0 };

  componentDidMount() {
    const { fetchComics } = this.props;
    fetchComics();
  }

  handlePageClick = data => {
    const selected = data.selected;
    const { heroes, fetchComics } = this.props;
    const offset = Math.ceil(selected * heroes.pagination.limit);

    fetchComics(offset);
  };

  render() {
    const { comics } = this.props;
    const { pageCount } = this.state;
    console.log(comics);
    return (
      <React.Fragment>
        <div className="row">
          {comics.isLoading ? (
            <p>Loading...</p>
          ) : comics.results ? (
            comics.results.map(comic => <ComicCard {...comic} key={comic.id} />)
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
  comics: {
    errorMsg: getErrorMsg(state),
    isLoading: getIsLoading(state),
    results: getComics(state),
  },
});

export default connect(
  mapStateToProps,
  { fetchComics }
)(ComicPage);
