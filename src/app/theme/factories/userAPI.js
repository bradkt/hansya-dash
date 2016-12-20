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
            postUserLogin: postUserLogin,
            getCurrentUser: getCurrentUser,
            getUsers: getUsers,
            postCompany: postCompany,
            getCompany: getCompany,
            putUserRole: putUserRole,
            postUserID: postUserID
        };

        function postUserID (id) {
            return $http.put('http://localhost:1337/user', + id).then(complete).catch(failed);
        }

        function putUserRole (data) {
            return $http.put('http://localhost:1337/user/changeRole', data).then(complete).catch(failed);
        }

        function postCompany (data) {
            return $http.post('http://localhost:1337/company', data).then(complete).catch(failed);
        }

        function getCompany () {
            return $http.get('http://localhost:1337/company').then(complete).catch(failed);
        }

        function getUsers () {
            return $http.get('http://localhost:1337/user/all').then(complete).catch(failed);
        }

        function registerUser(data) {
            return $http.post('http://localhost:1337/user', data).then(complete).catch(failed);
        }

        function postUserLogin(data) {
            return $http.post('http://localhost:1337/auth/local/', data).then(complete).catch(failed);
        }

        function getCurrentUser() {
            return $http.get('http://localhost:1337/user').then(complete).catch(failed);
        }

        function complete(response) {
            return response;
        }

        function failed(error) {
            console.log(error.statusText);
        }


    }

})();