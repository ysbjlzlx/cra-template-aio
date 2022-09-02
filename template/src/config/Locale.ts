import zhCN from '../i18n/zh-CN';

/**
 * 添加支持的语言类型
 */
export const locales: Record<string, () => Promise<any>> = {
  en: () => import('../i18n/en'),
  'zh-CN': () => import('../i18n/zh-CN'),
};

/**
 * 配置默认的语言类型
 */
export const defaultLocale = 'zh-CN';

export const defaultMessages = zhCN;
