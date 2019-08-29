import React from 'react';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/async';
import debounce from 'debounce-promise';

// mapping example
// ({ id, name }) => ({ value: id, label: name })

// service example
// characterService.getCharacters(params)

// value = { value: number , label: string }
function AsyncSelectable({ mapping, name, onChange, value, service, rest }) {
  const getOptions = async input => {
    if (!input || input.length < 3) {
      return [];
    }
    try {
      const params = { filterBy: 'name', filter: input };
      const request = await service(params);
      const resources = request.data.results;
      const options = resources.map(mapping);
      return options;
    } catch (err) {
      console.error(err);
      return [];
    }
  };
  const handleChange = async option => {
    if (option) {
      if (onChange) onChange(option);
    } else {
      if (onChange) onChange(null);
    }
  };

  return (
    <AsyncSelect
      id={name}
      isMulti
      isClearable
      className="browser-default"
      loadOptions={debounce(getOptions, 300)}
      name={name}
      onChange={debounce(handleChange, 300)}
      value={value}
      {...rest}
    />
  );
}

AsyncSelectable.propTypes = {
  mapping: PropTypes.func,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  service: PropTypes.func.isRequired, // it returns a Promise
  value: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

export default AsyncSelectable;
