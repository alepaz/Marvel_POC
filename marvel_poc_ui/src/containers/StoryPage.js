import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStories } from '../actions';
import StoryCard from '../components/StoryCard';
import {
  getStories,
  getIsLoading,
  getErrorMsg,
} from '../selectors/storiesSelectors';

class StoryPage extends Component {
  componentDidMount() {
    this.props.fetchStories();
  }

  render() {
    const { stories } = this.props;
    return (
      <div className="row">
        {stories.isLoading ? (
          <p>Loading...</p>
        ) : stories.results ? (
          stories.results.map(story => <StoryCard {...story} key={story.id} />)
        ) : (
          <p>There aren't any Story to display</p>
        )}
      </div>
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
