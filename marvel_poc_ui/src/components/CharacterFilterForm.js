import React, { Component } from 'react';
import { connect } from 'react-redux';
import AsyncSelectable from './AsyncSelectable';
import { fetchHeroes } from '../actions';
import characterServices from '../services/characterServices';
import comicServices from '../services/comicServices';
import storyServices from '../services/storyServices';

const selectableParams = {
  name: {
    service: characterServices.getCharacters,
    mapping: ({ id, name }) => ({ value: id, label: name }),
  },
  comic: {
    service: comicServices.getComics,
    mapping: ({ id, title }) => ({ value: id, label: title }),
  },
  story: {
    service: storyServices.getStories,
    mapping: ({ id, title }) => ({ value: id, label: title }),
  },
};

class CharacterFilterForm extends Component {
  state = { inputValue: '', filter: [], filterBy: 'name' };

  onRadioChange = e => {
    this.setState({ filterBy: e.target.value, filter: [] });
  };

  onSelectChange = values => {
    const { fetchHeroes } = this.props;
    this.setState({ filter: values }, () => {
      const { filter, filterBy } = this.state;
      fetchHeroes({
        filterBy: filterBy,
        filter: filter.map(({ value }) => value).join(','),
      });
    });
  };

  render() {
    const { filter, filterBy } = this.state;
    const { mapping, service } = selectableParams[filterBy];
    return (
      <div className="row">
        <form action="#">
          <div>
            <AsyncSelectable
              service={service}
              mapping={mapping}
              value={filter}
              onChange={this.onSelectChange}
            />
          </div>
          <div>
            <label>
              <input
                name="filterGroup"
                type="radio"
                value="name"
                checked={filterBy === 'name'}
                onChange={this.onRadioChange}
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
                onChange={this.onRadioChange}
              />
              <span>Filter by comic name</span>
            </label>
          </div>
          {/* <div>
            <label>
              <input
                name="filterGroup"
                type="radio"
                value="story"
                checked={filterBy === 'story'}
                onChange={this.onRadioChange}
              />
              <span>Filter by story name</span>
            </label>
          </div> */}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { fetchHeroes }
)(CharacterFilterForm);
