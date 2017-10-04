import React, { Component } from 'react';
import Gifs from './Components/Gifs';
import SearchGifs from './Components/SearchGifs';
import request from 'superagent';
import PropTypes from 'prop-types';
import $ from 'jquery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      endpoint: 'trending',
      offset: 0,
      gifs: [],
      changed: false,
    }
  }

  componentWillMount() {
    this.renderGifs();
  }

  renderGifs() {
    const _this = this;
    const PUBLIC_KEY = 'GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw';
    const BASE_URL = '//api.giphy.com/v1/gifs/';
    const LIMIT = 30;
    const RATING = 'pg';

    let url = `${BASE_URL}${this.state.endpoint}?q=${this.state.text}&offset=${this.state.offset}&rating=${RATING}&limit=${LIMIT}&api_key=${PUBLIC_KEY}`;

    request.get(url, function(err, res) {
      _this.setState({ gifs: res.body.data })
      console.log(_this.state);
    });
  }

  handleTextChange(text, endpoint) {
    this.setState({gifs: []});
    text = text.replace(/\s/g, '+');
    this.setState({
      offset: 0,
      text: text,
      endpoint: endpoint,
      changed: true,
    }, function() {
      this.renderGifs();
    });
  }

  handleLoadMore() {
    this.setState({gifs: []});
    let offset = this.state.offset + 31;
    this.setState({
      offset: offset,
      changed: true,
    }, function() {
      this.renderGifs();
    });
  }

  //TODO on click scroll up
  //TODO Masonry layout
  //TODO styling on placeholder
  //TODO styling for searchbar and next button
  render() {
    return (
      <div className="App">
        <div className="container">
          <SearchGifs onTextChange={this.handleTextChange.bind(this)} loadMore={this.handleLoadMore.bind(this)}/>
          <Gifs gifs={this.state.gifs} changed={this.state.changed} />
          <button className="btn btn-primary load-more" onClick={this.handleLoadMore.bind(this)}>Next</button>
        </div>
      </div>
    );
  }
}

export default App;
