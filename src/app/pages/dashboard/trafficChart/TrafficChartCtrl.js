/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('TrafficChartCtrl', TrafficChartCtrl);

  /** @ngInject */
  function TrafficChartCtrl($scope, baConfig, colorHelper, $stateParams, $http) {

    $http({
      url: '',
      method: 'get',
      params: {uid: $stateParams.uid},
    }).then(function (response) {
      TrafficChartCtrl.dashboard = response.data;
    });

    var custUid = $stateParams.uid; //getting ui-route parameter

    $scope.trafficChartsFBdata = [];

    $scope.transparent = baConfig.theme.blur;
    var dashboardColors = baConfig.colors.dashboard;

    var FBDBRef = firebase.database().ref('dashboard/' + custUid + '/channels');
    FBDBRef.once('value', function (data) {
    var fbdata = data.val();
    $scope.doughnutData = [
      {
        value: fbdata.twitter,
        color: dashboardColors.white,
        highlight: colorHelper.shade(dashboardColors.white, 15),
        label: 'Twitter',
        percentage: 87,
        order: 1,
      }, {
        value: fbdata.facebook,
        color: dashboardColors.blueStone,
        highlight: colorHelper.shade(dashboardColors.blueStone, 15),
        label: 'FaceBook',
        percentage: 22,
        order: 4,
      }, {
        value: fbdata.instagram,
        color: dashboardColors.surfieGreen,
        highlight: colorHelper.shade(dashboardColors.surfieGreen, 15),
        label: 'Instagram',
        percentage: 70,
        order: 3,
      }, {
        value: fbdata.youtube,
        color: dashboardColors.silverTree,
        highlight: colorHelper.shade(dashboardColors.silverTree, 15),
        label: 'YouTube',
        percentage: 38,
        order: 2,
      }, {
        value: fbdata.other,
        color: dashboardColors.gossip,
        highlight: colorHelper.shade(dashboardColors.gossip, 15),
        label: 'Other',
        percentage: 17,
        order: 0,
      },
    ];
      initChart()
    });

    function initChart() {
      var ctx = document.getElementById('chart-area').getContext('2d');
      window.myDoughnut = new Chart(ctx).Doughnut($scope.doughnutData, {
        segmentShowStroke: false,
        percentageInnerCutout : 64,
        responsive: true
      });
    }

  }
})();