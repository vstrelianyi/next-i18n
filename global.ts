import {routing} from '@/i18n/routing';
import type messages from './messages/en.d.json.ts';

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}
