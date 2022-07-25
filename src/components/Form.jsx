import React, { Component } from 'react';
import Input from './Input';

class Form extends Component {
  state = {
    name: '',
    description: '',
    attr1: '',
    attr2: '',
    attr3: '',
    image: '',
    rare: '',
    trunfo: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, description, attr1, attr2, attr3, image, rare, trunfo } = this.state;

    return (
      <form>
        <h2>Adicionar nova carta</h2>

        <Input
          id="name-input"
          type="text"
          name="name"
          text="Nome"
          value={ name }
          handleChange={ this.handleChange }
        />

        <label htmlFor="description-input">
          Descrição
          <textarea
            data-testid="description-input"
            id="description-input"
            name="description"
            cols="20"
            rows="1"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>

        <Input
          id="attr1-input"
          type="number"
          name="attr1"
          text="Attr01"
          value={ attr1 }
          handleChange={ this.handleChange }
        />

        <Input
          id="attr2-input"
          type="number"
          name="attr2"
          text="Attr02"
          value={ attr2 }
          handleChange={ this.handleChange }
        />

        <Input
          id="attr3-input"
          type="number"
          name="attr3"
          text="Attr03"
          value={ attr3 }
          handleChange={ this.handleChange }
        />

        <Input
          id="image-input"
          type="text"
          name="image"
          text="Imagem"
          value={ image }
          handleChange={ this.handleChange }
        />

        <label htmlFor="rare-input">
          Raridade
          <select
            data-testid="rare-input"
            name="rare"
            id="rare-input"
            value={ rare }
            onChange={ this.handleChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
            aa
          </select>
        </label>

        <Input
          id="trunfo-input"
          type="checkbox"
          name="trunfo"
          text="Super Trybe Trunfo"
          value={ trunfo }
          handleChange={ this.handleChange }
        />

        <button
          data-testid="save-button"
          type="submit"
          disabled
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
