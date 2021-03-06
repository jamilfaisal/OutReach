import React from "react";
import { Link } from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.css";

class Pin extends React.Component {
  render(){
    const { city } = this.props;
    return (
      <Tooltip className={ city }
               title={ city }
               placement="top"
               arrow >
          {/*link*/}
          <Link to={ "/".concat(city) } >
                  <div className="button_container">
                    <button className="pin_button">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </button>
                  </div>
                </Link>
      </Tooltip>
    );
  }
}

export default Pin;
