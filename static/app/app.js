var Resources = {
    playlists: [
        {name: 'Tribute to Metallica', owner: 'Javi Salinas', id: 0},
        {name: 'Solitary Ride', owner: 'Spotify', id: 1},
        {name: 'Sekizbit', owner: 'Ekin Ertaç', id: 2},
        {name: 'Adrelanline Workout', owner: 'Spotify', id: 3}
    ],
    playlist_detail: {
        0: {
            'artist': 'Various Artists',
            'name': 'Tribute to Metallica',
            'owner': {
                'name': 'Javi Salinas',
                'id': 2
            },
            'tracks': [
                {title: 'Whiplash', artist: 'Motörhead', time: '4:25'},
                {title: 'One', artist: 'Crematory', time: '4:25'},
                {title: 'Damage, Inc.', artist: 'Floatsam & Jetsam', time: '4:25'},
                {title: 'Holier Than Thou', artist: 'Testament', time: '4:25'},
                {title: 'Master Of Puppets', artist: 'Ugly Kid Joe', time: '4:25'},
                {title: 'Creeping Death', artist: 'Dark Angel', time: '4:25'},
                {title: 'Eye of the Beholder', artist: 'In Flames', time: '4:25'}
            ]
        }
    }
};


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


