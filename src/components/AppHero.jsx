import React from 'react'

export default function AppHero(props) {
  return (
    <div id="AppHero" style={{
    }}>
      <img
      draggable={false}
       src={props.poster} style={{
        maxWidth:"110%", 
        minWidth:"110%", 
        aspectRatio:"1.74",
      }} alt="posterImage" />
    </div>
  )
}
