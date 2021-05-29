const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  },
  printPlaylistDetail: function(){console.log(this.playlists,`: ${this.playlists} - ${this.playlists[this.playlists]} tracks`)},


};
library.printPlaylistDetail()
/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylistDetail = function(musicLibrary, playlist) {
  console.log(`${playlist}: ${musicLibrary.playlists[playlist]["name"]} - ${musicLibrary.playlists[playlist]["tracks"].length} tracks`);

};


const printPlaylists = function(musicLibrary) {
  for (let playlist in musicLibrary['playlists']) {
    printPlaylistDetail(musicLibrary, playlist);
  }


};
// printPlaylists(library);

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTrackDetail = function(musicLibrary, track) {
  console.log(`${track}: ${musicLibrary.tracks[track]['name']} by ${musicLibrary.tracks[track]['artist']} (${musicLibrary.tracks[track]['album']})`);

};

const printTracks = function(musicLibrary) {
  for (let track in musicLibrary['tracks']) {
    printTrackDetail(musicLibrary, track);

  }

};

// printTracks(library);


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  printPlaylistDetail(library, playlistId);
  for (let track of library.playlists[playlistId].tracks) {
    printTrackDetail(library, track);

  }

};

//printPlaylist("p02")

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {

  library.playlists[playlistId].tracks.push(trackId);
  return library.playlists[playlistId].tracks;

};



//console.log(addTrackToPlaylist("t01", "p01"))


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library

const addTrack = function(name, artist, album) {
  const gid = generateUid();
  const newTrack = {
    id: gid,
    name: name,
    artist: artist,
    album: album
  };
  library.tracks[gid] = newTrack;


};

// addTrack("Joy","ban","yo");
//console.log(library.tracks)


// adds a playlist to the library
const addPlaylist = function(name) {
  const gid = generateUid();
  const newPlaylist = {
    id: gid,
    name: name,
    tracks:[]
  
  };
  library.playlists[gid] = newPlaylist;

};
// addPlaylist("ye")
//console.log(library.playlists)


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

  for (let value in library.tracks) {
    if (library.tracks[value].name.includes(query)) {
      console.log(value);
    }
    
  }
};

//printSearchResults("M");