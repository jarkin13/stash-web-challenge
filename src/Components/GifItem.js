import React, { Component } from 'react';

class GifItem extends Component {
  constructor(props) {
    super(props);
    this.state = { imageStatus: 'loading' };
  }

  handleImageLoaded() {
    this.setState({ imageStatus: 'loaded' });
  }

  handleImageErrored() {
    this.setState({ imageStatus: 'failed to load' });
  }

  render() {
    console.log(this.state.imageStatus);
    let imageClass = '';
    let placeholder = 'hide';

    if(this.state.imageStatus === 'loading') {
      imageClass = imageClass + ' hide';
      placeholder = 'placeholder';
    }

    return (
      <div className='gif col-6 col-md-4' key={this.props.order}>
        <div className={placeholder}></div>
        <a href={this.props.gif.url} target="_blank" className={imageClass}>
          <img src={this.props.gif.images.downsized.url} ref="gif" className="gif" alt="gif"
            onLoad={this.handleImageLoaded.bind(this)}
            onError={this.handleImageErrored.bind(this)} />
        </a>
      </div>
    );
  }
}

export default GifItem;
