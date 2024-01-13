import React from 'react'
import "../styles/events.css"
import codeQuestImg from "../Assets/eventPosters/codeQuest.png"
import event_1 from "../Assets/eventPosters/event_1.png"
import image_16 from "../Assets/galleryImages/image_16.jpg"
import event_8 from "../Assets/eventPosters/event_8.png"
import event_6 from "../Assets/eventPosters/event_6.png"
import event_7 from "../Assets/eventPosters/event_7.png"

const eventData = [
  {
    date: "january 15",
    time: "9:15 AM",
    image: event_1,
    eventDesc: [
      "The ACM club's technical event featured a challenging second round where participants engaged in a series of MCQs and coding exercises. Attendees showcased their proficiency in both theoretical concepts and practical coding skills, contributing to an intellectually stimulating and competitive atmosphere."
    ],
    link: "#"
  },
  {
    date: "january 16",
    time: "9:15 AM",
    image: event_6,
    eventDesc: [
      "The technical event held last week showcased cutting-edge innovations and fostered collaborative discussions among industry experts. Attendees gained valuable insights into emerging technologies and explored the latest advancements in the field."
    ],
    link: "#"
  },
  {
    date: "january 17",
    time: "9:15 AM",
    image: image_16,
    eventDesc: [
      "At the prestigious awards event, luminaries from various industries gathered to celebrate excellence. The night was adorned with dazzling performances and heartfelt acceptance speeches, immortalizing the outstanding achievements of the honorees."
    ],
    link: "#"
  },
  {
    date: "january 18",
    time: "9:15 AM",
    image: event_8,
    eventDesc: [
      "Social event was a dazzling affair, filled with laughter, vibrant conversations, and a palpable sense of camaraderie. Attendees reveled in the joyous atmosphere, creating memories that will undoubtedly be cherished for years to come."
    ],
    link: "#"
  },
  {
    date: "january 19",
    time: "9:15 AM",
    image: event_7,
    eventDesc: [
      "The club bonding event was a resounding success, as members enthusiastically participated in team-building activities and forged stronger connections. Laughter echoed throughout the venue, creating lasting memories and fostering a sense of camaraderie among everyone involved."
    ],
    link: "#"
  },
]

export function EventCardStack() {
  let allcards = []
  let thisevent = eventData[1]
  for (let i = 0; i < eventData.length; i++) {
    thisevent = eventData[i]
    allcards.push(<div className='EventCardStackContainer'>
      <div className='EventcardStackHeader'>
        <span style={{
          marginInline: "auto",
        }}>
          <h2>{thisevent.date}</h2>
          <p>{thisevent.time}</p>
        </span>
      </div>
      <div style={{
        flexDirection: i % 2 === 0 ? "column" : "column-reverse",
      }} className='EventCardStack'>
        <div className='EventCardStackImageCard'>
          <img src={thisevent.image} alt="" />
        </div>
        <div className='EventCardStackDetailsCard'>
          {/* <p className='date'>{thisevent.date}</p> */}
          <span>
            {thisevent.eventDesc}
            {/* .forEach(e => {
              return <p>{e}</p>
            })} */}
          </span>
          <p className='formLink'>
            {/* <p>The ACM club's technical event featured a challenging second round where participants engaged in a series of MCQs and coding exercises. Attendees showcased their proficiency in both theoretical concepts and practical coding skills, contributing to an intellectually stimulating and competitive atmosphere.</p> */}
            <a href={thisevent.link}>Form Link {"->"}</a>
          </p>
        </div>
      </div>
    </div>)
  }

  return <>{allcards}</>

}


export default function Events() {

  return (
    <div id='events-section'>
      <h1>Events</h1>
      <div id='eventGrid'>
        <EventCardStack />
      </div>
    </div>
  )
}
