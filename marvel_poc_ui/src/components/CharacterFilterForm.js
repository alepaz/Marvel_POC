import React, { Component } from 'react';
import AsyncSelectable from './AsyncSelectable';
import characterServices from '../services/characterServices';

class CharacterFilterForm extends Component {
  state = { inputValue: '', filter: [], filterBy: 'name' };

  handleRadioChange = e => {
    this.setState({ filterBy: e.target.value });
  };

  render() {
    const { filter, filterBy } = this.state;
    return (
      <div className="row">
        <form action="#">
          <div>
            <AsyncSelectable
              service={characterServices.getCharacters}
              mapping={({ id, name }) => ({ value: id, label: name })}
              value={filter}
              onChange={value => {
                console.log('Changed', value);
                this.setState({ filter: value });
              }}
            />
          </div>
          <div>
            <label>
              <input
                name="filterGroup"
                type="radio"
                value="name"
                checked={filterBy === 'name'}
                onChange={this.handleRadioChange}
              />
              <span>Filter by name</span>
            </label>
          </div>

          <div>
            <label>
              <input
                name="filterGroup"
                type="radio"
                value="comic"
                checked={filterBy === 'comic'}
                onChange={this.handleRadioChange}
              />
              <span>Filter by comic name</span>
            </label>
          </div>
          <div>
            <label>
              <input
                name="filterGroup"
                type="radio"
                value="story"
                checked={filterBy === 'story'}
                onChange={this.handleRadioChange}
              />
              <span>Filter by story name</span>
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default CharacterFilterForm;
