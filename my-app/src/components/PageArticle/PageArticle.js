import React from "react";
import "./PageArticle.css";

class PageArticle extends React.Component {
  render() {
    return (
      <article className="PageArticle">
        <header className="PageArticle-header">
          <section>
            <img src={this.props.image} alt="Logo"/>
          </section>
          <section>
            <h3>{this.props.organization} <span>{this.props.date}</span></h3>
            <p><i>{this.props.location}</i><span>{this.props.duration}</span></p> 
          </section>
        </header>
        <section className="PageArticle-body">
          <p><strong>{this.props.category1title}</strong> {this.props.category1description}</p>
          <p><strong>{this.props.category2title}</strong> {this.props.category2description}</p>
          <p><strong>{this.props.category3title}</strong> {this.props.category3description}</p>
          <p><strong>{this.props.category4title}</strong> {this.props.category4description}</p>
        </section>
        <footer className="PageArticle-footer">
          <p>{this.props.description} <a href={this.props.descriptionUrl} target="blank">{this.props.descriptionLink}</a></p>
        </footer>
      </article>
    )
  }
}

PageArticle.defaultProps = {
  image: "https://via.placeholder.com/150",
  organization: "Organization name",
  location: "City, Country",
  date: "Month Year - Month Year",
  duration: "n. years n. months",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  descriptionUrl: "https://www.google.com/",
  descriptionLink: "www.google.com"
}

export default PageArticle;