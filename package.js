Package.describe({
  name: 'skadmin:meteor-measured',
  version: '1.0.4',
  summary: 'Meteor metrics library',
  git: 'https://github.com/sharekey/meteor-measured',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1');
  api.use('ecmascript');

  api.mainModule('meteor-measured.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('skadmin:meteor-measured');
  api.mainModule('meteor-measured-tests.js');
});
