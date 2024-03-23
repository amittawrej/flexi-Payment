import React, {useContext, useState } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { createContext  } from 'react';

const MyContext = createContext();

const CountProvider = ({children}) => {
  const [value, setValue] = useState(0);
  return (
    <MyContext.Provider value={{ value,setValue }}>
      {children}
    </MyContext.Provider>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <CountProvider>
    <App />
  </CountProvider>
</React.StrictMode>,
);

export const useCount = () => useContext(MyContext);
