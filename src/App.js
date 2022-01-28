import React, { Component } from 'react';
import Keybord from './Keybord';
import CurrentWord from './CurrentWord';
import Heart from './Heart';

import './App.css';


class App extends Component {

    state = {
      wordColection: ["train", "code", "licorne", "glace", "sourie", "word", "presse"],
      currentWord: null,
      alphabet: "abcdefghijklmnopqrstuvwxyz".split(''),
      usedLetter: [],
      win: 0,
      attempts: 0,
      maxAttempts: 9,
    };


    clickLetter = (letter) => {
        if(this.state.usedLetter.indexOf(letter) === -1){
          let attempts = this.state.attempts

          const usedLetter = [...this.state.usedLetter, letter]

          if(this.state.currentWord.indexOf(letter) === -1){
             attempts = this.state.attempts +1
          }
          
          let win = 1
          for(let i = 0; i < this.state.currentWord.length; i++){
              if(usedLetter.indexOf(this.state.currentWord[i]) === -1 ){
                win = 0
              }
          }

          if(attempts >= this.state.maxAttempts && win === 0){
            win = -1
          }
          
          
          this.setState({usedLetter, attempts, win})
        }
      }

    componentDidMount() {
      window.addEventListener('keyup', (e) => {
        console.log(e)
        if(e.keyCode === 13){
          this.initGame()
        }
      })
    }

    
    pickNewWord = () => {
       const randomIndex = Math.floor(Math.random() * this.state.wordColection.length) 
            return this.state.wordColection[randomIndex]
    }


    initGame = () => {
      this.setState({currentWord: this.pickNewWord(),
                     usedLetter: [],
                     win: 0,
                     attempts: 0})
    }


  render() {
     return (
       <div id="game">
         <h1>pendu</h1>

         {
            this.state.currentWord !== null &&
            <CurrentWord currentWord={this.state.currentWord}
                         usedLetter={this.state.usedLetter}
                         win={this.state.win}
           />
         }

         {
             this.state.currentWord !== null &&
             <Heart attempts={this.state.attempts}
                    maxAttempts={this.state.maxAttempts}
             />
         }

         {  
            this.state.win === 0 && this.state.currentWord !== null &&
            <Keybord alphabet={this.state.alphabet}
                     usedLetter={this.state.usedLetter}
                     action={this.clickLetter}
           />
         }

         {
           this.state.win === 1  && 
           <p className='win_msg'>WIN !!!</p>
         }

         {
           this.state.win === -1  && 
           <p className='lost_msg'>lost !!!</p>
         }
         
         {
            (this.state.currentWord === null || this.state.win !== 0) &&
            <button id='new_game' onClick={() => this.initGame()}>nouvelle partie</button>
         }
       </div>
   )
  }
}

export default App;
