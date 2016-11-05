/**
 * Created by brad on 9/7/16.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.form')
        .controller('LayoutsCtrl', LayoutsCtrl);

    /** @ngInject */
    function LayoutsCtrl($scope, $location) {
        var lc = this;
        console.log('hi from form.login.widgets');
        lc.personalInfo = {};
        console.log(lc.personalInfo);
        // lc.arePersonalInfoPasswordsEqual = function () {
        //     return lc.personalInfo.confirmPassword && lc.personalInfo.password == lc.personalInfo.confirmPassword;
        //     console.log(lc.personalInfo);
        // };
        $scope.submit = function () {
            console.log($scope.lc.personalInfo);
            var data = $scope.lc.personalInfo;
            var promise = firebase.auth().signInWithEmailAndPassword(data.email, data.password);
            promise
                .catch(function (e) {
                    console.log(e.message);
                });

            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    console.log('Logged in');
                    var data = $scope.lc.personalInfo;
                    if (data.companyName == "hansya") {
                        console.log('hi hansya');
                        window.location.href = '#/tables/admin';
                    } else {
                        var currentCustomerCountRef = firebase.database().ref('customer-list');
                        currentCustomerCountRef.once('value', function (snapshot) {
                            var fbdata = snapshot.val();
                            console.log("snapshot from layouts---------------------");
                            console.log(fbdata);
                            for (var i = 1; i < fbdata.length; i++) {
                                console.log(fbdata[i].name)
                                if (data.companyName == fbdata[i].name) {
                                    console.log(fbdata[i].name + ' match from if statement');
                                    var uid = fbdata[i].uid;
                                    console.log(uid);
                                    window.location.href = '#/dashboard/' + uid;
                                    break;
                                } else {
                                    console.log('company not found');
                                }
                            }
                        })
                    }
                } else {
                    console.log('Not Logged in')
                }
            });
        }
    }
})();