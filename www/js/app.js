(function () {

  'use strict';
  
  angular.module('hancApplication', ['ionic', 'hancApplication.controllers'])

    .run(function ($ionicPlatform) {
      $ionicPlatform.ready(function () {

        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

      $stateProvider
      .state('menu', {
        url: '/menu',
        abstract: true,
        templateUrl: 'templates/sideMenu.html',
        controller: 'mainCtrl'
      })
      .state('menu.search', {
        url: '/search',
        views: {
          'menuContent': {
            templateUrl: 'templates/search.html'
          }
        }
      })
      .state('menu.browse', {
        url: '/browse',
        views: {
          'menuContent': {
            templateUrl: 'templates/browse.html'
          }
        }
      });
      $urlRouterProvider.otherwise('/menu/search');
    });

})();
