import React, { Component } from 'react';
import $ from 'jquery';
import Gifs from './Components/Gifs';
import SearchGifs from './Components/SearchGifs';

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

  componentWillMount() {
    this.getGifs();
  }

  componentDidMount() {
    this.getGifs();
  }

  handleSearchGifs(search) {
    this.setState({
      text: search.text,
      endpoint: 'search'
    }, function() {
      this.getGifs()
    });
  }

  getGifs() {
    const PUBLIC_KEY = 'GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw';
    const BASE_URL = '//api.giphy.com/v1/gifs/';
    const LIMIT = 25;
    const RATING = 'pg';

    $.ajax({
      url: `${BASE_URL}${this.state.endpoint}?q=${this.state.text}&offset=${this.state.offset}&rating=${RATING}&limit=${LIMIT}&api_key=${PUBLIC_KEY}`,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({gifs: data.data}, function() {
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <SearchGifs searchGifs={this.handleSearchGifs.bind(this)} />
          <Gifs gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
