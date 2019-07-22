import React from 'react';
import { Box } from "./Box/Box";
import './App.css';

class App extends React.Component {
  /**
  * Warning: This lifecycle is currently deprecated, and will be removed in React version 17+
  More details here: https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html
  */
  componentDidMount() {
    this.game.start();
  }
  game = {
    setSecretColor: ()=>
    { 
      let boxes = document.querySelectorAll(".box");
      let special = Math.floor(Math.random()*boxes.length);
        let code = boxes[special].style.backgroundColor;
        this.setState({secretGameKey: code})
    },

    // function to start the game up
    start: ()=>
    {
      if(this.state.isHard)
      {
        this.setState({
          num: Array(5).fill("easy")
        })
      }
      // reseting the defualt value in the state of the application
      let boxes = document.querySelectorAll(".box");
      // box manipulation here
       for( let i = 0; i < boxes.length; i++)
      {
        boxes[i].style.backgroundColor = this.game.getRandomColor();
      }
      this.game.setSecretColor()

      
    },


    // random color
    getRandomColor: (number)=>
    {
      let red = Math.floor(Math.random()*256);
      let green = Math.floor(Math.random()*256);
      let blue = Math.floor(Math.random()*256);
      return `rgb(${red}, ${green}, ${blue})`;
    },

    // when the game is correct
    correct: ()=>
    {
      let boxes = document.querySelectorAll(".box");
      // box manipulation here
       for( let i = 0; i < boxes.length; i++)
      {
        boxes[i].style.backgroundColor = this.state.secretGameKey;
      }
    },

    // ActivateHardLevel
    activateHardLevel: ()=>
    {
      this.setState({num: Array(25).fill("games")})
      setTimeout(()=>this.game.start(),45)
    }

  };

  state = { 
    secretGameKey: null,
    num: Array(5).fill("sds"),
    isHard: false
    }
  render()
  {
    return (
      <div className="App">
        <h3 onClick={this.game.start}>Start game</h3>
        <h5 onClick={this.game.activateHardLevel}>Hard level</h5>
        <p>what color is this {this.state.secretGameKey}</p>
        <div className="container">
          {
            this.state.num.map((v,i)=>
            {
             return ( <Box secret={this.state.secretGameKey} reset={this.game.correct} key={i}/>)
            })
          }
        </div>
      </div>
    );
  }
}

export default App;

// am too selffish to be moved