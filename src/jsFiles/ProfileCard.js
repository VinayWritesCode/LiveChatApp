import React from 'react';
import "../resources/stylesheets/ProfileCard.css";
import Loader from "./Loader.js";
import "../resources/stylesheets/Loader.css";
import  MessageIcon from '../resources/images/Messageicon.png';
import  CallIcon from "../resources/images/call.png";
import MessageBox from "./MessageBox";
import "../resources/stylesheets/HideFriendList.css"

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
                image: reponse.results.map(reponse => (reponse.picture.large)),
                firstName: reponse.results.map(reponse => (reponse.name.first)),
                lastName: reponse.results.map(reponse => (reponse.name.last)),
                city: reponse.results.map(reponse => (reponse.location.city)),
                country: reponse.results.map(reponse => (reponse.location.country)),
                loading: true
            })
        })
    }

    render() {
        var flag = 1;
        var { image, firstName , lastName ,city, country, loading} = this.state;
         
        if(!loading) {
            return (
                <div className="LoaderContent">
                < Loader />
                </div>
            );
        }
        else {

            const ShowMessageBox = () => {
                let msgbox = document.querySelector('.MessageShow');
                let ProfileCard = document.querySelector('.ProfileCard');

                if (flag === 1){
                    flag = 0;
                     msgbox.classList.toggle('active');
                    ProfileCard.classList.toggle('hide');
                }
                else if (flag === 0){
                    flag = 1;
                    msgbox.classList.remove('active');
                    ProfileCard.classList.remove('hide');
                }
            }

            return (
                <>
                <div className="ProfileCard">
                    
                    <header>
                        <div className="profile-image ">
                                <img src={image} alt={firstName} />
                        </div>
                    </header>
                    <footer>
                        <div className="ProfileName">
                                <p id="name"> {firstName + " " + lastName } </p>
                        </div>
                            <button onClick={ShowMessageBox} className="MsgBtn">
                            <div className="icons-nav1">
                                <img src={MessageIcon}   alt="Message box" />
                            </div>
                            </button>
                        <div className="icons-nav2">
                            <img src={CallIcon} alt="Call" />
                        </div>
                        <div className="ProfileLocation">
                            <p id="location"> {city + " , " + country} </p>
                        </div>
                        
                    </footer>

                    
                </div>
                    <div className="MessageShow">
                        
                             <MessageBox image={image} firstName={firstName} lastName={lastName}/>   
                 </div>
                </>
            );
        }
    }
}



export default ProfileCard;
