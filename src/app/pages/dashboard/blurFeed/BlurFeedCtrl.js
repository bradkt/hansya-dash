/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('BlurFeedCtrl', BlurFeedCtrl);

  /** @ngInject */
  function BlurFeedCtrl($scope, $stateParams, $http, CampaignApi) {
    //
    // $http({
    //   url: '',
    //   method: 'get',
    //   params: {uid: $stateParams.uid},
    // }).then(function (response) {
    //   BlurFeedCtrl.dashboard = response.data;
    // });
    //
    // var custName = $stateParams.uid; //getting ui-route parameter

    $scope.FeedData = [];

    //create message feed
    var m_response = CampaignApi.getTempCampaign();
    var messages = m_response.messages;
    var messageData = createFeedArray(messages);
    $scope.FeedData = messageData;

    //create conversation feed
    var c_response = CampaignApi.getTempCampaign();
    var conversation = c_response.conversation;


    $scope.expandMessage = function(message){
      message.expanded = !message.expanded;
    };

    function createFeedArray(messages) {
      var tempStore = [];
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
            };
        //add message type to assign twitter logo rather that hard code
        tempStore.push(placeholder);
      }
      return tempStore;
    }

  }
})();