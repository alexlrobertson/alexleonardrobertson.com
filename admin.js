require('angular');
require('angular-ui-router');
require('npm-angular-resource')(window, angular);

angular.module('alr.admin', [
  require('./process/admin')
])
  .config([
    '$urlRouterProvider',
    '$stateProvider',
    function ($urlRouterProvider, $stateProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider.state('index', {
        url: '/',
        template: [
          '<div class="container">',
          '<h1>Alr</h1>',
          '</div>'
        ].join('')
      });
    }
  ]);

require('./templates/admin');
