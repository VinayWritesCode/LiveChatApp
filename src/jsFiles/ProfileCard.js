import React from 'react';
import MessageBox from "./MessageBox";
import "../resources/stylesheets/HideFriendList.css"
import "../resources/stylesheets/ProfileCard.css";
import CloseIcon from "../resources/images/closeIcon.webp";
import MessageIcon from '../resources/images/Messageicon.png';
import CallIcon from "../resources/images/call.png";

function ProfileCard(props) {
        var image =  props.img;
        var firstName = props.fname;
        var lastName = props.lname;
        var city = props.city;
        var country = props.country;
        var flag = 1;
        
        var MessageShow = "MessageShow" + String(props.Unikey);

        const ShowMessageBox = () => {
            let msgbox = document.querySelector("." + MessageShow);
        let ProfileCard = document.querySelector('.ProfileCard');

        if (flag === 1) {
            flag = 0;
            msgbox.style.display = "none";
            ProfileCard.classList.toggle('hide');
        }
        else if (flag === 0) {
            flag = 1;
            msgbox.style.display = "block";
            ProfileCard.classList.remove('hide');
        }
    }
    ShowMessageBox()
            return (
                <>
                    <div className={MessageShow} id= "MessageShow">
                        <button onClick={ShowMessageBox} className="MsgBtn">
                            <img src={CloseIcon} className="CloseIcon" alt="Message Close" />
                            <MessageBox image={image} firstName={firstName} lastName={lastName} />
                        </button>
                    </div>
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
                    
                </>
            );
}

export default ProfileCard;


/*
class ProfileCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "",
            firstName:"" ,
            lastName:"",
            city:"",
            country:"",
            userId:"",
            loading: false
        };

    }

    componentDidMount(){
      /*  
        fetch("https://randomuser.me/api/")
        .then((reponse) => reponse.json())
        .then((reponse) => {
            this.setState({
                image: reponse.results.map(reponse => (reponse.picture.large)),
                firstName: reponse.results.map(reponse => (reponse.name.first)),
                lastName: reponse.results.map(reponse => (reponse.name.last)),
                city: reponse.results.map(reponse => (reponse.location.city)),
                country: reponse.results.map(reponse => (reponse.location.country)),
                userId: reponse.results.map(reponse => (reponse.login.uuid)),
                loading: true
            })
        })
    }

    render() 
    export default ProfileCard;
}*/




