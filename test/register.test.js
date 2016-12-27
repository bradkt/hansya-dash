/**
 * Created by brad on 12/6/16.
 */
describe('testing user registration', function() {
    beforeEach(module('form.module'));

    describe('testing user register controller', function () {
        var scope, ctrl;

        beforeEach(inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller('RegisterCtrl', {$scope:scope})
        }));

        // RegisterCtrl.personalInfo = {
        //     email: 'brad@email.com',
        //     password: 'asdfasdf'
        // };
        //
        // scope.submit();

        // it('should tell a first time user that they need to buy a campaign', function () {
        //     expect(data).toBe('brad@email.com');
        // });


    })
});