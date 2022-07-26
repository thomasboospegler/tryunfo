import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import './Form.css';

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
      <form className="form">
        <h2>Adicionar nova carta</h2>

        <Input
          id="name-input"
          type="text"
          name="cardName"
          text="Nome"
          value={ cardName }
          onChange={ onInputChange }
        />

        <label htmlFor="description-input" className="description-input">
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

        <span>Pontos restantes = 000</span>

        <Input
          id="image-input"
          type="text"
          name="cardImage"
          text="Imagem"
          value={ cardImage }
          onChange={ onInputChange }
        />

        <label htmlFor="rare-input" className="rare-input">
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

        { hasTrunfo ? (
          <span
            data-testid="trunfo-input"
          >
            Você já tem um Super Trunfo em seu baralho

          </span>)
          : (
            <Input
              id="trunfo-input"
              type="checkbox"
              name="cardTrunfo"
              text="Super Trybe Trunfo"
              value={ cardTrunfo }
              onChange={ onInputChange }
            />
          )}

        <button
          data-testid="save-button"
          className="button-submit"
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

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
