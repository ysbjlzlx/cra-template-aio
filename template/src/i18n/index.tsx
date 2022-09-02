import React, { FC, useEffect, useState } from 'react';
import { createIntl, createIntlCache, IntlConfig, RawIntlProvider } from 'react-intl';

import useLocaleStore from '../stores/AppStore';
import en from './lang/en';
import zhCN from './lang/zh-CN';

/**
 * 添加支持的语言类型
 */
const locales: Record<string, IntlConfig> = {
  en: { locale: 'en', messages: en },
  'zh-CN': { locale: 'zh-CN', messages: zhCN },
};

/**
 * 配置默认的语言类型
 */
const defaultLocal = 'zh-CN';

const I18n: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [intlConfig, setIntlConfig] = useState<IntlConfig>({
    ...locales[defaultLocal],
    defaultLocale: defaultLocal,
  });
  const { locale, setLocale } = useLocaleStore();

  const cache = createIntlCache();

  useEffect(() => {
    if (Object.keys(locales).includes(locale || '')) {
      const current = locales[locale || ''];
      setIntlConfig((intlConfig) => {
        return { ...intlConfig, ...current };
      });
    } else {
      console.error('不支持的语言类型：', locale);
      setLocale(defaultLocal);
    }
  }, [locale, setLocale]);

  const intl = createIntl(intlConfig, cache);
  return <RawIntlProvider value={intl}>{children}</RawIntlProvider>;
};

export default I18n;
