import {useState} from 'react'
import './App.css';
import Header from './components/Header'
import Status from './components/Status'
import Chips from './components/Chips'
import { languages } from "./components/languages";
import {clsx} from 'clsx';

/**
 * Goal: Add in the incorrect guesses mechanism to the game
 * 
 * Challenge:
 * Conditionally render either the "won" or "lost" statuses
 * from the design, both the text and the styles, based on the
 * new derived variables.
 * 
 * Note: We always want the surrounding `section` to be rendered,
 * so only change the content inside that section. Otherwise the
 * content on the page would jump around a bit too much.
 */

function App() {
  //State values
  const [currentWord, setCurrentWord] = useState('react');
  const [guessed, setGuessed] = useState([]);

  //derived values
  const wrongGuessCount = guessed.filter(l => !currentWord.includes(l.toLowerCase())).length //.length;
  //console.log("wrong count: ", wrongGuessCount)
  const isGameOver = wrongGuessCount >= languages.length-1 ? true : false;
  const isGameWon = currentWord.split("").every(l => guessed.includes(l.toUpperCase())); 
  const isGameLost = isGameWon || isGameOver

  console.log('won the game: ', isGameWon)

  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  function addGuessed(letter){
    setGuessed(prev => { 
      const letterSet = new Set(prev);
      letterSet.add(letter)
      return Array.from(letterSet)
     })
    
  }

  const keyboard = alphabet.toUpperCase().split('').map((l, index) => {
    const isGuessed = guessed.includes(l)
    //console.log(isGuessed)
    const isCorrect = isGuessed && currentWord.includes(l.toLowerCase())
    //console.log(isCorrect)
    const isWrong = isGuessed && !currentWord.includes(l.toLowerCase())
    const className = clsx(isCorrect && 'correct', isWrong && 'wrong')
    //console.log(className)

    return (
      <button className={className}
      onClick = {() => addGuessed(l)} key={l} >{l}</button>
    );
  })


  const letters = currentWord.toUpperCase().split('').map((l, index) => {
      return (
        <span key={index}>{guessed.includes(l) ? l : ""}</span>
      );
});



  return (
    <main>
      <Header/>
      <Status 
        isGameWon = {isGameWon}
        isGameOver = {isGameOver}/>
      <Chips
        wrongGuessCount={wrongGuessCount}/>
      <section className = "guess-word">
        {letters}
      </section>
      <section className= 'guess-keyboard'>
        {keyboard}
      </section>
      {isGameLost && <button className="new-game">New Game</button>}
    </main>
  );
}

export default App;
