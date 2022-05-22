import React, { useState } from 'react';
import './App.css';
import AppViews from './components/AppViews';
import TranslateProvider from './providers/TranslateProvider';

function App() {

  return (
    <div className="App">
      <AppViews />
    </div>
  );
}

export default App;
