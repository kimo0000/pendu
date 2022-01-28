import React, { Component } from 'react';

 class Keybord extends Component {

  componentDidMount() {
      window.addEventListener('keyup', (e) => {
          if(this.props.alphabet.indexOf(e.key) !== -1){
              this.props.action(e.key)
          }
      })
  }

 render() {
  return(
      <div id='keybord'>
          {
            this.props.alphabet.map(
                (letter, index) => {
                    return <button className={this.props.usedLetter.indexOf(letter) !== -1 ? "used" : ""}
                                   key={index}
                                   onClick={() => this.props.action(letter)}
                                   >
                                   {letter}</button>
                }
            )
          }
      </div>
  )
}
}

export default Keybord;
