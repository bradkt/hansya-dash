/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('BlurFeedCtrl', BlurFeedCtrl);

  /** @ngInject */
  function BlurFeedCtrl($scope, $stateParams, $http, CampaignApi, $timeout) {

    $http({
      url: '',
      method: 'get',
      params: {uid: $stateParams.uid},
    }).then(function (response) {
      BlurFeedCtrl.dashboard = response.data;
    });

    var campaignID = $stateParams.uid; //getting ui-route parameter

    $scope.messageFeedData = [];
    // $scope.conversationFeedData = [];

    $timeout(function () {
      getConverstaions();
    }, 1500);

    function getConverstaions() {
      CampaignApi.getCampaignData(campaignID).then(function (response) {
        if (response) {
          $scope.conversations = response.conversations;
        } else {
          console.log('unable getcampaignDATA from server');
        }
      });
      loadConversations();
    }

    function loadConversations() {
      $scope.conversations.forEach( function (messages)
      {
        // console.log('new messages');
        // console.log(messages);
        messages.messages.forEach( function (obj) {
          var placeholder =
          {
            type: '',
            author: 'twitter',
            surname: obj.message.screen_name,
            header: 'Posted photo',
            text: obj.message.text,
            preview: '',
            link: '',
            time: obj.message.datetime,
            ago: '',
            location: obj.message.location,
            expanded: false
          };
          // console.log('new message');
          // console.log(obj);
          $scope.messageFeedData.push(placeholder);

        });
        // console.log($scope.FeedData);
      });

    }


    $scope.expandMessage = function(message){
      message.expanded = !message.expanded;
    };

    // function createFeedArray(messages) {
    //   var tempStore = [];
    //   for (var message in messages) {
    //     var placeholder =
    //         {
    //           type: '',
    //           author: 'twitter',
    //           surname: messages[message].screen_name,
    //           header: 'Posted photo',
    //           text: messages[message].text,
    //           preview: '',
    //           link: 'https://dribbble.com/shots/2504810-Protein-Heroes',
    //           time: messages[message].datetime,
    //           ago: '',
    //           location: messages[message].location,
    //           expanded: false
    //         };
    //     //add message type to assign twitter logo rather that hard code
    //     tempStore.push(placeholder);
    //   }
    //   return tempStore;
    // }

  }

})();