import React, { Component } from "react";

const MapIframe =(props) => {
    let tweetersIframe = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6424214.836942619!2d-84.1311926038615!3d38.201092061236345!
    2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8860b01c951121ab%3A0x1cc545136f9fda86!2sLucky+Starr+Event+Venue!5e0!3m2!1sen!2sus!4v1543375745517" 
    zoom="400m" width=${props.mapSize.width} height=${props.mapSize.height} frameborder="0" style="border:0" allowfullscreen></iframe>`
        
    return (
        <div>
        <div dangerouslySetInnerHTML={{ __html: tweetersIframe}}/>
        </div>
    )

}

export default MapIframe;





