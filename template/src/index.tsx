import { CssBaseline, GlobalStyles } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import I18n from './i18n';
import reportWebVitals from './reportWebVitals';
import Router from './router';
import global from './styles/global';

const globalStyles = <GlobalStyles styles={global} />;
ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      <CssBaseline />
      {globalStyles}
      <I18n>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </I18n>
    </React.Fragment>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
