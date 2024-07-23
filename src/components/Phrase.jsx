const Phrase = ({phraseSelect}) => {
    console.log(phraseSelect)
  return <p className="text-xl text-center font-semibold mb-6">{phraseSelect.phrase}</p>
}

export default Phrase