import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Header extends Component {
  render() {
    const {
      location: { pathname }
    } = this.props;
    return (
      <nav>
        <div className="nav-wrapper" style={{ backgroundColor: "#ED1D24" }}>
          <div className="left brand-logo" style={{ margin: "0 10px" }}>
            Marvel Test
          </div>
          <ul className="right">
            <li className={`nav-link${pathname === "/" ? " active" : ""}`}>
              <Link to="/">Characters</Link>
            </li>
            <li
              className={`nav-link${pathname === "/comics" ? " active" : ""}`}
            >
              <Link to="/comics">Comics</Link>
            </li>
            <li
              className={`nav-link${pathname === "/stories" ? " active" : ""}`}
            >
              <Link to="/stories">Stories</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(props => <Header {...props} />);
