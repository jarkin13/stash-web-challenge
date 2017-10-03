import React, { Component } from 'react';
//267.5
//320
//273
class GifItem extends Component {
  getImageHeight(width, height, max) {
    var ratio = max / width;
    var newHeight = height * ratio;
    return newHeight + 10;
  }

  render() {
    let width = this.props.gif.images.downsized.width;
    let height = this.props.gif.images.downsized.height;
    let maxImageWidth = this.props.maxImageWidth;

    let imageHeight = this.getImageHeight(width, height, maxImageWidth);
    let divStyles = {
      height: imageHeight + 'px'
    };

    let placeholderHeight = imageHeight - 10;
    let placeholderStyles = {
      width: maxImageWidth + 'px',
      height: placeholderHeight + 'px',
      backgroundColor: 'rgb(154, 207, 255)'
    }

    return (
      <div className="item" key={this.props.order} style={divStyles}>
        <div className="placeholder" style={placeholderStyles}></div>
        <img src={this.props.gif.images.downsized.url} ref="gif" className="gif-image" alt="gif" />
      </div>
    );
  }
}

export default GifItem;
