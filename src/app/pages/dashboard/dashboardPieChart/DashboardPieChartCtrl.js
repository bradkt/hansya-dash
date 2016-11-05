/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardPieChartCtrl', DashboardPieChartCtrl);

  /** @ngInject */
  function DashboardPieChartCtrl($scope, $timeout, baConfig, baUtil, $stateParams, $http) {
    $http({
      url: '',
      method: 'get',
      params: {uid: $stateParams.uid},
    }).then(function (response) {
      DashboardPieChartCtrl.dashboard = response.data;
    });

    var activeCust = $stateParams.uid; //getting ui-route parameter

    $scope.pieChartsFBdata = [];

    var pieColor = baUtil.hexToRGB(baConfig.colors.defaultText, 0.2);
    var charts = [{
      color: pieColor,
      description: 'Tweets Sent',
      stats: '',
      icon: 'person',
    }, {
      color: pieColor,
      description: 'Impressions',
      stats: '$ ' + '',
      icon: 'money',
    }, {
      color: pieColor,
      description: 'User Action',
      stats: '',
      icon: 'face',
    }, {
      color: pieColor,
      description: 'Success Rate',
      stats: '',
      icon: 'refresh',
    }
    ];
    var FBDBRef = firebase.database().ref('dashboard/' + activeCust);
    FBDBRef.on('value', function (data) {
      var fbdata = data.val();
      charts[0].stats = fbdata.tweets;
      charts[1].stats = fbdata.interactions;
      charts[2].stats = fbdata.actions;
      charts[3].stats = fbdata.success + '%';
      for(var i = 0; i < charts.length; i++) {
        $scope.pieChartsFBdata.push(charts[i]);
      }
    });


    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

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

      function updatePieCharts() {
        $('.pie-charts .chart').each(function(index, chart) {
          $(chart).data('easyPieChart').update(getRandomArbitrary(55, 90));
        });
      }

      $timeout(function () {
        loadPieCharts();
        updatePieCharts();
      }, 5500);
      }
})();
