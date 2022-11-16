import React from "react";
import "./PageHeader.css";

class PageHeader extends React.Component {
  render() {
    return (
      <header className="PageHeader">
        <section>
          <h1>{this.props.name}</h1>
          <p><strong>{this.props.role}</strong></p>
          <p><i>{this.props.residency}</i></p> 
        </section>
        <section>
          <img src={this.props.image} alt="Profile" />
        </section>
      </header>
    )
  }
}

PageHeader.defaultProps = {
  name: "Full name",
  role: "Job role/s",
  residency: "City, State Country",
  image: "https://via.placeholder.com/150"
}

export default PageHeader;