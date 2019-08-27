import React from "react";
import PropTypes from "prop-types";

function ComicCard({ id, thumbnail, title, description, issueNumber, stories, characters }) {
  return (
    <div className="card col s6 m4" key={id}>
      <div className="card-image waves-effect waves-block waves-light">
        <img
          className="activator hero-image"
          src={thumbnail.path + "." + thumbnail.extension}
        />
      </div>
      <div className="card-content">
        <span className="activator grey-text text-darken-4">
          {title.length > 15
            ? title
                .substring(0, 15)
                .split("")
                .concat("...")
                .join("")
            : title}
          <i className="material-icons right">more_vert</i>
        </span>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {title}
          <i className="material-icons right">close</i>
        </span>
        <p>{description ? description : "No description available"}</p>

        <span className="card-title grey-text text-darken-4">Characters</span>
        {characters.items.map((x, i) => {
          return (
            <div className="chip" key={id + "comic" + i}>
              {x.name}
            </div>
          );
        })}
        <span className="card-title grey-text text-darken-4">Stories</span>
        {stories.items.map((x, i) => {
          return (
            <div className="chip" key={id + "story" + i}>
              {x.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

ComicCard.propTypes = {
  characters: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.object)
  }),
  description: PropTypes.string,
  id: PropTypes.number.isRequired,
  issueNumber: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  stories: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
  thumbnail: PropTypes.shape({
    path: PropTypes.string.isRequired,
    extension: PropTypes.string.isRequired
  }).isRequired
};

export default ComicCard;
