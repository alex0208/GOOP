'use strict';

angular
  .module('goopApp', [
    'ngRoute', 'ngResource'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/loading', {
        templateUrl: 'views/loading.html',
        controller: 'LoadingCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
      })
      .when('/signin', {
        templateUrl: 'views/signin.html',
        controller: 'SigninCtrl'
      })
      .when('/signout', {
        templateUrl: 'views/signout.html',
        controller: 'SignoutCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/new-project', {
        templateUrl: 'views/new-project.html',
        controller: 'NewProjectCtrl'
      })
      .when('/docs', {
        templateUrl: 'views/docs.html',
        controller: 'DocsCtrl'
      })
      .when('/classes', {
        templateUrl: 'views/classes/classes.html',
        controller: 'ClassesListCtrl'
      })
      .when('/classes/:id', {
        templateUrl: 'views/classes/class-detail.html',
        controller: 'ClassDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .run(function (Authentication, Application, $rootScope, $location, RouteFilter) {

    Authentication.requestUser().then(function() {

      Application.makeReady();
    });


    $rootScope.$on('$locationChangeStart', function(scope, next, current) {

      if($location.path() === '/loading') return;

      if(! Application.isReady())
      {
        $location.path('loading');
      }

      RouteFilter.run($location.path());
    })
  });
