import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// добавь хранение контактов телефонной книги в localStorage.
// Используй методы жизненного цикла.

// При добавлении и удалении контакта, контакты сохраняются в локальное
// хранилище.
// При загрузке приложения, контакты, если таковые есть, считываются из
// локального хранилища и записываются в состояние.
