import { lists as defaultLists } from '../normalized-state';
import set from 'lodash/fp/set';

const listsReducer = (lists = defaultLists, action) => {
  console.log(lists, action);
  if (action.type === 'REMOVE_CARD') {
    const { listId, card } = action.payload;
    const cardId = card.id;
    const newCardObj = { cardId: {} };
    /* const newCards = { ...backlog.cards, [cardId]: card };
    const cardIds = [...backlog.cardIds, card.id];
    const list = {
      cards: [...backlog.list.cards, card],
      id: backlog.list.id,
      title: backlog.list.title,
    }; */
    let cards = lists.entities[listId].cards.filter(
      cardId => cardId !== card.id,
    );
    lists = set(['entities', listId, 'cards'], cards, lists);
    console.log(lists);
    return lists;

    /* return {
      cards: newCards,
      cardIds: cardIds,
      list: list,
    }; */
  }
  if (action.type === 'CARD_CREATE') {
    const { cardId, listId } = action.payload;
    const cards = lists.entities[listId].cards.concat(cardId);
    return set(['entities', listId, 'cards'], cards, lists);
  }
  if (action.type === 'ADD_CARD') {
    const { card, listId } = action.payload;
    const cards = lists.entities[listId].cards.concat(card.id);
    return set(['entities', listId, 'cards'], cards, lists);
  }
  if (action.type === 'MOVE_CARD_LIST') {
    const { card, newListId, oldListId } = action.payload;
    console.log('new lsit id', newListId);
    debugger;
    let cards = lists.entities[newListId].cards.concat(card.id);
    let newList = set(['entities', newListId, 'cards'], cards, lists);
    cards = lists.entities[oldListId].cards.filter(
      cardId => cardId !== card.id,
    );
    newList = set(['entities', oldListId, 'cards'], cards, newList);
    console.log(newList);
    return newList;
    /* lists.entities[newListId].cards = [
      ...lists.entities[newListId].cards,
      card.id,
    ];
    return {
      entities: { ...lists.entities },
      ids: [...lists.ids],
    }; */
  }
  if (action.type === 'LIST_CREATE') {
    const { list, listId } = action.payload;
    return {
      entities: { ...lists.entities, [listId]: list },
      ids: [...lists.ids, listId],
    };
  }
  return lists;
};

export default listsReducer;
