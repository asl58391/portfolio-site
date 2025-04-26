import * as React from "react";
import "../styles/global.css";

const IndexPage = () => (
  <main>
    <h1 className="main-title">Anthony Lopez</h1>
    <p className="about-me">
      I’m a senior at UGA double majoring in MIS and Marketing, passionate about turning data into stories that drive action. 
      Whether it's building databases, visualizing trends in Tableau, or writing screenplays, I combine structured thinking 
      with creative insight to solve real-world problems. I believe the best ideas come from both analysis and imagination — 
      and I’m always looking for ways to bridge the two.
    </p>
    <div className="links">
      <a href="/AnthonyLopez_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      <a href="https://www.linkedin.com/in/anthony-lopez-12b7a628b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="mailto:your-email@example.com">Contact Me</a>
    </div>

    <section className="projects-section">
      <div className="project-card">
        <img src="/swab_edms_thumb.png" alt="SWAB EDMS Thumbnail" className="project-image" />
        <div>
          <h2>SWAB Event Day Management System (EDMS)</h2>
          <p>Built a full-stack web + PWA system using Firebase and Twilio to manage 1,500+ mentors/mentees with real-time event tracking and communication.</p>
          <a href="https://www.canva.com/design/DAGlYAwozPE/EP_5BtCpwBd11KhWtUo0GQ/edit" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>

      <div className="project-card">
        <img src="/lenscrafters_sql_thumb.png" alt="LensCrafters SQL Thumbnail" className="project-image" />
        <div>
          <h2>LensCrafters Customer Database</h2>
          <p>Uncovered customer behavior insights and streamlined operations by designing SQL schema + queries for a simulated LensCrafters database.</p>
          <a href="https://docs.google.com/presentation/d/1t4tEq2wT2iRKUCivfLMdzq2S6QcpSgazihWAJPM-6kE/edit" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>

      <div className="project-card">
        <img src="/infectious_disease_thumb.png" alt="Infectious Disease Thumbnail" className="project-image" />
        <div>
          <h2>Infectious Disease Data Story (California)</h2>
          <p>Mapped and visualized county-level disease trends using Python + Excel. Created Tableau dashboards to highlight geographic disparities in public health.</p>
          <a href="https://docs.google.com/presentation/d/1rMcIyAkJJeQ9NFCpxFX0kkmd_25YQjK1WKE26SbAS9E/edit" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>

      <div className="project-card">
        <img src="/marketing_cluster_thumb.png" alt="Marketing Cluster Thumbnail" className="project-image" />
        <div>
          <h2>Cooler Market Research: Cluster Analysis</h2>
          <p>Conducted a cluster analysis on consumer preferences from survey data. Identified key segments from price-focused to brand-loyal, visualized in Tableau and used to guide positioning recommendations.</p>
          <a href="https://www.canva.com/design/DAGlX5PjY58/T3P3Jp-cSzN03A44VdKLXg/edit" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>

      <div className="project-card">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/watch?v=z292mCiwjac"
          title="Hamartia Short Film"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="youtube-video"
        ></iframe>
        <div>
          <h2>Short Film: Hamartia</h2>
          <p>I co-wrote and produced this original short film. It won Best Picture at the Elevate Film Festival and reflects my passion for story, leadership, and creative execution.</p>
        </div>
      </div>
    </section>
  </main>
);

export default IndexPage;
