import * as React from "react";
import "../styles/global.css";

export default function Home() {
  return (
    <main className="container">
      <section className="about">
        <h1>Anthony Lopez</h1>
        <p>
          I’m a senior at UGA double majoring in MIS and Marketing, passionate about turning data into stories that drive action. Whether it's building databases, visualizing trends in Tableau, or writing screenplays, I combine structured thinking with creative insight to solve real-world problems. I believe the best ideas come from both analysis and imagination — and I’m always looking for ways to bridge the two.
        </p>
        <div className="links">
          <a href="/AnthonyLopez_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          <a href="mailto:anthonyl9479@gmail.com" target="_blank" rel="noopener noreferrer">Contact</a>
          <a href="https://www.linkedin.com/in/anthony-lopez-88a196254/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </section>

      <section className="projects">
        <div className="project">
          <img src="/swab_edms_thumb.png" alt="SWAB EDMS" className="thumbnail" />
          <div className="project-text">
            <h2>SWAB Event Day Management System (EDMS)</h2>
            <p>Built a full-stack web + PWA system using Firebase and Twilio to manage 1,500+ mentors/mentees and enable real-time attendance and communication during event day.</p>
            <a href="https://www.canva.com/design/DAGlYAwozPE/EP_5BtCpwBd11KhWtUo0GQ/edit?utm_content=DAGlYAwozPE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </div>

        <div className="project">
          <img src="/lenscrafters_sql_thumb.png" alt="LensCrafters SQL" className="thumbnail" />
          <div className="project-text">
            <h2>LensCrafters SQL Database</h2>
            <p>Uncovered customer behavior insights and streamlined operations by designing SQL schema + queries for a simulated LensCrafters database.</p>
            <a href="https://docs.google.com/presentation/d/1t4tEq2wT2iRKUCivfLMdzq2S6QcpSgazihWAJPM-6kE/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </div>

        <div className="project">
          <img src="/disease_data_thumb.png" alt="Infectious Disease Data Story" className="thumbnail" />
          <div className="project-text">
            <h2>Infectious Disease Data Story (California)</h2>
            <p>Mapped and visualized county-level disease trends with Python + Excel. Created Tableau dashboards to highlight geographic disparities in public health.</p>
            <a href="https://docs.google.com/presentation/d/1rMcIyAkJJeQ9NFCpxFX0kkmd_25YQjK1WKE26SbAS9E/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </div>

        <div className="project">
          <img src="/marketing_cluster_thumb.png" alt="Marketing Cluster Analysis" className="thumbnail" />
          <div className="project-text">
            <h2>Marketing Research Cluster Analysis</h2>
            <p>Segmented UGA students by purchase behavior via cluster analysis. Visualized results with pie charts to inform cooler pricing and branding strategies.</p>
            <a href="https://www.canva.com/design/DAGlX5PjY58/T3P3Jp-cSzN03A44VdKLXg/edit?utm_content=DAGlX5PjY58&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </div>

        <div className="project">
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/z292mCiwjac"
              title="Hamartia Short Film"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="project-text">
            <h2>Hamartia (Short Film)</h2>
            <p>Co-wrote and produced an original short film that won Best Picture at the Elevate Film Festival, blending storytelling with analytical narrative structure.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
