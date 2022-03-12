import React, { ReactElement } from 'react';
import { observer } from 'mobx-react-lite';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { FormattedMessage, useIntl } from 'react-intl';
import { useRootStoreContext } from '../stores';

import logo from './logo.svg';
import './App.css';

const App = (): ReactElement => {
  const { app } = useRootStoreContext();
  const intl = useIntl();

  const changeLanguage = (event: SelectChangeEvent) => {
    app.setLocale(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <FormControl sx={{ mt: 2 }}>
          <InputLabel id="language-select-id">
            <FormattedMessage id="multiLanguage" />
          </InputLabel>
          <Select
            labelId="language-select-id"
            label={intl.formatMessage({ id: 'multiLanguage' })}
            value={app.locale || undefined}
            onChange={changeLanguage}
            sx={{ width: 200, color: 'revert' }}
          >
            <MenuItem value="zh-CN">简体中文</MenuItem>
            <MenuItem value="en">English</MenuItem>
          </Select>
        </FormControl>
      </header>
    </div>
  );
};

export default observer(App);
