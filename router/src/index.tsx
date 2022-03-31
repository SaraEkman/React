import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import { Layout } from './components/Layout';
import { Contact } from './components/Contact';
import { NotFound } from './components/NotFound';
import {  ShowMovie } from './components/ShowMovie';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<App/> }/>
        <Route path='/movie/:id' element={<ShowMovie/> }/>
        <Route path='/about' element={<About/> }/>
        <Route path='/contact' element={<Contact/> }/>
        <Route path='/notfound' element={<NotFound/> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
