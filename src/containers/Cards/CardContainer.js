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
    card: state.cards.entities[ownProps.cardId],
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
    onRemoveCard(listId, card) {
      dispatch({
        type: 'REMOVE_CARD',
        payload: { listId, card },
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Card);
