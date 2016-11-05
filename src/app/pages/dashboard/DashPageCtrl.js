/**
 * Created by brad on 9/8/16.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard')
        .controller('DashPageCtrl', DashPageCtrl);

    /** @ngInject */
    function DashPageCtrl($scope, $filter, editableOptions, editableThemes, $stateParams, $http, $timeout) {
        var dc = this;
        $http({
            url: '',
            method: 'get',
            params: {uid: $stateParams.uid},
        }).then(function (response) {
            dc.dashboard = response.data;
        });
        // $scope.activeUid = $stateParams.uid;

        $timeout(function () {
            checkuid();
        }, 3000);

        // console.log('this is the dashpagectrl and here is the uid');
        function checkuid(){
            if (!$stateParams.uid) {
                console.log('no uid to retrieve dashboard returning to login');
                window.location.href = '#/form/login';
            }
        }



            // var activeUid = $stateParams.uid; //getting ui-route parameter
            // console.log('hello from DashPageCntrl this is the uid param')
            // console.log(activeUid);
    }
})();
