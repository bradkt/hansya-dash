/**
 * Created by brad on 9/8/16.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard')
        .controller('DashPageCtrl', DashPageCtrl);

    /** @ngInject */
    function DashPageCtrl($scope, $filter, editableOptions, editableThemes, $stateParams, $http, $timeout, CampaignApi, LocalStorage) {
        var dc = this;
        //replace the http to get id with $location
        // $http({
        //     url: '',
        //     method: 'get',
        //     params: {uid: $stateParams.uid},
        // }).then(function (response) {
        //     dc.dashboard = response.data;
        // });



    }
})();
