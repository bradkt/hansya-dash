describe('Testing ability to login', function() {
    var scope, httpBackend, createController;

    beforeEach(inject(function ($rootScope, $controller, $httpBackend) {
        scope = $rootScope.$new();
        httpBackend = $httpBackend;

        createController = function() {
            return $controller('LayoutsCtrl', {
                '$scope': scope
            });
        };
    }));

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should have a method to check if the path is active', function() {

    });

    httpBackend.expectPOST()

});