// // var assert = require('assert');
// // describe('Array', function() {
// //     describe('#indexOf()', function() {
// //         it('should return -1 when the value is not present', function() {
// //             assert.equal(-1, [1,2,3].indexOf(4));
// //         });
// //     });
// // });
// //
// //
// // var assert = require('chai').assert
// //     , foo = 'bar'
// //     , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
// //
// // assert.typeOf(foo, 'string'); // without optional message
// // assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
// // assert.equal(foo, 'bar', 'foo equal `bar`');
// // assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
// // assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');
//
// describe("Midway: Testing Modules", function() {
//     describe("App Module:", function() {
//
//         var module;
//         before(function() {
//             module = angular.module("BlurAdmin");
//         });
//
//         before(function() {
//             module = angular.module("BlurAdmin");
//         });
//
//         it("should be registered", function() {
//             expect(module).not.to.equal(null);
//         });
//
//         describe("Dependencies:", function() {
//
//             var deps;
//             var hasModule = function(m) {
//                 return deps.indexOf(m) >= 0;
//             };
//             before(function() {
//                 deps = module.value('BlurAdmin').requires;
//             });
//
//             //you can also test the module's dependencies
//             it("should have App.Controllers as a dependency", function() {
//                 expect(hasModule('App.Controllers')).to.equal(true);
//             });
//
//             it("should have App.Directives as a dependency", function() {
//                 expect(hasModule('App.Directives')).to.equal(true);
//             });
//
//             it("should have App.Filters as a dependency", function() {
//                 expect(hasModule('App.Filters')).to.equal(true);
//             });
//
//             it("should have App.Routes as a dependency", function() {
//                 expect(hasModule('App.Routes')).to.equal(true);
//             });
//
//             it("should have App.Services as a dependency", function() {
//                 expect(hasModule('App.Services')).to.equal(true);
//             });
//         });
//     });
// });