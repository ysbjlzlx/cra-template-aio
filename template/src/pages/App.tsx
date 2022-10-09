import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import useLocaleStore from '../stores/LocaleStore';
import './App.css';
import logo from './logo.svg';

const App = (): ReactElement => {
  const { setLocale } = useLocaleStore();
  const { t, i18n } = useTranslation();

  const changeLanguage = (event: SelectChangeEvent) => {
    setLocale(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          {t('Learn React', { defaultValue: 'Learn React' })}
        </a>
        <FormControl sx={{ mt: 2 }}>
          <InputLabel id="language-select-id">{t('multiLanguage')}</InputLabel>
          <Select
            labelId="language-select-id"
            label={t('multiLanguage')}
            value={i18n.language}
            onChange={changeLanguage}
            sx={{ width: 200, color: 'revert' }}
          >
            <MenuItem value="zh-Hans">简体中文</MenuItem>
            <MenuItem value="en">English</MenuItem>
          </Select>
        </FormControl>
      </header>
    </div>
  );
};

export default App;
