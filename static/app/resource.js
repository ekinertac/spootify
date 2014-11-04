var Artists = {
    0: {name: 'Motörhead'},
    1: {name: 'Crematory'},
    2: {name: 'Floatsam & Jetsam'},
    3: {name: 'Testament'},
    4: {name: 'Ugly Kid Joe'},
    5: {name: 'Dark Angel'},
    6: {name: 'In Flames'}
};

var Tracks = [
    {title: 'Whiplash', artist: Artists[0], time: '4:25', id:0},
    {title: 'One', artist: Artists[1], time: '4:25', id:1},
    {title: 'Damage, Inc.', artist: Artists[2], time: '4:25', id:2},
    {title: 'Holier Than Thou', artist: Artists[3], time: '4:25', id:3},
    {title: 'Master Of Puppets', artist: Artists[4], time: '4:25', id:4},
    {title: 'Creeping Death', artist: Artists[5], time: '4:25', id:5},
    {title: 'Eye of the Beholder', artist: Artists[6], time: '4:25', id:6}
];

var Resource = {
    playlists: [
        {title: 'Tribute to Metallica', owner: 'Javi Salinas', id: 0},
        {title: 'Solitary Ride', owner: 'Spotify', id: 1},
        {title: 'Sekizbit', owner: 'Ekin Ertaç', id: 2},
        {title: 'Adrelanline Workout', owner: 'Spotify', id: 3}
    ],
    playlist_detail: {
        0: {
            'title': 'Tribute to Metallica',
            'owner': {
                'name': 'Javi Salinas',
                'id': 2
            },
            tracks: [Tracks[2], Tracks[3], Tracks[4]]
        }
    }
};