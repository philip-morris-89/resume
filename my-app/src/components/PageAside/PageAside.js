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
            <p>{this.props.email}</p>
          </li>
          <li>
            <h6>LinkedIn:</h6>
            <p><a href={this.props.linkedinurl} target="blank">{this.props.linkedinlink}</a></p>
          </li>
        </ul>

        <ul>
          <li><h5>Top skills</h5></li>
          <li><p>{this.props.skill1}</p></li>
          <li><p>{this.props.skill2}</p></li>
          <li><p>{this.props.skill3}</p></li>
          <li><p>{this.props.skill4}</p></li>
          <li><p>{this.props.skill5}</p></li>
        </ul>

        <ul>
          <li><h5>Lenguages</h5></li>
          <li><p>{this.props.lenguage1}</p></li>
          <li><p>{this.props.lenguage2}</p></li>
        </ul>
      </aside>
    )
  }
}

PageAside.defaultProps = {
  email: "email@gmail.com",
  linkedinurl: "https://www.linkedin.com/",
  linkedinlink: "www.linkedin.com/user",
  skill1: "Skill one",
  skill2: "Skill two",
  skill3: "Skill three",
  skill4: "Skill four",
  skill5: "Skill five",
  lenguage1: "Lenguage One"
}

export default PageAside;