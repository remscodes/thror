import type { Indexed } from './shared.model';

export interface ErrorExtra extends Indexed {
  withStack?: boolean;
  original?: any;
  // errorCode?: string | number;
}
