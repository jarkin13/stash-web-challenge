import React, { Component } from 'react';

class GifItem extends Component {
  render() {
    return (
      <li className="Gif">
        <img src={this.props.gif.images.downsized.url} className="Gif-image" alt="gif" />
      </li>
    );
  }
}

export default GifItem;
