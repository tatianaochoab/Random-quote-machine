import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './components/Container';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
      colors: ""
    }
    this.changeQuote = this.changeQuote.bind(this);
  }

  componentDidMount() {
    axios.get('https://api-random-machine-ojits15g8.now.sh/quotes')
      .then(response => {
        let quotes = response.data;
        let posicion = this.getRandomInt(0, quotes.length);
        let cita = quotes[posicion].quote;
        let autor = quotes[posicion].author;
        // alert(posicion);
        this.setState({
          quote: cita,
          author: autor
        });
      });
    axios.get('https://api-random-machine-ojits15g8.now.sh/colors')
    .then(response => {
      let colores = response.data;
      let posicion =  this.getRandomInt(0, colores.length);
      let color = colores[posicion];
      this.setState({
          colors: color
        });
      // alert(this.state.colors);
    });
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  changeQuote = () => {
    this.componentDidMount();
    // alert("entre");
  }



  render() {
    return (
      <div className='all' style={{backgroundColor: this.state.colors}}>
        <Container
          quote={this.state.quote}
          author={this.state.author}
          colors={this.state.colors}
          changeQuote={this.changeQuote}
        />
        <footer className='footer-text'>by Tatiana Ochoa 2020</footer>
      </div>
    );

  }
}

export default App;
