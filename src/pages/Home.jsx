import React from "react";
import About from "./About";
import Donation from "./Donation";
import Feedback from "./Feedback";
import Volunteer from "./Volunteer";
import EventCarousel from "../components/EventCarousel";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <main>
      {/* Hero / Welcome */}
      <section>
        <h2>Welcome to Magnanimous Club</h2>
        <p>
          Magnanimous Club is a community-driven charity initiative built 
          on the belief that even small acts of kindness can create meaningful change. We aim to support, uplift, and empower individuals and 
          communities through compassion, service, and collective action.
        </p>
        <p>
          Join us in making small, consistent efforts that create a big
          impact over time.
        </p>
      </section>

      {/* Our Impact / Stats */}
      <section>
        <h2>Our Impact</h2>
        <ul>
          <li>50+ active volunteers contributing time and skills.</li>
          <li>100+ beneficiaries supported through various drives.</li>
          <li>50+ events drives in the last year.</li>
        </ul>
      </section>

      {/* Current Initiatives */}
      <section>
        <h2>Current Initiatives</h2>
        <h3>Blanket Distribution </h3>
        <p>
          Through our blanket distribution initiative, 
          Magnanimous Club extended warmth and hope to vulnerable communities.
           Together, we believe that kindness can make even the coldest days warmer.
        </p>

        <h3> Winter Clothes Drive</h3>
        <p>
          The clothes drive by Magnanimous Club focused on collecting and distributing wearable clothing to underprivileged communities.
           This effort reflects our commitment to care, compassion, and social responsibility.
        </p>

        <h3>Community Clean-Up</h3>
        <p>
          Organizing local clean-up drives to keep our surroundings
          clean and spread awareness.
        </p>
      </section>
       <EventCarousel/>
       <Gallery />

      {/* How You Can Help */}
      <section>
        <h2>How You Can Help</h2>
        <ul>
          <li>
            <strong>Donate:</strong> Support our drives with funds or in-kind
            items like books, clothes, and food.
            <b><i><center>DONATE BELOW</center></i></b>
          </li>
          <li>
            <strong>Volunteer:</strong> Give a few hours each week to help
            organize events 
            <b><i><center>go to Volunteer Section</center></i></b>
          </li>
          <li>
            <strong>Spread the Word:</strong> Share our work with friends and on
            social media to reach more people.
          </li>
        </ul>
      </section>

      {/* Optional: Testimonials */}
      <section>
        <h2>Voices from Our Community</h2>
        <p>
          "Being part of Magnanimous Club has taught me how small efforts
          can bring real smiles to people’s faces." – Student Volunteer
        </p>
        <p>
          "The study support sessions have helped my children keep up with
          their school work." – Parent Beneficiary
        </p>
        <p>“Being part of Magnanimous Club has shown me how small efforts,
    done consistently, can truly change lives.” - Aditi, Student Volunteer
  </p>
      </section>

      {/* Your existing detailed pages embedded */}
      <About />
      <Donation />
      <Feedback />
      <Volunteer />
    </main>
  );
};

export default Home;


