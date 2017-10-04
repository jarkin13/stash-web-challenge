import React, { Component } from 'react';
import GifItem from './GifItem';

class Gifs extends Component {
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

    return (
      <div>
        <div className="row">{gifItems}</div>
      </div>
    );
  }
}

export default Gifs;
