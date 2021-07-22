import React from 'react';
import "../resources/stylesheets/ProfileCard.css";
import Loader from "./Loader.js";
import "../resources/stylesheets/Loader.css";
import  MessageIcon from '../resources/images/Messageicon.png';
import  CallIcon from "../resources/images/call.png";

class ProfileCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            RandomUser: [],
            loading: false
        };
    }

    componentDidMount(){
        
        fetch("https://randomuser.me/api/")
        .then((reponse) => reponse.json())
        .then((reponse) => {
            this.setState({
                RandomUser: reponse.results,
                loading:true
            })
        })
    }

    render() {

        var { RandomUser, loading} = this.state;

        if(!loading) {
            return (
                <div className="LoaderContent">
                < Loader />
                </div>
            );
        }
        else {

            return (
                <div className="ProfileCard">
                    <div className="status">
                        
                    </div>
                    <header>
                        <div className="profile-image ">
                            {RandomUser.map(RandomUser => (
                                <img src={RandomUser.picture.large} alt={RandomUser.name.first} />
                            ))}
                        </div>
                    </header>
                    <footer>
                        <div className="ProfileName">
                            
                            {RandomUser.map(RandomUser => (
                                <p id="name"> {RandomUser.name.first + " " + RandomUser.name.last} </p>
                            ))}
                        </div>
                        <div className="icons-nav1">
                            <img src={MessageIcon} alt="Message box" />
                        </div>
                        <div className="icons-nav2">
                            <img src={CallIcon} alt="Call" />
                        </div>
                        <div className="ProfileLocation">
                            {RandomUser.map(RandomUser => (
                                <p id="location"> {RandomUser.location.city + " , " + RandomUser.location.country} </p>
                            ))}
                            
                        </div>
                        
                    </footer>
                </div>
            );
        }
    }
}



export default ProfileCard;
