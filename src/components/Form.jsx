import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <form>
        <h2>Adicionar nova carta</h2>

        <Input
          id="name-input"
          type="text"
          name="cardName"
          text="Nome"
          value={ cardName }
          onChange={ onInputChange }
        />

        <label htmlFor="description-input">
          Descrição
          <textarea
            data-testid="description-input"
            id="description-input"
            name="cardDescription"
            cols="20"
            rows="1"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <Input
          id="attr1-input"
          type="number"
          name="cardAttr1"
          text="Attr01"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />

        <Input
          id="attr2-input"
          type="number"
          name="cardAttr2"
          text="Attr02"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />

        <Input
          id="attr3-input"
          type="number"
          name="cardAttr3"
          text="Attr03"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />

        <Input
          id="image-input"
          type="text"
          name="cardImage"
          text="Imagem"
          value={ cardImage }
          onChange={ onInputChange }
        />

        <label htmlFor="rare-input">
          Raridade
          <select
            data-testid="rare-input"
            name="cardRare"
            id="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
            aa
          </select>
        </label>

        <label htmlFor="trunfo-input">
          Super Trybe Trunfo
          <input
            data-testid="trunfo-input"
            id="trunfo-input"
            type="checkbox"
            name="cardTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        {/* <Input
          id="trunfo-input"
          type="checkbox"
          name="cardTrunfo"
          text="Super Trybe Trunfo"
          value={ cardTrunfo }
          onChange={ onInputChange }
        /> */}

        <button
          data-testid="save-button"
          type="submit"
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
        >
          Salvar
        </button>
      </form>
    );
  }
}

// Form.defaultProps = {
//   cardName: PropTypes.string,
//   cardDescription: PropTypes.string,
//   cardAttr1: PropTypes.string,
//   cardAttr2: PropTypes.string,
//   cardAttr3: PropTypes.string,
//   cardImage: PropTypes.string,
//   cardRare: PropTypes.string,
//   cardTrunfo: PropTypes.bool,
//   hasTrunfo: PropTypes.bool,
//   isSaveButtonDisabled: PropTypes.bool,
//   onInputChange: PropTypes.func,
//   onSaveButtonClick: PropTypes.func,
// };

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
