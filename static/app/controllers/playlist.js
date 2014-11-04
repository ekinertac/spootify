// Playlist Controller

Spotify.controller('CreateNewPlaylistController', function ($scope) {
    $scope.playlists = Resource.playlists;
    var create = function () {
        console.log('asdasd')
    };

    $scope.create = create;
});

Spotify.controller('PlaylistDetailController', function ($scope, $rootScope, $routeParams, AudioControl) {
    $scope.list = Resource.playlist_detail[$routeParams.id];
    $rootScope.isPlaying = false;
    $scope.idSelectedTrack = null;
    $scope.idPlayingTrack = null;
    $scope.setSelected = function (id) {
        $scope.idSelectedTrack = id;
    };

    $scope.play = function (track) {
        AudioControl.play(track.file);
        $rootScope.isPlaying = true;
    }
});