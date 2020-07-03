import React from "react";
import './styles.css';
import LocationSetter from "../LocationSetter";
import { Backdrop, Button, IconButton, TextField } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { faPaperPlane, faPlus } from '@fortawesome/free-solid-svg-icons'


// Component for text entry popup, used by PostAdder below
class NewMessagePopup extends React.Component {
    handleSubmit = () => {
        this.props.closePopup();
        this.props.addMessageFunc();
        this.props.cleanFunc();
    };

    render() {
        const {handleInputFunc} = this.props;

        return(
            <div>
                <Backdrop open={true} onClick={this.props.closePopup}></Backdrop>
                <div className="addMessagePopup">
                    <IconButton id="popup_close_button" onClick={this.props.closePopup}>
                        <FontAwesomeIcon icon={ faTimesCircle } />
                    </IconButton>
                    <h3 className="popupTitle">{this.props.title}</h3>

                    <TextField
                        className="TextEntry"
                        multiline
                        rows={12}
                        placeholder="Share your thoughts here..."
                        fullWidth={true}
                        variant="outlined"
                        onChange={handleInputFunc}
                    />

                    <div className="btns">
                        <LocationSetter />
                        <Button className="postBtn" onClick={this.handleSubmit}>
                            Post
                            <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

// Component for the button to open new message popup
class MessageAdder extends React.Component {
    constructor() {
        super();
        this.state = {
          show: false
        };
    }

    toggle() {
        this.setState({
          show: !this.state.show
        });
    }

    render() {
        const {handleInputFunc, addMessageFunc, cleanFunc} = this.props;
        return (
            <div>
                <Button id="addBtn"
                        variant="outlined"
                        color="primary"
                        onClick={this.toggle.bind(this)}>
                  <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                  <span id="addBtnText" >New Message</span>
                </Button>

                {this.state.show ?
                    <NewMessagePopup
                      title="New Message"
                      closePopup={this.toggle.bind(this)}
                      handleInputFunc={handleInputFunc}
                      addMessageFunc={addMessageFunc}
                      cleanFunc={cleanFunc}
                    />
                    : null
                }
            </div>
        );
    }
};

export default MessageAdder;