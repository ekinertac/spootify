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
    {title: 'Whiplash', artist: 'Motörhead', time: '4:25'},
    {title: 'One', artist: 'Crematory', time: '4:25'},
    {title: 'Damage, Inc.', artist: 'Floatsam & Jetsam', time: '4:25'},
    {title: 'Holier Than Thou', artist: 'Testament', time: '4:25'},
    {title: 'Master Of Puppets', artist: 'Ugly Kid Joe', time: '4:25'},
    {title: 'Creeping Death', artist: 'Dark Angel', time: '4:25'},
    {title: 'Eye of the Beholder', artist: 'In Flames', time: '4:25'}
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