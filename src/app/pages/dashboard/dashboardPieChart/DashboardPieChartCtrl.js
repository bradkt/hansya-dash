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


    var id = $stateParams.uid; //getting ui-route parameter

    var pieColor = baUtil.hexToRGB(baConfig.colors.defaultText, 0.2);
    $scope.pieChartsData = [];

    totalLikes();
    engagements();
    sentiment();
    Keyword();
    getMessages();

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

    function sentiment() {
      CampaignApi.getSentiment(id).then(function (response) {
        if (response){
          var element = {
            color: pieColor,
            description: 'Average Sentiment',
            stats: response.averageSentimentScore + '%',
            icon: 'face',
            percent: response.averageSentimentScore
          }
          $scope.pieChartsData.push(element);
        } else {
          console.log('no response from server');
        }
      });
    }

    var positiveMessages = 0;
    var negativeMessages = 0;


    function getMessages() {
      CampaignApi.getCampaignMessages(id).then(function (response) {
        if (response){
          sentimentCount(response);
        } else {
          console.log('no response from server');
        }
      });
    }

    function sentimentCount(response) {
      var totalMessages = response.length;
      angular.forEach(response, function(obj, key) {
        if (obj.metrics.sentiment_score > .5) {
          positiveMessages = positiveMessages + 1;
        } else {
          negativeMessages = negativeMessages + 1;
        }
      });



      var posMessPer = positiveMessages / totalMessages;
      var negMessPer = negativeMessages / totalMessages;
      // console.log('positiveMessages');
      console.log(totalMessages);
      // console.log('negativeMessages');
      // console.log(negMessPer);

      var element1 = {
        color: pieColor,
        description: 'Positive Messages',
        stats: positiveMessages,
        icon: 'face',
        percent: parseInt(positiveMessages / totalMessages)
      }


      var element2 = {
        color: pieColor,
        description: 'Negative Messages',
        stats: negativeMessages,
        icon: 'face',
        percent: 54.2536
      }
      $timeout(function () {
        pushTodataArray(element1);
        pushTodataArray(element2);
      }, 1000);

    }

    function pushTodataArray (element){
      $scope.pieChartsData.push(element);
    }

    function Keyword() {
      CampaignApi.getCampaign(id).then(function (response) {
        if (response){
          var element = {
            color: pieColor,
            description: 'Keyword:' + response.keywords[0],
            stats: 3215,
            icon: '',
            // icon: 'refresh',
            percent: 21
          }
          $scope.pieChartsData.push(element);
        } else {
          console.log('unable get campaign from server');
        }
      });
    }




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
