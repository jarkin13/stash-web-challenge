import React, { Component } from 'react';
import GifItem from './GifItem';

class Gifs extends Component {
  render() {
    let gifItems;
    if(this.props.gifs){
      gifItems = this.props.gifs.map(gif => {
        //console.log(gif);
        return (
          <GifItem key={gif.id} gif={gif} />
        );
      });
    }
    return (
      <div className="Gifs">
        <div className="container">
          <div className="card-columns">
            {gifItems}
          </div>
        </div>
      </div>
    );
  }
}

export default Gifs;
