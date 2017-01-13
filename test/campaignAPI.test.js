describe('Users factory', function() {

    beforeEach(angular.mock.module('BlurAdmin'));
    beforeEach(angular.mock.module('BlurAdmin.theme'));

    var CampaignApi;
    var $httpBackend;



    // Before each test set our injected Users factory (_Users_) to our local Users variable
    beforeEach(inject(function(_CampaignApi_) {
        CampaignApi = _CampaignApi_;
    }));

    beforeEach(inject(function (_$httpBackend_, _campaignAPI_) {
        CampaignApi = _campaignAPI_;
        $httpBackend = _$httpBackend_;
    }));

    // A simple test to verify the Users factory exists
    it('should exist', function() {
        expect(CampaignApi.getCampaigns).toBeDefined();
    });

    it('should GET campaigns from the server', function () {
        $httpBackend.expectGET('http://localhost:1337/campaign/').respond(200, {"cid": 1, "cid" : 2});

        var campaigns = CampaignApi.getCampaigns();

        $httpBackend.flush();

        expect(campaigns).not.toBe(null);
    });

});