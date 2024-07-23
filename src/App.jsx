import { useState } from 'react';
import './App.css'
import quotes from './data/phrases.json';
import getRandomNumbers from './utils/getRandomNumbers';
import Phrase from './components/Phrase';
import BtnPhrase from './components/BtnPhrase';
import photos from './data/photos.json'

function App() {
  console.log(quotes);
  const indexRandom = getRandomNumbers(quotes.length);
  const [phraseSelect, setPhraseSelect] = useState(quotes[indexRandom]);
  const [bgSelect, setBgSelect] = useState(photos[getRandomNumbers(photos.length)]);  

  const objStyles = {
    backgroundImage: `url(/img/fondo${bgSelect}.png)` 
  };

  return (
    <div style={objStyles} className="min-h-screen bg-cover bg-center flex justify-center items-center px-4">
      <h1 className="text-5xl text-left text-white absolute top-20 uppercase font-black drop-shadow-lg stroke">🥠🥠 Galleta de la Fortuna 🥠🥠</h1>
      <article className="max-w-[400px] bg-white p-6 rounded-xl shadow-2xl font-semibold border-indigo-950 border-2"><Phrase phraseSelect = {phraseSelect}/>
      <p className='bg-indigo-950/80 text-right text-white font-semibold rounded-lg'>{phraseSelect.author}</p>
      </article>
      <footer className='absolute bottom-20 p-5 rounded-lg text-white font-semibold'>
      <BtnPhrase setPhraseSelect={setPhraseSelect}
      setBgSelect={setBgSelect}
      /> 
      <img src="/public/img1/cookie.png" alt="ImgCoockie" className='absolute object-left-bottom h-20' />
      </footer>
    </div>
  )
}

export default App
