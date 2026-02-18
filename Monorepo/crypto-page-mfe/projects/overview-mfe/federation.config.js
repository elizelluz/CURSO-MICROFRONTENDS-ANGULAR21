const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'overview-mfe',



  exposes: {
    // './Component': './projects/overview-mfe/src/app/app.ts',
    './CoinTrendingCntComponent':'./projects/overview-mfe/src/app/features/overview/components/trending/container/coin-trending-cnt/coin-trending-cnt.component.ts',
    './routes':'./projects/overview-mfe/src/app/app.routes.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ],

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0

  features: {
    // New feature for more performance and avoiding
    // issues with node libs. Comment this out to
    // get the traditional behavior:
    ignoreUnusedDeps: true
  }
});
