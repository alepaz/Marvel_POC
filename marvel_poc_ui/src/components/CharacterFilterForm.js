import React, { Component } from "react";

class CharacterFilterForm extends Component {
  state = { inputValue: "" };

  render() {
    return (
      <div className="row">
        <label className="control-label">
          Name
        </label>
        <input
          type="text"
          id="filterByName"
          className="form-control"
        />
        <form action="#">
          <p>
            <label>
              <input name="group1" type="radio" />
              <span>Filter by name</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group1" type="radio" />
              <span>Filter by comic name</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group1" type="radio" />
              <span>Filter by story name</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group1" type="radio" />
              <span>Filter by specific name</span>
            </label>
          </p>
        </form>
      </div>
    );
  }
}

export default CharacterFilterForm;
