/**
 * Created by brad on 9/9/16.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.theme.components')
        .controller('PageTopCtrl', PageTopCtrl);

    /** @ngInject */
    function PageTopCtrl($scope) {

        $scope.logout = function() {
            // firebase.auth().signOut().then(function() {
            //     console.log('You have logged off')
            //     window.location.href = '#/forms/login/';
            // }, function(error) {
            //     console.log('error on attempt to log off')
            // });
        };
    }
})();