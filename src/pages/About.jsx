import React from 'react';
const About = () => {
  return (
     <main>
      <section>
        <h2><center>About Magnanimous Club</center></h2>
        <p>
          Our club works towards supporting underprivileged communities 
          through initiatives such  blanket distribution drives, clothes donation campaigns,
           and awareness programs. Each effort, no matter how small, is aimed at creating comfort, dignity, and hope for those in need.
        </p>
      </section>

      {/* Who we are */}
      <section>
        <h2>Who We Are</h2>
        <p>
          Magnanimous Club is a collective of individuals who believe that kindness, when practiced consistently, has the power to transform lives.
           We are driven by compassion, empathy, and a shared responsibility toward society, especially those who often go unheard or unsupported.

We are not just a club—we are a movement of people who choose action over indifference and humanity over convenience. By working together, we strive to create a more inclusive, caring, and hopeful society,
 where every individual feels valued and supported.
 <p>
 We actively work for the care and protection of stray and vulnerable animals through initiatives such as feeding drives, basic medical support, and awareness efforts.

Our aim is to create a safer, kinder environment where animals are treated with dignity and care. 
Through consistent action and community involvement, we strive to give a voice to those who cannot speak for themselves.</p>
        </p>
      </section>

      {/* Mission & Vision */}
      <section>
        <h2>Our Mission &amp; Vision</h2>

        <h3>Mission</h3>
        <p>
          Our mission is to serve society with compassion and responsibility by addressing real needs through thoughtful charitable initiatives.
           We aim to uplift underprivileged individuals, support animal welfare, and inspire a culture of kindness, empathy, and social awareness through collective action.
        </p>

        <h3>Vision</h3>
        <p>
          Our vision is to build a compassionate and inclusive society where no one—human or animal—is left without care, dignity, or support.
           We strive for a future where kindness is a shared value, community involvement is a way of life, and positive change is created through consistent and meaningful action.
        </p>
      </section>

      {/* What we do / Areas of work */}
      <section>
        <h2>What We Do</h2>

  <div className="what-we-do-grid">
    <div className="work-card">
      <h3>Education Support</h3>
      <p>
        {/* Describe activities: tutoring, books, stationery, etc. */}
      </p>
    </div>

    <div className="work-card">
      <h3>Food &amp; Essentials</h3>
      <p>
        {/* Describe drives for meals, ration kits, etc. */}
      </p>
    </div>

    <div className="work-card">
      <h3>Community Service</h3>
      <p>
        {/* Clean-up drives, awareness events, other service work */}
      </p>
    </div>

    <div className="work-card">
      <h3>Events &amp; Fundraisers</h3>
      <p>
      </p>
    </div>
  </div>
      </section>

      {/* Our story / timeline */}
      <section>
        <h2>Our Story</h2>
        <p>
          it is a journey which cant be described in words 
        </p>
        <p>
          {/* Mention 1–2 key milestones or successful events */}
        </p>
      </section>

      {/* Team & volunteers */}
      <section>
        <h2>Our Team &amp; Volunteers</h2>
        <p>
          The strength of Magnanimous Club lies in the people behind it. Our team is made up of dedicated individuals who share a common purpose—to serve society with compassion, integrity, and commitment. 
          Each member contributes their time, skills, and energy to ensure that every initiative is thoughtfully planned and meaningfully executed.
        </p>
        <ul>
          <li>{/* Role example: President / Coordinator */}</li>
          <li>{/* Role example: Event Lead / Volunteer Lead */}</li>
          <li>{/* Any other key role or group */}</li>
        </ul>
      </section>
    </main>
  );
}
export default About;