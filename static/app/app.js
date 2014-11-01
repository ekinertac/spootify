var Spotify = angular.module('Spotify', ['ngRoute']);

Spotify.config(function ($interpolateProvider, $routeProvider) {

    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');

//    $routeProvider
//        .when('/', {controller: 'IndexController'})
//        .when('/playlist/detail/:id', {controller: 'PlayListDetailController'})
//        .otherwise({redirectTo: '/'});

});


Spotify.controller('IndexController', function ($scope) {
    $scope.playlists = Resources.playlists;
    $scope.showPlaylist = false;
    $scope.sortBy = 'title';
    $scope.reverse = false;

    $scope.OpenPlayList = function (id) {
        $scope.playlist = Resources.playlist_detail[id];
        $scope.tracks = Resources.playlist_detail[id]['tracks'];
        $scope.showPlaylist = true;
    };

    $scope.ClosePlayList = function () {
        $scope.showPlaylist = false;
    };

});

Spotify.controller('PlayListDetailController', function ($scope, $routeParams) {
    $scope.playlist = Resources.playlist_detail[$routeParams.id];
    console.log(Resources.playlist_detail[$routeParams.id]);
});


