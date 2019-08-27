import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStories } from "../actions";
import StoryCard from "./StoryCard";

class StoryPage extends Component {
  componentDidMount() {
    this.props.fetchStories();
  }

  render() {
    const { stories } = this.props;
    console.log(stories);
    return (
      <div className="row">
       
        {stories && stories.data && stories.data.results ? (
          stories.data.results.map(story => <StoryCard {...story} key={story.id} />)
        ) : (
          <p>There aren't any Story to display</p>
        )}
      </div>
    );
  }
}

function mapStateToProps({ stories }) {
  return { stories };
}

export default connect(
  mapStateToProps,
  { fetchStories }
)(StoryPage);
