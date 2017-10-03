import React, { Component } from 'react';

class GifItem extends Component {
  render() {
    return (
      <div className="item" key={this.props.order}>
        <img src={this.props.gif.images.downsized.url} ref="gif" className="gif-image" alt="gif" />
      </div>
    );
  }
}

export default GifItem;
