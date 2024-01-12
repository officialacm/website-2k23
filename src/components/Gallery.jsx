import React from 'react'
import "../styles/gallery.css"
import image1 from "../Assets/galleryImages/image1.png"
import event_1 from "../Assets/galleryImages/event_1.png"
import event_8 from "../Assets/galleryImages/event_8.png"
import event_6 from "../Assets/galleryImages/event_6.png"
import event_2 from "../Assets/galleryImages/event_2.jpg"
import image_9 from "../Assets/galleryImages/image_9.jpg"
import image_10 from "../Assets/galleryImages/image_10.jpg"
import image_11 from "../Assets/galleryImages/image_11.jpg"
import image_12 from "../Assets/galleryImages/image_12.jpg"
import image_13 from "../Assets/galleryImages/image_13.jpg"
import image_14 from "../Assets/galleryImages/image_14.jpg"
import image_15 from "../Assets/galleryImages/image_15.jpg"
import image_16 from "../Assets/galleryImages/image_16.jpg"

export default function gallery() {

    let galleryImages = [
        image1,
        event_1,
        event_8,
        event_6,       
        event_2,
        image_9,
        image_10,
        image_11,
        image_12,
        image_13,
        image_14,
        image_15,
        image_16,

       
    ]

    function renderAllImages() {
        let allImagesConponents = []
        for (let i = 0; i < galleryImages.length; i += 2) {
            allImagesConponents.push(<div>
                <img src={galleryImages[i]} alt='' />
                <img src={galleryImages[i + 1]} alt='' />
            </div>)
        }
        return allImagesConponents
    }
    return (
        <div id="gallery">
            <div className='headBar'>
                <p>Notifications and Updates</p>
            </div>
            <div className='galleryContainer'>
                {renderAllImages()}
            </div>
        </div>
    )
}
