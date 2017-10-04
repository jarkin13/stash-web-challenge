import React, { Component } from 'react';

class SearchGifs extends Component {
  handleInputChange(text) {
    let endpoint = 'search';
    if(text === '')
      endpoint = 'trending';

    this.props.onTextChange(text, endpoint);
  }

  handleClick() {
    let endpoint = 'search';
    if(this.refs.input.value === '')
      endpoint = 'trending';

    this.props.onTextChange(this.refs.input.value, endpoint);
  }

  render() {
    return (
      <div>
        <div className="form-inline">
          <div className="form-group">
            <label htmlFor="searchGifs" className="sr-only">Search</label><br />
            <input type="text" className="form-control" ref="input" placeholder="Search" onChange={event => this.handleInputChange(event.target.value)}/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.handleClick.bind(this)}>Search</button>
        </div>
        <button className="btn btn-primary load-more" onClick={this.props.loadMore}>Next</button>
      </div>
    );
  }
}

export default SearchGifs;
