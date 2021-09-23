import React, { useState } from 'react'

export function AuthProvider(props: any) {
  const [ isAuthenticate, setAuthenticate ] = useState(() => {
    const secretKey = localStorage.getItem('risetron_auth');

    return secretKey === ABC;
  });

  const value = {
    isAuthenticate,
    setAuthenticate
  };

  return (
   <AuthContext.Provider value={value}>
     { props.children }
   </AuthContext.Provider>
  )
}

const AuthContext = React.createContext({});
export const useAuthContext = () => React.useContext(AuthContext);
export const ABC = 'silverycat';
