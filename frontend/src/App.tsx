import React from 'react';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import './css/App.css';
import Layout from './layouts';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/*' element={<Layout/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
