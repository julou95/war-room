import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppWrapper({ children, userData }) {
  const [user, setUser] = useState({
    username: userData.email || 'anonymous',
    loggedIn: userData.email !== 'anonymous',
  });

  useEffect(() => {
    storeUser(userData.email || 'anonymous')
  }, [userData])

  const storeUser = (username = 'anonymous') => {
    setUser({
      username,
      loggedIn: username !== 'anonymous',
    });
  }

  return (
    <AppContext.Provider value={{ user, storeUser }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}