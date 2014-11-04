// Playlist Controller

Spotify.controller('CreateNewPlaylistController', function ($scope) {
    $scope.playlists = Resource.playlists;
    var create = function () {
        console.log('asdasd')
    };

    $scope.create = create;
});

Spotify.controller('PlaylistDetailController', function ($scope, $routeParams, AudioControl) {
    $scope.list = Resource.playlist_detail[$routeParams.id];

    $scope.idSelectedTrack = null;
    $scope.idPlayingTrack = null;
    $scope.setSelected = function (id) {
        $scope.idSelectedTrack = id;
    };

    $scope.play = function(id){
        AudioControl.play(id);
        $scope.idPlayingTrack = id;
    }
});