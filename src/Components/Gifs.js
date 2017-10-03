import React, { Component } from 'react';
import GifItem from './GifItem';
import Masonry from 'react-masonry-component';

class Gifs extends Component {
  constructor() {
    super();
    this.state = { maxImageWidth: 0 }
  }

  updateDimensions() {
    if(window.innerWidth >= 1200) {
      this.setState({ maxImageWidth: 268 });
      return;
    }

    if(window.innerWidth >= 992) {
      this.setState({ maxImageWidth: 223 });
      return;
    }

    if(window.innerWidth >= 768) {
      this.setState({ maxImageWidth: 220 });
      return;
    }

    this.setState({ maxImageWidth: 250 });
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    console.log(this.state);
    let gifItems;
    if(this.props.gifs){
      gifItems = this.props.gifs.map((gif, index) => {
        //console.log(gif);
        return (
          <GifItem key={gif.id} gif={gif} order={index} maxImageWidth={this.state.maxImageWidth} />
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
