import React from 'react'
import "../styles/events.css"
import codeQuestImg from "../Assets/eventPosters/codeQuest.png"
import event_1 from "../Assets/eventPosters/event_1.png"
import event_2 from "../Assets/eventPosters/event_2.png"
import event_8 from "../Assets/eventPosters/event_8.png"
import event_6 from "../Assets/eventPosters/event_6.png"
import event_7 from "../Assets/eventPosters/event_7.png"

const eventData = [
  {
    date: "january 15",
    time: "9:15 AM",
    image: event_1,
    eventDesc: [
      "Event Coordinators",
      "Event Coordinators",
      "Event Coordinators"
    ],
    link: "#"
  },
  {
    date: "january 15",
    time: "9:15 AM",
    image: event_6,
    eventDesc: [
      "Event Coordinators",
      "Event Coordinators",
      "Event Coordinators"
    ],
    link: "#"
  },
  {
    date: "january 15",
    time: "9:15 AM",
    image: event_1,
    eventDesc: [
      "Event Coordinators",
      "Event Coordinators",
      "Event Coordinators"
    ],
    link: "#"
  },
  {
    date: "january 15",
    time: "9:15 AM",
    image: event_8,
    eventDesc: [
      "Event Coordinators",
      "Event Coordinators",
      "Event Coordinators"
    ],
    link: "#"
  },
  {
    date: "january 15",
    time: "9:15 AM",
    image: event_7,
    eventDesc: [
      "Event Coordinators",
      "Event Coordinators",
      "Event Coordinators"
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
          <p className='date'>{thisevent.date}</p>
          <span>
            {thisevent.eventDesc.forEach(e => {
              return <p>{e}</p>
            })}
          </span>
          <p className='formLink'>
            <p>Free</p>
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
