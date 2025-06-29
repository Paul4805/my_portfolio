import logo from "./eit.jpg";

function About() {
  return (
    <section id="work" className="min-h-screen flex flex-col items-center justify-center space-y-8 px-4">
  
        <h2 className="text-4xl font-bold mb-8 text-center">Work Experience</h2>

        {/* Experience 1 - Fade Left */}
        <div
            className="backdrop-blur-lg bg-black bg-opacity-30 border border-white border-opacity-20 rounded-2xl p-8 w-[95vw] max-w-[1300px] shadow-lg space-y-6 flex flex-col"
            data-aos="fade-left"
            >

            {/* Job Title & Company with Logo */}
            <div className="flex items-center space-x-4">
                <img src={logo} alt="Company Logo" className="w-10 h-10 object-contain" />
                <h3 className="text-2xl font-semibold">AI Tool Developer - Ethical Intelligent Technologies</h3>
            </div>

            {/* Job Description */}
            <div className="space-y-4 text-lg leading-relaxed">
                
                <div>
                <h4 className="text-xl font-semibold mb-2">Job Description:</h4>
                <p>
                    Design, develop, and deploy an AI-driven analytical platform that processes large-scale datasets, extracts insights, and provides predictive & prescriptive analytics. The platform leverages Fine Tuned LLM and data visualization to help businesses make data-driven decisions.
                </p>
                </div>

                <div>
                <h4 className="text-xl font-semibold mb-2">Key Responsibilities:</h4>
                <ul className="list-disc list-inside space-y-1">
                    <li>Fine Tune LLM for predictive analytics, anomaly detection, and trend forecasting.</li>
                    <li>Implement data pipelines for real-time and batch processing.</li>
                    <li>Fine Tune LLM to generate SQL Query from Natural Language.</li>
                    <li>Integrate dashboards & visualization tools (e.g., Tableau, Power BI, or custom solutions).</li>
                    <li>Ensure data security, privacy, and compliance.</li>
                    <li>Collaborate with data engineers, backend developers, and business analysts.</li>
                </ul>
                </div>

                <div>
                <h4 className="text-xl font-semibold mb-2">Skills & Tech Stack:</h4>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>AI:</strong> Fine-Tuned deepseek LLM </li>
                    <li><strong>Data Processing:</strong> SQL, Pandas</li>
                    <li><strong>Cloud:</strong> AWS (EC2 Instance)</li>
                    <li><strong>Visualization:</strong> ChartJs, IntractJs</li>
                    <li><strong>Deployment:</strong> Docker, FastAPI</li>
                </ul>
                </div>

                <div>
                <h4 className="text-xl font-semibold mb-2">Goal:</h4>
                <p>
                    Deliver an end-to-end AI analytics solution that automates insights and enhances decision-making for enterprises.
                </p>
                </div>

            </div>

        </div>



        {/* Experience 2 - Fade Right */}
        


        {/* Experience 3 - Fade Left */}
        


    </section>


  );
}

export default About;
