import React, { createContext, useContext, useMemo } from 'react';
import en from './locales/en.json';

type Messages = Record<string, string>;

const LOCALES: Record<string, () => Promise<Messages>> = {
  en: () => Promise.resolve(en),
  ar: () => import('./locales/ar.json').then((m) => m.default as Messages)
};

export const SUPPORTED_LANGUAGES = Object.keys(LOCALES);

let currentMessages: Messages = en;
let currentLang = 'en';

export async function loadLocale(lang: string): Promise<Messages> {
  const loader = LOCALES[lang];
  if (!loader) return en;
  const msgs = await loader();
  currentMessages = { ...en, ...msgs };
  currentLang = lang;
  return currentMessages;
}

export function getLocale(): string {
  return currentLang;
}

function interpolate(template: string, params: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(params[key] ?? `{${key}}`));
}

export type TFunction = (key: string, params?: Record<string, string | number>) => string;

const I18nContext = createContext<Messages>(en);

export const I18nProvider = I18nContext.Provider;

export function useT(): TFunction {
  const msgs = useContext(I18nContext);
  return useMemo(
    () => (key: string, params?: Record<string, string | number>) => {
      const tpl = msgs[key] ?? currentMessages[key] ?? key;
      return params ? interpolate(tpl, params) : tpl;
    },
    [msgs]
  );
}
