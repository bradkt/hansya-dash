/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardPieChartCtrl', DashboardPieChartCtrl);

  /** @ngInject */
  function DashboardPieChartCtrl($scope, $timeout, baConfig, baUtil, $stateParams, $http, CampaignApi) {
    // $http({
    //   url: '',
    //   method: 'get',
    //   params: {uid: $stateParams.uid},
    // }).then(function (response) {
    //   DashboardPieChartCtrl.dashboard = response.data;
    // });

    // var id = $stateParams.uid; //getting ui-route parameter

    $scope.pieChartsData = [];

    var pieColor = baUtil.hexToRGB(baConfig.colors.defaultText, 0.2);

    var goals = {
      // CampaignApi.getcampaignGoalsHere
    };

    $scope.pieChartsData = [{
      color: pieColor,
      description: 'Interactions',
      stats: 21450,
      icon: 'person',
      percent: ((21450 / 10000) * 100).toFixed(0) + '%'
    }, {
      color: pieColor,
      description: 'Average Sentiment',
      stats: 29 + '%',
      icon: 'face',
      percent: 31
    }, {
      color: pieColor,
      description: 'Keyword: Pie',
      stats: 3215,
      icon: '',
      // icon: 'refresh',
      percent: 21
    }, {
      color: pieColor,
      description: 'Engagement Rate',
      stats: 33 + '%',
      icon: 'money',
      percent: 33
    }
    ];


    // function getRandomArbitrary(min, max) {
    //   return Math.random() * (max - min) + min;
    // }

    function loadPieCharts() {
      $('.chart').each(function () {
        var chart = $(this);
        chart.easyPieChart({
          easing: 'easeOutBounce',
          onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
          },
          barColor: chart.attr('rel'),
          trackColor: 'rgba(0,0,0,0)',
          size: 84,
          scaleLength: 0,
          animation: 2000,
          lineWidth: 9,
          lineCap: 'round',
        });
      });

        $('.refresh-data').on('click', function () {
          updatePieCharts();
        });
      }

      // function updatePieCharts() {
      //   $('.pie-charts .chart').each(function(index, chart) {
      //     $(chart).data('easyPieChart').update(getRandomArbitrary(55, 90));
      //   });
      // }

      $timeout(function () {
        loadPieCharts();
        // updatePieCharts();
      }, 5500);
      }
})();
