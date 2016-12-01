/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('BlurFeedCtrl', BlurFeedCtrl);

  /** @ngInject */
  function BlurFeedCtrl($scope, $stateParams, $http, dashboardApi) {

    $http({
      url: '',
      method: 'get',
      params: {uid: $stateParams.uid},
    }).then(function (response) {
      BlurFeedCtrl.dashboard = response.data;
    });

    var custName = $stateParams.uid; //getting ui-route parameter

    $scope.FeedData = [];

    var response = dashboardApi.getTempCampaign();
    var messages = response.messages;

      for (var message in messages) {
            var placeholder =
              {
                type: '',
                author: 'twitter',
                surname: messages[message].screen_name,
                header: 'Posted photo',
                text: messages[message].text,
                preview: '',
                link: 'https://dribbble.com/shots/2504810-Protein-Heroes',
                time: messages[message].datetime,
                ago: '',
                location: messages[message].location,
                expanded: false
              }
            ;
            //add message type to assign twitter logo rather that hard code
            $scope.FeedData.push(placeholder);
        }

        $scope.expandMessage = function(message){
          message.expanded = !message.expanded;
        }

  }
})();