import React from "react";
import "./PageHeader.css";

class PageHeader extends React.Component {
  render() {
    return (
      <header className="PageHeader">
        <section>
          <h1>Filippo Scelfo</h1>
          <p><strong>Product Designer /  UX Developer</strong></p>
          <p><i>Sicily, Italy</i></p> 
        </section>
        <section>
          <img src={require('../../images/profilePicture.jpeg')} alt="Profile" />
        </section>
      </header>
    )
  }
}

export default PageHeader;