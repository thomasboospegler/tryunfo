import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { type, name, value, id, handleChange, text } = this.props;
    return (
      <label htmlFor={ id }>
        { text }
        <input
          data-testid={ id }
          id={ id }
          type={ type }
          name={ name }
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
