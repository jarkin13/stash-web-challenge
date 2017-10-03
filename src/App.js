import React, { Component } from 'react';
import Gifs from './Components/Gifs';
import SearchGifs from './Components/SearchGifs';
import request from 'superagent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      endpoint: 'trending',
      offset: 0,
      gifs: []
    }
  }

  renderGifs() {
    const _this = this;
    const PUBLIC_KEY = 'GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw';
    const BASE_URL = '//api.giphy.com/v1/gifs/';
    const LIMIT = 25;
    const RATING = 'pg';

    let url = `${BASE_URL}${this.state.endpoint}?q=${this.state.text}&offset=${this.state.offset}&rating=${RATING}&limit=${LIMIT}&api_key=${PUBLIC_KEY}`;
    request.get(url, function(err, res) {
      _this.setState({ gifs: res.body.data })
      console.log(_this.state);
    });
  }

  handleTextChange(text, endpoint) {
    text = text.replace(/\s/g, '+');
    this.setState({
      text: text,
      endpoint: endpoint
    }, function() {
      this.renderGifs();
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <SearchGifs onTextChange={this.handleTextChange.bind(this)} />
          <Gifs gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
