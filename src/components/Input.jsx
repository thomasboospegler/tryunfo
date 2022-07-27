import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Input.css';

export default class Input extends Component {
  render() {
    const { type, name, value, id, onChange, text } = this.props;
    return (
      <label htmlFor={ id } className={ id }>
        { text }
        <input
          data-testid={ id }
          id={ id }
          type={ type }
          name={ name }
          value={ value }
          checked={ value }
          onChange={ onChange }
          // placeholder={ placeholder }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string,
    PropTypes.bool,
    PropTypes.number]).isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  // placeholder: PropTypes.string,
};
