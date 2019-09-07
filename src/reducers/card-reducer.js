import { cards as defaultCards } from '../normalized-state';

const cardsReducer = (cards = defaultCards, action) => {
  console.log(cards, action);
  if (action.type === 'CARD_CREATE') {
    const { card, cardId } = action.payload;
    return {
      entities: { ...cards.entities, [cardId]: card },
      ids: [...cards.ids, cardId],
    };
  }
  if (action.type === 'ADD_CARD') {
    const { card, listId } = action.payload;
    return {
      entities: { ...cards.entities, [card.id]: card },
      ids: [...cards.ids, card.id],
    };
  }
  if (action.type === 'MOVE_CARD') {
    const { userId, cardId } = action.payload;
    cards.entities[cardId].assignedTo = userId;
    return {
      entities: { ...cards.entities },
      ids: [...cards.ids, cardId],
    };
  }
  return cards;
};

export default cardsReducer;
