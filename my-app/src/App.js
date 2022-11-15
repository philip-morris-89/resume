import React from "react";
import PageAside from "./components/PageAside/PageAside";
import PageHeader from "./components/PageHeader/PageHeader";
import PageArticle from "./components/PageArticle/PageArticle";
import image1 from "./images/rb-logo.jpg";
import image2 from "./images/develhope-logo.jpg";
import image3 from "./images/iproperty-logo.jpg";

export class App extends React.Component {
  render() {
    return (
      <div className="App">

        <div className="App-page">

          <PageAside />

          <main>
            <PageHeader />
            <section className="PageSection">
              <h2>Experience</h2>

              <PageArticle
                image={image2}
                organization="Develhope"
                location="Palermo, Italy"
                date="June 2022 - Now"
                duration="6 months"
                category1title="Job role: "
                category1description="Full-Stack Developer (Junior)"
                category2title="Technologies: "
                category2description="HTML, CSS, Git, Javascript, React JS, Typescript, Node JS"
                category3title="Platforms: "
                category3description="GitHub, CodePen, Trello"
                description="At Develhope we elaborated on all the essential elements to build web softwares ​​and delivered a real web app with agile methodologies. "
                descriptionUrl="https://www.develhope.co/"
                descriptionLink="www.develhope.co"
              />

              <PageArticle
                image={image1}
                organization="Redbubble"
                location="Melbourne, Australia"
                date="April 2015 - October 2018"
                duration="3 years 7 months"
                category1title="Job roles: "
                category1description="Product Designer, UX Developer"
                category2title="Technologies: "
                category2description="HTML, CSS, React JS, JQuery, Javascript, Git"
                category3title="Softwares: "
                category3description="Adobe Creative Suite, Figma, Invision, Atom, Sketch"
                category4title="Platforms: "
                category4description="GitHub, CodePen, Trello, Usertesting"
                description="Redbubble is a global online marketplace for print-on-demand products based on user-submitted artwork:"
                descriptionUrl="https://www.redbubble.com/"
                descriptionLink="www.redbubble.com"
              />

              <PageArticle
                image={image3}
                organization="iProperty"
                location="Melbourne, Australia"
                date="June 2012 - December 2014"
                duration="2 years 6 months"
                category1title="Job roles: "
                category1description="Web Designer, UX Developer"
                category2title="Technologies: "
                category2description="HTML, CSS, JQuery, Bootstrap"
                category3title="Softwares: "
                category3description="Adobe Creative Suite, Atom, Keynote"
                description="iProperty is an online web platform for real estate agencies and agents to manage and promote listings accross Austalia: "
                descriptionUrl="https://www.iproperty.com.au/"
                descriptionLink="www.iproperty.com.au"
              />

              <PageArticle />
            </section>
            <footer className="PageFooter">
              <h6>I authorize the processing of my personal data in the curriculum vitae pursuant to Legislative Decree 30 June 2003, n. 196 and of the GDPR (EU Regulation 2016/679).</h6>
            </footer>
          </main>
        </div>

        <div className="App-page">

          <PageAside />
          
          <main>
            <section className="PageSection">
              <h2>Education</h2>
              <PageArticle />
              <PageArticle />
              <PageArticle />
              <PageArticle />
            </section>
            <footer className="PageFooter">
              <h6>I authorize the processing of my personal data in the curriculum vitae pursuant to Legislative Decree 30 June 2003, n. 196 and of the GDPR (EU Regulation 2016/679).</h6>
            </footer>
          </main>
        </div>
      </div>
    )
  }
}