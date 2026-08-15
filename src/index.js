import React from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>
);
