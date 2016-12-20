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
        // $http({
        //     url: '',
        //     method: 'get',
        //     params: {uid: $stateParams.uid},
        // }).then(function (response) {
        //     dc.dashboard = response.data;
        // });
        // $scope.activeUid = $stateParams.uid;

        dc.userRole = LocalStorage.getUserRole();

        var response = CampaignApi.getTempCampaign();
        // console.log(response.metrics);

        $scope.metrics = response.metrics;
        $scope.messages = response.messages;
        $scope.conversations = response.conversations;
        $scope.users = response.users;
        $scope.meta_data = response.meta_data;

    }
})();
