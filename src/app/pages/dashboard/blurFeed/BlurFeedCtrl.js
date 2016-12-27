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

    $scope.messageFeedData = [];
    // $scope.conversationFeedData = [];

    $timeout(setData, 1500);

    function setData() {
      var conversations = $scope.conversations;
      console.log('conversations from blur feed');
      // console.log(conversations);
      // var messageData = createFeedArray(conversations);
      // $scope.FeedData = messageData;
      temp(conversations);
    }

    function temp(conversations) {

      conversations.forEach( function (messages)
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
        console.log($scope.FeedData);
      });

    }


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