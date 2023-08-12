import type { Indexed } from './shared.model';

export interface ErrorExtra extends Indexed {
  withStack?: boolean;
  errorCode?: string | number;
  original?: Error;
}
