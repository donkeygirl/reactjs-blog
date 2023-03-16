import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from './ErrorPage'
import { StoreProvider } from 'easy-peasy';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
    <StoreProvider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} errorElement={<ErrorPage />} />
        </Routes>
      </Router>
    </StoreProvider>
  </React.StrictMode>
);