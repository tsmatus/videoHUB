require('ignore-styles');
require('@babel/polyfill')

require('asset-require-hook')({
  extensions: ['jpg', 'png', 'gif'],
  name: '/assets/[hash].[ext]',
});

require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

require('./server');
