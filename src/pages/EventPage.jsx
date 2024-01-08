import React from 'react'
import { EventCardStack } from '../components/Events'
import "../styles/events.css"

function EventPage() {
  return (<div id='EventPage'>
    <h1>Events</h1>
    <div className='eventPageHeader'>
      <label htmlFor="searchEvent">
        <input type="search"
          name="searchEvent"
          id="searchEvent"
          placeholder='Search Events'
        />
        <button>Search</button>
      </label>

      <div className='moveBtns'>
        <div>{"<"}</div>
        <div>{">"}</div>
      </div>
    </div>
    <div className='eventInfoGrid'>
      <EventCardStack />
    </div>
  </div>
  )
}

export default EventPage