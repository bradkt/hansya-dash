/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tables')
      .controller('TablesPageCtrl', TablesPageCtrl);

  /** @ngInject */
  function TablesPageCtrl($scope, $filter, $location, $log, editableOptions, editableThemes, CampaignApi, ProductApi, $timeout, IndustryApi, UserApi, LocalStorage, Upload) {
    var tc = this;

    // scope data
    tc.adminAddCampaign = {};
    tc.campaignListTableData = {};
    tc.productListTableData = {};
    tc.productInfo = {};
    tc.clientListTableData = {};
    tc.changeUserRole = {};
    tc.assignUserToCompany= {};
    $scope.currentCustomer = [];
    // $scope.smartTablePageSize = 10;
    // $scope.customerListTableData = [];
    // $scope.customerDetailTableData = [];

    // var role = LocalStorage.getUserRole();
    // if (role == undefined  || role.role == "registered") {
    //   $location.url('form/login')
    // } else {
      getCampaigns();
      getProducts();
      getAllUsers();
    // }

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

      var data = {
        name: tc.adminCreateIndustry.name,
        keywords: ["default", "keywords", "go here"]
      };

      IndustryApi.postIndustry(data).then(function (response) {
        if (response) {
          console.log(response);
        } else {
          console.log('error posting the industry');
        }
      });

    };

    $scope.postCompany = function () {
      tc.adminCreateCompany.name = tc.adminCreateCompany.name.trim().toLowerCase();
      console.log(tc.adminCreateCompany);

      UserApi.postCompany(tc.adminCreateCompany).then(function (response) {

        if (response) {
          console.log("Company Created ");
          console.log(response);
        } else {
          console.log("Issue creating this company");
          console.log(response);
        }

      });
    };

    function getCompanys () {

      UserApi.getCompany().then(function (response) {

        if (response) {
          console.log("getting companies");
          console.log(response);
        } else {
          console.log("Issue getting companies");
          console.log(response);
        }

      });
    };

    function getAllUsers () {

      UserApi.getUsers().then(function (response) {

        if (response) {
          console.log("getting users");
          console.log(response);
          tc.clientListTableData = response.data;
        } else {
          console.log("Issue getting users");
          console.log(response);
        }

      });
    }

    $scope.assignCompany = function () {
      $log.info(tc.assignUserToCompany.registerCompany);
    };

    $scope.makeCompanySelection = function (user) {
       tc.assignUserToCompany = user;
       $log.info(user.name);
    };

    $scope.makeRoleSelection = function (user) {
       tc.changeUserRole = user;
       $log.info(user.name);
    };

    tc.roleOptions = {
      registered: "registered",
      associate: "associate",
      admin: "admin"
    };

    $scope.changeRole = function (role) {
      $log.info(role);

      var data = {
          userID: tc.changeUserRole.id,
          role: role
      };

      $log.info(data);
      UserApi.putUserRole(data).then(function (response) {

        if (response) {
          console.log("User Role Changed");
          console.log(response);
        } else {
          console.log("Issue changing User Role");
          console.log(response);
        }

      });

    };


    function getCampaigns () {
      CampaignApi.getCampaigns().then(function (response) {
        console.log('get caampaigns');

        tc.campaignListTableData = response;
        console.log(tc.campaignListTableData);
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

    $scope.uploadFile = function($files) {
      Upload.upload({
        url: 'http://localhost:1337/campaignData/upload',
        data: { "data": $files },
      }).progress(function(e) {
      }).then(function(data, status, headers, config) {
        // file is uploaded successfully
      });



      // var currentCustomer = $scope.currentCustomer;
      // console.log(id);
      // var file = document.getElementById('file').files[0];
      //
      // if (window.File && window.FileReader && window.FileList && window.Blob) {
      //
      //   var fr = new FileReader();
      //   fr.onloadend = function(e){
      //     var filedata = e.target.result;
      //     var data = JSON.parse(filedata)
      //
      //   };
      //
      //   fr.readAsText(file);
      //
      // } else {
      //   alert('The File APIs are not fully supported in this browser.');
      // }
    };

    $scope.uploadFiles = function(file, errFiles) {
      $scope.f = file;
      $scope.errFile = errFiles && errFiles[0];
      if (file) {
        file.upload = Upload.upload({
          url: 'http://localhost:1337/campaignData/upload',
          data: {"data": file}
        });

        file.upload.then(function (response) {
          $timeout(function () {
            file.result = response.data;
          });
        }, function (response) {
          if (response.status > 0)
            $scope.errorMsg = response.status + ': ' + response.data;
        }, function (evt) {
          file.progress = Math.min(100, parseInt(100.0 *
              evt.loaded / evt.total));
        });
      }
      console.log(file);
    };


      // $scope.uploadFiles = function(file, errFiles) {
    //   $scope.f = file;
    //   $scope.errFile = errFiles && errFiles[0];
    //   if (file) {
    //     file.upload = Upload.upload({
    //       url: 'http://localhost:1337/campaignData/upload',
    //       data: file
    //     });
    //
    //     file.upload.then(function (response) {
    //       $timeout(function () {
    //         file.result = response.data;
    //       });
    //     }, function (response) {
    //       if (response.status > 0)
    //         $scope.errorMsg = response.status + ': ' + response.data;
    //     }, function (evt) {
    //       file.progress = Math.min(100, parseInt(100.0 *
    //           evt.loaded / evt.total));
    //     });
    //   }
    // };

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
