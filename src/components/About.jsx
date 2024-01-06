import "../styles/about.css"
import { Instagram, GitHub, YouTube, Twitter, LinkedIn, Facebook } from '@mui/icons-material'
import aboutPageImg from "../Assets/Images/AboutPageImg.png"

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
            <p className='section2Para'>Lor ipsum dolor sit amet consectetur adipisicing elit. Placeat dolores vitae, ad a deleniti voluptate officia obcaecati et! Distinctio necessitatibus iure, voluptatem eaque totam doloribus vel dolores consequuntur in maxime laudantium fuga. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, ratione maiores optio sit recusandae accusantium dolorum consequuntur nisi molestias quis?</p>
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
          <div className="section4"></div>
          <button type="button" id='Button' class="btn btn-light" style={{ backgroundColor: "#c7cdd2", marginLeft: "15px", marginTop: "8px" }}>Learn More..</button>
        </div>
        <div className="middleRight">
          <img src={aboutPageImg} className="abotSecimg" alt="" />

        </div>

      </div>
    </div>
  )
}

