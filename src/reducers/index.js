import { combineReducers } from 'redux';

import lists from './list-reducer';
import cards from './card-reducer';
import users from './user-reducer';
import backlog from './backlog-reducer';
export default combineReducers({
  lists,
  cards,
  users,
  backlog,
  // backlogList,
});
