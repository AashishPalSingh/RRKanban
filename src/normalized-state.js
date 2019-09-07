import { schema, normalize } from 'normalizr';
import defaultState from './default-state.json';

const user = new schema.Entity('users');
const card = new schema.Entity('cards', { assignedTo: user });
const list = new schema.Entity('lists', {
  cards: [card],
});

const normalizedLists = normalize(defaultState.lists, [list]);
const normalizedUsers = normalize(defaultState.users, [user]);
const normalizedBacklogList = normalize(defaultState.backloglist.cards, [card]);
export const lists = {
  entities: normalizedLists.entities.lists,
  ids: normalizedLists.result,
};
export const backlog = {
  cards: normalizedBacklogList.entities.cards,
  cardIds: normalizedBacklogList.result,
  list: defaultState.backloglist,
};
export const users = {
  entities: normalizedUsers.entities.users,
  ids: normalizedUsers.result,
};
export const cards = {
  entities: normalizedLists.entities.cards,
  ids: normalizedLists.entities.cards
    ? Object.keys(normalizedLists.entities.cards)
    : [],
};
export default {
  users,
  lists,
  cards,
  backlog,
};
