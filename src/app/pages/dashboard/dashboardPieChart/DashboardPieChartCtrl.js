/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardPieChartCtrl', DashboardPieChartCtrl);

  /** @ngInject */
  function DashboardPieChartCtrl($scope, $timeout, baConfig, baUtil, $stateParams, $http, CampaignApi, LocalStorage) {
    $http({
      url: '',
      method: 'get',
      params: {uid: $stateParams.uid},
    }).then(function (response) {
      DashboardPieChartCtrl.dashboard = response.data;
    });

    var id = $stateParams.uid; //getting ui-route parameter
    var pieColor = baUtil.hexToRGB(baConfig.colors.defaultText, 0.2);
    $scope.pieChartsData = [];

    totalLikes();
    engagements();

    $timeout(function () {
      loadPieCharts();
      // updatePieCharts();
    }, 5500);

    function totalLikes() {
      CampaignApi.getTotalLikes(id).then(function (response) {
        if (response){
          var element = {
              color: pieColor,
              description: 'Total Likes',
              stats: response.likes,
              icon: 'person',
              percent: ((response.likes / 5000) * 100).toFixed(0) + '%' //as a percent of total way that people engaged with messaging
          }
          $scope.pieChartsData.push(element);
        } else {
          console.log('no response from server');
        }
      });
    }

    // function averageSentiment() {
    //   CampaignApi.getTotalLikes(id).then(function (response) {
    //     if (response){
    //       var element = {
    //         color: pieColor,
    //         description: 'Sentiment Scores',
    //         stats: '2222',
    //         icon: 'person',
    //         percent: ((2222 / 5000) * 100).toFixed(0) + '%' //as a percent of total way that people engaged with messaging
    //       };
    //       $scope.pieChartsData.push(element);
    //     } else {
    //       console.log('no response from server');
    //     }
    //   });
    // }

    // averageEngagementRate:30.192307692307693
    // averageEngagements:386.9230769230769
    // maximumEngagementRate:52
    // maximumEngagements:3219
    // minimumEngagementRate:18
    // minimumEngagements:39
    // totalEngagements:10060

    function engagements() {
      CampaignApi.getEngagementData(id).then(function (response) {
        if (response){
          var element = {
            color: pieColor,
            description: 'Engagements',
            stats: (response.averageEngagementRate).toFixed(1),
            icon: 'face',
            percent: (response.averageEngagementRate).toFixed(0) + '%' //as a percent of total way that people engaged with messaging
          }
          $scope.pieChartsData.push(element);
        } else {
          console.log('no response from server');
        }
      });
    }

    $scope.pieChartsData = [{
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


      }
})();
