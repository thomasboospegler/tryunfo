import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;

    return (
      <div>
        <h3 data-testid="name-card">{ cardName }</h3>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">{ cardDescription }</p>
        { cardTrunfo ? <span data-testid="trunfo-card">Super Trunfo</span> : '' }
        <p data-testid="rare-card">{ cardRare }</p>
        <p data-testid="attr1-card">{`Attr1..... ${cardAttr1}`}</p>
        <p data-testid="attr2-card">{`Attr2..... ${cardAttr2}`}</p>
        <p data-testid="attr3-card">{`Attr3..... ${cardAttr3}`}</p>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
