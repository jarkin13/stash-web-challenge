import React, { Component } from 'react';

class GifItem extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.gif.images.downsized.url} className="card-img-top img-fluid" alt="gif" />
      </div>
    );
  }
}

export default GifItem;
