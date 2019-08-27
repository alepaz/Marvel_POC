import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComics } from '../actions';
import ComicCard from '../components/ComicCard';
import {
  getComics,
  getIsLoading,
  getErrorMsg,
} from '../selectors/comicsSelectors';

class ComicPage extends Component {
  componentDidMount() {
    this.props.fetchComics();
  }

  render() {
    const { comics } = this.props;
    console.log(comics);
    return (
      <div className="row">
        {comics.isLoading ? (
          <p>Loading...</p>
        ) : comics.results ? (
          comics.results.map(comic => <ComicCard {...comic} key={comic.id} />)
        ) : (
          <p>There aren't any character to display</p>
        )}
      </div>
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
