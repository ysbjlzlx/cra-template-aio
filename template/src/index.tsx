import { CssBaseline, GlobalStyles } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import I18n from './i18n';
import reportWebVitals from './reportWebVitals';
import Router from './router';
import global from './styles/global';

const globalStyles = <GlobalStyles styles={global} />;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <>
      <CssBaseline />
      {globalStyles}
      <I18n>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </I18n>
    </>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
