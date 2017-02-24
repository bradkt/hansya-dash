describe('TablesPageCtrl', function() {
    var scope, $location, createController;

    beforeEach(inject(function ($rootScope, $controller, _$location_) {
        $location = _$location_;
        scope = $rootScope.$new();

        createController = function() {
            return $controller('TablesPageCtrl', {
                '$scope': scope
            });
        };
    }));
});
