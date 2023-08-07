import type { Indexed } from './shared.model';

export interface ErrorOptions extends Indexed {
  withStack?: boolean;
  errorCode?: string | number;
  original?: Error;
}
