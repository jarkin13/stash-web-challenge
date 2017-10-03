import React, { Component } from 'react';

class SearchGifs extends Component {
  constructor(){
    super();
    this.state = {
      search: {}
    }
  }

  handleSubmit(e){
    let endpointType = 'search';

    if(this.refs.input.value === '') {
      endpointType = 'trending';
    }

    this.setState({search: {
     text: this.refs.input.value,
     endpoint: endpointType
    }}, function() {
     this.props.searchGifs(this.state.search);
    });
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="searchGifs" className="sr-only">Search</label><br />
            <input type="text" className="form-control" ref="input" placeholder="Search" />
          </div>
          <button type="submit" className="btn btn-primary">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchGifs;
