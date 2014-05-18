angular.module('mvms', ['mvmsController', 'mvmsService', 'mvmsDirective', 'ui.bootstrap.modal', 'ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/channelManage', {
        templateUrl: '/static/mvms/partials/channelManage.html', 
        controller: 'channelManageCtrl'
      })
      .when('/columnManage/:cate_code', {
        templateUrl: '/static/mvms/partials/columnManage.html', 
        controller: 'columnManageCtrl'
      })
      .when('/content/:column_id', {
        templateUrl: '/static/mvms/partials/video.html', 
        controller: 'videoCtrl'
      })
      .when('/others/firstStartManage', {
        templateUrl: '/static/mvms/partials/firstStart.html', 
        controller: 'firstStartManageCtrl'
      })
      .when('/others/pluginManage', {
        templateUrl: '/static/mvms/partials/pluginManage.html', 
        controller: 'pluginManageCtrl'
      })
      .when('/appManage/pics', {
        templateUrl: '/static/mvms/partials/appList.html', 
        controller: 'appPicsCtrl'
      })
      .when('/appManage/list', {
        templateUrl: '/static/mvms/partials/appList.html', 
        controller: 'appListCtrl'
      })
      .when('/', {
        templateUrl: '/static/mvms/partials/root.html',
        controller: 'rootCtrl'
      });
    
    $locationProvider.html5Mode(true);
  });
