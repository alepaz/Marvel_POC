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
  state = { inputValue: '', filter: [], filterBy: 'name', orderBy: 'name' };

  onRadioChange = e => {
    this.setState({ filterBy: e.target.value, filter: [] });
  };

  onSwitchChange = () => {
    const { fetchHeroes, offset, onOrderByChange } = this.props;
    const { orderBy } = this.state;
    onOrderByChange(orderBy === 'name' ? '-name' : 'name');
    this.setState({ orderBy: orderBy === 'name' ? '-name' : 'name' }, () => {
      const { orderBy } = this.state;
      fetchHeroes({
        offset: offset,
        orderBy: orderBy
      });
    });
  };

  onSelectChange = values => {
    const { fetchHeroes, offset } = this.props;
    this.setState({ filter: values }, () => {
      const { filter, filterBy, orderBy } = this.state;
      if (filter) {
        fetchHeroes({
          filterBy: filterBy,
          filter: filter.map(({ value }) => value).join(','),
          orderBy: orderBy,
        });
      } else {
        fetchHeroes({
          offset: offset,
          orderBy: orderBy
        });
      }
    });
  };

  render() {
    const { filter, filterBy } = this.state;
    const { mapping, service } = selectableParams[filterBy];
    return (
      <div className="row">
        <form action="#">
          <div className="col s12">
            <AsyncSelectable
              service={service}
              mapping={mapping}
              value={filter}
              onChange={this.onSelectChange}
            />
          </div>
          <div className="col s12 m6">
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
          </div>
          <div className="col s12 m6">
            <div className="row">
              <div className="switch switch-filter">
                <label>
                  Ascending
                  <input type="checkbox" onChange={this.onSwitchChange} />
                  <span className="lever"></span>
                  Descending
                </label>
              </div>
            </div>
          </div>
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
