import { connect } from 'react-redux';
import { denormalize, schema, normalize } from 'normalizr';
import CardAssignment from '../../components/Cards/CardAssignment';

const mapStateToProps = (state, ownProps) => {
  const user = new schema.Entity('users');
  const mySchema = { users: [user] };
  const denormalizedUsers = denormalize({ users: state.users.ids }, mySchema, {
    users: state.users.entities,
  });
  const card = new schema.Entity('cards');
  const normalizedBacklogCards = normalize(state.backlog.list.cards, [card]);
  const cardNew =
    state.cards.entities[ownProps.cardId] ||
    normalizedBacklogCards.entities.cards[ownProps.cardId];
  const userId = cardNew.assignedTo;
  return {
    user: state.users.entities[userId],
    card: state.cards.entities[ownProps.cardId],
    users: denormalizedUsers.users,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    assignCardToUser(cardId, userId) {
      dispatch({
        type: 'MOVE_CARD',
        payload: { userId, cardId },
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardAssignment);
