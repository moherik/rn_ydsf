import React from 'react';
import {AuthContext} from './AuthContext';

const providers = [<AuthContext.Provider />];

const Store = ({children: initial}) =>
  providers.reduce(
    (children, parent) => React.cloneElement(parent, {children}),
    initial,
  );

export {Store, AuthContext};
