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
            var max = _.max(Resource.playlists, function(item) { return item.id; });
            $scope.showForm = false;
            $scope.createList = function(name){
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