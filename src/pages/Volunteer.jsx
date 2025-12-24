import React from "react";

const Volunteer = () => {
  return (
    <main>
      <section>
        <h2>Volunteer with Magnanimous Club</h2>
        <p>
          {/* Short line: why volunteers are important */}
        </p>
      </section>

      {/* Why volunteer / benefits */}
      <section>
        <h2>Why Volunteer With Us?</h2>
        <ul>
          <li>{/* Learn leadership, teamwork, and communication. */}</li>
          <li>{/* Get hands-on experience in community service. */}</li>
          <li>{/* Make a direct impact on children and families. */}</li>
        </ul>
      </section>

      {/* Volunteer signup form */}
      <section>
        <h2>Volunteer Sign-Up Form</h2>
        <form>
          {/* Basic details */}
          <div>
            <label htmlFor="volName">Full Name</label>
            <input
              id="volName"
              type="text"
              placeholder="Your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="volEmail">Email</label>
            <input
              id="volEmail"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="volPhone">Phone</label>
            <input
              id="volPhone"
              type="tel"
              placeholder="Your phone number"
              required
            />
          </div>

          {/* Availability */}
          <div>
            <label htmlFor="availability">Availability</label>
            <select id="availability" defaultValue="">
              <option value="" disabled>
                Select an option
              </option>
              <option value="weekdays">Weekdays</option>
              <option value="weekends">Weekends</option>
              <option value="both">Both weekdays &amp; weekends</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>

          {/* Preferred roles */}
          <div>
            <label htmlFor="role">Preferred Volunteer Area</label>
            <select id="role" defaultValue="">
              <option value="" disabled>
                Select an area
              </option>
              <option value="teaching">Teaching / Study Support</option>
              <option value="events">Event Management</option>
              <option value="fundraising">Fundraising &amp; Outreach</option>
              <option value="logistics">Logistics / On-ground support</option>
              <option value="media">Design / Social Media</option>
            </select>
          </div>

          {/* Skills & experience */}
          <div>
            <label htmlFor="skills">Skills or Experience</label>
            <textarea
              id="skills"
              rows="3"
              placeholder="Mention any skills, languages, or experience useful for volunteering"
            />
          </div>

          {/* Motivation */}
          <div>
            <label htmlFor="motivation">Why do you want to volunteer?</label>
            <textarea
              id="motivation"
              rows="3"
              placeholder="Share your motivation in a few lines"
            />
          </div>

          {/* Agreement */}
          <div>
            <label>
              <input type="checkbox"required/> I agree 
            </label>
          </div>
          <button type="submit">Submit Volunteer Form</button>
        </form>
      </section>
    </main>
  );
};

export default Volunteer;
