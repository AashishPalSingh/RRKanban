import { connect } from 'react-redux';

import BacklogCards from '../../components/Backlog/BacklogCards';

const mapStateToProps = (state, ownProps) => {
  console.log('in backlog cards container', state.backlog.list);
  return {
    list: state.backlog.list,
  };
};

export default connect(mapStateToProps)(BacklogCards);
