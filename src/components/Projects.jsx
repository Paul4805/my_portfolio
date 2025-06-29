function About() {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center space-y-8 px-4">

        <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>

        {/* Project 1 */}
        <div
            className="backdrop-blur-lg bg-black bg-opacity-30 border border-white border-opacity-20 rounded-2xl p-6 w-[95vw] max-w-[1300px] shadow-lg space-y-2"
            data-aos="fade-left"
        >
            <h3 className="text-2xl font-semibold">Smart AI Analytics Platform</h3>
            <p className="text-lg">
            Developed a full-stack AI-powered analytics platform that processes large datasets, generates predictive insights, and presents interactive dashboards. Integrated ML models using Python, deployed with FastAPI and Docker, and built the frontend with React and TailwindCSS.
            </p>
            <a 
                href="https://github.com/your-repo-link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline mt-2 inline-block"
                >
                View on GitHub →
            </a>
        </div>

        {/* Project 2 */}
        <div
            className="backdrop-blur-lg bg-black bg-opacity-30 border border-white border-opacity-20 rounded-2xl p-6 w-[95vw] max-w-[1300px] shadow-lg space-y-2"
            data-aos="fade-right"
        >
            <h3 className="text-2xl font-semibold">Object Detection & Image Captioning Web App</h3>
            <p className="text-lg">
            Created a web-based application that performs real-time object detection and image captioning using OpenCV, a CNN model, and a Hugging Face transformer. Backend built with FastAPI, integrated with a simple frontend for testing and deployment.
            </p>
            <a 
                href="https://github.com/your-repo-link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline mt-2 inline-block"
                >
                View on GitHub →
            </a>
        </div>

        {/* Project 3 */}
        <div
            className="backdrop-blur-lg bg-black bg-opacity-30 border border-white border-opacity-20 rounded-2xl p-6 w-[95vw] max-w-[1300px] shadow-lg space-y-2"
            data-aos="fade-left"
        >
            <h3 className="text-2xl font-semibold">Interactive BI Dashboard with AI Report Generation</h3>
            <p className="text-lg">
            Developed a smart BI dashboard using Dash and Plotly with integrated GPT-based AI for generating dynamic reports from SQL databases. Supports user-friendly drag-and-drop layout building with advanced data visualizations.
            </p>
            <a 
                href="https://github.com/your-repo-link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline mt-2 inline-block"
                >
                View on GitHub →
            </a>
        </div>

    </section>

  );
}

export default About;
