import React, { useEffect, useRef } from "react";
import "../resources/stylesheets/Camera.css";

const Camera = () => {
    const videoRef = useRef(null);
    const photoRef = useRef(null);
    const stripRef = useRef(null);
    const colorRef = useRef(null);

    useEffect(() => {
        getVideo();
    }, [videoRef]);

    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({ video: { width: 100 , height: 100} })
        .then(stream => {
               videoRef.current.srcObject = stream;
                videoRef.current.play();
            })
            .catch(err => {
                console.error("error:", err);
            });
    };

    const paintToCanvas = () => {
        let video = videoRef.current;
        let photo = photoRef.current;
        let ctx = photo.getContext("2d");

        const width = 320;
        const height = 240;
        photo.width = width;
        photo.height = height;

        return setInterval(() => {
            let color = colorRef.current;

            ctx.drawImage(video, 0, 0, width, height);
            let pixels = ctx.getImageData(0, 0, width, height);
/*
            color.style.backgroundColor = `rgb(${pixels.data[0]},${pixels.data[1]},${pixels.data[2]
                })`;
            color.style.borderColor = `rgb(${pixels.data[0]},${pixels.data[1]},${pixels.data[2]
                })`;*/
        }, 200);
    };

    const takePhoto = () => {
        let photo = photoRef.current;
        let strip = stripRef.current;

        const data = photo.toDataURL("image/jpeg");

        console.warn(data);
        const link = document.createElement("a");
        link.href = data;
        link.setAttribute("download", "myWebcam");
        link.innerHTML = `<img src='${data}' alt='thumbnail'/>`;
        strip.insertBefore(link, strip.firstChild);
    };

    return (
        <div className="container">
            <div ref={colorRef} className="scene">
               
            </div>
            <div className="webcam-video"> 
                <button onClick={() => takePhoto()}   className="take-btn mt-5 pd-5">Take a photo</button>
                <video
                    onCanPlay={() => paintToCanvas()}
                    ref={videoRef}
                    className="player"
                />
                <canvas ref={photoRef} className="photo" />
                <div className="photo-booth">
                    <div ref={stripRef} className="strip" />
                </div>
            </div>
        </div>
    );
};

export default Camera;
