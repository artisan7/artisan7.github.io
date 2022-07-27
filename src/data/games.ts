interface GameDetails {
  title: string,
  genre: string,
  description: string,
  image: string,
  buildUrl?: string,
  sourceCodeUrl?: string,
  videoUrl?: string,
}

const games : GameDetails[] = [
  {
    title: "Defendor",
    genre: "Realtime Card Strategy",
    description: "Defendor is a deckbuilder where the player's goal is to survive for as long as they can while fighting against enemies and advancing through the stages. Developed in 48 hours during the Ludum Dare 50 Game Jam with the theme 'Delay the inevitable'",
    image: "https://img.itch.zone/aW1nLzg1NzM5NzYucG5n/315x250%23c/aDXKme.png",
    buildUrl: "https://godkah.itch.io/defendor",
    sourceCodeUrl: "https://github.com/artisan7/LudumDare50",
  },
  {
    title: "Knife Parkour",
    genre: "Rage Game",
    description: "Knife Parkour (to the Moon) is a game where the player tries to fling a knife through different obstacles until they reach the top. This game is meant to anger the player. Made in 10 days for a school Game Jam.",
    image: "https://img.itch.zone/aW1nLzc2NzUzNjMucG5n/315x250%23c/0U05FT.png",
    buildUrl: "https://godkah.itch.io/knife-parkour",
  },
  {
    title: "Janken",
    genre: "Rock Paper Scissors using your Webcam",
    description: "Play rock paper scissors against an AI opponent with the using hand gestures captured on your webcam. This game is made as a proof-of-concept so there is no build that can be played immediately.",
    image: "https://img.itch.zone/aW1nLzg1NzM5NzYucG5n/315x250%23c/aDXKme.png",
    sourceCodeUrl: "https://github.com/artisan7/tsunomaki-janken-oncam",
  }
]

export default games;