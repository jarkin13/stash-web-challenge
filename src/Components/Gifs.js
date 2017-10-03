import React, { Component } from 'react';
import GifItem from './GifItem';
var Masonry = require('react-masonry-component');

class Gifs extends Component {
  render() {
    let gifItems;
    if(this.props.gifs){
      gifItems = this.props.gifs.map((gif, index) => {
        //console.log(gif);
        return (
          <GifItem key={gif.id} gif={gif} order={index} />
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
      <div className="Gifs">
        <Masonry
          className={'masonry'}
          options={masonryOptions}
          disableImagesLoaded={false}
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
