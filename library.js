const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
  for (let index in library.playlists) { // Iterate through playlists
    let eachList = library.playlists[index];
    console.log(`${eachList.id}: ${eachList.name} - ${eachList.tracks.length} tracks`);
  }
}

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
  for (let index in library.tracks) {
    let track = library.tracks[index];
    console.log(`${index}: ${track.name} by ${track.artist} (${track.album})`);
  }
}

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  let playlist = library.playlists;
  let playlistSuccess = false;
  
  for (let index in playlist) {
    
    if (playlist[index].id === playlistId) { // Check if playlist exists
      console.log(`${playlistId}: ${playlist[index].name} - ${playlist[index].tracks.length} tracks`);
      for (let count of playlist[index].tracks) { // Iterate through tracks
        let track = library.tracks[count];
        console.log(`${count}: ${track.name} by ${track.artist} (${track.album})`);
        playlistSuccess = true;
      }
    }
  }
  if (!playlistSuccess) {
    console.log(`Playlist ${playlistId} does not exist.`)
  } 
}

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  let playlist = library.playlists;
  let tracks = library.tracks;
  let trackSuccess = false;
  let playlistSuccess = false;

  for (let index in tracks) {
    if (tracks[index].id === trackId) { // Check if track exists
      trackSuccess = true;
    }
  }
  if (!trackSuccess) {
    console.log(`Track ${trackId} does not exist.`)
  } else {
    for (let index in playlist) {
    
      if (playlist[index].id === playlistId) { // Check if playlist exists
        playlistSuccess = true;
  
        for (let track of playlist[index].tracks) {
  
          if (track === trackId) { // Make sure not to add a duplicate track
            console.log(`Track ${trackId} already exists in playlist ${playlistId}`);
            trackSuccess = false;
          }        
        }
        if (trackSuccess) {
          // All validations were successfull. Add track to playlist
          playlist[index].tracks.push(trackId);
          console.log(`Track ${trackId} added to playlist ${playlistId}`);
        }
      }
    }  
    if (!playlistSuccess) {
      console.log(`Playlist ${playlistId} does not exist.`)
    }
  }
}

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {
  let newTrack = 't0' + (Object.keys(library.tracks).length + 1);

  library.tracks[newTrack] = {
    id: generateUid(),
    name: name,
    artist: artist,
    album: album
  }
  console.log(library.tracks);
}
addTrack('Musica', 'Artista', 'CD');

// adds a playlist to the library
const addPlaylist = function(name) {

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}