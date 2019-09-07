import { connect } from 'react-redux';
import { denormalize, schema } from 'normalizr';
import MoveCardToList from '../../components/Cards/MoveCardToList';

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
    moveCardToList(card, newListId, oldListId) {
      dispatch({
        type: 'MOVE_CARD_LIST',
        payload: { card, newListId, oldListId },
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoveCardToList);
