import React from "react";
import PageAside from "./components/PageAside/PageAside";
import PageHeader from "./components/PageHeader/PageHeader";
import PageArticle from "./components/PageArticle/PageArticle";
import PageFooter from "./components/PageFooter/PageFooter";
import image0 from "./images/profilePicture.jpeg";
import image1 from "./images/rb-logo.jpg";
import image2 from "./images/develhope-logo.jpg";
import image3 from "./images/iproperty-logo.jpg";
import image4 from "./images/filippoScelfo-logo.jpg";
import image5 from "./images/codeCademy-logo.jpg";
import image6 from "./images/strategyzer-logo.png";
import image7 from "./images/anfe-logo.jpg";
import image8 from "./images/diploma-logo.png";

export class App extends React.Component {
  render() {
    return (
      <div className="App">

        <div className="App-page">

          <PageAside />

          <main>
            <PageHeader
              name="Filippo Scelfo"
              role="Product Designer / UX Developer"
              residency="Palermo, Italy"
              image={image0}
            />
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
                duration="2 years 7 months"
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

              <PageArticle
                image={image4}
                organization="Filippo Scelfo (Freelance)"
                location="Palermo, Italy - Melbourne, Australia"
                date="October 2008 - June 2012"
                duration="3 years 8 months"
                category1title="Job roles: "
                category1description="Motion Graphic Designer, Web Designer"
                category2title="Technologies: "
                category2description="HTML, CSS"
                category3title="Softwares: "
                category3description="Adobe After Effects, Photoshop, Illustrator, Dreamweaver"
                description="Freelance work designing static websites and videos for music events, bands and DJs in Italy and also in Asutralia."
                descriptionUrl="https://youtu.be/NCgWn3nI5Pg"
                descriptionLink="www.filipposcelfo.com"
              />
            </section>
            <PageFooter />
          </main>
        </div>

        <div className="App-page">

          <PageAside />
          
          <main>
            <section className="PageSection">
              <h2>Education</h2>
              <PageArticle
                image={image2}
                organization="Full-Stack Web Course"
                location="Develhope - Palermo, Italy"
                date="2022 - 2023"
                duration=""
                category2title="Technologies: "
                category2description="HTML, CSS, Git, Javascript, React JS, Typescript, Node JS"
                description="During the course at 'Develhope' I learned Front-End / Back-End / Full-Stack development. I acquired the necessary skills on TypeScript, ReactJS, Javascript, NodeJS, Html, Css and Git."
                descriptionUrl=""
                descriptionLink=""
              />

              <PageArticle
                image={image5}
                organization="Learn Javascript Course"
                location="Codecademy.com"
                date="2022"
                duration=""
                description="Complited the online course at Code Academy and learned about Javascript."
                descriptionUrl=""
                descriptionLink=""
              />

              <PageArticle
                image={image6}
                organization="Business Model Generation Workshop & Masterclass"
                location="Strategyzer - San Francisco"
                date="2015"
                duration=""
                description="Learned about and applied a practical visual language to describe, challenge, and design business models."
                descriptionUrl=""
                descriptionLink=""
              />

              <PageArticle
                image={image7}
                organization="Web & Graphic Design Course"
                location="A.N.F.E - Palermo, Italy"
                date="2009 - 2010"
                duration=""
                description="Learned about to transition between static design concepts and translate them in dynamic web pages using HTML and CSS."
                descriptionUrl=""
                descriptionLink=""
              />

              <PageArticle
                image={image8}
                organization="Diploma in Architecture & Interior Design"
                location="Art Institute 'Diego Bianca Amato' - Cefalù, (PA) Italy"
                date="2004 - 2008"
                duration=""
                description="During my time at the Art Institute I learned the first software programs for the production of architectural and interior works working with Macintosh computers using 3D vector graphics."
                descriptionUrl=""
                descriptionLink=""
              />

            </section>
            <PageFooter />
          </main>
        </div>
      </div>
    )
  }
}