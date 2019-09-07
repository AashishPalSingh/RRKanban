import { backlog as defaultBacklog } from '../normalized-state';

const backlogReducer = (backlog = defaultBacklog, action) => {
  console.log(backlog, action);
  if (action.type == 'ADD_CARD') {
    const { listId, card } = action.payload;
    delete backlog.cards[card.id];
    let cardIds = backlog.cardIds.filter(value => value !== card.id);
    let list = backlog.list.cards.filter(value => value.id !== card.id);
    return {
      cards: backlog.cards,
      cardIds: cardIds,
      list: { cards: list, id: backlog.list.id, title: backlog.list.title },
    };
  }
  if (action.type === 'REMOVE_CARD') {
    const { listId, card } = action.payload;
    const cardId = card.id;
    const newCardObj = { cardId: {} };
    const newCards = { ...backlog.cards, [cardId]: card };
    const cardIds = [...backlog.cardIds, card.id];
    const list = {
      cards: [...backlog.list.cards, card],
      id: backlog.list.id,
      title: backlog.list.title,
    };

    return {
      cards: newCards,
      cardIds: cardIds,
      list: list,
    };
  }
  return backlog;
};

export default backlogReducer;
