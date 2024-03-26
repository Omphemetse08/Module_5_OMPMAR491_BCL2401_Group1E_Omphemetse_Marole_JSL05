// Array of song objects
const songs = [
  { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
  { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
  { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
  { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
  { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
  {
    title: "Escape (The Piña Colada Song)",
    artist: "Rupert Holmes",
    genre: "Pop",
  },
  { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
  {
    title: "Ain't No Mountain High Enough",
    artist: "Marvin Gaye & Tammi Terrell",
    genre: "R&B",
  },
  { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
  { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
  {
    title: "Fooled Around and Fell in Love",
    artist: "Elvin Bishop",
    genre: "Rock",
  },
  // Feel free to add even more songs
];

// Object containing each Guardian's preferred genre
const guardians = {
  "Star-Lord": "Rock",
  Gamora: "Pop",
  Drax: "Classic Rock", // Added preferences for Drax
  Rocket: "80s Pop", // Added preferences for Rocket
  Groot: "Heavy Metal", // Added preferences for Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
  for (const guardianName in guardians) {
    const preferredGenre = guardians[guardianName];
    const filteredSongs = songs.filter((song) => song.genre === preferredGenre);

    // Check if any songs match the preferred genre
    if (filteredSongs.length > 0) {
      const playlist = filteredSongs.map(
        (song) => `${song.title} by ${song.artist}`
      );
      console.log(
        `${guardianName}'s ${preferredGenre} Playlist: ${playlist.join(", ")}`
      );
    } else {
      console.log(
        `${guardianName} doesn't have any songs in their preferred genre.`
      );
    }
  }
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
