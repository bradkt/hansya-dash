angular.module("BlurAdmin.config", [])
.constant("local", {"EnvironmentConfig":{"api":"http://localhost:1337"}})
.constant("production", {"EnvironmentConfig":{"api":"https://test-hansya-consumer-api.herokuapp.com"}});
