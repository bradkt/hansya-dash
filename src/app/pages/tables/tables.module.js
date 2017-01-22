/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tables', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('tables', {
          resolve: {
              authorized : function (LocalStorage) {
                  var role = LocalStorage.getUserRole();
                  if (role == undefined  || role == "registered") {
                      console.log('tables module route not resolved');
                      $location.url('form/login')
                  } else {
                      console.log('tables module route has been resolved');
                      return true;
                  }
              }
          },
          url: '/tables',
          template : '<ui-view></ui-view>',
          abstract: true,
          controller: 'TablesPageCtrl',
          controllerAs: 'tc',
          title: 'Tables',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300,
          },
        }).state('tables.basic', {
          url: '/admin',
          templateUrl: 'app/pages/tables/basic/tables.html',
          title: 'Admin',
          sidebarMeta: {
            order: 0,
          },
        // }).state('tables.smart', {
        //   url: '/smart',
        //   templateUrl: 'app/pages/tables/smart/tables.html',
        //   title: 'Smart Tables',
        //   sidebarMeta: {
        //     order: 100,
        //   },
        });
    $urlRouterProvider.when('/tables','/tables/basic');
  }

})();
