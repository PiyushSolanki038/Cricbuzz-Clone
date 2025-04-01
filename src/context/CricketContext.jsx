import React, { createContext, useContext, useState } from 'react';

const CricketContext = createContext();

export const CricketProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState([]);

  const value = {
    user,
    setUser,
    theme,
    setTheme,
    notifications,
    setNotifications
  };

  return (
    <CricketContext.Provider value={value}>
      {children}
    </CricketContext.Provider>
  );
};

export const useCricket = () => {
  const context = useContext(CricketContext);
  if (!context) {
    throw new Error('useCricket must be used within a CricketProvider');
  }
  return context;
};