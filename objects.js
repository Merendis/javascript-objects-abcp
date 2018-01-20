var playlist = {};

function updatePlaylist(playlistobj, artist, song){
  Object.assign({}, playlistobj, {[artist]: song } )
  playlistobj;
}

updatePlaylist(playlist, "Phil Ochs", "Slowdrive");

function removeFromPlaylist(playlistobj, artist){
  return delete playlistobj[`${artist}`]
  return playlistobj;
}

