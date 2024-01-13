import "../styles/about.css"
import { Instagram, GitHub, YouTube, Twitter, LinkedIn, Facebook } from '@mui/icons-material'
import aboutPageImg from "../Assets/Images/AboutPageImg.png"
import { Link } from "react-router-dom"

export default function About() {
  return (
    <div className='aboutContainer'>
      <div className="aboutTop">
        <h1 className="topText">About Us</h1>
      </div>
      <div className="aboutmiddle">
        <div className="middleLeft">
          <div className="section1">
            <h3 className='setion1Headline'>What'S ACM?</h3>
          </div>
          <div className="section2">
            <p className='section2Para'>
              Welcome to our ACM Student Chapter, a dynamic community of passionate students dedicated to the field of computer science and technology. We are committed to fostering an environment where like-minded individuals can come together to learn, collaborate, and innovate.
              Our Mission: Our mission is to promote and advance computer science education, research, and innovation within our university community and beyond.</p>
          </div>
          <div className="section3">
            <div className="section3Items">
              <Instagram className='logo' />
              <GitHub className='logo' />
              <Facebook className='logo' />
              <Twitter className='logo' />
              <LinkedIn className='logo' />
              <YouTube className='logo' />
            </div>

          </div>
          <Link to="#" className="joinBtn" >Learn More..</Link>
        </div>
        <div className="middleRight">
          <img src={aboutPageImg} className="abotSecimg" alt="" />

        </div>

      </div>
    </div>
  )
}

