import React from 'react'
// import { Link } from 'react-router-dom'
import "../styles/team.css"
import linkedInIcon from "../Assets/Icons/LinkedIn.png"
import instaIcon from "../Assets/Icons/Insta.png"
import githubIcon from "../Assets/Icons/github.png"
import atharv_pande from "../Assets/Members/atharv_pande.png"



function Team() {

  function TeamMemberCard() {
    return <div className='Teammembercard'>
      <div className='profileImg' >
        <img src={atharv_pande} alt='profile' />
      </div>
      <div className='memberinfo'>
        <p className='name'>Atharv Pande</p>
        <p className='position'>Position</p>
        <div className='MemberSocialLinks'>
          <span>
            <img className='MemberSocialLinkicon' src={linkedInIcon} alt='logo' />
          </span>
          <span>
            <img className='MemberSocialLinkicon' src={instaIcon} alt='logo' />
          </span>
          <span>
            <img className='MemberSocialLinkicon' src={githubIcon} alt='logo' />
          </span>
        </div>
      </div>
    </div>
  }

  return (
    <div id='Team'>
      <h1>Team</h1>
      <div className='Teammembercards'>
        <TeamMemberCard />
        <TeamMemberCard />
        <TeamMemberCard />
        <TeamMemberCard />
        <TeamMemberCard />
        <TeamMemberCard />
      </div>
    </div>
  )
}

export default Team