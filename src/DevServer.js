const ChainedMap = require('./ChainedMap');
const ChainedValueMap = require('./ChainedValueMap');
const ChainedValueSet = require('./ChainedValueSet');

module.exports = class extends ChainedMap {
  constructor(parent) {
    super(parent);
    this.allowedHosts = new ChainedValueSet(this);
    this.client = new ChainedMap(this);
    this.static = new ChainedValueMap(this);
    this.server = new ChainedValueMap(this);

    this.extend([
      'bonjour',
      'compress',
      'devMiddleware',
      'headers',
      'historyApiFallback',
      'host',
      'hot',
      'http2',
      'https',
      'ipc',
      'liveReload',
      'magicHtml',
      'onAfterSetupMiddleware',
      'onBeforeSetupMiddleware',
      'onListening',
      'open',
      'port',
      'proxy',
      'setupExitSignals',
      'setupMiddlewares',
      'watchFiles',
      'webSocketServer',
    ]);
  }

  toConfig() {
    return this.clean({
      allowedHosts: this.allowedHosts.values(),
      ...(this.entries() || {}),
      client: this.client.entries(),
      static: this.static.entries(),
      server: this.server.entries(),
    });
  }

  merge(obj, omit = []) {
    if (!omit.includes('allowedHosts') && 'allowedHosts' in obj) {
      this.allowedHosts.merge(obj.allowedHosts);
    }

    return super.merge(obj, ['allowedHosts']);
  }
};
