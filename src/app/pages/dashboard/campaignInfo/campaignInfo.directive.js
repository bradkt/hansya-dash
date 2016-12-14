(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('campaignInfo', campaignInfo);

  /** @ngInject */
  function campaignInfo() {
    return {
      restrict: 'E',
      controller: 'campaignInfoCtrl',
      templateUrl: 'app/pages/dashboard/campaignInfo/campaignInfo.html'
    };
  }
})();