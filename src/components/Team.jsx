import React from 'react'
// import { Link } from 'react-router-dom'
import "../styles/team.css"
import linkedInIcon from "../Assets/Icons/linkedIn.png"
import instaIcon from "../Assets/Icons/Insta.png"
import githubIcon from "../Assets/Icons/github.png"
import atharv_pande from "../Assets/Members/atharv_pande.png"
import divyanshi_rahate from "../Assets/Members/divyanshi_rahate.png"
import nikita_birajdar from "../Assets/Members/nikita_birajdar.png"
import anushka_dixit from "../Assets/Members/anushka_dixit.png"
import rugved_shitole from "../Assets/Members/rugved_shitole.png"
import ainakshi_hore from "../Assets/Members/ainakshi_hore.png"
aishwarya_birajdar
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
  {
    name: "Sanskruti Sampate",
    position: "Treasurer",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Vansh Rana",
    position: "JT Secretary",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Utkarsh Divekar",
    position: "Event Head",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Vaishnavi Kulkarni",
    position: "Membership Coordinator",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Vikrant Khedkar",
    position: "Secretary",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Prathmesh Parit",
    position: "Club Advisor",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Siddhi Kakade",
    position: "Assistant treasurer",
    profilePic: anushka_dixit,
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
  {
    name: "Sanika Kotalwar",
    position: "Editor-In-Chief",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Samarth Khorate",
    position: "Editorial Coordinator 1",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Omkar Thakur",
    position: "Event Co-ordinator- 1",
    profilePic: anushka_dixit,
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
  {
    name: "Mayuresh Patil",
    position: "Event Co-ordinator- 2",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Ankush Dhakare",
    position: "Event Co-ordinator- 3",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Riddhi Pise",
    position: "Event Co-ordinator- 4",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Kasturi Apte",
    position: "Public Relations Officer 1",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Vipul Zende",
    position: "Public Relations Officer 2",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Aishwarya Birajdar",
    position: "Public Relations Officer 3",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Atharva Vyas",
    position: "Technical Head",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Vivek Thorat",
    position: "Web development Head",
    profilePic: anushka_dixit,
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
  {
    name: "Vaibhav Dike",
    position: "Web Master 1",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Wachas Pati",
    position: "Web Master 2",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Ankur Bhandare",
    position: "Marketing Head",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Rohit Kulkarni",
    position: "Marketing Co-ordinator",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Yashwant Karnawat",
    position: "Community Service Co-ordinator",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Ainakshi Hore",
    position: "Video Editor",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Yashada Nalawade",
    position: "Design and Media Head",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Hardik Sheth",
    position: "Social Media Associate",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Soham Poshiya",
    position: "Volunteer Coordinator 1",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Omkar Bindu",
    position: "Volunteer Coordinator 2",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Mohammad Saad Sayyad",
    position: "Senior Representative",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Asad Alwase",
    position: "Junior Representative",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Ankur Sonavane",
    position: "Snapper ",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Shrikant Adhav",
    position: "Communication Coorodinator",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Ms.Ketaki Bhoyar ",
    position: "HOD Computer",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Dr. Suvarna Patil",
    position: "HOD AI&DS",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Ms.Ketaki Bhoyar",
    position: " Faculty Sponsor",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Mrs. Priyadarshini Doke",
    position: "Faculty Sponsor",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Ms. Priyanka Patil",
    position: "Program Chair",
    profilePic: anushka_dixit,
    github: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Mrs. Mohini Avatade",
    position: " Faculty Coordinator",
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