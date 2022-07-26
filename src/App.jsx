import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
  };

  handleSaveButton = (event) => {
    event.preventDefault();
    const { cardTrunfo } = this.state;
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      hasTrunfo: cardTrunfo,
    });
  };

  verifyIfButtonIsActive = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage } = this.state;
    const maxAtributeValue = 90;
    const maxTotalAtributes = 210;

    const conditionOne = cardName.length > 0
    && cardDescription.length > 0
    && cardImage.length > 0;

    const conditionTo = (Number(cardAttr1) >= 0 && Number(cardAttr1) <= maxAtributeValue)
    && (Number(cardAttr2) >= 0 && Number(cardAttr2) <= maxAtributeValue)
    && (Number(cardAttr3) >= 0 && Number(cardAttr3) <= maxAtributeValue);

    const conditionThree = (Number(cardAttr1)
    + Number(cardAttr2)
    + Number(cardAttr3)) <= maxTotalAtributes;

    if (conditionOne && conditionTo && conditionThree) {
      return false;
    }

    return true;
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'cardTrunfo') {
      return this.setState((previous) => ({
        [name]: !previous[name],
      }));
    }
    this.setState({
      [name]: value,
    });
  };

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
      hasTrunfo } = this.state;

    return (
      <div>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ this.verifyIfButtonIsActive() }// Passa o resultado como prop (no caso true ou false)
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.handleSaveButton }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
