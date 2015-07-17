(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ])


  // controller nuevo
  .controller('ResultsCtrl',
  ["$scope", "$http",function($scope, $http){


   $http.get('https://api.typeform.com/v0/form/EtAbSP?key=90aace972c0226a97b553b2d1f6c5903afd45f66&completed=true')
    .success(function(data, status, headers, config) {
      $scope.results = data,
      console.log("success", data)
    })
    .error(function(data, status, headers, config) {

      // log error
    })



  }])
  // Fin controllr nuevo

    .config(config)
    .run(run)
  ;


  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {

    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }

})();
