import React, { Component } from 'react';

class GifItem extends Component {
  render() {
    return (
      <div className="gif-item" key={this.props.order}>
        <a href={this.props.gif.url} target="_blank">
          <img src={this.props.gif.images.downsized.url} ref="gif" className="gif" alt="gif" />
        </a>
      </div>
    );
  }
}

export default GifItem;
