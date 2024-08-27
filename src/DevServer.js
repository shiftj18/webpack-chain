const ChainedMap = require('./ChainedMap');
const ChainedSet = require('./ChainedSet');

module.exports = class extends ChainedMap {
  constructor(parent) {
    super(parent);
    this.allowedHosts = new ChainedSet(this);
    this.client = new ChainedMap(this);
    this.static = new ChainedMap(this);
    this.server = new ChainedMap(this);

    this.extend([
      'bonjour',
      'compress',
      'devMiddleware',
      'http2',
      'https',
      'headers',
      'historyApiFallback',
      'host',
      'hot',
      'ipc',
      'liveReload',
      'magicHtml',
      'onAfterSetupMiddleware',
      'onBeforeSetupMiddleware',
      'onListening',
      'open',
      'port',
      'proxy',
      'progress',
      'public',
      'publicPath',
      'quiet',
      'serveIndex',
      'setup',
      'socket',
      'sockHost',
      'sockPath',
      'sockPort',
      'stats',
      'stdin',
      'transportMode',
      'useLocalIp',
      'watchContentBase',
      'watchOptions',
      'writeToDisk',
      'ipc',
      'magicHtml',
      'devMiddleware',
      'setupExitSignals',
      'setupMiddlewares',
      'watchFiles',
      'webSocketServer',
    ]);
  }

  toConfig() {
    return this.clean({
      allowedHosts: this.allowedHosts.values(),
      client: this.client.entries(),
      static: this.static.entries(),
      server: this.server.entries(),
      ...(this.entries() || {}),
    });
  }

  merge(obj, omit = []) {
    if (!omit.includes('allowedHosts') && 'allowedHosts' in obj) {
      this.allowedHosts.merge(obj.allowedHosts);
    }

    return super.merge(obj, ['allowedHosts']);
  }
};
