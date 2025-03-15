import React from "react";

function Application() {
  return (
    <div>
      <h1>Job application form</h1>
      <h2>Section 1</h2>

      <p>All fields are mandatory</p>

      <span title="close">X</span>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Fullname"
            value="Angkur Mondal"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <input type="textarea" name="bio" id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job Location</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="CA">Canada</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> I agree to the terms and
            conditions
          </label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Application;
