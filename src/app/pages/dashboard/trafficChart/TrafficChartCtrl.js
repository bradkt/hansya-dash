/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('TrafficChartCtrl', TrafficChartCtrl);

  /** @ngInject */
  function TrafficChartCtrl($scope, baConfig, colorHelper, $stateParams, $http, CampaignApi, LocalStorage, $timeout) {

    $http({
      url: '',
      method: 'get',
      params: {uid: $stateParams.uid},
    }).then(function (response) {
      TrafficChartCtrl.dashboard = response.data;
    });

    var campaign_id = $stateParams.uid; //getting ui-route parameter
    // console.log(campaign_id);
    locationSummery();

    $scope.doughnutData = [];

    $scope.transparent = baConfig.theme.blur;
    var dashboardColors = baConfig.colors.dashboard;

    function locationSummery() {
      CampaignApi.getLocaionSummery(campaign_id).then(function (response) {
        if (response){
          // response.forEach(function (location) {
            $scope.doughnutData = [
              {
                value: '' + (response[0].count * 1000),
                color: dashboardColors.white,
                highlight: colorHelper.shade(dashboardColors.white, 15),
                label: response[0]._id,
                percentage: ((response[0].count / 26) * 100).toFixed(2),
                order: 1
              }, {
                value: '' + (response[1].count * 1000),
                color: dashboardColors.blueStone,
                highlight: colorHelper.shade(dashboardColors.blueStone, 15),
                label: response[1]._id,
                percentage: ((response[1].count / 26) * 100).toFixed(2),
                order: 4
              }, {
                value: '' + (response[2].count * 1000),
                color: dashboardColors.surfieGreen,
                highlight: colorHelper.shade(dashboardColors.surfieGreen, 15),
                label: response[2]._id,
                percentage: ((response[2].count / 26) * 100).toFixed(2),
                order: 3
              }, {
                value: '' + (response[3].count * 1000),
                color: dashboardColors.silverTree,
                highlight: colorHelper.shade(dashboardColors.silverTree, 15),
                label: response[3]._id,
                percentage: ((response[3].count / 26) * 100).toFixed(2),
                order: 2
              }, {
                value: '' + (response[4].count * 1000),
                color: dashboardColors.gossip,
                highlight: colorHelper.shade(dashboardColors.gossip, 15),
                label: response[4]._id,
                percentage: ((response[4].count / 26) * 100).toFixed(2),
                order: 0
              },
            ];

            // var element = {
            //   value: '' + (location.count * 1000),
            //   color: dashboardColors.white,
            //   highlight: colorHelper.shade(dashboardColors.white, 15),
            //   label: location._id,
            //   percentage: ((location.count / 26) * 100).toFixed(2) //divide by total messages in package
            //
            // };
            // if ($scope.doughnutData.length < 5) (
            //     $scope.doughnutData.push(element)
            // )
          // });
        } else {
          console.log('no response from server');
        }
      });
    }

    $timeout(function () {
      initChart()
    }, 3000);


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