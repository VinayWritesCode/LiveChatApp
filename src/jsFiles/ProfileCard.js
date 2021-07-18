import React from 'react';
import "../resources/stylesheets/ProfileCard.css";
import Loader from "./Loader.js";
import "../resources/stylesheets/Loader.css";
import { render } from 'react-dom';

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

        var { RandomUser , loading } = this.state;

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
                    <header>
                        <div className="profile-image">
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
                    </footer>
                </div>
            );
        }
    }
}

render(<ProfileCard />, document.getElementById('root'));



/*
import axios from "axios";
function ProfileCard() {
    let randomNum = parseInt(Math.random() * 180);
    const url = "https://picsum.photos/" + randomNum;


    const fetchData = () => {
        return axios.get("https://randomuser.me/api/")
      .then((response) => console.log(response.data));
    }
   
    
    return (
        <div className="ProfileCard">
            <header>
                <div className="profile-image">
                    <img src={url} alt="Profile Photo" />
                </div>
            </header>
            <footer>
                <div className="ProfileName">
                    <p></p>
                </div>
            </footer>
        </div>
    )
}
*/
export default ProfileCard;
