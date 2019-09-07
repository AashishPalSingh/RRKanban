import { connect } from 'react-redux';
import CreateUser from '../../components/Users/CreateUser';
const defaultUserData = {
  name: '',
  email: '',
};

const mapDispatchToProps = dispatch => {
  return {
    createUser(userData) {
      console.log('in create user', userData);
      const userId = Math.random();
      const user = {
        id: userId,
        ...defaultUserData,
        ...userData,
      };
      dispatch({
        type: 'USER_CREATE',
        payload: { user, userId },
      });
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(CreateUser);
