import {useState} from 'react'
import './App.css';
import Header from './components/Header'
import Status from './components/Status'
import Chips from './components/Chips'

/**
 * Goal: Build out the main parts of our app
 * 
 * Challenge: 
 * 1. Save a "currentWord" in state. Initialize as "react".
 * 2. Map over the letters of the word (you'll need to turn 
 *    the string into an array of letters first) and display
 *    each one as a <span>. Capitalize the letters when
 *    displaying them.
 * 3. Style to look like the design. You can get the underline 
 *    effect on the box using `border-bottom`.
 */
function App() {
  const [currentWord, setCurrentWord] = useState('React');

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
        <span style={styles}>{l}</span>
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
    </main>
  );
}

export default App;
