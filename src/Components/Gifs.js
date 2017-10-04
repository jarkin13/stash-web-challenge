import React, { Component } from 'react';
import GifItem from './GifItem';
import Masonry from 'react-masonry-component';

class Gifs extends Component {
  handleImagesLoaded(image) {
    console.log(image);
  };

  render() {
    let gifItems;
    let changed = this.props.changed;
    if(this.props.gifs){
      gifItems = this.props.gifs.map((gif, index) => {
        //console.log(gif);
        return (
          <GifItem key={index} gif={gif} order={index} changed={changed} />
        );
      });
    }

    let masonryOptions = {
      transitionDuration: 0,
      itemSelector: '.item',
      percentPosition: true,
      columnWidth: '.grid-sizer',
      horizontalOrder: true
    };

    return (
      <div>
        <Masonry
          className={'masonry'}
          options={masonryOptions}
          onImagesLoaded={this.handleImagesLoaded}
          updateOnEachImageLoad={false}
        >
          <div className="grid-sizer"></div>
          {gifItems}
        </Masonry>
      </div>
    );
  }
}

export default Gifs;
