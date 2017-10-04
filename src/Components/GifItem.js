import React, { Component } from 'react';
import ImagesLoaded from 'react-images-loaded';

class GifItem extends Component {
  handleOnAlways = (instance) => {
    console.log('always');
    console.log(instance);
  }

  handleOnProgress = (instance, image) => {
    console.log('progress');
    console.log(instance);
  }

  handleOnFail = (instance) => {
    console.log('fail');
    console.log(instance);
  }

  handleDone = (instance) => {
    console.log('done');
    console.log(instance);
  }
  render() {
    return (
      <div className="item">
        <a href={this.props.gif.url} target="_blank">
          <img src={this.props.gif.images.downsized.url} ref="gif" className="gif" alt="gif" />
        </a>
      </div>
    );
  }
}

export default GifItem;
