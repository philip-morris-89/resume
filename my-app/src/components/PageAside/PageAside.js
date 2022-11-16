import React from "react";
import "./PageAside.css";

class PageAside extends React.Component {
  render() {
    return (
      <aside className="PageAside">
        <ul>
          <li><h5>Contact</h5></li>
          <li>
            <h6>Email:</h6>
            <p>scelfofilippo@gmail.com</p>
          </li>
          <li>
            <h6>LinkedIn:</h6>
            <p><a href="https://www.linkedin.com/in/filipposcelfo/" target="blank">www.linkedin.com/in/filipposcelfo</a></p>
          </li>
          <li>
            <h6>Phone:</h6>
            <p>+39 347 0705572</p>
          </li>
        </ul>

        <ul>
          <li><h5>Top skills</h5></li>
          <li><p>HTML</p></li>
          <li><p>CSS</p></li>
          <li><p>React JS</p></li>
          <li><p>Adobe Creative Suite</p></li>
          <li><p>UX Design</p></li>
        </ul>

        <ul>
          <li><h5>Lenguages</h5></li>
          <li><p>English</p></li>
          <li><p>Italian</p></li>
        </ul>

        {/* <ul className="PageAside-certifications">
          <li><h5>Certifications</h5></li>
          <li><p><strong>Develhope</strong><br/>Full-Stack Web Course - Palermo, Italy</p></li>
          <li><p><strong>Codecademy</strong><br/>Learn Javascript Course</p></li>
          <li><p><strong>Strategyzer</strong><br/>Business Model Generation Workshop & Masterclass - San Francisco, USA</p></li>
          <li><p><strong>A.N.F.E</strong><br/>Web Design course - Palermo, Italy</p></li>
          <li><p><strong>Art Institute 'Diego Bianca Amato'</strong><br/>Diploma in Architecture & Design - Cefalù (PA) Italy</p></li>
        </ul> */}
      </aside>
    )
  }
}

export default PageAside;