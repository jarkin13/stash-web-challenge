import React, { Component } from 'react';
import GifItem from './GifItem';

class Gifs extends Component {
  render() {
    let gifItems;
    if(this.props.gifs){
      gifItems = this.props.gifs.map((gif, index) => {
        //console.log(gif);
        return (
          <GifItem key={index} gif={gif} order={index} />
        );
      });
    }

    return (
      <ul className="gifs">{gifItems}</ul>
    );
  }
}

export default Gifs;
