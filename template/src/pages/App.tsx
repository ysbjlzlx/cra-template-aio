import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import useLocaleStore from '../stores/LocaleStore';
import './App.css';
import logo from './logo.svg';

const App = (): ReactElement => {
  const { locale, setLocale } = useLocaleStore();
  const intl = useIntl();

  const changeLanguage = (event: SelectChangeEvent) => {
    setLocale(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <FormattedMessage id="Learn React" defaultMessage="Learn React" />
        </a>
        <FormControl sx={{ mt: 2 }}>
          <InputLabel id="language-select-id">
            <FormattedMessage id="multiLanguage" />
          </InputLabel>
          <Select
            labelId="language-select-id"
            label={intl.formatMessage({ id: 'multiLanguage' })}
            value={locale || undefined}
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

export default App;
