/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('TrafficChartCtrl', TrafficChartCtrl);

  /** @ngInject */
  function TrafficChartCtrl($scope, baConfig, colorHelper, $stateParams, $http, CampaignApi) {

    $http({
      url: '',
      method: 'get',
      params: {uid: $stateParams.uid},
    }).then(function (response) {
      TrafficChartCtrl.dashboard = response.data;
    });

    var campaign_id = $stateParams.uid; //getting ui-route parameter
    // console.log(campaign_id);

    $scope.trafficChartsData = [];

    $scope.transparent = baConfig.theme.blur;
    var dashboardColors = baConfig.colors.dashboard;

    // var data = $scope.metrics;
    // for(var i = 0; i < data.length; i++) {
    //   var temp = data[i].engagement_rate;
    //   var total = total + temp;
    // }

    // console.log(response);

    $scope.doughnutData = [
      {
        value: '1800',
        color: dashboardColors.white,
        highlight: colorHelper.shade(dashboardColors.white, 15),
        label: 'Atlanta, GA',
        percentage: ((1800 / 10000) * 100).toFixed(2),
        order: 1
      }, {
        value: '900',
        color: dashboardColors.blueStone,
        highlight: colorHelper.shade(dashboardColors.blueStone, 15),
        label: 'Columbus, OH',
        percentage: ((900 / 10000) * 100).toFixed(2),
        order: 4
      }, {
        value: '1700',
        color: dashboardColors.surfieGreen,
        highlight: colorHelper.shade(dashboardColors.surfieGreen, 15),
        label: 'Instagram, CA',
        percentage: ((1700 / 10000) * 100).toFixed(2),
        order: 3
      }, {
        value: '3500',
        color: dashboardColors.silverTree,
        highlight: colorHelper.shade(dashboardColors.silverTree, 15),
        label: 'Austin, TX',
        percentage: ((3500 / 10000) * 100).toFixed(2),
        order: 2
      }, {
        value: '2500',
        color: dashboardColors.gossip,
        highlight: colorHelper.shade(dashboardColors.gossip, 15),
        label: 'Other',
        percentage: ((2500 / 10000) * 100).toFixed(2),
        order: 0
      },
    ];
      initChart()


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