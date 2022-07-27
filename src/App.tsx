import { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faVideo } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import IconLink from './components/IconLink';
import games from './data/games';
import profileImage from './profile-image.jpg';

import './App.css';

function App() {
  const [selected, setGame] = useState(games[0]);

  const updateSelectedGame = (newSelected: number) => {
    setGame(games[newSelected]);
    const children = document.querySelector("#games-menu")?.children;
    if (children) {
      for (let i=0; i<children?.length; i++) {
        children[i].classList.remove("selected")
        if (i === newSelected)
        children[i].classList.add("selected")
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-7xl">Hi,</h1>
        <div className="flex flex-col md:flex-row items-center">
          <h2 className="text-5xl max-w-4xl">I am <span className="font-semibold">Junrick Bation</span>, a developer who loves game development and learning new things.</h2>
          <img src={profileImage} className="rounded-full m-12"/>
        </div>
      </header>
      
      <div className="min-h-screen min-w-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl mb-12">SKILLS</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-2xl mb-4">LANGUAGES</h4>
            <div className="text-lg">
              <h6>C++</h6>
              <h6>C#</h6>
              <h6>Python</h6>
              <h6>Javascript</h6>
              <h6>Typescript</h6>
            </div>
          </div>
          <div>
            <h4 className="text-2xl mb-4">ENGINES/FRAMEWORKS</h4>
            <div className="text-lg">
              <a href="https://unity.com/">Unity</a>
              <a href="https://www.unrealengine.com/">Unreal 5</a>
              <a href="https://godotengine.org/">Godot</a>
              <a href="https://www.pygame.org/">Pygame</a>
              <a href="https://reactjs.org/">React</a>
              <a href="https://vuejs.org/">Vue.js</a>
            </div>
          </div>
          <div>
            <h4 className="text-2xl mb-4">OTHERS</h4>
            <div className="text-lg">
              <h6>Git & Github</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen min-w-screen flex flex-col justify-center items-center games-section">
        <div className="w-6/12">
          <h1 className="text-5xl mb-12">FEATURED WORKS</h1>
          <div className="flex flex-row justify-evenly mb-12" id="games-menu">
            {
              games.map((game, idx) =>
                <h4
                  key={idx}
                  className={`text-2xl nav-item ${idx===0?"selected":""}`}
                  onClick={() => updateSelectedGame(idx)}
                >
                  {game.title}
                </h4>
              )
            }
          </div>
          <div className="flex flex-col md:flex-row max-w-7xl">
            <div className="mr-12 w-full">
              <img src={selected.image} />
            </div>
            <div className="flex flex-col justify-evenly items-center">
            <div className="text-xl font-semibold">
                {selected.genre}
              </div>
              <div className="text-lg">
                {selected.description}
              </div>
              <div>
                {
                  selected.buildUrl?
                    <IconLink icon={faPlay} url={selected.buildUrl} label={"Play " + selected.title} />
                  : null
                }
                {
                  selected.videoUrl?
                    <IconLink icon={faVideo} url={selected.videoUrl} label="Video Showcase" />
                  : null
                }
                {
                  selected.sourceCodeUrl?
                    <IconLink icon={faGithub} url={selected.sourceCodeUrl} label="Source Code" />
                  : null
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
