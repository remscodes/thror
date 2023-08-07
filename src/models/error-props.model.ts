import type { Indexed } from './shared.model';

export interface ErrorProps extends Indexed {
  withStack?: boolean;
  errorCode?: string | number;
  original?: Error;
}
