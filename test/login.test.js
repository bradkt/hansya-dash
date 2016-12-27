describe('LayoutsCtrl', function() {
    var scope, createController;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();

        createController = function() {
            return $controller('LayoutsCtrl', {
                '$scope': scope
            });
        };
    }));

    it('should have a method to check if the path is active', function() {

    });
});