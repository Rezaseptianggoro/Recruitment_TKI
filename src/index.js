import React from 'react';
import ReactDOM from 'react-dom/client';
// fungsi untuk memanggil app.js
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Crud/Style.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
