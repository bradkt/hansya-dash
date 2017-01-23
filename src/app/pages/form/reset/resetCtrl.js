/**
 * Created by brad on 9/7/16.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.form')
        .controller('ResetCtrl', ResetCtrl);

    /** @ngInject */
    function ResetCtrl($scope, $location, $log , UserApi, CampaignApi, LocalStorage, $stateParams) {
        var rpc = this;

        var code = $stateParams.code; // will need to get the reset code - could try .url()
        console.log(code);

        $scope.submit = function () {
            var code = $stateParams.code;
            var data = {
                "email": rpc.resetPassword.email,
                "code": code,
                "password": rpc.resetPassword.password
            };
            console.log(data);
            UserApi.resetPassword(data).then(function (response) {
                if (response) {
                    console.log(response);
                    rpc.successMessage = "Your password has been successfully reset";
                    $log.info(rpc.errorMessage);
                } else {
                console.log(response);
                rpc.errorMessage = "There was an error resetting your password";
                $log.info(rpc.errorMessage);
            }
          });
        };


        $scope.recoverPassword = function() {
            lc.forgotPasswordMessage = true;
        };

    }
})();