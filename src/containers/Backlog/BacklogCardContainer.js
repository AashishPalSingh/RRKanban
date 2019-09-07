import { connect } from 'react-redux';
import Card from '../../components/Cards/Card';
import { denormalize, schema } from 'normalizr';
const mapStateToProps = (state, ownProps) => {
  const list = new schema.Entity('lists');
  const mySchema = { lists: [list] };
  const denormalizedLists = denormalize({ lists: state.lists.ids }, mySchema, {
    lists: state.lists.entities,
  });
  return {
    card: state.backlog.cards[ownProps.cardId.id],
    lists: denormalizedLists.lists,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onListChange(card, newListId) {
      dispatch({
        type: 'MOVE_CARD_LIST',
        payload: { card, newListId },
      });
    },
    onAddCard(listId, card) {
      dispatch({
        type: 'ADD_CARD',
        payload: { listId, card },
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Card);
