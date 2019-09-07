import BacklogList from '../../components/Backlog/BacklogList';
import { connect } from 'react-redux';
const mapStateToProps = state => {
  return {
    backloglist: state.backlog.list,
  };
};

export default connect(mapStateToProps)(BacklogList);
