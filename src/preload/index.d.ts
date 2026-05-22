import type { FramoraApi } from './index';

declare global {
  interface Window {
    framora: FramoraApi;
  }
}

export {};