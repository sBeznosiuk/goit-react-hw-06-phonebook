import PropTypes from 'prop-types';
import React from 'react';

const Filter = ({ filter }) => {
  return (
    <input type="text" placeholder="Find contact by name" onChange={filter} />
  );
};

Filter.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default Filter;
