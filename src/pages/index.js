import * as React from "react";
import "../styles/global.css";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 font-sans px-8 py-12">
      <section className="max-w-6xl mx-auto space-y-12">
        {/* About Me Section */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold">Anthony Lopez</h1>
          <p className="text-lg max-w-2xl mx-auto">
            I’m a senior at UGA double majoring in MIS and Marketing, passionate about turning data into stories that drive action.
            Whether it's building databases, visualizing trends in Tableau, or writing screenplays, I combine structured thinking with creative insight
            to solve real-world problems. I believe the best ideas come from both analysis and imagination — and I’m always looking for ways to bridge the two.
          </p>
          <div className="flex justify-center gap-6">
            <a href="mailto:anthonyl9479@gmail.com" className="text-blue-600 hover:underline">Contact</a>
            <a href="https://www.linkedin.com/in/anthony-lopez-88a196254/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
            <a href="/AnthonyLopez_Resume.pdf" target="_blank" className="text-blue-600 hover:underline">Resume</a>
          </div>
        </div>

        {/* Projects Section */}
        <div className="space-y-12">
          {/* Project 1 */}
          <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/swab_edms_thumb.png" alt="SWAB EDMS" className="w-full md:w-1/3 h-64 object-cover border-r md:border-b-0 border-b border-gray-300" />
            <div className="p-6 space-y-2 md:w-2/3">
              <h2 className="text-2xl font-bold">SWAB Event Day Management System (EDMS)</h2>
              <p>Built a full-stack web and PWA system using Firebase and Twilio to manage 1,500+ mentors and mentees with real-time tracking and communication.</p>
              <a href="https://www.canva.com/design/DAGlYAwozPE/EP_5BtCpwBd11KhWtUo0GQ/edit" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">View Project</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/lenscrafters_thumb.png" alt="LensCrafters SQL" className="w-full md:w-1/3 h-64 object-cover border-r md:border-b-0 border-b border-gray-300" />
            <div className="p-6 space-y-2 md:w-2/3">
              <h2 className="text-2xl font-bold">LensCrafters Customer Database</h2>
              <p>Designed a relational SQL database to uncover customer insights and streamline operations, driving better decision-making and marketing efficiency.</p>
              <a href="https://docs.google.com/presentation/d/1t4tEq2wT2iRKUCivfLMdzq2S6QcpSgazihWAJPM-6kE/edit" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">View Project</a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/infectious_disease_thumb.png" alt="Disease Data Story" className="w-full md:w-1/3 h-64 object-cover border-r md:border-b-0 border-b border-gray-300" />
            <div className="p-6 space-y-2 md:w-2/3">
              <h2 className="text-2xl font-bold">Infectious Disease Data Story (California)</h2>
              <p>Mapped and visualized disease trends with Python and Tableau to highlight the link between population growth and infection rates across California counties.</p>
              <a href="https://docs.google.com/presentation/d/1rMcIyAkJJeQ9NFCpxFX0kkmd_25YQjK1WKE26SbAS9E/edit" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">View Project</a>
            </div>
          </div>

          {/* Project 4 */}
          <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/marketing_research_thumb.png" alt="Marketing Research Cluster" className="w-full md:w-1/3 h-64 object-cover border-r md:border-b-0 border-b border-gray-300" />
            <div className="p-6 space-y-2 md:w-2/3">
              <h2 className="text-2xl font-bold">Marketing Research Cluster Analysis</h2>
              <p>Led a survey-based cluster analysis project identifying customer segments based on brand and price sensitivity, informing strategic marketing decisions.</p>
              <a href="https://www.canva.com/design/DAGlX5PjY58/T3P3Jp-cSzN03A44VdKLXg/edit" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">View Project</a>
            </div>
          </div>

          {/* Short Film */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 space-y-4">
            <h2 className="text-2xl font-bold">Short Film – Hamartia</h2>
            <p>Writer and producer of an award-winning short film featured at the Elevate Film Festival. Combined storytelling and production insights from my business and creative experience.</p>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/z292mCiwjac"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Hamartia Short Film"
                className="w-full h-64 rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm pt-10">
          Made with 💡, 📊, and ☕ — inspired by <a href="https://www.zachjordan.io" className="underline">Zach Jordan</a>.
        </footer>
      </section>
    </main>
  );
}
