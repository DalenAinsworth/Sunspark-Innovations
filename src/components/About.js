// src/components/About.js
import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <div className="about container">
      <h1>About Sunspark Innovation</h1>
      
      <section className="mission section">
        <p>
          At Sunspark Innovation, we believe solar energy is more than just technology it's a tool for economic strength, 
          energy resiliency, and community reinvestment. Our work is built on the foundation of providing high quality, 
          community owned solar installation and maintenance services that lower costs, create local jobs, and equip 
          communities with the tools they need for long term energy independence.
        </p>
      </section>
      
      <section className="partnership section">
        <p>
          We partner with homeowners, businesses, faith based organizations, and community institutions to ensure that 
          clean, reliable energy is accessible where it's needed most. From powering homes to strengthening congregations, 
          revitalizing neighborhoods, and supporting those who serve, Sunspark Innovation is leading the charge for a 
          resilient energy future.
        </p>
      </section>
      
      <section className="commitment section">
  <h2>Our Commitment to the Community</h2>
  <p>
    At Sunspark Innovation, we reinvest in communities through our Community Support Fund. 
    <strong> 80% of proceeds from Energy Credits sold</strong> fund projects that strengthen homes, 
    businesses, and faith-based organizations while promoting local economic growth.
  </p>
  <section className="veterans-section">
  <h2>Homes for Heroes Initiative</h2>
  <p>
    Sunspark Innovation is proud to announce our "Homes for Heroes" initiative - building 
    <strong> specialized solar-powered homes for veterans</strong> in both rural and urban communities. 
    These energy-efficient homes provide sustainable living solutions for those who served our nation.
  </p>
</section>
</section>
      <section className="justin">
        <h2>Meet the CEO</h2>
        <p>
        Justin Idleburg is a visionary leader driving innovation and sustainability in the renewable energy sector. As CEO, 
        he combines strategic foresight, technological expertise, and business acumen to propel his company toward a cleaner, 
        smarter future. With a passion for AI optimized solar solutions and smart energy grids, Justin is dedicated to making 
        sustainable energy accessible, efficient, and transformative for communities worldwide. His leadership fosters growth, 
        innovation, and a commitment to environmental responsibility.
        </p>
      </section>
    </div>
  );
};

export default About;