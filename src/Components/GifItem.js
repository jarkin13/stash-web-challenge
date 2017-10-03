import React, { Component } from 'react';

class GifItem extends Component {
  render() {
    return (
      <div className="col-6 col-md-4" key={this.props.order}>
        <div className="gif-container">
          <a href={this.props.gif.url} target="_blank">
            <img src={this.props.gif.images.downsized.url} ref="gif" className="gif" alt="gif" />
          </a>
        </div>
        <div className="spacer"></div>
      </div>
    );
  }
}

export default GifItem;
