/**
 * Created by brad on 12/6/16.
 */
describe('testing user registration', function() {
    var $rootscope, $scope, controller;

    beforeEach(function () {
        module('RegisterCtrl');

        inject(function ($injector) {
            $rootscope = $injector.get('$rootscope');
            $scope = $rootscope.$new();
            controller = $injector.get('$controller')("RegisterCtrl", {$scope: $scope});
        })
    });

    describe('testing user register controller', function () {

        it('should have a test equal to be test', function () {
                expect($scope.test).toEqual('test');
            });

        // controller.personalInfo = {
        //     identifier: 'brad@email.com',
        //     username: 'brad',
        //     password: 'asdfasdf'
        // };
        //
        // scope.submit();
        //
        // it('should set the identifer equal to the email', function () {
        //     expect($scope.personalInfo.email).toBe('brad@email.com');
        // });


    });
});