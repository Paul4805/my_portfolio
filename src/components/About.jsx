import profileImage from "./profile.jpeg";
import {Typewriter} from "./typewriter";

function About() {
  return (
    <div className="min-h-screen flex justify-center items-center px-4" id="about">
      <div
        className="backdrop-blur-lg bg-black bg-opacity-30 border border-white border-opacity-20 rounded-2xl p-10 sm:p-12 w-[95vw] max-w-[1500px] h-[80vh] flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-20 shadow-lg"
        data-aos="fade-up"
      >
        
        {/* Profile Photo with Faded Edges */}
        <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 relative shrink-0" data-aos="zoom-in" data-aos-delay="300">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
            style={{
              WebkitMaskImage:
                "radial-gradient(circle, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 70%)",
              maskImage:
                "radial-gradient(circle, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 70%)",
            }}
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left max-w-3xl" data-aos="fade-right" data-aos-delay="500">
          <h1 className="text-4xl font-bold">
            <Typewriter text="Hi, I'm J Paul Masillamani" speed={100} className="text-4xl font-bold" />
          </h1>

          <p className="text-lg leading-relaxed">
            I’m a passionate <strong>Data Scientist</strong> and <strong>AI Enthusiast</strong> with a strong foundation in Machine Learning, Deep Learning, and Data-Driven Problem Solving. I love turning complex data into actionable insights and building intelligent systems that make an impact.
          </p>

          <p className="text-lg leading-relaxed">
            Alongside my work in AI, I’m also a <strong>Full Stack Developer</strong>, well-versed in modern web technologies like React, JavaScript, and SQL, with Python as my primary language and weapon of choice.
          </p>

          <p className="text-lg leading-relaxed">
            I thrive at the intersection of AI and Software Development, bringing together data, code, and creativity to build smart, scalable, and user-friendly solutions.
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;
