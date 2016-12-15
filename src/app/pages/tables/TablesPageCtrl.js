/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tables')
      .controller('TablesPageCtrl', TablesPageCtrl);

  /** @ngInject */
  function TablesPageCtrl($scope, $filter, editableOptions, editableThemes, CampaignApi, ProductApi, $timeout, IndustryApi) {
    var tc = this;

    // scope data
    tc.adminAddCampaign = {};
    tc.campaignListTableData = {};
    tc.productListTableData = {};
    tc.productInfo = {};
    $scope.currentCustomer = [];
    // $scope.smartTablePageSize = 10;
    // $scope.customerListTableData = [];
    // $scope.customerDetailTableData = [];

    getCampaigns();
    getProducts();

    $scope.createCampaign = function () {

      // tc.adminAddCampaign = tc.adminAddCampaign.campaignName.trim().toLowerCase();
      // console.log(tc.adminAddCampaign);

      var data = {
            "keywords": tc.adminAddCampaign.keywords,
            "product": tc.adminAddCampaign.product.id,
            "paid": true,
            "paymentID": '45454545',
            "visibility": 'user'
      };

      console.log(tc.adminAddCampaign);
      console.log(tc.adminAddCampaign.product.id);
      console.log(data);

      CampaignApi.postCampaign(data).then(function (response) {
        console.log(response);
      });

    };

    $scope.postIndustry = function() {

      tc.adminCreateIndustry.name = tc.adminCreateIndustry.name.trim().toLowerCase();
      console.log(tc.adminCreateIndustry);

      IndustryApi.postIndustry({"name":tc.adminCreateIndustry.name}).then(function (response) {

        console.log(response);
      });

    };


    function getCampaigns () {
      CampaignApi.getCampaigns().then(function (response) {
        console.log('get caampaigns');
        console.log(response);
        console.log('end get campaigns');
      });
    }

    function getProducts () {
      ProductApi.getProducts().then(function (response) {
        tc.productListTableData = response.data;
        console.log(tc.productListTableData);
      });
    }

    // name: 'large',
    // datapoints: parseInt('10000'),
    // description: '10000 Datapoints WOW!',
    // price: parseInt('17999')

    $scope.postProduct = function(data) {
      data = tc.productInfo;

      console.log(data);
      ProductApi.postProduct(data).then(function (response) {
        console.log(response);
      });
    }

    $scope.deleteProduct = function(id) {
      console.log(id);
      ProductApi.deleteProduct(id).then(function (response) {
        console.log(response);
      });
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
