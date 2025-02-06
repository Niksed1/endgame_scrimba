import {useState} from 'react'
import './App.css';
import Header from './components/Header'
import Status from './components/Status'
import Chips from './components/Chips'

/**
 * Goal: Build out the main parts of our app
 * 
 * Challenge: 
 * Display the keyboard ⌨️. Use <button>s for each letter
 * since it'll need to be clickable and tab-accessible.
 */
function App() {
  const [currentWord, setCurrentWord] = useState('React');

  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  const keyboard = alphabet.toUpperCase().split('').map((l, index) => 
    <button key={l} style={{width: '40px',
      height: '40px', border: '1px solid #D7D7D7', borderRadius: '4px', 
      fontSize: '1rem'}}>{l}</button>
  )


  const letters = currentWord.toUpperCase().split('').map((l, index) => {
      const styles = {
        width: '40px',
        height: '40px',
        backgroundColor: '#323232',
        color: '#F9F4DA',
        fontWeight: 700,
        padding: '5px',
        borderBottom: '2px solid #F9F4DA'
      }  

      return (
        <span style={styles} key={index}>{l}</span>
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
