import {createContext, useReducer, useState} from 'react';
import UserReducer from '../reducers/UserReducer';

const initialState = {
  user: {},
  data: [],
  token: {},
};

export const UserContext = createContext({});

const UserProvider = props => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  return (
    <UserContext.Provider value={{state, dispatch}}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
