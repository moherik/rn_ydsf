import * as React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const State = React.createContext();
const Dispatch = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'RESTORE_PHONE':
      return {
        ...state,
        phone: action.phone,
      };
    case 'SIGN_IN':
      return {
        ...state,
        phone: action.phone,
      };
    case 'SIGN_OUT':
      removePhone();

      return {
        ...state,
        phone: null,
      };
  }
};

const initialState = {
  phone: null,
};

const Provider = ({children}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      const phone = await getPhone();

      dispatch({type: 'RESTORE_PHONE', phone});
    };

    bootstrapAsync();
  }, []);

  return (
    <State.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
    </State.Provider>
  );
};

const getPhone = async () => {
  try {
    const storePhone = await AsyncStorage.getItem('@phone');
    return storePhone != null ? JSON.parse(storePhone) : null;
  } catch (e) {
    console.error(e);
  }
};

const removePhone = async () => {
  try {
    return await AsyncStorage.removeItem('@phone');
  } catch (e) {
    console.error(e);
  }
};

export const AuthContext = {
  State,
  Dispatch,
  Provider,
};
