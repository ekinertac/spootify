var Spotify = angular.module('Spotify', [
    'ngRoute',
    'Spotify.Directives',
    'Spotify.Utils',
    'zj.namedRoutes'
]);

Spotify.config(function ($interpolateProvider, $routeProvider, $locationProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');

    if (window.history && window.history.pushState) {
        $locationProvider.html5Mode(true);
    }

    $routeProvider
        .when('/playlist/:id', {
            templateUrl: '/static/app/views/PlaylistDetail.html',
            controller: 'PlaylistDetailController',
            name: 'playlist-detail'
        })
});


