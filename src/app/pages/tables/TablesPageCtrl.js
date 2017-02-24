/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tables')
      .controller('TablesPageCtrl', TablesPageCtrl);

  /** @ngInject */
  function TablesPageCtrl($scope, $filter, $location, $log, editableOptions, editableThemes, CampaignApi, ProductApi, $timeout, IndustryApi, UserApi, LocalStorage, Upload, toastr) {
    var tc = this;

    // var URL = config.api;
    var URL = "https://test-hansya-consumer-api.herokuapp.com";
    // var URL = "http://localhost:1337";

    // scope data
    tc.adminAddCampaign = {};
    tc.campaignListTableData = {};
    tc.productListTableData = {};
    tc.productInfo = {};
    tc.clientListTableData = {};
    tc.changeUserRole = {};
    tc.assignUserToCompany= {};
    $scope.currentCustomer = [];
    tc.adminAddCampaign.keywordArray = [];
    // $scope.smartTablePageSize = 10;
    // $scope.customerListTableData = [];
    // $scope.customerDetailTableData = [];


    getCampaigns();
    getProducts();
    getAllUsers();

    // $scope.addKeyword = function (keyword) {
    //   tc.adminAddCampaign.keywords.push(keyword);
    // };

    $scope.createCampaign = function () {

      // tc.adminAddCampaign = tc.adminAddCampaign.campaignName.trim().toLowerCase();
      // console.log(tc.adminAddCampaign);

      // var data = tc.adminAddCampaign;
      var data = {
            "user": tc.adminAddCampaign.userID,
            "keywords": tc.adminAddCampaign.keywordArray,
            "product": tc.adminAddCampaign.product.id,
            "paid": false,
            // // "paymentID": '45454545',
            "visibility": 'user',
            "audience": tc.adminAddCampaign.audience,
            "location": tc.adminAddCampaign.location,
            "timeframe": tc.adminAddCampaign.timeframe,
            "intent" : tc.adminAddCampaign.intent
      };

      CampaignApi.postCampaign(data).then(function (response) {
        if (response) {
          $log.info(response);
        } else {
          $log.info('error creating this campaign');
        }
      });

    };

    $scope.postIndustry = function() {

      // tc.adminCreateIndustry.name = tc.adminCreateIndustry.name.trim().toLowerCase();

      var data = {
        name: tc.adminCreateIndustry.name,
        keywords: ["default", "keywords", "go here"]
      };

      IndustryApi.postIndustry(data).then(function (response) {
        if (response) {
          $log.info('industry posted');
        } else {
          $log.info('error posting the industry');
        }
      });

    };

    $scope.postCompany = function () {
      tc.adminCreateCompany.name = tc.adminCreateCompany.name.trim().toLowerCase();
      UserApi.postCompany(tc.adminCreateCompany).then(function (response) {
        if (response) {
          $log.info("Company Created ");
        } else {
          $log.info("Issue creating this company");
        }

      });
    };

    function getCompanys () {

      UserApi.getCompany().then(function (response) {

        if (response) {
          $log.info("getting companies");
        } else {
          $log.info("Issue getting companies");
        }

      });
    };

    function getAllUsers () {

      UserApi.getUsers().then(function (response) {

        if (response) {
          $log.info("getting users");

          tc.clientListTableData = response.data;
        } else {
          $log.info("Issue getting users");

        }

      });
    }

    // $scope.assignCompany = function () {
    //   $log.info(tc.assignUserToCompany.registerCompany);
    //
    //   var data = {company: tc.assignUserToCompany.registerCompany}
    //
    //   UserApi.postUserID(user, data).then(function (response) {
    //
    //     if (response) {
    //
    //       console.log(response);
    //     } else {
    //       console.log("Issue assigning user to comapany");
    //       console.log(response);
    //     }
    //
    //   });
    // };

    // $scope.makeCompanySelection = function (user) {
    //    tc.assignUserToCompany = user;
    //    $log.info(user.name);
    // };

    $scope.makeRoleSelection = function (user) {
       tc.changeUserRole = user;
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
          toastr.success('User Role Successfully changed', 'Success', {
            "autoDismiss": false,
            "positionClass": "toast-top-center",
            "type": "success",
            "timeOut": "5000",
            "extendedTimeOut": "2000",
            "allowHtml": false,
            "closeButton": false,
            "tapToDismiss": true,
            "progressBar": false,
            "newestOnTop": true,
            "maxOpened": 0,
            "preventDuplicates": false,
            "preventOpenDuplicates": false
          })
        } else {
          $log.info("Issue changing User Role");
        }
      });
    };


    function getCampaigns () {
      CampaignApi.getCampaigns().then(function (response) {
        tc.campaignListTableData = response;
      });
    }

    function getProducts () {
      ProductApi.getProducts().then(function (response) {
        tc.productListTableData = response.data;
      });
    }

    $scope.postProduct = function(data) {
      data = tc.productInfo;
      ProductApi.postProduct(data).then(function (response) {
        if (response) {
          // $log.info("getting products");
        } else {
          $log.info("Issue getting products");
        }
      });
    }

    $scope.deleteProduct = function(id) {
      ProductApi.deleteProduct(id).then(function (response) {
        if (response) {
          $log.info("product deleted");
        } else {
          $log.info("Issue deleting product");
        }
      });
    };

    $scope.uploadFiles = function(file, errFiles) {
      $scope.f = file;
      $scope.errFile = errFiles && errFiles[0];
      if (file) {
        file.upload = Upload.upload({
          url:  URL +'/campaignData/upload',
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
