/*
    Author : technovators
    File   : app.js
    Details: Application Config for application.
    Email  : technovators.msd@gmail.com
*/
  var app = angular.module('ucbApp', [ 'ui.router', 'ngAnimate', 'ngMaterial']);
  
  app.run(
  [          '$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
	 $rootScope.$on('$stateChangeStart', function(evt, to, params) {
      if (to.redirectTo) {
        evt.preventDefault();
        $state.go(to.redirectTo, params)
      }
    });
    }
  ]
)
.config(
  [          '$stateProvider', '$urlRouterProvider', '$mdThemingProvider', 
    function ($stateProvider,   $urlRouterProvider, $mdThemingProvider) {

		$mdThemingProvider.alwaysWatchTheme(true);
    $mdThemingProvider.setDefaultTheme('default');
	  $mdThemingProvider.theme('default')
          .primaryPalette('indigo');
    $mdThemingProvider.theme('pink')
          .primaryPalette('pink');
    $mdThemingProvider.theme('purple')
          .primaryPalette('purple');
    $mdThemingProvider.theme('green')
          .primaryPalette('green');
    $mdThemingProvider.theme('brown')
          .primaryPalette('brown');
    $mdThemingProvider.theme('grey')
          .primaryPalette('grey');
    $mdThemingProvider.theme('indigo')
          .primaryPalette('indigo');
          
      $urlRouterProvider
          .when('/', '/menu')
          .otherwise('/menu');

      $stateProvider
		  .state('menu', {
            url: '/menu',
            templateUrl: 'views/menu/menu.html',
			      controller: 'menuCtrl',
			onEnter: function () { console.log("enter menuCtrl.html"); }
		  })
      .state('home', {
            url: '/home',
            templateUrl: 'views/home/home.html',
      controller: 'homeCtrl',
      onEnter: function () { console.log("enter home.html"); }
      })
      .state('login', {
            url: '/login',
            templateUrl: 'views/login/login.html',
      controller: 'loginCtrl',
      onEnter: function () { console.log("enter login.html"); }
      });//
    }
  ]
);









