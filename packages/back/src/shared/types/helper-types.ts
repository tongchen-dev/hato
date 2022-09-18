export type deepOmit<T, K extends string | number> = T extends Array<infer R>
  ? deepOmit<R, K>
  : {
      [P in Exclude<keyof T, K>]: T[P];
    };
