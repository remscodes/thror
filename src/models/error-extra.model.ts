import type { Indexed } from './shared.model';

export interface ErrorExtra extends Indexed {
  /**
   * Preserves the error stack.
   * @default false
   */
  withStack?: boolean;
  /**
   * The original error.
   * For example in the case you want to display a clearer error with Thror and store the original one.
   */
  original?: any;
  // errorCode?: string | number;
}
