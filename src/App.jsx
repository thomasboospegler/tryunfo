import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

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
    cardsArr: [],
  };

  handleSaveButton = (event) => {
    event.preventDefault();
    const { cardTrunfo, cardsArr } = this.state;
    const cardObj = { ...this.state };
    cardsArr.push(cardObj);

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      // cardTrunfo: !cardTrunfo,
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
    const { name, value, type } = target;
    if (type === 'checkbox') {
      return this.setState((previous) => ({
        [name]: !previous[name],
      }));
    }
    this.setState({
      [name]: value,
    });
  };

  handleRemoveButton = (name) => {
    const { cardsArr } = this.state;
    const cardsParameterRemoved = cardsArr.filter((card) => card.cardName !== name);

    this.setState({
      cardsArr: cardsParameterRemoved,
    });
  }

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
      cardsArr } = this.state;

    return (
      <main className="main">
        <section className="main-content">
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
          <div className="card-container">
            <h1>Pré-visualização</h1>
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
        </section>

        <section className="cards-content">
          { cardsArr.map((card) => (
            <div key={ card.cardName }>
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
              <button
                type="button"
                data-testid="delete-button"
                onClick={ () => this.handleRemoveButton(card.cardName) }
              >
                Excluir
              </button>
            </div>)) }
        </section>
      </main>
    );
  }
}

export default App;
