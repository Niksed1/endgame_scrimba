import {useState} from 'react'
import './App.css';
import Header from './components/Header'
import Status from './components/Status'
import Chips from './components/Chips'
import {clsx} from 'clsx';

/**
 * Goal: Allow the user to start guessing the letters
 * 
 * Challenge: Update the keyboard when a letter is right
 * or wrong.
 * 
 * Bonus: use the `clsx` package to easily add conditional 
 * classNames to the keys of the keyboard. Check the docs 
 * to learn how to use it 📖
 */
function App() {
  //State values
  const [currentWord, setCurrentWord] = useState('react');
  const [guessed, setGuessed] = useState([]);

  //derived values
  const wrongGuessCount = guessed.filter(l => !currentWord.includes(l.toLowerCase())).length //.length;
  console.log("wrong count: ", wrongGuessCount)

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
      <Status/>
      <Chips/>
      <section className = "guess-word">
        {letters}
      </section>
      <section className= 'guess-keyboard'>
        {keyboard}
      </section>
      <button className="new-game">New Game</button>
    </main>
  );
}

export default App;
