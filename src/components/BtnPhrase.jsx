import getRandomNumbers from "../utils/getRandomNumbers";
import quotes from '../data/phrases.json';
import photos from '../data/photos.json';


const BtnPhrase = ({setPhraseSelect, setBgSelect}) => {
    const changePhrase = () => {
        const indexRandom = getRandomNumbers(quotes.length);
        const phraseRandom = quotes[indexRandom];
        setPhraseSelect(phraseRandom);
        setBgSelect(phraseRandom);
        setBgSelect(photos[getRandomNumbers(photos.length)]);
    }
  return <button className="hover:scale-125 transition-transform cursor-pointer ml-auto block bg-indigo-900 py-2 px-4 rounded-xl text-white border-white border-2" onClick={changePhrase}>Cambiar galleta</button>;
}

export default BtnPhrase;