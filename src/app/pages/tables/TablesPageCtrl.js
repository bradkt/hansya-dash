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

    tc.addCust = {};

    $scope.addCustomer = function () {
      //update current number of customers in list--add one
        setCount();

      var customer = $scope.tc.addCust.custname.toString().trim().toLowerCase();

      var customerData = {
        name: customer,
        email: "guy@"+ customer +".com",
        industry: "relational",
        signupDate: "signupdate",
        keyterms: "ai, contextual learning, awesome beards, palm trees",
        goals: {
          impressions: "1100",
          interactions: "1500",
          conversions: "700"
        }
      };

      var dashData = {
        tweets: "32,555",
        interactions: "6,202",
        actions: "6,485",
        success: "29",
        impressions: "7,045",
        channels: {
          twitter: "1100",
          instagram: "1500",
          facebook: "1000",
          youtube: "1200",
          other: "700"
        }
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

      // Get a key for a new Post.
      var newCustKey = firebase.database().ref().child('customers').push().key;

      // Write the new post's data simultaneously in the posts list and the user's post list.
      var updates = {};
      updates['/customers/' + newCustKey] = customerData;
      updates['/dashboard/' + newCustKey] = dashData;
      updates['/sampledata/' + newCustKey] = sampleData;
      updates['/data/' + newCustKey] = Data;
      updates['/service/' + newCustKey] = serviceData;

      return firebase.database().ref().update(updates);
    };

    $scope.addIndustry = function () {
      //update current number of customers in list--add one

      var industryname = $scope.tc.addIndustry.indyname.toString().trim().toLowerCase();

      var industry = {
        name: industryname
      };
      // Get a key for a new industry.
      var newIndyKey = firebase.database().ref().child('industries').push().key;
      var updates = {};
      updates['/industries/' + newIndyKey ] = industry;

      return firebase.database().ref().update(updates);
    };

      function setCount() {
        var currentCustomerCountRef = firebase.database().ref('customerCount/uid');
        currentCustomerCountRef.once('value', function (snapshot) {
          var uid = snapshot.val() + 1;
        firebase.database().ref('customerCount/uid').set(uid);
        })
      }

    $scope.smartTablePageSize = 10;

    $scope.customerListTableData = [];

    $scope.customerDetailTableData = [];

    $scope.currentCustomer = [];

    var FBDBRef = firebase.database().ref("customers");
    FBDBRef.on('child_added', function(data) {
    var key = data.key;
    var fbdata = data.val();
    fbdata["key"] = key;
      console.log(fbdata);
    $scope.customerListTableData.push(fbdata);
    });

    $scope.viewCustDetails = function (custKey) {
      console.log(custKey);
      $scope.customerDetailTableData = [];
      var query = firebase.database().ref("customers/" + custKey);
      query.once("value")
          .then(function(data) {
            //todo: tablepagectrl other methods then push to update scope?
            $scope.customerDetailTableData.push(data.val());
            console.log(data.val());
          })
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
          firebase.database().ref('data/' + currentCustomer + '/').push(jsondata);
        };
        fr.readAsText(file);

      // var progressbar = document.getElementById("progressbar");

      // var user = firebase.auth().currentUser;
      // if (user != null) {

      } else {
        alert('The File APIs are not fully supported in this browser.');
      }
    };


    // $scope.smartTableData = [
    //   {
    //     id: 1,
    //     firstName: 'Mark',
    //     lastName: 'Otto',
    //     username: '@mdo',
    //     email: 'mdo@gmail.com',
    //     age: '28'
    //   },
    //   {
    //     id: 2,
    //     firstName: 'Jacob',
    //     lastName: 'Thornton',
    //     username: '@fat',
    //     email: 'fat@yandex.ru',
    //     age: '45'
    //   },
    //   {
    //     id: 3,
    //     firstName: 'Larry',
    //     lastName: 'Bird',
    //     username: '@twitter',
    //     email: 'twitter@outlook.com',
    //     age: '18'
    //   },
    //   {
    //     id: 4,
    //     firstName: 'John',
    //     lastName: 'Snow',
    //     username: '@snow',
    //     email: 'snow@gmail.com',
    //     age: '20'
    //   },
    //   {
    //     id: 5,
    //     firstName: 'Jack',
    //     lastName: 'Sparrow',
    //     username: '@jack',
    //     email: 'jack@yandex.ru',
    //     age: '30'
    //   },
    //   {
    //     id: 6,
    //     firstName: 'Ann',
    //     lastName: 'Smith',
    //     username: '@ann',
    //     email: 'ann@gmail.com',
    //     age: '21'
    //   },
    //   {
    //     id: 7,
    //     firstName: 'Barbara',
    //     lastName: 'Black',
    //     username: '@barbara',
    //     email: 'barbara@yandex.ru',
    //     age: '43'
    //   },
    //   {
    //     id: 8,
    //     firstName: 'Sevan',
    //     lastName: 'Bagrat',
    //     username: '@sevan',
    //     email: 'sevan@outlook.com',
    //     age: '13'
    //   },
    //   {
    //     id: 9,
    //     firstName: 'Ruben',
    //     lastName: 'Vardan',
    //     username: '@ruben',
    //     email: 'ruben@gmail.com',
    //     age: '22'
    //   },
    //   {
    //     id: 10,
    //     firstName: 'Karen',
    //     lastName: 'Sevan',
    //     username: '@karen',
    //     email: 'karen@yandex.ru',
    //     age: '33'
    //   },
    // ];
    //
    // $scope.editableTableData = $scope.smartTableData.slice(0, 36);
    //
    // $scope.peopleTableData = [
    //   {
    //     id: 1,
    //     firstName: 'brad',
    //     lastName: 'Otto',
    //     username: '@mdo',
    //     email: 'mdo@gmail.com',
    //     age: '28',
    //     status: 'info'
    //   },
    //   {
    //     id: 2,
    //     firstName: 'Jacob',
    //     lastName: 'Thornton',
    //     username: '@fat',
    //     email: 'fat@yandex.ru',
    //     age: '45',
    //     status: 'primary'
    //   },
    //   {
    //     id: 3,
    //     firstName: 'Larry',
    //     lastName: 'Bird',
    //     username: '@twitter',
    //     email: 'twitter@outlook.com',
    //     age: '18',
    //     status: 'success'
    //   },
    //   {
    //     id: 4,
    //     firstName: 'John',
    //     lastName: 'Snow',
    //     username: '@snow',
    //     email: 'snow@gmail.com',
    //     age: '20',
    //     status: 'danger'
    //   },
    //   {
    //     id: 5,
    //     firstName: 'Jack',
    //     lastName: 'Sparrow',
    //     username: '@jack',
    //     email: 'jack@yandex.ru',
    //     age: '30',
    //     status: 'warning'
    //   }
    // ];
    //
    // $scope.metricsTableData = [
    //   {
    //     image: 'app/browsers/chrome.svg',
    //     browser: 'Google Chrome',
    //     visits: '10,392',
    //     isVisitsUp: true,
    //     purchases: '4,214',
    //     isPurchasesUp: true,
    //     percent: '45%',
    //     isPercentUp: true
    //   },
    //   {
    //     image: 'app/browsers/firefox.svg',
    //     browser: 'Mozilla Firefox',
    //     visits: '7,873',
    //     isVisitsUp: true,
    //     purchases: '3,031',
    //     isPurchasesUp: false,
    //     percent: '28%',
    //     isPercentUp: true
    //   },
    //   {
    //     image: 'app/browsers/ie.svg',
    //     browser: 'Internet Explorer',
    //     visits: '5,890',
    //     isVisitsUp: false,
    //     purchases: '2,102',
    //     isPurchasesUp: false,
    //     percent: '17%',
    //     isPercentUp: false
    //   },
    //   {
    //     image: 'app/browsers/safari.svg',
    //     browser: 'Safari',
    //     visits: '4,001',
    //     isVisitsUp: false,
    //     purchases: '1,001',
    //     isPurchasesUp: false,
    //     percent: '14%',
    //     isPercentUp: true
    //   },
    //   {
    //     image: 'app/browsers/opera.svg',
    //     browser: 'Opera',
    //     visits: '1,833',
    //     isVisitsUp: true,
    //     purchases: '83',
    //     isPurchasesUp: true,
    //     percent: '5%',
    //     isPercentUp: false
    //   }
    // ];
    //
    // $scope.users = [
    //   {
    //     "id": 1,
    //     "name": "Esther Vang",
    //     "status": 4,
    //     "group": 3
    //   },
    //   {
    //     "id": 2,
    //     "name": "Leah Freeman",
    //     "status": 3,
    //     "group": 1
    //   },
    //   {
    //     "id": 3,
    //     "name": "Mathews Simpson",
    //     "status": 3,
    //     "group": 2
    //   },
    //   {
    //     "id": 4,
    //     "name": "Buckley Hopkins",
    //     "group": 4
    //   },
    //   {
    //     "id": 5,
    //     "name": "Buckley Schwartz",
    //     "status": 1,
    //     "group": 1
    //   },
    //   {
    //     "id": 6,
    //     "name": "Mathews Hopkins",
    //     "status": 4,
    //     "group": 2
    //   },
    //   {
    //     "id": 7,
    //     "name": "Leah Vang",
    //     "status": 4,
    //     "group": 1
    //   },
    //   {
    //     "id": 8,
    //     "name": "Vang Schwartz",
    //     "status": 4,
    //     "group": 2
    //   },
    //   {
    //     "id": 9,
    //     "name": "Hopkin Esther",
    //     "status": 1,
    //     "group": 2
    //   },
    //   {
    //     "id": 10,
    //     "name": "Mathews Schwartz",
    //     "status": 1,
    //     "group": 3
    //   }
    // ];

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

    $scope.showGroup = function(user) {
      if(user.group && $scope.groups.length) {
        var selected = $filter('filter')($scope.groups, {id: user.group});
        return selected.length ? selected[0].text : 'Not set';
      } else return 'Not set'
    };

    $scope.showStatus = function(user) {
      var selected = [];
      if(user.status) {
        selected = $filter('filter')($scope.statuses, {value: user.status});
      }
      return selected.length ? selected[0].text : 'Not set';
    };


    $scope.removeUser = function(index) {
      $scope.users.splice(index, 1);
    };

    $scope.addUser = function() {
      $scope.inserted = {
        id: $scope.users.length+1,
        name: '',
        status: null,
        group: null
      };
      $scope.users.push($scope.inserted);
    };

    editableOptions.theme = 'bs3';
    editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
    editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';


  }

})();
