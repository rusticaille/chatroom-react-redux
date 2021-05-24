// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import ConnectedMessages from 'src/containers/ConnectedMessages';
import ConnectedForm from 'src/containers/ConnectedForm';
import ConnectedSettings from 'src/containers/ConnectedSettings';

// == Composant
const App = () => {

  return (
  <div className="app">
    <ConnectedSettings/>
    <ConnectedMessages/>
    <ConnectedForm/>
  </div>
  )
  };

// == Export
export default App;
