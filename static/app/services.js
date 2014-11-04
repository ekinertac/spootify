Spotify.factory('AudioControl', function () {
    return {
        play: function (path) {

            wavesurfer.load(path);

            wavesurfer.on('ready', function () {
                wavesurfer.play();
            });

        },
        playPause: function(){
            wavesurfer.playPause();
        },
        stop: function (trackID) {
            console.log('# ' + trackID + ' is stopped.')
        },
        pause: function (trackID) {
            console.log('# ' + trackID + ' is paused.')
        }
    }
});