import React from "react";
import "./App.css";
import { lyrics } from "./lyrics";

class Lyric extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="lyricbox">
        <p className="delta" onClick={this.props.handleClick}>
          ∆
        </p>
        <p className="lyrics">{this.props.words}</p>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { words: "" };
    this.updateWords = this.updateWords.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  updateWords() {
    let randomIndex = Math.floor(Math.random() * lyrics.length);
    this.setState({ words: lyrics[randomIndex] });
  }

  handleClick() {
    console.log("clicked");
    this.updateWords();
  }

  render() {
    return (
      <div className="container">
        <Lyric words={this.state.words} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
