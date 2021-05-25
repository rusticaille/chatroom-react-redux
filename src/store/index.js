import {
  // une fonction pour créer le store
  createStore,
  // une fonction pour brancher un middleware
  applyMiddleware,
} from 'redux';

// une fonction pour gérer les devtools
import { composeWithDevTools } from 'redux-devtools-extension';

import logMiddleware from 'src/middlewares/log';
import authMiddleware from 'src/middlewares/auth';

import reducer from './reducer';

const store = createStore(
  reducer,
  // composeWithDevTools : permet de gérer les devtools
  // il prendra en parametre les autres middleware que l'on souhaite ajouter
  composeWithDevTools(
    // applyMiddleware
    // permet de "brancher" un middleware sur notre store
    applyMiddleware(logMiddleware),
    applyMiddleware(authMiddleware),
  ),
);

export default store;
