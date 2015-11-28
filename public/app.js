/*
    Author : technovators
    File   : app.js
    Details: Application Config for application.
    Email  : technovators.msd@gmail.com
*/
  var app = angular.module('ucbApp', [ 'ui.router', 'ngAnimate', 'ngMaterial', 'uiGmapgoogle-maps']);
	app.run(['$rootScope', '$state', '$stateParams',
			function ($rootScope, $state, $stateParams) {
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
	.config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', 'uiGmapGoogleMapApiProvider',
    function ($stateProvider,   $urlRouterProvider, $mdThemingProvider, $uiGmapGoogleMapApiProvider) {
		$uiGmapGoogleMapApiProvider.configure({
        });
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
			.when('/', '/home')
			.otherwise('/home');
		$stateProvider
/* 			.state('login', {
				url: '/login',
				templateUrl: 'views/login/login.html',
				controller: 'loginCtrl',
				onEnter: function () { console.log("enter login.html"); }
			}) */
			.state('menu', {
				url: '/menu',
				templateUrl: 'views/menu/menu.html',
				redirectTo: 'menu.home',
				controller: 'menuCtrl',
				onEnter: function () { console.log("enter menuCtrl.html"); }
			  })
			.state('home', {
				url: '/home',
				templateUrl: 'views/home/home.html',
				controller: 'homeCtrl',
				onEnter: function () { console.log("enter home.html"); }
			})
			.state('points', {
				url: '/points',
				templateUrl: 'views/points/points.html',
				controller: 'pointsCtrl',
				onEnter: function () { console.log("enter points.html"); }
			})
			.state('checkin', {
				url: '/checkin',
				templateUrl: 'views/checkin/checkin.html',
				controller: 'checkinCtrl',
				onEnter: function () { console.log("enter checkin.html"); }
			})
			.state('selfiecheckin', {
				url: '/selfiecheckin',
				templateUrl: 'views/submitSelfiEvent/submitSelfiEvent.html',
				controller: 'submitSelfiEventCtrl',
				onEnter: function () { console.log("enter submitSelfiEventCtrl.html"); }
			})
			.state('events', {
				url: '/events',
				templateUrl: 'views/events/events.html',
				controller: 'eventsCtrl',
				onEnter: function () { console.log("enter events.html"); }
			})
			.state('ucbMembers', {
				url: '/ucbMembers',
				templateUrl: 'views/ucbMembers/ucbMembers.html',
				controller: 'ucbMembersCtrl',
				onEnter: function () { console.log("enter ucbMembers.html"); }
			})
			.state('carpool', {
				url: '/carpool',
				templateUrl: 'views/carpool/carpool.html',
				controller: 'carpoolCtrl',
				onEnter: function () { console.log("enter carpool.html"); }
			})
			.state('contactUs', {
				url: '/contactUs',
				templateUrl: 'views/contactUs/contactUs.html',
				controller: 'contactUsCtrl',
				onEnter: function () { console.log("enter contactUs.html"); }
			})
			.state('profile', {
				url: '/profile',
				templateUrl: 'views/profile/profile.html',
				controller: 'profileCtrl',
				onEnter: function () { console.log("enter profile.html"); }
			})
			.state('editProfile', {
				url: '/editProfile',
				templateUrl: 'views/editProfile/editProfile.html',
				controller: 'editProfileCtrl',
				onEnter: function () { console.log("enter editProfile.html"); }
			})
			.state('message', {
				url: '/message',
				templateUrl: 'views/message/message.html',
				controller: 'messageCtrl',
				onEnter: function () { console.log("enter message.html"); }
			})
			.state('friends', {
				url: '/friends',
				templateUrl: 'views/friends/friends.html',
				controller: 'friendsCtrl',
				onEnter: function () { console.log("enter friends.html"); }
			})
			.state('friendRequest', {
				url: '/friendRequest',
				templateUrl: 'views/friendRequest/friendRequest.html',
				controller: 'friendRequestCtrl',
				onEnter: function () { console.log("enter friendRequest.html"); }
			})
			.state('myPhotos', {
				url: '/myPhotos',
				templateUrl: 'views/myPhotos/myPhotos.html',
				controller: 'myPhotosCtrl',
				onEnter: function () { console.log("enter myPhotos.html"); }
			})
			.state('history', {
				url: '/history',
				templateUrl: 'views/history/history.html',
				controller: 'historyCtrl',
				onEnter: function () { console.log("enter myPhotos.html"); }
			})
			.state('login', {
				url: '/login',
				templateUrl: 'views/login/login.html',
				controller: 'loginCtrl',
				onEnter: function () { console.log("enter login.html"); }
			})
			.state('theme', {
				url: '/theme',
				templateUrl: 'views/theme/theme.html',
				controller: 'themeCtrl',
				onEnter: function () { console.log("enter theme.html"); }
			});//
		}
	]
);








