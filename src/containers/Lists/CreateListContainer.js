import { connect } from 'react-redux';
import CreateList from '../../components/Lists/CreateList';
const defaultListData = {
  title: '',
  cards: [],
};

const mapDispatchToProps = dispatch => {
  return {
    createList(listData) {
      console.log('in create user', listData);
      const listId = Math.floor(Math.random() * 100 + 1);
      const list = {
        id: listId,
        ...defaultListData,
        ...listData,
      };
      dispatch({
        type: 'LIST_CREATE',
        payload: { list, listId },
      });
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(CreateList);
