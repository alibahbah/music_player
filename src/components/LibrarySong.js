import React from "react";

const LibrarySong = ({ song, songs, setCurrentSong, audioRef, isPlaying }) => {
  //Event Handlers
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    //Add active state
    const newSongs = songs.map((song) => {
      song.active = false;
    });
    song.active = !song.active;
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
