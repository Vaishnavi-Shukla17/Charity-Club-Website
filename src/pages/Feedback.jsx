import React from "react";

const Feedback = () => {
  return (
    <main>
      {/* Intro */}
      <section>
        <h2>Share Your Feedback</h2>
        <p>
          It allows us to understand the impact of our initiatives and learn how we can improve our efforts to meet the real needs of the communities and animals we support.

By listening to feedback from our supporters, volunteers, and beneficiaries, we strengthen transparency, build trust,
 and ensure that our actions create meaningful and lasting change. 
Feedback guides us in turning good intentions into greater impact.</p>
      </section>

      {/* Feedback form */}
      <section>
        <h2>Feedback Form</h2>
        <form>
          {/* Who is giving feedback */}
          <div>
            <label htmlFor="name">Name (optional)</label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email">Email (optional)</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="role">You are a</label>
            <select id="role" defaultValue="">
              <option value="" disabled>
                Select an option
              </option>
              <option value="student">Student volunteer</option>
              <option value="donor">Donor / supporter</option>
              <option value="beneficiary">Beneficiary / parent</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Experience rating */}
          <div>
            <label>Overall experience with Magnanimous Club</label>
            <select id="rating" defaultValue="">
              <option value="" disabled>
                Select a rating
              </option>
              <option value="5">Excellent</option>
              <option value="4">Good</option>
              <option value="3">Average</option>
              <option value="2">Needs improvement</option>
              <option value="1">Poor</option>
            </select>
          </div>

          {/* Open text feedback */}
          <div>
            <label htmlFor="likes">What did you like the most?</label>
            <textarea
              id="likes"
              rows="3"
              placeholder="Tell us what went well"
            />
          </div>

          <div>
            <label htmlFor="improve">What can we improve?</label>
            <textarea
              id="improve"
              rows="3"
              placeholder="Share suggestions or issues you faced"
            />
          </div>

          <div>
            <label htmlFor="message">Any other comments</label>
            <textarea
              id="message"
              rows="3"
              placeholder="Anything else you want us to know"
            />
          </div>

          <button type="submit">Submit Feedback</button>
        </form>
      </section>

    </main>
  );
};

export default Feedback;
