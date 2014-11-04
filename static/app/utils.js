var Utils = angular.module('Spotify.Utils', []);

Utils.directive("slider", function () {
    return {
        restrict: 'A',
        scope: {
            config: "=config",
            value: "=model"
        },
        link: function (scope, elem, attrs) {
            var setModel = function (value) {
                scope.model = value;
            };

            $(elem).slider({
                range: 'min',
                min: scope.config.min,
                max: scope.config.max,
                step: scope.config.step,
                value: scope.config.value,
                slide: function (event, ui) {
                    scope.$apply(function () {
                        scope.value = ui.value;
                    });
                }
            });
        }
    }
});