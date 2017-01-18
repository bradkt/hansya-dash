/**
 * Created by brad on 11/8/16.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.theme')
        .factory('UserApi', UserApi);

    /** @ngInject */
    function UserApi($http) {

        // var URL = "https://test-hansya-consumer-api.herokuapp.com";
        var URL = "http://localhost:1337";

        return {
            registerUser: registerUser,
            postUserLogin: postUserLogin,
            getCurrentUser: getCurrentUser,
            getUsers: getUsers,
            postCompany: postCompany,
            getCompany: getCompany,
            putUserRole: putUserRole,
            postUserID: postUserID,
            logout: logout
        };

        function postUserID (id, data) {
            return $http.put(URL + '/user', + id + '/', data).then(complete).catch(failed);
        }

        function putUserRole (data) {
            return $http.put(URL + '/user/changeRole', data).then(complete).catch(failed);
        }

        function postCompany (data) {
            return $http.post(URL + '/company', data).then(complete).catch(failed);
        }

        function logout () {
            return $http.get(URL + '/logout').then(complete).catch(failed);
        }

        function getCompany () {
            return $http.get(URL + '/company').then(complete).catch(failed);
        }

        function getUsers () {
            return $http.get(URL + '/user/all').then(complete).catch(failed);
        }

        function registerUser(data) {
            return $http.post(URL + '/user', data).then(complete).catch(failed);
        }

        function postUserLogin(data) {
            return $http.post(URL + '/auth/local/', data).then(complete).catch(failed);
        }

        function getCurrentUser() {
            return $http.get(URL + '/user').then(complete).catch(failed);
        }

        function complete(response) {
            return response;
        }

        function failed(error) {
            console.log(error.statusText);
        }


    }

})();