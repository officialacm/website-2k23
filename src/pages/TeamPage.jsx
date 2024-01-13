import React from 'react'
import { TeamMemberCard } from '../components/Team'
import "../styles/teamPage.css"
import ainakshi_hore from "../Assets/Members/ainakshi_hore.png"
import aishwarya_birajdar from "../Assets/Members/aishwarya_birajdar.png"
import ankur_bhandare from "../Assets/Members/ankur_bhandare.png"
import ankur_sonavane from "../Assets/Members/ankur_sonavane.png"
import asad_alwase from "../Assets/Members/asad_alwase.png"
import atharva_vyas from "../Assets/Members/atharva_vyas.png"
import hardik_sheth from "../Assets/Members/hardik_sheth.png"
import kasturi_apte from "../Assets/Members/kasturi_apte.png"
import ketaki_bhoyar from "../Assets/Members/ketaki_bhoyar.png"
import mayuresh_patil from "../Assets/Members/mayuresh_patil.png"
import mohammad_saad_sayyad from "../Assets/Members/mohammad_saad_sayyad.png"
import mohini_avatade from "../Assets/Members/mohini_avatade.png"
import omkar_bindu from "../Assets/Members/omkar_bindu.png"
import omkar_thakur from "../Assets/Members/omkar_thakur.png"
import prathamesh_parit from "../Assets/Members/prathamesh_parit.png"
import priyadarshini_doke from "../Assets/Members/priyadarshini_doke.png"
import priyanka_patil from "../Assets/Members/priyanka_patil.png"
import riddhi_pise from "../Assets/Members/riddhi_pise.png"
import rohit_kulkarni from "../Assets/Members/rohit_kulkarni.png"
import samarth_khorate from "../Assets/Members/samarth_khorate.png"
import sanika from "../Assets/Members/sanika.png"
import sanskruti_sampate from "../Assets/Members/sanskruti_sampate.png"
import shrikant_adhav from "../Assets/Members/shrikant_adhav.png"
import siddhi_kakade from "../Assets/Members/siddhi_kakade.png"
import soham_poshiya from "../Assets/Members/soham_poshiya.png"
import suvarna_patil from "../Assets/Members/suvarna_patil.png"
import Utkarsh_Divekar from "../Assets/Members/Utkarsh_Divekar.png"
import vaibhav_dike from "../Assets/Members/vaibhav_dike.png"
import vaishnavi_kulkarni from "../Assets/Members/vaishnavi_kulkarni.png"
import vansh_rana from "../Assets/Members/vansh_rana.png"
import vikrant_khedkar from "../Assets/Members/vikrant_khedkar.png"
import vipul_zende from "../Assets/Members/vipul_zende.png"
import vivek_thorat from "../Assets/Members/vivek_thorat.png"
import wachas_pati from "../Assets/Members/wachas_pati.png"
import yashwant_karnawat from "../Assets/Members/yashwant_karnawat.png"
import yashada_nalawade from "../Assets/Members/yashada_nalawade.png"
import divyanshi_rahate from "../Assets/Members/divyanshi_rahate.png"
import nikita_birajdar from "../Assets/Members/nikita_birajdar.png"
import anushka_dixit from "../Assets/Members/anushka_dixit.png"
import rugved_shitole from "../Assets/Members/rugved_shitole.png"


const teamMembersData = [
  {
    title: "management team",
    member: [
      {
        name: "Ms.Ketaki Bhoyar ",
        position: "HOD Computer",
        profilePic: ketaki_bhoyar,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Dr. Suvarna Patil",
        position: "HOD AI&DS",
        profilePic: suvarna_patil,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Mrs. Priyadarshini Doke",
        position: "Faculty Sponsor",
        profilePic: priyadarshini_doke,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Ms. Priyanka Patil",
        position: "Program Chair",
        profilePic: priyanka_patil,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Mrs. Mohini Avatade",
        position: " Faculty Coordinator",
        profilePic: mohini_avatade,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Vikrant Khedkar",
        position: "Secretary",
        profilePic: vikrant_khedkar,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Prathmesh Parit",
        position: "Club Advisor",
        profilePic: prathamesh_parit,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
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
        name: "Utkarsh Divekar",
        position: "Event Head",
        profilePic: Utkarsh_Divekar,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Omkar Thakur",
        position: "Event Co-ordinator- 1",
        profilePic: omkar_thakur,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Mayuresh Patil",
        position: "Event Co-ordinator- 2",
        profilePic: mayuresh_patil,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Ankush Dhakare",
        position: "Event Co-ordinator- 3",
        profilePic: "",
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Riddhi Pise",
        position: "Event Co-ordinator- 4",
        profilePic: riddhi_pise,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Kasturi Apte",
        position: "Public Relations Officer 1",
        profilePic: kasturi_apte,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Vipul Zende",
        position: "Public Relations Officer 2",
        profilePic: vipul_zende,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Aishwarya Birajdar",
        position: "Public Relations Officer 3",
        profilePic: aishwarya_birajdar,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Sanskruti Sampate",
        position: "Treasurer",
        profilePic: sanskruti_sampate,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Vansh Rana",
        position: "JT Secretary",
        profilePic: vansh_rana,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },

      {
        name: "Vaishnavi Kulkarni",
        position: "Membership Coordinator",
        profilePic: vaishnavi_kulkarni,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Siddhi Kakade",
        position: "Assistant treasurer",
        profilePic: siddhi_kakade,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },

    ]
  },
  {
    title: "Technical Team",
    member: [
      {
        name: "Atharva Vyas",
        position: "Technical Head",
        profilePic: atharva_vyas,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Vivek Thorat",
        position: "Web development Head",
        profilePic: vivek_thorat,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Vaibhav Dike",
        position: "Web Master 1",
        profilePic: vaibhav_dike,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Wachas Pati",
        position: "Web Master 2",
        profilePic: wachas_pati,
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
        name: "Ankur Bhandare",
        position: "Marketing Head",
        profilePic: ankur_bhandare,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Rohit Kulkarni",
        position: "Marketing Co-ordinator",
        profilePic: rohit_kulkarni,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Yashwant Karnawat",
        position: "Community Service Co-ordinator",
        profilePic: yashwant_karnawat,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Ainakshi Hore",
        position: "Video Editor",
        profilePic: ainakshi_hore,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Yashada Nalawade",
        position: "Design and Media Head",
        profilePic: yashada_nalawade,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Hardik Sheth",
        position: "Social Media Associate",
        profilePic: hardik_sheth,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Soham Poshiya",
        position: "Volunteer Coordinator 1",
        profilePic: soham_poshiya,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Omkar Bindu",
        position: "Volunteer Coordinator 2",
        profilePic: omkar_bindu,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Mohammad Saad Sayyad",
        position: "Senior Representative",
        profilePic: mohammad_saad_sayyad,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Asad Alwase",
        position: "Junior Representative",
        profilePic: asad_alwase,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Ankur Sonavane",
        position: "Snapper ",
        profilePic: ankur_sonavane,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Shrikant Adhav",
        position: "Communication Coorodinator",
        profilePic: shrikant_adhav,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Sanika Kotalwar",
        position: "Editor-In-Chief",
        profilePic: sanika,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
      {
        name: "Samarth Khorate",
        position: "Editorial Coordinator 1",
        profilePic: samarth_khorate,
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
    ]
  },
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