/**
 * Created by brad on 11/8/16.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.theme')
        .factory('UserApi', UserApi);

    /** @ngInject */
    function UserApi($http) {

        return {
            registerUser: registerUser,
            postUserLogin: postUserLogin
        };

        function registerUser(data) {
            return $http.post('http://localhost:1337/register', data).then(complete).catch(failed);
        }

        function postUserLogin(data) {
            return $http.post('http://localhost:1337/auth/local/', data).then(complete).catch(failed);
        }

        function complete(response) {
            return response;
        }

        function failed(error) {
            console.log(error.statusText);
        }


    }

})();