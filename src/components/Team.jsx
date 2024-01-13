import React from 'react'
// import { Link } from 'react-router-dom'
import "../styles/team.css"
import linkedInIcon from "../Assets/Icons/linkedIn.png"
import instaIcon from "../Assets/Icons/Insta.png"
import githubIcon from "../Assets/Icons/github.png"
// import atharv_pande from "../Assets/Members/atharv_pande.png"
import divyanshi_rahate from "../Assets/Members/divyanshi_rahate.png"
import nikita_birajdar from "../Assets/Members/nikita_birajdar.png"
import anushka_dixit from "../Assets/Members/anushka_dixit.png"
import rugved_shitole from "../Assets/Members/rugved_shitole.png"
import { Link } from 'react-router-dom'

const teamData = [
  {
    name: "Nikita Birajdar",
    position: "President",
    profilePic: nikita_birajdar,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Rugved Shitole",
    position: "Vice President",
    profilePic: rugved_shitole,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Divyanshi Rahate",
    position: "Vice President",
    profilePic: divyanshi_rahate,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Anushka Dixit",
    position: "Secretary",
    profilePic: anushka_dixit,
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
        {teamData.map((member, index) => {
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