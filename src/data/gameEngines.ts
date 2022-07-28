export interface GameEngine {
  name: string,
  website: string,
  logo: string,
}

export const Unity: GameEngine = {
  name: "Unity",
  website: "https://unity.com/",
  logo: "https://thumbs.bfldr.com/at/rrtps8nmcpsxq5jqgt9ff5?expiry=1659615455&fit=bounds&height=162&sig=MWQ1YTcyMzA1OTJjOThlMjc5MmQ2NTgyYjQ0MjhhYmE4ZTYwZmEyMw%3D%3D&width=262"
}

export const Construct3: GameEngine = {
  name: "Construct 3",
  website: "https://www.construct.net/",
  logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/Construct_3_Logo.svg"
}

export const Pygame: GameEngine = {
  name: "Pygame",
  website: "https://www.pygame.org/",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pygame_logo.svg/2560px-Pygame_logo.svg.png"
}

export default {};