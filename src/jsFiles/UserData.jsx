import React, { useState, useEffect } from 'react';
import Loader from "./Loader.js";
import "../resources/stylesheets/Loader.css";
import ProfileCard from './ProfileCard.js';

function Status() {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    const useFetch = (url) => {

        useEffect(async () => {
            const response = await fetch(url);
            const data = await response.json();
            setUser(data);
            setLoading(false);
        }, [])

    }

    useFetch("https://randomuser.me/api/?results=1");

    if (loading === true) {
        return (
            <div className="LoaderContent">
                < Loader />
            </div>
        );
    }
    else {
        var image = user.results.map(reponse => (reponse.picture.large))
        var firstName = user.results.map(reponse => (reponse.name.first))
        var lastName = user.results.map(reponse => (reponse.name.last))
        var city = user.results.map(reponse => (reponse.location.city))
        var country = user.results.map(reponse => (reponse.location.country))
        var userId = user.results.map(reponse => (reponse.login.uuid))
        
        var key = String(userId);
        key = key.slice(0,5);
        return (
            <>

                <ProfileCard Unikey={key} img={image} fname={firstName} lname = {lastName}
                city = {city} country = {country} />
            </>
        );
    }
}

export default Status;
