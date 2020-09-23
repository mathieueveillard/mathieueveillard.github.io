import React from "react";
import SocialFeed from "../components/SocialFeed";
import PageTitle from "../components/PageTitle";
import Introduction from "../components/Introduction";
import ValueProposition from "../components/ValueProposition";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import SocialNetworksData from "../data/social-networks.json";
import IntroductionData from "../data/introduction.json";
import ValuePropositionData from "../data/value-proposition.json";
import SkillsData from "../data/skills.json";
import TestimonialsData from "../data/testimonials.json";
import ContactData from "../data/contact.json";

export default function Home() {
  return (
    <div className="scroll-container">
      <section className="content" id="page-title">
        <PageTitle
          title="Mathieu Eveillard 👋"
          headline={
            "Polytechnicien (X04). 12 ans d’expérience. Consultant en architecture logicielle."
          }
        />
      </section>
      <section className="content" id="social-feed">
        <SocialFeed networks={SocialNetworksData} />
      </section>
      <section className="content" id="introduction">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Introduction paragraphs={IntroductionData} />
          </div>
        </div>
      </section>
      <section className="content" id="value-proposition">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <ValueProposition services={ValuePropositionData} />
          </div>
        </div>
      </section>
      <section className="content" id="skills">
        <div>
          <Skills skills={SkillsData} />
        </div>
      </section>
      <section className="content" id="testimonials">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Testimonials testimonials={TestimonialsData} />
          </div>
        </div>
      </section>
      <section className="content" id="contact">
        <div>
          <Contact data={ContactData} />
        </div>
      </section>
    </div>
  );
}
