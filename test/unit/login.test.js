describe('Login Test Suite', function(){

    beforeEach(module('BlurAdmin.pages.form'));

    describe('Testing Login Controller', function () {
        var scope, ctrl, httpBackend, timeout;

        beforeEach(inject(function($controller, $rootScope, $httpBackend, $timeout) {
            scope = $rootScope.$new();
            ctrl = $controller('LayoutsCtrl', {$scope:scope});
            httpBackend = $httpBackend;
            timeout = $timeout;
        }));

        afterEach(function() {
            // httpBackend.verifyNoOutstandingExpectation();
            // httpBackend.verifyNoOutstandingRequest();
        });

        it('should have a scope name to test', function() {
            expect(scope.name).toBeDefined();
            // expect(scope.name).toBe("getting the test testing");
        });

    });

});