const UserReducer = (prevState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...prevState,
        token: action.payload.login,
      };
    case 'LOGOUT':
      return {
        ...prevState,
        token: null,
      };
    case 'SET_USER':
      return {
        ...prevState,
        user: action.payload.user,
      };
    default:
      return prevState;
  }
};

export default UserReducer;
