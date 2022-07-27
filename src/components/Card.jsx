import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

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
      hasTrunfo,
      cardTrunfo } = this.props;

    return (
      <div className="card-second">
        <div className="card-third">
          <div className="title">
            <h3 data-testid="name-card">{ cardName }</h3>
          </div>
          <div className="image">
            <img data-testid="image-card" src={ cardImage } alt={ cardName } />
          </div>
          <p data-testid="description-card" id="description">{ cardDescription }</p>
          <div className="trunfo">
            { cardTrunfo && !hasTrunfo ? (
              <span data-testid="trunfo-card">
                Super Trunfo
              </span>) : null }
          </div>
          <p data-testid="rare-card" id="rare">{ cardRare }</p>
          <div className="attrs">
            <p data-testid="attr1-card" className="attr">
              Attr1...............................................
              <span>{cardAttr1}</span>
            </p>
            <p data-testid="attr2-card" className="attr">
              Attr2...............................................
              <span>{cardAttr2}</span>
            </p>
            <p data-testid="attr3-card" className="attr">
              Attr3...............................................
              <span>{cardAttr3}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
};

export default Card;
