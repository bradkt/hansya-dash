// angular.module('BlurAdmin.theme')
//     .constant('layoutSizes', {
//         resWidthCollapseSidebar: 1200,
//         resWidthHideSidebar: 500
//     })

// angular.module("BlurAdmin.configEnv", [])
// .constant("API", "http://localhost:1337");
(function () {
    'use strict';

    angular.module('BlurAdmin.theme')
        .service(envApiUrl, {
            "API": "http://localhost:1337"
        });


    // function LocalStorage() {
    //
    //     return {
    //         getTotalMessages: getTotalMessages,
    //         setTotalMessages: setTotalMessages
    //     };
    //
    //
    //     function getTotalMessages () {
    //         return $window.localStorage && $window.localStorage.getItem('total-messages');
    //     }
    //
    //     function setTotalMessages (data) {
    //         $window.localStorage && $window.localStorage.setItem('total-messages', data);
    //         // console.log('local storage campaign id');
    //         // console.log($window.localStorage);
    //     }
    //
    // }

})();