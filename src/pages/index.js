import * as React from "react";
import "../styles/global.css";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-8">
      <h1 className="text-5xl font-bold text-center mb-6">Anthony Lopez</h1>
      <p className="text-xl text-center max-w-4xl mb-6">
        I’m a senior at UGA double majoring in MIS and Marketing, passionate about turning data into stories that drive action. Whether it's building databases, visualizing trends in Tableau, or writing screenplays, I combine structured thinking with creative insight to solve real-world problems. I believe the best ideas come from both analysis and imagination — and I’m always looking for ways to bridge the two.
      </p>
      <div className="flex space-x-6 mb-12">
        <a href="/AnthonyLopez_Resume.pdf" target="_blank" rel="noreferrer" className="text-lg underline">Resume</a>
        <a href="https://www.linkedin.com/in/anthonylopezuga/" target="_blank" rel="noreferrer" className="text-lg underline">LinkedIn</a>
        <a href="mailto:your-email@example.com" className="text-lg underline">Contact Me</a>
      </div>

      {/* Project Cards */}
      <div className="flex flex-col items-center space-y-16">
        {/* Project 1 */}
        <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md max-w-5xl w-full">
          <img src="/swab_edms_thumb.png" alt="SWAB EDMS" className="w-64 h-auto object-cover rounded-lg border" />
          <div className="md:ml-10 mt-6 md:mt-0 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">SWAB Event Day Management System (EDMS)</h2>
            <p className="text-lg mb-2">Built a full-stack web + PWA system using Firebase and Twilio to manage 1,500+ mentors/mentees with real-time event attendance and communication.</p>
            <a href="https://www.canva.com/design/DAGlYAwozPE/EP_5BtCpwBd11KhWtUo0GQ/edit" target="_blank" rel="noreferrer" className="text-blue-500 underline">View Project</a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md max-w-5xl w-full">
          <img src="/lenscrafters_sql_thumb.png" alt="LensCrafters SQL" className="w-64 h-auto object-cover rounded-lg border" />
          <div className="md:ml-10 mt-6 md:mt-0 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">LensCrafters Customer Database</h2>
            <p className="text-lg mb-2">Uncovered customer behavior insights and streamlined operations by designing SQL schema + queries for a simulated LensCrafters database.</p>
            <a href="https://docs.google.com/presentation/d/1t4tEq2wT2iRKUCivfLMdzq2S6QcpSgazihWAJPM-6kE/edit?usp=sharing" target="_blank" rel="noreferrer" className="text-blue-500 underline">View Project</a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md max-w-5xl w-full">
          <img src="/infectious_disease_thumb.png" alt="Infectious Disease Story" className="w-64 h-auto object-cover rounded-lg border" />
          <div className="md:ml-10 mt-6 md:mt-0 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Infectious Disease Data Story (California)</h2>
            <p className="text-lg mb-2">Mapped and visualized county-level disease trends with Python + Excel. Created Tableau dashboards to highlight geographic disparities in public health.</p>
            <a href="https://docs.google.com/presentation/d/1rMcIyAkJJeQ9NFCpxFX0kkmd_25YQjK1WKE26SbAS9E/edit?usp=sharing" target="_blank" rel="noreferrer" className="text-blue-500 underline">View Project</a>
          </div>
        </div>

        {/* Project 4 */}
        <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md max-w-5xl w-full">
          <img src="/marketing_cluster_thumb.png" alt="Marketing Cluster" className="w-64 h-auto object-cover rounded-lg border" />
          <div className="md:ml-10 mt-6 md:mt-0 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Cooler Market Research: Cluster Analysis</h2>
            <p className="text-lg mb-2">Conducted a cluster analysis on consumer preferences from survey data. Identified six key segments from price-focused to brand-loyal, visualized in Tableau, and used to guide positioning recommendations.</p>
            <a href="https://www.canva.com/design/DAGlX5PjY58/T3P3Jp-cSzN03A44VdKLXg/edit" target="_blank" rel="noreferrer" className="text-blue-500 underline">View Project</a>
          </div>
        </div>

        {/* Short Film */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md max-w-5xl w-full">
          <h2 className="text-3xl font-bold mb-4 text-center">Short Film: Hamartia</h2>
          <p className="text-center mb-6">
            I co-wrote and produced this original short film. It won Best Picture at the Elevate Film Festival and reflects my passion for story, leadership, and creative execution.
          </p>
          <div className="relative w-full" style={{ paddingBottom: "56.25%", height: 0 }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-md"
              src="https://www.youtube.com/watch?v=z292mCiwjac"
              title="Hamartia Short Film"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
