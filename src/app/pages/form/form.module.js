/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('form', {
          url: '/form',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: 'Login',
          sidebarMeta: {
            icon: 'ion-compose',
            order: 250,
          },
        })
        // .state('form.inputs', {
        //   url: '/inputs',
        //   templateUrl: 'app/pages/form/inputs/inputs.html',
        //   title: 'Form Inputs',
        //   sidebarMeta: {
        //     order: 0,
        //   },
        // })
        .state('form.layouts', {
          url: '/login',
          templateUrl: 'app/pages/form/layouts/layouts.html',
          controller: 'LayoutsCtrl',
          controllerAs: 'lc',
          title: 'Login',
          sidebarMeta: {
            order: 100,
          },
        })
        .state('form.products', {
            url: '/products',
            templateUrl: 'app/pages/form/products/products.html',
            controller: 'ProductsCtrl',
            controllerAs: 'pc',
            title: 'Products',
            sidebarMeta: {
                order: 140,
            },
        })
        .state('form.reset', {
            url: '/reset/:code',
            templateUrl: 'app/pages/form/reset/reset.html',
            controller: 'ResetCtrl',
            controllerAs: 'rpc',
            title: 'Reset',
            sidebarMeta: {
                order: 150,
            },
        })
        .state('form.register', {
              url: '/register',
              templateUrl: 'app/pages/form/register/register.html',
              controller: 'RegisterCtrl',
              controllerAs: 'rc',
              title: 'Register',
              sidebarMeta: {
                  order: 160,
              },
        });
        // .state('form.wizard',
        // {
        //   url: '/wizard',
        //   templateUrl: 'app/pages/form/wizard/wizard.html',
        //   controller: 'WizardCtrl',
        //   controllerAs: 'vm',
        //   title: 'Wizard',
        //   sidebarMeta: {
        //     order: 200,
        //   },
        // });
  }
})();
