/**
 * Created by brad on 9/7/16.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.form')
        .controller('LayoutsCtrl', LayoutsCtrl);

    /** @ngInject */
    function LayoutsCtrl($scope, $location, UserApi) {
        var lc = this;
        lc.personalInfo = {};
        $scope.submit = function () {
            //this model is holding email as identifier
            var data = $scope.lc.personalInfo;
            UserApi.postUserLogin(data).then(function (response) {
                userGranted(response);
            });
        };

        function userGranted(response) {
            console.log('----------------------------');
            var uid = response.data.id;
            if (uid) {
                console.log(response);
                $location.url('dashboard/44114411'); //needs to redirect to campaign or if user is able to pick
                // from more than one campaign directed to page where they can
            } else {
                $scope.lc.personalInfo.errorMessage = "Your Email and Password do not match";
                console.log($scope.lc.personalInfo.errorMessage);
            }
        }
    }
})();