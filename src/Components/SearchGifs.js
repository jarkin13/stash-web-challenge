import React, { Component } from 'react';

class SearchGifs extends Component {
  handleInputChange(text){
    let endpoint = 'search';
    if(text === '')
      endpoint = 'trending';

    this.props.onTextChange(text, endpoint);
  }

  render() {
    return (
      <div className="form-inline">
          <div className="form-group">
            <label htmlFor="searchGifs" className="sr-only">Search</label><br />
            <input type="text" className="form-control" ref="input" placeholder="Search" onChange={event => this.handleInputChange(event.target.value)}/>
          </div>
          <button type="submit" className="btn btn-primary">Search</button>
      </div>
    );
  }
}

export default SearchGifs;
