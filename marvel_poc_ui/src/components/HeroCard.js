import React from "react";
import PropTypes from "prop-types";

function HeroCard({ id, comics, thumbnail, name, description, stories }) {
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
          {name.length > 15
            ? name
                .substring(0, 15)
                .split("")
                .concat("...")
                .join("")
            : name}
          <i className="material-icons right">more_vert</i>
        </span>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {name}
          <i className="material-icons right">close</i>
        </span>
        <p>{description ? description : "No description available"}</p>

        <span className="card-title grey-text text-darken-4">Comics</span>
        {comics.items.map((x, i) => {
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

HeroCard.propTypes = {
  comics: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
  description: PropTypes.string,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  stories: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
  thumbnail: PropTypes.shape({
    path: PropTypes.string.isRequired,
    extension: PropTypes.string.isRequired
  }).isRequired
};

export default HeroCard;
