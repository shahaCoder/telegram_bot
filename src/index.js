import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes} from 'react-router-dom';
import InfoPage from './Components/InfoPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<App />} />
          <Route path='/info/:id' element={<InfoPage />} />
       </Routes>
    </BrowserRouter>
  </React.StrictMode>
);