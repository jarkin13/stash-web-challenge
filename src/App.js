import React, { Component } from 'react';
import $ from 'jquery';

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

  getGifs() {
    const PUBLIC_KEY = 'GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw';
    const BASE_URL = '//api.giphy.com/v1/gifs/';
    const LIMIT = 20;

    $.ajax({
      url: `${BASE_URL}${this.state.endpoint}?q=${this.state.text}&offset=${this.state.offset}&limit=${LIMIT}&api_key=${PUBLIC_KEY}`,
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

  componentWillMount() {
    this.getGifs();
  }

  componentDidMount() {
    this.getGifs();
  }

  render() {
    return (
      <div className="App">
        testing
      </div>
    );
  }
}

export default App;
