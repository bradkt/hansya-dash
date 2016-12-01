/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tables')
      .controller('TablesPageCtrl', TablesPageCtrl);

  /** @ngInject */
  function TablesPageCtrl($scope, $filter, editableOptions, editableThemes) {
    var tc = this;

    $scope.addCust = {};


    $scope.addCustomer = function () {
      // var customer = $scope.tc.addCust.custname.toString().trim().toLowerCase();

      var customerData = {

      };

      var dashData = {

      };

      var serviceData = {
        service: "Free Trial",
      };

      var sampleData = {
        data: "sampledata"
      };

      var Data = {
        data: "not uploaded"
      };
    };

    //todo: need to add a way to assign to specific company
    $scope.addCampaign = function () {
      //update current number of customers in list--add one

      var CampaigName = tc.Campaign.campaignName.toString().trim().toLowerCase();

      var industry = {
        name: industryname
      };

    };


    $scope.smartTablePageSize = 10;

    $scope.customerListTableData = [];

    $scope.customerDetailTableData = [];

    $scope.currentCustomer = [];

    $scope.viewCustDetails = function () {


    };

    $scope.uploadFile = function() {
      var currentCustomer = $scope.currentCustomer;

      var file = document.getElementById('file').files[0];

      if (window.File && window.FileReader && window.FileList && window.Blob) {

        var fr = new FileReader();
        fr.onloadend = function(e){
          var filedata = e.target.result;
          var jsondata = {
            data: JSON.parse(filedata)
          };
          // firebase.database().ref('data/' + currentCustomer + '/').push(jsondata);
        };
        fr.readAsText(file);
      } else {
        alert('The File APIs are not fully supported in this browser.');
      }
    };

    $scope.statuses = [
      {value: 1, text: 'Good'},
      {value: 2, text: 'Awesome'},
      {value: 3, text: 'Excellent'},
    ];

    $scope.groups = [
      {id: 1, text: 'user'},
      {id: 2, text: 'customer'},
      {id: 3, text: 'vip'},
      {id: 4, text: 'admin'}
    ];

    // $scope.showGroup = function(user) {
    //   if(user.group && $scope.groups.length) {
    //     var selected = $filter('filter')($scope.groups, {id: user.group});
    //     return selected.length ? selected[0].text : 'Not set';
    //   } else return 'Not set'
    // };
    //
    // $scope.showStatus = function(user) {
    //   var selected = [];
    //   if(user.status) {
    //     selected = $filter('filter')($scope.statuses, {value: user.status});
    //   }
    //   return selected.length ? selected[0].text : 'Not set';
    // };
    //
    //
    // $scope.removeUser = function(index) {
    //   $scope.users.splice(index, 1);
    // };
    //
    // $scope.addUser = function() {
    //   $scope.inserted = {
    //     id: $scope.users.length+1,
    //     name: '',
    //     status: null,
    //     group: null
    //   };
    //   $scope.users.push($scope.inserted);
    // };

    editableOptions.theme = 'bs3';
    editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
    editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';


  }

})();
