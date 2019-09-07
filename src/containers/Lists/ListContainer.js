import { connect } from 'react-redux';
import List from '../../components/Lists/List';

const mapStateToProps = (state, ownProps) => {
  return { list: state.lists.entities[ownProps.listId] };
};

export default connect(mapStateToProps)(List);
