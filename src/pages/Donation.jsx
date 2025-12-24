import React from "react";

const Donation = () => {
  return (
    <main>
      {/* Page title and short story */}
      <section>
        <h2>Support Our Work</h2>
        <p>
          {/* 1–2 lines: why you need donations and who they help */}
        </p>
        <p>
          {/* Optional: a brief impact line, e.g. what ₹500 / ₹1000 can do */}
        </p>
      </section>

      {/* Suggested amounts / impact (optional, but nice) */}
      <section>
        <h2>Your Contribution Matters</h2>
        <ul>
          <li>{/* Example: ₹300 – sponsor stationery for one child. */}</li>
          <li>{/* Example: ₹700 – support one community meal drive. */}</li>
          <li>{/* Example: ₹1500 – help run an evening study program. */}</li>
        </ul>
      </section>

      {/* Donation form */}
      <section>
        <h2>Make a Donation</h2>
        <form>
          <div>
            <label htmlFor="donorName">Name</label>
            <input
              id="donorName"
              type="text"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label htmlFor="donorEmail">Email</label>
            <input
              id="donorEmail"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="donorPhone">Phone (optional)</label>
            <input
              id="donorPhone"
              type="tel"
              placeholder="Your phone number"
            />
          </div>

          <div>
            <label htmlFor="amount">Amount (₹)</label>
            <input
              id="amount"
              type="number"
              min="1"
              placeholder="500"
              required
            />
          </div>

          <div>
            <label>Donation Type</label>
            <select id="donationType" defaultValue="one-time">
              <option value="one-time">One-time</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          <div>
            <label htmlFor="purpose">Purpose (optional)</label>
            <select id="purpose" defaultValue="">
              <option value="" disabled>
                Select an initiative
              </option>
              <option value="education">Education Support</option>
              <option value="food">Food & Essentials</option>
              <option value="events">Events & Awareness</option>
              <option value="where-needed">Wherever needed most</option>
            </select>
          </div>

          <div>
            <label htmlFor="message">Message (optional)</label>
            <textarea
              id="message"
              rows="3"
              placeholder="Any note or instructions"
            />
          </div>

          {/* For now this will just be a normal button; backend later */}
          <button type="submit">Submit Donation</button>
        </form>
      </section>

      {/* Security / transparency note */}
      <section>
        <h2>Transparency</h2>
        <p>
          At Magnanimous Club, transparency is at the core of everything we do.
           We are committed to maintaining honesty and accountability in our actions, decisions, and use of resources. All donations, activities, and initiatives are managed responsibly, with a focus on ensuring that support reaches those it is intended for.

We believe that trust is earned through openness. 
By keeping our processes clear and our work visible, we strive to build lasting confidence with our supporters, volunteers, and the communities we serve.
        </p>
      </section>
    </main>
  );
};

export default Donation;

