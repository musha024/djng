"use strict";angular.module("app",["ngCookies","ngSanitize","ui.router","restangular"]).config(["$locationProvider","$urlRouterProvider","$stateProvider","$httpProvider","$provide",function(a,b,c,d,e){a.html5Mode(!0),d.defaults.xsrfHeaderName="X-CSRFToken",d.defaults.xsrfCookieName="csrftoken",b.otherwise("/"),c.state("home",{url:"/",controller:"MainCtrl",templateUrl:"static/views/main.html"}),e.constant("tasks",angular.fromJson(angular.copy(window.tasks)).tasks)}]),angular.module("app").controller("MainCtrl",["$scope","tasks",function(a,b){a.mytasks=b}]);