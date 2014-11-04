Spotify.factory('AudioControl', function(){
    return {
        play: function(trackID){
            console.log('# ' + trackID + ' is playing.')
        },
        stop: function(trackID){
            console.log('# ' + trackID + ' is stopped.')
        },
        pause: function(trackID){
            console.log('# ' + trackID + ' is paused.')
        },
        next: function(trackID){
            console.log('# ' + trackID + ' is skipped to next.')
        },
        prev: function(trackID){
            console.log('# ' + trackID + ' is skipped to prev.')
        }
    }
});