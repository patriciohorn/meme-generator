import { useState } from 'react';
import memesData from '../memesData';

export default function Meme() {
  const [memeImage, setMemeImage] = useState('');

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomIndex = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomIndex].url);
  }
  return (
    <main>
      <div className="container">
        <div className="form">
          <div className="form--field">
            <label className="form--label">Top text</label>
            <input className="form--input" id="top-text" type="text" placeholder="Shut up"></input>
          </div>

          <div className="form--field">
            <label className="form--label">Bottom Text</label>
            <input
              className="form--input"
              id="bottom-text"
              type="text"
              placeholder="And take my money"></input>
          </div>

          <button onClick={getMemeImage} className="form--button">
            Get a new meme image 🖼️
          </button>
        </div>
        <div>
          <img src={memeImage} />
        </div>
      </div>
    </main>
  );
}
