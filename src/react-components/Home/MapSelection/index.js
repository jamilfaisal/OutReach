import React from "react";
import Pin from "./Pin";

import "./styles.css";

class MapSelection extends React.Component {
  render(){
    return(
      <div className="map_container">
        <img className="world_map" src={require("./static/world_map.svg")} alt="world map"/>
        <Pin city="Toronto" />
        <Pin city="Paris" />
        <Pin city="Montréal" />
      </div>
    );
  }
}

export default MapSelection;
