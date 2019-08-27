import React from "react";
import PropTypes from "prop-types";

function StoryCard({ id, thumbnail, title, description, characters }) {
  return (
    <div className="card col s6 m4" key={id}>
      <div className="card-image waves-effect waves-block waves-light">
        <img
          className="activator hero-image"
          src="http://www.pngmart.com/files/6/Comic-PNG-Transparent.png"
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
      </div>
    </div>
  );
}

StoryCard.propTypes = {
  characters: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.object)
  }),
  description: PropTypes.string,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export default StoryCard;
