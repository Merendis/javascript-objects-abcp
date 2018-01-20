var playlist = {'Phil Ochs': 'Slowdrive'};

function updatePlaylist(playlistobj, artist, song){
  return Object.assign({}, playlistobj, {[artist]: song } )
  playlistobj;
}

updatePlaylist(playlist, "Phil Ochs", "Slowdrive");

function removeFromPlaylist(playlistobj, artist){
  return delete playlistobj[`${artist}`]
  playlistobj;
}

