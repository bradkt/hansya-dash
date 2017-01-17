/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('BlurFeedCtrl', BlurFeedCtrl);

  /** @ngInject */
  function BlurFeedCtrl($scope, $stateParams, $http, CampaignApi, $timeout, $filter, $log, $q) {

    var campaignID = $stateParams.uid; //getting ui-route parameter

    $scope.conversations = [];
    getConverstaions();


    function getConverstaions() {
      CampaignApi.getCampaignData(campaignID).then(function (response) {
        if (response) {
          angular.forEach(response.conversations, function(conversation, key) {
            loadConversations(conversation);
          });
        } else {
          $log.error('unable getcampaignDATA from server');
        }
      });
    }

    function loadConversations(conversation) {
      // $q.deffer();
      angular.forEach(conversation.messages, function(obj, key) {
        obj.message.datetime = moment(obj.message.datetime).format('MMMM Do YYYY, h:mm:ss a');
      });
      $scope.conversations.push(conversation);
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