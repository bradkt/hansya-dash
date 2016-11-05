/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('BlurFeedCtrl', BlurFeedCtrl);

  /** @ngInject */
  function BlurFeedCtrl($scope, $stateParams, $http) {

    $http({
      url: '',
      method: 'get',
      params: {uid: $stateParams.uid},
    }).then(function (response) {
      BlurFeedCtrl.dashboard = response.data;
    });

    var custName = $stateParams.uid; //getting ui-route parameter

    $scope.FeedFBdata = [];

    var FBDBRef = firebase.database().ref('data/' + custName + '/data');
    FBDBRef.once('value', function (data) {
      console.log("----traffic values------");
      var fbdata = data.val();
      for (var i = 0; i < fbdata.length; i++) {
            var placeholder =
              {
                type: '',
                author: 'twitter',
                surname: '',
                header: 'Posted photo',
                text: '',
                preview: '',
                link: 'https://dribbble.com/shots/2504810-Protein-Heroes',
                time: '',
                ago: '',
                expanded: false,
              }
            ;
            placeholder.text = fbdata[i].r_data;
            placeholder.surname = fbdata[i].s_name;
            placeholder.time = fbdata[i].dt;
            $scope.FeedFBdata.push(placeholder);
        }

        $scope.expandMessage = function(message){
          message.expanded = !message.expanded;
        }
    })
  }
})();