import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchComics } from "../actions";
import ComicCard from "./ComicCard";

class ComicPage extends Component {
  componentDidMount() {
    this.props.fetchComics();
  }

  render() {
    const { comics } = this.props;
    console.log(comics);
    return (
      <div className="row">
       
        {comics && comics.data && comics.data.results ? (
          comics.data.results.map(comic => <ComicCard {...comic} key={comic.id} />)
        ) : (
          <p>There aren't any character to display</p>
        )}
      </div>
    );
  }
}

function mapStateToProps({ comics }) {
  return { comics };
}

export default connect(
  mapStateToProps,
  { fetchComics }
)(ComicPage);
