//import logo from './logo.svg';
import { useState, useEffect, useMemo } from 'react'
import './App.css';
import Keyboard from './components/Keyboard';
import Syllable from './components/Syllable';
import Maneno from './components/Maneno';
import Ushindi from './components/Ushindi';

function App() {
  //const [clickedLetter, setClickeLetter] = useState("")
  //const [keyLetters, setKeyLetters] = useState("")
  const [counter, setCounter] = useState(0)
  const [found, setFound] = useState(0)
  const [gameon, setGameon] = useState(true)
  const [alert, setAlert] = useState(false)
  const [attempt, setAttempt] = useState(0)
  const [repeating, setRepeating] = useState([null])
  const [wordComplete, setWordComplete] = useState(0)
  const [currentWord, setCurrentWord] = useState("") 
  const [newDay, setNewDay] = useState(true)
  const [ujumbe, setUjumbe] = useState('')
  const qwerty = useMemo(() => [
    { 'letter':'a', 'position': 10 },
    { 'letter':'b', 'position': 25 },
    { 'letter':'c', 'position': 22 },
    { 'letter':'d', 'position': 12 },
    { 'letter':'e', 'position': 2 },
    { 'letter':'f', 'position': 13 },
    { 'letter':'g', 'position': 14 },
    { 'letter':'h', 'position': 15 },
    { 'letter':'i', 'position': 7 },
    { 'letter':'j', 'position': 16 },
    { 'letter':'k', 'position': 17 },
    { 'letter': 'l', 'position': 18 },
    {'letter': '', 'position': 19},
    {'letter':'enter', 'position': 20 },
    { 'letter':'m', 'position': 27 },
    { 'letter':'n', 'position': 26 },
    { 'letter':'o', 'position': 8 },
    { 'letter':'p', 'position': 9 },
    { 'letter':'q', 'position': 0 },
    { 'letter':'r', 'position': 3 },
    { 'letter':'s', 'position': 11 },
    { 'letter':'t', 'position': 4 },
    { 'letter':'u', 'position': 6 },
    { 'letter':'v', 'position': 24 },
    { 'letter':'w', 'position': 1 },
    { 'letter':'x', 'position': 22 },
    { 'letter':'y', 'position': 5 },
    { 'letter':'z', 'position': 21 },
    {'letter':'back', 'position': 27 }
  ],[])
  const correctWords = Maneno
  const todayWord = useMemo(() => newDay ? Maneno[Math.floor(Math.random() * Maneno.length)]: setNewDay(false)
        ,[newDay]) 
  const [enterLetter,setEnterLetter] = useState(['', '','','','','', '','','','','', '','','','','', '','','','','', '','','','','', '','','',''])
 // const [guessWord, setGuessWord] = useState['']
  console.log(`Neno la leo: ${todayWord}` )
  const [todayArray, setTodayArray] = useState([''])
  const clicks = (letter) => {

    if (gameon) {
      //check if enter has been clicked
      
      if (letter === "ENTER") {
        //check if entered word is 5 char long
        //const newWord = currentWord
        if (currentWord.length === 5) {
          //check if current word is today's word
          if (currentWord === todayWord.toUpperCase()) {
            console.log('Uko vizuri!')
            setUjumbe('Dah! Uko vizuri!')
            setWordComplete((wordComplete) => wordComplete + 1)
            setAttempt(1)
            setGameon(false)
          }
          else if (correctWords.includes(currentWord.toLowerCase())) {
            console.log(`todayArray ${todayArray} and enterLetter ${enterLetter}`)
            console.log(`"${currentWord}" lipo kwenye orodha!`)
            setWordComplete((wordComplete) => wordComplete + 1)
            setFound((found) => found + 1)
            setAlert(false)
            //reset counter
            //setCounter(0)
          }
          else {
            console.log(`"${currentWord}" halipo kwenye orodha!`)
            setUjumbe(`"${currentWord}" halipo kwenye orodha!`)
            setAlert(true)
          
          }
        }
        else if (currentWord.length === 10) {
          // we are in second row
          if (currentWord.slice(5, 10) === todayWord.toUpperCase()) {
            console.log('Safi sana!')
            setUjumbe('Safi sana!')
            setWordComplete((wordComplete) => wordComplete + 1)
            setAttempt(2)
            setGameon(false)
          }
          else if (correctWords.includes(currentWord.slice(5, 10).toLowerCase())) {
            console.log(`"${currentWord.slice(5, 10)}" lipo kwenye orodha!`)
            setWordComplete((wordComplete) => wordComplete + 1)
            setFound((found) => found + 1)
            //reset counter
            //setCounter(0)
          }
          else {
            console.log(`"${currentWord.slice(5, 10)}" halipo kwenye orodha!`)
            setUjumbe(`"${currentWord.slice(5, 10)}" halipo kwenye orodha!`)
            setAlert(true)
          }
        }
        else if (currentWord.length === 15) {
          // we are in second row
          if (currentWord.slice(10, 15) === todayWord.toUpperCase()) {
            console.log('Kazi nzuri!')
            setUjumbe('Kazi nzuri!')
            setWordComplete((wordComplete) => wordComplete + 1)
            setAttempt(3)
            setGameon(false)
            
          }
          else if (correctWords.includes(currentWord.slice(10, 15).toLowerCase())) {
            console.log(`"${currentWord.slice(10, 15)}" lipo kwenye orodha!`)
            setWordComplete((wordComplete) => wordComplete + 1)
            setFound((found) => found + 1)
            setAlert(false)
            //reset counter
            //setCounter(0)
          }
          else {
            console.log(`"${currentWord.slice(10, 15)}" halipo kwenye orodha!`)
            setUjumbe(`"${currentWord.slice(10, 15)}" halipo kwenye orodha!`)
            setAlert(true)
          }
        }
        else if (currentWord.length === 20) {
          // we are in second row
          if (currentWord.slice(15, 20) === todayWord.toUpperCase()) {
            console.log('Almanusra!')
            setUjumbe('Almanusra!')
            setWordComplete((wordComplete) => wordComplete + 1)
            setAttempt(4)
            setGameon(false)
          }
          else if (correctWords.includes(currentWord.slice(15, 20).toLowerCase())) {
            console.log(`"${currentWord.slice(15, 20)}" lipo kwenye orodha!`)
            setWordComplete((wordComplete) => wordComplete + 1)
            setFound((found) => found + 1)
            //reset counter
            //setCounter(0)
          }
          else {
            console.log(`"${currentWord.slice(15, 20)}" halipo kwenye orodha!`)
            setUjumbe(`"${currentWord.slice(15, 20)}" halipo kwenye orodha!`)
            setAlert(true)
            //setCounter(counter - 5)
          }
        }
        else if (currentWord.length === 25) {
          // we are in second row
          if (currentWord.slice(20, 25) === todayWord.toUpperCase()) {
            console.log('chupuchupu!')
            setUjumbe('Chupuchupu!')
            setWordComplete((wordComplete) => wordComplete + 1)
            setAttempt(5)
            setGameon(false)
          }
          else if (correctWords.includes(currentWord.slice(20, 25).toLowerCase())) {
            console.log(`"${currentWord.slice(20, 25)}" lipo kwenye orodha!`)
            setWordComplete((wordComplete) => wordComplete + 1)
            setFound((found) => found + 1)
            setAlert(true)
            //reset counter
            //setCounter(0)
          }
          else {
            console.log(`"${currentWord.slice(20, 25)}" halipo kwenye orodha!`)
            setUjumbe(`"${currentWord.slice(20, 25)}" halipo kwenye orodha!`)
            setAlert(true)
            //setCounter(counter - 5)
          }
        }
        else if (currentWord.length === 30) {
          // we are in second row
          if (currentWord.slice(25, 30) === todayWord.toUpperCase()) {
            console.log('bahati kweli kweli!')
            setUjumbe('Bahati kweli kweli!')
            setWordComplete((wordComplete) => wordComplete + 1)
            setAttempt(6)
            setGameon(false)
          }
          else if (correctWords.includes(currentWord.slice(25, 30).toLowerCase())) {
            console.log(`"${currentWord.slice(25, 30)}" lipo kwenye orodha!`)
            setWordComplete((wordComplete) => wordComplete + 1)
            setFound((found) => found + 1)
            setAlert(false)
            //reset counter
            //setCounter(0)
          }
          else {
            console.log(`"${currentWord.slice(25, 30)}" halipo kwenye orodha!`)
            setUjumbe(`"${currentWord.slice(25, 30)}" halipo kwenye orodha!`)
            setAlert(true)
            //setCounter(counter - 5)
          }
        }
      }
      else if (letter === "BACK") {//we wanna delete one letter each click in reverse
        const truncated_word = currentWord
        setCurrentWord(truncated_word.slice(0, truncated_word.length - 1))
        setCounter((counter) => counter < 0 ? 0 : counter - 1)
        updateLetter(counter - 1, "")

        //console.log("BACK clicked") 
      }
      else if (found <= 6 && currentWord.length < 30) {
        
        const theEntry = [...currentWord].slice(0, counter + 2)
        console.log(`theEntry ${theEntry}`)
        if ((todayArray.indexOf(letter.toLowerCase()) !== todayWord.lastIndexOf(letter.toLowerCase())) &&
          (theEntry.indexOf(letter)) !== theEntry.lastIndexOf(letter)) {
          console.log(`${letter} is repeating on both words!`)
          setRepeating((repeating) => [...repeating, letter.toLowerCase()])
        }
        else {
          //setRepeating(0)
          console.log("not repeating")
          //setRepeating((repeating) => [...repeating, 0])
        }
        //Let's update the view with the currently clicked letter
        updateLetter(counter, letter)
        //add the letter to the current five letter word
        setCurrentWord((currentWord) => currentWord + letter)
        //increment the letter counter
        setCounter(counter + 1)
        //reset WordComplete
        setWordComplete(0)
      }
      //console.log(`found status ${found}`)
    }//End While
  }
// Break down today's word into the five characters, which we need in order to know where if at all entered letter fits in today's word
  useEffect(() => {
    const toArray = [...todayWord] // destruct string into char array
    //const theEntry = [...enterLetter]

    setTodayArray(toArray)
  }, [todayWord])
  
  // Some start up stuff to setup 
  // Setup the QWERTY keyboard.... and the document title while we are at it(`\('')/')
  useEffect(() => {
    qwerty.sort((a, b) => a.position - b.position)
    document.title = "Kiswahili Wordle!"
  }, [qwerty])
  
// function to update the display with letters user clicks on the QWERTY keyboard
const updateLetter = (counter,newletter) => {
  const updatedEnterLetter = [...enterLetter]
  updatedEnterLetter[counter] = newletter
  setEnterLetter(updatedEnterLetter)
  console.log(`Counter is ${counter}`)
  console.log(`today word array ${todayArray}`)
  
}
  
  console.log(`repeating array : ${repeating}`)
  console.log(`counter : ${counter}`)
  //console.log(`repeating status : ${repeating[counter-1]}`)

  return (
    <div className='container mx-auto max-w-xl xs: w-full md: w-6/7 select-none'>
      <div className='text-center font-bold text-4xl mt-2 mb-4'>Kiswahili Wordle</div>
      {gameon === false || alert ? <Ushindi ujumbe={ujumbe} /> : null}
      <div className="mx-auto grid grid-cols-5 w-2/3 gap-1 justify-items-center">
      {
          enterLetter.map((letter, key) =>
            <Syllable
              key={key}
              letter={letter}
              found={found}
              pos={key}
              wordcomplete={wordComplete}
              todayWordLetterOne={todayArray[0]}
              todayWordLetterTwo={todayArray[1]}
              todayWordLetterThree={todayArray[2]}
              todayWordLetterFour={todayArray[3]}
              todayWordLetterFive={todayArray[4]}
              attempt={attempt}
              repeating={repeating}
          />)
      }
      </div>
      <div className="mx-auto grid grid-cols-10 mt-2 gap-2 justify-items-center w-11/12 px-2" >
        {
          qwerty.map((entry, key) =>
            <Keyboard
              key={key}
              clicks={clicks}
              syl={entry.letter.toUpperCase()}
              counter={counter}
            />)
        }
      </div>
    </div>
    
  );
}

export default App;
