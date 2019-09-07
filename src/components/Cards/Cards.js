import React from 'react';
import CardContainer from '../../containers/Cards/CardContainer';

const Cards = ({ list = {} }) => {
  const listId = list.id;
  return (
    <div>
      {list.cards.map(cardId => (
        <CardContainer key={cardId} cardId={cardId} listId={list.id} />
      ))}
    </div>
  );
};

export default Cards;
