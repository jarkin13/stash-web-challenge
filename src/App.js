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
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillMount() {
    this.getGifs();
  }

  componentDidMount() {
    this.getGifs();
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleSearchGifs(search) {
    this.setState({
      text: search.text,
      endpoint: 'search'
    }, function() {
      this.getGifs()
    });
  }

  handleScroll() {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;

    let offset = this.state.offset;

    if(this.state.offset > 500) {
      return;
    }

    if (windowBottom >= docHeight) {
      this.setState({
        offset: offset + 25
      }, function() {
        console.log('bottom');
        this.getGifs()
      });
    }
  }

  getGifs() {
    const _this = this;
    const PUBLIC_KEY = 'GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw';
    const BASE_URL = '//api.giphy.com/v1/gifs/';
    const LIMIT = 25;
    const RATING = 'pg';

    let request = `${BASE_URL}${this.state.endpoint}?q=${this.state.text}&offset=${this.state.offset}&rating=${RATING}&limit=${LIMIT}&api_key=${PUBLIC_KEY}`;
    let gifs = [];
    console.log(request);
    if(this.state.offset > 0)
      gifs = this.state.gifs;

    $.ajax({
      url: request,
      dataType: 'json',
      cache: false,
      success: function(data) {
        data.data.map(gif => {
          gifs.push(gif)
        });

        this.setState({gifs: gifs}, function() {
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }


  render() {
    console.log(this.state);
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
