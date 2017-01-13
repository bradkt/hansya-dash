// describe('Testing ability to login', function() {
//     var scope, httpBackend, createController;
//
//     beforeEach(inject(function ($rootScope, $controller, $httpBackend) {
//         scope = $rootScope.$new();
//         httpBackend = $httpBackend;
//
//         createController = function() {
//             return $controller('LayoutsCtrl', {
//                 '$scope': scope
//             });
//         };
//     }));
//
//     afterEach(function () {
//         httpBackend.verifyNoOutstandingExpectation();
//         httpBackend.verifyNoOutstandingRequest();
//     });
//
//     it('should have a method to check if the path is active', function() {
//
//     });
//
//     httpBackend.expectPOST()
//
// });

describe('login controller', function() {
    beforeEach(module('BlurAdmin'));
    beforeEach(module('BlurAdmin.pages'));
    var loginCtrl, scope, userAPI, deffered, q, user, lc;

    beforeEach(function () {

    });

    beforeEach(inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        loginCtrl = $controller('LayoutsCtrl', {
            $scope: scope,
            lc : {
            personalInfo : {
            name: 'brad',
            userID: 34
            }
            }
        });
    }));



    it('should define personalInfo', function (){
        expect(submit).toBeDefined();
    });
});