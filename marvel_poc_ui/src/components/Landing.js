import React, { Component } from "react";

class Landing extends Component {
  // componentDidMount() {
  //     this.props.fetchMarvelData();
  // }

  render() {
    return (
      <div className="row">
        <div className="card col s3">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src="http://materializecss.com/images/office.jpg" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              Card Title<i className="material-icons right">more_vert</i>
            </span>
            <p>
              <a href="#">This is a link</a>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Card Title<i className="material-icons right">close</i>
            </span>
            <p>
              Here is some more information about this product that is only
              revealed once clicked on.
            </p>
          </div>
        </div>

        <div className="card col s3">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src="http://materializecss.com/images/office.jpg" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              Card Title<i className="material-icons right">more_vert</i>
            </span>
            <p>
              <a href="#">This is a link</a>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Card Title<i className="material-icons right">close</i>
            </span>
            <p>
              Here is some more information about this product that is only
              revealed once clicked on.
            </p>
          </div>
        </div>

        <div className="card col s3">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src="http://materializecss.com/images/office.jpg" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              Card Title<i className="material-icons right">more_vert</i>
            </span>
            <p>
              <a href="#">This is a link</a>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Card Title<i className="material-icons right">close</i>
            </span>
            <p>
              Here is some more information about this product that is only
              revealed once clicked on.
            </p>
          </div>
        </div>

        <div className="card col s3">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src="http://materializecss.com/images/office.jpg" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              Card Title<i className="material-icons right">more_vert</i>
            </span>
            <p>
              <a href="#">This is a link</a>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Card Title<i className="material-icons right">close</i>
            </span>
            <p>
              Here is some more information about this product that is only
              revealed once clicked on.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
