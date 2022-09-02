import React, { FC, useEffect } from 'react';
import { IntlProvider } from 'react-intl';

import { defaultLocale, locales } from '../config/Locale';
import useLocaleStore from '../stores/AppStore';

const I18n: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { locale, messages, setLocale, setMessages } = useLocaleStore();

  useEffect(() => {
    if (!Object.keys(locales).includes(locale)) {
      console.error('不支持的语言类型：', locale);
      setLocale(defaultLocale);
      return;
    }
    const messagesFunc = locales[locale];
    messagesFunc().then((messagesModule) => {
      setMessages(messagesModule.default);
    });
  }, [locale, setLocale, setMessages]);

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
};

export default I18n;
