import React from 'react'
import { TeamMemberCard } from '../components/Team'
import "../styles/teamPage.css"
import atharv_pande from "../Assets/Members/atharv_pande.png"

const teamMembersData = [
  {
    title: "Technical Team",
    member: [
      {
        name: "Atharv Pande",
        position: "position",
        profilePic: atharv_pande,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Atharv Pande",
        position: "position",
        profilePic: atharv_pande,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
    ]
  },
  {
    title: "Design Team",
    member: [
      {
        name: "Atharv Pande",
        position: "position",
        profilePic: atharv_pande,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Atharv Pande",
        position: "position",
        profilePic: atharv_pande,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
    ]
  },
  {
    title: "management team",
    member: [
      {
        name: "Atharv Pande",
        position: "position",
        profilePic: atharv_pande,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Atharv Pande",
        position: "position",
        profilePic: atharv_pande,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
    ]
  }
]

function TeamPage() {
  return (
    <div id='TeamPage'>
      <h1>Core Team</h1>
      <div className="teamMemberCards">
        {teamMembersData.map((team) => {
          return <div className="teamsection">
            <span>{team.title}</span>
            {team.member.map((member) => {
              return <TeamMemberCard
                instagram={member.instagram}
                github={member.github}
                linkedin={member.linkedin}
                name={member.name}
                position={member.position}
                profileImg={member.profilePic} />
            })}
          </div>
        })}
      </div>
    </div>
  )
}

export default TeamPage