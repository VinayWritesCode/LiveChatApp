import React from 'react'
import "../resources/stylesheets/MessageBox.css";


function MessageBox(props) {
    return (
        <div className="msgBox">
        <div className="MessageContainer">
           
            <div className="MessageBoxTop">
                <div className="MsgProfilePicture">
                    <img src={props.image} alt={props.firstName} />
                </div>
                <div className="msgProfileName">
                    <p id="name"> {props.firstName + " " + props.lastName} </p>
                </div>
            </div>
            <div className="msg-Contents"></div>
            <div className="msg-footer">
                <div className="input-group">
                    <input type="search" className="form-control rounded" placeholder="Write your message" aria-label="Search"
                        aria-describedby="search-addon" />
                    <button type="button" className="btn btn-outline-primary msg-button">Send</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default MessageBox;

