'use strict';

// Register our Sidebar module
var Sidebar = angular.module('Sidebar', []);

// Configure interpolators
Sidebar.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});


// Server-side talking logic
Sidebar.factory('Server', function($http){
    // Playlist is a class which we can  use for retrieving and
    // updating playlist data on the server
    return {
        getAll: function(){
            return $http.get('/playlist/list');
        },
        get: function(id){
            return $http.get('/playlist/get/' + id);
        }
    }
});


Sidebar.controller('Playlists', function($scope, $http, Server){

    Server.getAll().success(function (re) {
        $scope.playlists = re;
    });

    $scope.show = false;

    $scope.getPlaylist = function(id){
        Server.get(id).success(function(re){
            $scope.tracks = re.tracks;
            $scope.show = true;
        });
    }

});