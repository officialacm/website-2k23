import React from 'react'
import { TeamMemberCard } from '../components/Team'
import "../styles/teamPage.css"
import atharv_pande from "../Assets/Members/atharv_pande.png"

function TeamPage() {
  return (
    <div id='TeamPage'>
      <h1>Core Team</h1>
      <div className="teamMemberCards">
        <div className="teamsection">
          <span>Graphics team</span>
          <TeamMemberCard name="Atharv Pande" position="position" profileImg={atharv_pande} />
          <TeamMemberCard name="Atharv Pande" position="position" profileImg={atharv_pande} />
          <TeamMemberCard name="Atharv Pande" position="position" profileImg={atharv_pande} />
        </div>
        <div className="teamsection">
          <span>Graphics team</span>
          <TeamMemberCard name="Atharv Pande" position="position" profileImg={atharv_pande} />
          <TeamMemberCard name="Atharv Pande" position="position" profileImg={atharv_pande} />
          <TeamMemberCard name="Atharv Pande" position="position" profileImg={atharv_pande} />
        </div>
        <div className="teamsection">
          <span>Graphics team</span>
          <TeamMemberCard name="Atharv Pande" position="position" profileImg={atharv_pande} />
          <TeamMemberCard name="Atharv Pande" position="position" profileImg={atharv_pande} />
          <TeamMemberCard name="Atharv Pande" position="position" profileImg={atharv_pande} />
        </div>
      </div>
    </div>
  )
}

export default TeamPage