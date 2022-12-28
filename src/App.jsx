import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Hello, I'm a Product Manager</h1>
      <p>
        I have 5 years of experience in developing and launching successful
        products in the tech industry.
      </p>
      <h2>Skills</h2>
      <ul>
        <li>Product strategy</li>
        <li>Product roadmap development</li>
        <li>Agile development methodologies</li>
        <li>Data analysis</li>
      </ul>
      <h2>Experience</h2>
      <h3>Product Manager</h3>
      <h4>XYZ Company</h4>
      <p>June 2018 - Present</p>
      <ul>
        <li>
          Successfully launched a new SaaS product that achieved 100k users in
          the first 6 months
        </li>
        <li>
          Developed and maintained a product roadmap that aligned with company
          goals
        </li>
        <li>
          Managed a cross-functional team of designers, developers, and QA
          engineers
        </li>
      </ul>
      <h3>Product Manager Intern</h3>
      <h4>ABC Company</h4>
      <p>May 2016 - August 2016</p>
      <ul>
        <li>
          Assisted in the development and launch of a mobile app that reached
          top 10 in the App Store
        </li>
        <li>Conducted market research and developed a go-to-market strategy</li>
        <li>
          Worked with the design team to develop wireframes and prototypes
        </li>
      </ul>
      <h2>Education</h2>
      <h3>Bachelor of Science in Computer Science</h3>
      <h4>University of California, Berkeley</h4>
      <p>September 2012 - May 2016</p>
      <p>GPA: 3.8</p>
      <h2>Contact</h2>
      <p>Email: example@gmail.com</p>
      <p>Phone: 555-555-5555</p>
      <p>LinkedIn: linkedin.com/in/example</p>
    </div>
  );
}

export default App;
