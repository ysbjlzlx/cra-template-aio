import { observer } from 'mobx-react-lite';
import React, { FC, useEffect, useState } from 'react';
import { createIntl, createIntlCache, IntlConfig, RawIntlProvider } from 'react-intl';

import { useRootStoreContext } from '../stores';
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
  const { app } = useRootStoreContext();
  const cache = createIntlCache();

  useEffect(() => {
    if (Object.keys(locales).includes(app.locale || '')) {
      const current = locales[app.locale || ''];
      setIntlConfig((intlConfig) => {
        return { ...intlConfig, ...current };
      });
    } else {
      console.error('不支持的语言类型：', app.locale);
      app.setLocale(defaultLocal);
    }
  }, [app, app.locale]);

  const intl = createIntl(intlConfig, cache);
  return <RawIntlProvider value={intl}>{children}</RawIntlProvider>;
};

export default observer(I18n);
