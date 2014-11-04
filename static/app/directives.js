var wavesurfer = Object.create(WaveSurfer);
var waveOptions = {
    height: 50,
    container: '#waveform',
    waveColor: '#455F00',
    progressColor: '#84bd00'
};
var directives = angular.module('Spotify.Directives', []);

directives.directive('playlist', function () {
    return {
        restrict: 'A',
        scope: true,
        replace: true,
        templateUrl: '/static/app/directives/PlaylistView.html',
        controller: 'CreateNewPlaylistController'
    }
});

directives.directive('navigation', function () {
    return {
        restrict: 'A',
        scope: true,
        replace: true,
        templateUrl: '/static/app/directives/NavigationView.html',
        controller: function ($scope) {
            $scope.items = [
                {
                    'text': '<i class="fa fa-chevron-left">',
                    'click': '#'
                },
                {
                    'text': '<i class="fa fa-chevron-right">',
                    'click': '#'
                }
            ];
        }
    }
});

directives.directive('browsemenu', function () {
    return {
        restrict: 'A',
        scope: true,
        replace: true,
        templateUrl: '/static/app/directives/BrowseMenu.html',
        controller: function ($scope) {
            $scope.items = [
                {url: '#', name: 'Browse', icon: 'fa-archive'},
                {url: '#', name: 'Activity', icon: 'fa-users' },
                {url: '#', name: 'Radio', icon: 'fa-dot-circle-o' },
                {url: '#', name: 'Follow', icon: 'fa-user' },
                {url: '#', name: 'Top Lists', icon: 'fa-archive' },
                {url: '#', name: 'Messages', icon: 'fa-inbox' },
                {url: '#', name: 'Play Queue', icon: 'fa-bars' }
            ];
        }
    }
});

directives.directive('createplaylist', function () {
    return {
        restrict: 'A',
        scope: true,
        replace: true,
        templateUrl: '/static/app/directives/CreatePlaylist.html',
        controller: function ($scope, $element) {
            var max = _.max(Resource.playlists, function (item) {
                return item.id;
            });
            $scope.showForm = false;
            $scope.createList = function (name) {
                Resource.playlists.push({
                    name: name,
                    owner: 'Ekin Ertaç',
                    id: max.id + 1
                });
                $scope.showForm = false;
                angular.element($element).val('');
            }
        }
    }
});

directives.directive('footerPlayer', function () {
    return {
        restrict: 'A',
        scope: true,
        replace: true,
        templateUrl: '/static/app/directives/footerPlayer.html',
        controller: function ($scope, $rootScope, $element, AudioControl) {
            $rootScope.isPlaying = false;
            $scope.volume = 80;
            $scope.sliderConfig = {
                min: -1,
                max: 100,
                step: 1,
                value: $scope.volume
            };

            wavesurfer.init(waveOptions);
            wavesurfer.setVolume($scope.volume / 100);

            $scope.$watch(function(){
                wavesurfer.setVolume($scope.volume / 100)
            });

            $scope.playPause = function(){
                AudioControl.playPause();
                $rootScope.isPlaying = !$rootScope.isPlaying;
            }
        }
    }
});

