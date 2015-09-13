Package.describe({
  name: 'fermuch:stats.js',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('coffeescript');
  api.use(['templating'], 'client');

  api.use('constellation:console@1.2.1');
  api.imply('constellation:console');

  // orignal stats.js file
  api.addFiles('lib/stats.js', 'client');
  // integration with constellation
  client_files = [
    'stats.js.html',
    'stats.js.coffee'
  ];
  api.addFiles(client_files, 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('fermuch:stats.js');
  api.addFiles('stats.js-tests.js');
});
