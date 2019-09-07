import { users as defaultUsers } from '../normalized-state';

const usersReducer = (users = defaultUsers, action) => {
  /* console.log(cards, action);
  if (action.type === 'CARD_CREATE') {
    const { card, cardId } = action.payload;
    return {
      entities: { ...cards.entities, [cardId]: card },
      ids: [...cards.ids, cardId],
    };
  }
   */

  if (action.type === 'USER_CREATE') {
    const { user, userId } = action.payload;
    return {
      entities: { ...users.entities, [userId]: user },
      ids: [...users.ids, userId],
    };
  }
  return users;
};

export default usersReducer;
