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
  // Add at least five more songs
  { title: "Bohemian Rhapsody", artist: "Queen", genre: "Classic Rock" },
  { title: "Thriller", artist: "Michael Jackson", genre: "Pop" },
  {
    title: "Stairway to Heaven",
    artist: "Led Zeppelin",
    genre: "Classic Rock",
  },
  {
    title: "Girls Just Want to Have Fun",
    artist: "Cyndi Lauper",
    genre: "80s Pop",
  },
  { title: "Sweet Child o' Mine", artist: "Guns N' Roses", genre: "80s Pop" },
  { title: "Smells Like Teen Spirit", artist: "Nirvana", genre: "Grunge" },
  { title: "Hotel California", artist: "Eagles", genre: "Classic Rock" },
  { title: "Breaking the Law", artist: "Judas Priest", genre: "Heavy Metal" },
  { title: "Ace of Spades", artist: "Motörhead", genre: "Heavy Metal" },
  { title: "Take On Me", artist: "a-ha", genre: "80s Pop" },
  { title: "Wake Me Up Before You Go-Go", artist: "Wham!", genre: "80s Pop" },
  { title: "Master of Puppets", artist: "Metallica", genre: "Heavy Metal" },
  { title: "Breaking the Law", artist: "Judas Priest", genre: "Heavy Metal" },
  { title: "Comfortably Numb", artist: "Pink Floyd", genre: "Classic Rock" },
  { title: "Dream On", artist: "Aerosmith", genre: "Classic Rock" },
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
    playlistElement.classList.add("playlist");
    playlistElement.innerHTML = `<h2>${guardianName}'s ${preferredGenre} Playlist:</h2>`;

    if (filteredSongs.length > 0) {
      const playlistList = document.createElement("ul");
      filteredSongs.forEach((song) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<span class='song-title'> ${song.title}</span> by ${song.artist}`;
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
