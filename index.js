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
  { title: "Bohemian Rhapsody", artist: "Queen", genre: "Classic Rock" }, // Added new song
  {
    title: "Sweet Child o' Mine",
    artist: "Guns N' Roses",
    genre: "Classic Rock",
  }, // Added new song
  { title: "Thriller", artist: "Michael Jackson", genre: "Pop" }, // Added new song
  { title: "Livin' on a Prayer", artist: "Bon Jovi", genre: "80s Pop" }, // Added new song
  { title: "Master of Puppets", artist: "Metallica", genre: "Heavy Metal" }, // Added new song
];

// Object containing each Guardian's preferred genre
const guardians = {
  "Star-Lord": "Rock",
  Gamora: "Pop",
  Drax: "Classic Rock",
  Rocket: "80s Pop",
  Groot: "Heavy Metal",
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
  const playlistsDiv = document.getElementById("playlists");

  for (const guardianName in guardians) {
    const preferredGenre = guardians[guardianName];
    const filteredSongs = songs.filter((song) => song.genre === preferredGenre);

    const playlistElement = document.createElement("div");
    playlistElement.innerHTML = `<h2>${guardianName}'s ${preferredGenre} Playlist:</h2>`;

    if (filteredSongs.length > 0) {
      const playlistList = document.createElement("ul");
      filteredSongs.forEach((song) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${song.title} by ${song.artist}`;
        playlistList.appendChild(listItem);
      });
      playlistElement.appendChild(playlistList);
    } else {
      playlistElement.textContent = `${guardianName} doesn't have any songs in their preferred genre.`;
    }

    playlistsDiv.appendChild(playlistElement);
  }
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
