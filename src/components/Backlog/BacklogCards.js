import React from 'react';
import BacklogCardContainer from '../../containers/Backlog/BacklogCardContainer';

const BacklogCards = ({ list = {} }) => {
  const listId = list.id;
  return (
    <div>
      {list.cards.map(cardId => (
        <BacklogCardContainer key={cardId} cardId={cardId} listId={list.id} />
      ))}
    </div>
  );
};

export default BacklogCards;
