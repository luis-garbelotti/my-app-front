import { createContext, useState } from 'react';

const AuthContext = createContext<any | undefined>(undefined);

export function AuthProvider({ children }: any) {
  const persistedAuth = JSON.parse(localStorage.getItem('auth') as string);
  const [auth, setAuth] = useState(persistedAuth);

  function login(authData: any) {
    setAuth(authData);
    localStorage.setItem('auth', JSON.stringify(authData));
  }

  function logout(){
    setAuth(null);
    localStorage.removeItem('auth');
  }

  return (
    <AuthContext.Provider value={{ auth, login, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;