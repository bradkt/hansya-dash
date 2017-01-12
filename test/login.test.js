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
    beforeEach(module('BlurAdmin.pages.form'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('$scope.lc.personalInfo', function() {
        it('should be emplty to start', function() {
            var $scope = {};
            var controller = $controller('LayoutsCtrl()', { $scope: $scope });
            // $scope.password = 'longerthaneightchars';
            // $scope.grade();
            expect($scope.lc).toEqual('');
        });
    });
});