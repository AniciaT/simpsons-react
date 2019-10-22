import React from 'react';
import './App.css';
import DisplaySimpsonQuote from './components/DisplaySimpsonQuote';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: null,
      image: null,
      character: null
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    // Send the request
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        console.log(data.quote);
        this.setState({
          quote: data[0].quote,
          image: data[0].image,
          character: data[0].character
        });
    });
  }

  render() {
    return (
      <div className="App">
        <DisplaySimpsonQuote quote={this.state.quote} image={this.state.image} character={this.state.character} />
        <button type="button" onClick={this.getQuote}>Get quote</button>
      </div>
    );
  }
}

export default App;
