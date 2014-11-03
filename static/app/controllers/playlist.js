// Playlist Controller

Spotify.controller('CreateNewPlaylistController', function ($scope) {
    $scope.playlists = Resource.playlists;
    var create = function(){
        console.log('asdasd')
    };

    $scope.create = create;
});