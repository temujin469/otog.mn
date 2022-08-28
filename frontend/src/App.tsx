import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './css/App.css';
import { Toaster } from 'react-hot-toast';
import Layout from './routes';
import './css/antDesign.css'

function App() {

  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
