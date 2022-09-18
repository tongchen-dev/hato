/// <reference types="vite/client" />

interface hubInterface {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  on: (eventName: string, cb: (...arg: any[])=>void) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  emit: (eventName: string, ...args: any[]) => void;
  off: (eventName: string) => void;
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
  import { ComponentOptions } from 'vue';
  const ComponentOptions: ComponentOptions;
  export default ComponentOptions;
  interface ComponentPublicInstance {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    $hub: any
  }
}