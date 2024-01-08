import React from 'react'
// import { Link } from 'react-router-dom'
import "../styles/team.css"
import linkedInIcon from "../Assets/Icons/linkedIn.png"
import instaIcon from "../Assets/Icons/Insta.png"
import githubIcon from "../Assets/Icons/github.png"
import atharv_pande from "../Assets/Members/atharv_pande.png"
import { Link } from 'react-router-dom'

const teamData = [
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

export function TeamMemberCard(props) {
  return <div className='Teammembercard'>
    <div className='profileImg' >
      <img src={props.profileImg} alt='profile' />
    </div>
    <div className='memberinfo'>
      <p className='name'>{props.name}</p>
      <p className='position'>{props.position}</p>
      <div className='MemberSocialLinks'>
        <Link to={props.linkedin} >
          <img className='MemberSocialLinkicon' src={linkedInIcon} alt='logo' />
        </Link>
        <Link  to={props.instagram}>
          <img className='MemberSocialLinkicon' src={instaIcon} alt='logo' />
        </Link>
        <Link to={props.github} >
          <img className='MemberSocialLinkicon' src={githubIcon} alt='logo' />
        </Link>
      </div>
    </div>
  </div>
}

function Team() {


  return (
    <div id='Team'>
      <h1>Team</h1>
      <div className='Teammembercards'>
        {teamData.map((member) => {
          return <TeamMemberCard 
          instagram={member.instagram}
          github={member.github}
          linkedin={member.linkedin}
          name={member.name} 
          position={member.position} 
          profileImg={member.profilePic} />
        })}
      </div>
    </div>
  )
}

export default Team