import { connect } from 'react-redux';

import Cards from '../../components/Cards/Cards';

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.lists.entities[ownProps.listId],
  };
};

export default connect(mapStateToProps)(Cards);
