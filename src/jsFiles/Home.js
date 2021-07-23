import React from 'react';
import "../resources/stylesheets/Home.css";
import FriendsList from './FriendsList';
import "../resources/stylesheets/HideFriendList.css";


const Home = () => {
    
    return (
        <div className="Home">
            <div className="ProfileCards">
                
                <div className="container-fluid mb-5">
                    <div className="Search top">
                        <hr id="hr"/>
                        <h4 id="title"> Friends </h4>
                        <hr id="hr"/>
                    </div>
                    <FriendsList />
                </div>
        </div>
        </div>
    )
}

export default Home;
