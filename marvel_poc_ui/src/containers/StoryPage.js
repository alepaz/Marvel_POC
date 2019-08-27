import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStories } from '../actions';
import StoryCard from '../components/StoryCard';
import {
  getStories,
  getIsLoading,
  getErrorMsg,
} from '../selectors/storiesSelectors';
import Paginator from '../components/Paginator';

class StoryPage extends Component {
  static getDerivedStateFromProps(nextProps) {
    const { comics } = nextProps;
    if (comics.pagination.total && comics.pagination.limit)
      return { pageCount: comics.pagination.total / comics.pagination.limit };

    return null;
  }

  state = { pageCount: 0 };

  componentDidMount() {
    const { fetchStories } = this.props;
    fetchStories();
  }

  handlePageClick = data => {
    const selected = data.selected;
    const { heroes, fetchStories } = this.props;
    const offset = Math.ceil(selected * heroes.pagination.limit);

    fetchStories(offset);
  };

  render() {
    const { stories } = this.props;
    const { pageCount } = this.state;
    return (
      <React.Fragment>
        <div className="row">
          {stories.isLoading ? (
            <p>Loading...</p>
          ) : stories.results ? (
            stories.results.map(story => (
              <StoryCard {...story} key={story.id} />
            ))
          ) : (
            <p>There aren't any Story to display</p>
          )}
        </div>
        <Paginator pageCount={pageCount} onPageChange={this.handlePageClick} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  stories: {
    errorMsg: getErrorMsg(state),
    isLoading: getIsLoading(state),
    results: getStories(state),
  },
});

export default connect(
  mapStateToProps,
  { fetchStories }
)(StoryPage);
