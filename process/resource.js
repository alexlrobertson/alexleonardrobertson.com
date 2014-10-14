angular.module('alr.process.resource', ['ngResource'])
  .factory('Process', [
    '$resource',
    function ($resource) {
      return $resource('/process/:first/:second');
    }
  ]);
