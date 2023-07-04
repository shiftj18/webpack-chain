type client = {
  logging?: 'log' | 'info' | 'warn' | 'error' | 'none' | 'verbose';
  overlay?: boolean | { error: boolean, warn: boolean };
  progress?: boolean;
  reconnect?: boolean | number;
  webSocketTransport?: 'ws' | 'sockjs' | string;
  webSocketURL?: string | object;
}

type static = {
  directory?: string;
  staticOptions?: object;
  publicPath?: string;
  serveIndex?: boolean;
  watch?: boolean | object;
}
