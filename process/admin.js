require('./resource');

var name = 'alr.admin.process';

module.exports = name;

angular.module(name, ['alr.process.resource', 'ui.router'])
  .directive('validateGroup', function () {
    return {
      restrict: 'A',
      scope: {
        input: '=validateGroup'
      },
      link: function (scope, element, attr) {
        scope.$watch('input.$invalid', function (newValue) {
          console.log(scope.input);
          if (newValue && scope.input.$dirty) {
            return element.addClass('has-error');
          }
          element.removeClass('has-error');
        });
      }
    };
  })
  .directive('slugify', function () {
    return {
      restrict: 'A',
      scope: {
        slugify: '='
      },
      require: 'ngModel',
      link: function (scope, element, attr, ctrl) {
        scope.$watch('slugify', function (newValue) {
          if (ctrl.$dirty && element.val() !== '') {
            return;
          }

          var slug = (newValue !== undefined) ? newValue : '';

          slug = slug
              .trim()
              .toLowerCase()
              .replace(/[-\s]+/g, "-");

          element.val(slug);
        });

      }
    };
  })
  .config([
    '$stateProvider',
    function ($stateProvider) {
      $stateProvider
        .state('process', {
          url: '/process/',
          abstract: true,
          template: '<ui-view></ui-view>'
        })
        .state('process.list', {
          url: '',
          templateUrl: 'process/admin.list.html',
          resolve: {
            items: [
              'Process',
              function (Process) {
                return Process.query();
              }
            ]
          },
          controller: [
            'items',
            function (items) {
              this.items = items;
            }
          ]
        })
        .state('process.new', {
          url: 'new/',
          controller: [
            function () {
              this.data = {
                slug: '',
                title: ''
              };

              console.log(this);
            }
          ],
          controllerAs: 'process',
          templateUrl: 'process/admin.new.html'
        });
    }
  ]);

