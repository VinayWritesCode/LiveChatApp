import React, { useEffect, useRef } from "react";
import "../resources/stylesheets/Camera.css";
import Loader from "./Loader";
import "../resources/stylesheets/Loader.css";

const Camera = () => {
    const videoRef = useRef(null);
    const colorRef = useRef(null);
    

    useEffect(() => {
        getVideo();
    }, [videoRef]);

    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({ video: { width: 50 +"vw auto"  , height: 70 + "vh auto" } })
        .then(stream => {
               videoRef.current.srcObject = stream;
                videoRef.current.play();
            })
            .catch(err => {
                console.error("error:", err);
            });

            
    };

    


    return (
        <>
        <div className="container">
                <div className="LoaderContent">
                    <Loader> </Loader>
                </div>
            <div ref={colorRef} className="scene" />
               
            <div className="webcam-video"> 
                <video
                    ref={videoRef}
                    className="player"
                />
            </div>
        </div>
        </>
    );
};

export default Camera;
