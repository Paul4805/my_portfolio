import pythonIcon from "./python.png";
import reactIcon from "./react.png";
import awsIcon from "./aws.png";
import sqlIcon from "./sql.png";
import tailwindIcon from "./tailwind.png";
import javascriptIcon from "./javascript.png";
import htmlIcon from "./html.png";
import cssIcon from "./css.png";
import pytorchIcon from "./PyTorch.png";
import tensorflowIcon from "./TensorFlow.png";
import scikitIcon from "./scikit.png";

function TechStack() {
  return (
    <section id="tech" className="min-h-screen flex flex-col items-center justify-center px-4 space-y-12">
  
      <h2 className="text-4xl font-bold text-center" data-aos="zoom-in">Tech Stack</h2>
      
      {/* Languages */}
      <div className="w-full max-w-4xl" data-aos="fade-right">
        <h3 className="text-2xl font-semibold mb-4">Languages</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: pythonIcon, label: "Python" },
            { icon: javascriptIcon, label: "JavaScript" },
            { icon: sqlIcon, label: "SQL" },
          ].map((tech, index) => (
            <div
              key={index}
              className="w-24 h-24 bg-black bg-opacity-30 backdrop-blur-lg rounded-xl flex flex-col items-center justify-center shadow-md hover:scale-110 transition-transform"
              data-aos="flip-up"
              data-aos-delay={index * 100}
            >
              <img src={tech.icon} alt={tech.label} className="w-10 h-10" />
              <p className="text-sm mt-2">{tech.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Frameworks & Libraries */}
      <div className="w-full max-w-4xl" data-aos="fade-left">
        <h3 className="text-2xl font-semibold mb-4">Frameworks & Libraries</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: reactIcon, label: "React" },
            { icon: tailwindIcon, label: "Tailwind CSS" },
            { icon: pytorchIcon, label: "PyTorch" },
            { icon: tensorflowIcon, label: "TensorFlow" },
            { icon: scikitIcon, label: "Scikit-Learn" },
          ].map((tech, index) => (
            <div
              key={index}
              className="w-24 h-24 bg-black bg-opacity-30 backdrop-blur-lg rounded-xl flex flex-col items-center justify-center shadow-md hover:scale-110 transition-transform"
              data-aos="flip-down"
              data-aos-delay={index * 100}
            >
              <img src={tech.icon} alt={tech.label} className="w-10 h-10" />
              <p className="text-sm mt-2">{tech.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tools & Platforms */}
      <div className="w-full max-w-4xl" data-aos="zoom-in-up">
        <h3 className="text-2xl font-semibold mb-4">Tools & Platforms</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: awsIcon, label: "AWS" },
            { icon: htmlIcon, label: "HTML" },
            { icon: cssIcon, label: "CSS" },
          ].map((tech, index) => (
            <div
              key={index}
              className="w-24 h-24 bg-black bg-opacity-30 backdrop-blur-lg rounded-xl flex flex-col items-center justify-center shadow-md hover:scale-110 transition-transform"
              data-aos="flip-left"
              data-aos-delay={index * 100}
            >
              <img src={tech.icon} alt={tech.label} className="w-10 h-10" />
              <p className="text-sm mt-2">{tech.label}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default TechStack;


