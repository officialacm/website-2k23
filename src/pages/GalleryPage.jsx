import React, { useState } from 'react'
import '../styles/galleryPage.css'
import poster from "../Assets/galleryImages/image1.png"


const imagePaths = [
  {
    posterImage: poster,
    // Technical Events / Social events / Achievements / Team
    posterCategory: "Social events",
    postername: "tech fest",
    posterDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo quo similique eveniet at? Ratione iure est culpa nihil quaerat explicabo.",
    posterDate: "15 Jan",
    posterAttendees: "150"
  },
  {
    posterImage: poster,
    // Technical Events / Social events / Achievements / Team
    posterCategory: "Social events",
    postername: "tech fest",
    posterDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo quo similique eveniet at? Ratione iure est culpa nihil quaerat explicabo.",
    posterDate: "15 Jan",
    posterAttendees: "150"
  },
  {
    posterImage: poster,
    // Technical Events / Social events / Achievements / Team
    posterCategory: "Social events",
    postername: "tech fest",
    posterDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo quo similique eveniet at? Ratione iure est culpa nihil quaerat explicabo.",
    posterDate: "15 Jan",
    posterAttendees: "150"
  },
  {
    posterImage: poster,
    // Technical Events / Social events / Achievements / Team
    posterCategory: "Social events",
    postername: "tech fest",
    posterDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo quo similique eveniet at? Ratione iure est culpa nihil quaerat explicabo.",
    posterDate: "15 Jan",
    posterAttendees: "150"
  },
  {
    posterImage: poster,
    // Technical Events / Social events / Achievements / Team
    posterCategory: "Social events",
    postername: "tech fest",
    posterDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo quo similique eveniet at? Ratione iure est culpa nihil quaerat explicabo.",
    posterDate: "15 Jan",
    posterAttendees: "150"
  },
  {
    posterImage: poster,
    // Technical Events / Social events / Achievements / Team
    posterCategory: "Social events",
    postername: "tech fest",
    posterDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo quo similique eveniet at? Ratione iure est culpa nihil quaerat explicabo.",
    posterDate: "15 Jan",
    posterAttendees: "150"
  },
  {
    posterImage: poster,
    // Technical Events / Social events / Achievements / Team
    posterCategory: "Social events",
    postername: "tech fest",
    posterDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo quo similique eveniet at? Ratione iure est culpa nihil quaerat explicabo.",
    posterDate: "15 Jan",
    posterAttendees: "150"
  }
]


function GalleryPage() {

  const [activetab, setactivetab] = useState("Social Events")
  const activeColor = "#0092CE"

  const getRandomWidth = () => {
    const minWidth = 20
    const maxWidth = 35
    return `${Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth)}em`;
  };

  return (
    <div id='galleryPage'>
      <div className='galleryPageHeader'>
        <span
          onClick={() => setactivetab("Social Events")}
          className={activetab === "Social Events" ? "active" : ""}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 10H7V12H17V10ZM19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM14 14H7V16H14V14Z" fill={activetab === "Social Events" ? activeColor : "black"} />
          </svg>
          Social Events
        </span>

        <span
          onClick={() => setactivetab("Technical Events")}
          className={activetab === "Technical Events" ? "active" : ""}>
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.53 10.06L12.47 9L7.59 13.88L5.47 11.76L4.41 12.82L7.59 16L13.53 10.06ZM16 2H15V0H13V2H5V0H3V2H2C0.89 2 0.00999999 2.9 0.00999999 4L0 18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM16 18H2V7H16V18Z" fill={activetab === "Technical Events" ? activeColor : "black"} />
          </svg>
          Technical Events
        </span>

        <span
          onClick={() => setactivetab("Achievements")}
          className={activetab === "Achievements" ? "active" : ""}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" mlns="http://www.w3.org/2000/svg">
            <path d="M16 2H14V0H4V2H2C0.9 2 0 2.9 0 4V5C0 7.55 1.92 9.63 4.39 9.94C4.70625 10.6894 5.2002 11.3505 5.82916 11.8662C6.45813 12.3819 7.2032 12.7367 8 12.9V16H4V18H14V16H10V12.9C10.7968 12.7367 11.5419 12.3819 12.1708 11.8662C12.7998 11.3505 13.2937 10.6894 13.61 9.94C16.08 9.63 18 7.55 18 5V4C18 2.9 17.1 2 16 2ZM2 5V4H4V7.82C2.84 7.4 2 6.3 2 5ZM16 5C16 6.3 15.16 7.4 14 7.82V4H16V5Z" fill={activetab === "Achievements" ? activeColor : "black"} />
          </svg>
          Achievements
        </span>

        <span
          onClick={() => setactivetab("Team")}
          className={activetab === "Team" ? "active" : ""}>
          <svg width="22" height="14" viewBox="0 0 22 14" fill="none" mlns="http://www.w3.org/2000/svg">
            <path d="M15 6C16.66 6 17.99 4.66 17.99 3C17.99 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 4.66 13.34 6 15 6ZM7 6C8.66 6 9.99 4.66 9.99 3C9.99 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3C4 4.66 5.34 6 7 6ZM7 8C4.67 8 0 9.17 0 11.5V14H14V11.5C14 9.17 9.33 8 7 8ZM15 8C14.71 8 14.38 8.02 14.03 8.05C15.19 8.89 16 10.02 16 11.5V14H22V11.5C22 9.17 17.33 8 15 8Z" fill={activetab === "Team" ? activeColor : "black"} />
          </svg>
          Team
        </span>

      </div>

      {/* display gallery images */}

      <div className="galleryPageImages">
        {imagePaths.map((poster, index) => (
          <div key={index} className="galleryPageImage" style={{ width: getRandomWidth() }}>
            <img src={poster.posterImage} alt={`galleryimg ${index}`} />
          </div>
        ))}
      </div>

    </div >
  )
}

export default GalleryPage