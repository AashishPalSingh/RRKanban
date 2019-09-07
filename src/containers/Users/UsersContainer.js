import Users from '../../components/Users/Users';
import { connect } from 'react-redux';
const mapStateToProps = state => {
  return {
    users: state.users.ids,
  };
};

export default connect(mapStateToProps)(Users);
