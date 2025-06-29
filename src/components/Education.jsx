function About() {
  return (
    <section id="education" className="min-h-screen flex flex-col items-center justify-center px-4 space-y-12">

        <h2 className="text-4xl font-bold mb-8 text-center">Education</h2>

        <div className="relative w-full max-w-[800px] space-y-12">

            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-primary z-0"></div>

            

            {/* Education Item 1 */}
            <div 
            className="relative flex flex-col items-center z-10"
            data-aos="fade-down"
            data-aos-duration="800"
            
            >
            <div className="w-4 h-4 bg-primary rounded-full absolute left-1/2 transform -translate-x-1/2 -top-2"></div>
            <div className="backdrop-blur-lg bg-black bg-opacity-30 border border-white border-opacity-20 rounded-2xl p-6 w-full shadow-lg mt-4">
                <h3 className="text-2xl font-semibold text-center">High School - 
                    kendriya vidyalaya, IIT Madras, Chennai
                </h3>
                <p className="text-lg mt-2 text-center">Completed: 2023</p>
                <p className="text-lg mt-2 text-center">
                Majored in Science with strong emphasis on Mathematics, Computer Science, Physics and Chemistry.
                </p>
            </div>
            </div>
            
            {/* Education Item 1 */}

            <div 
            className="relative flex flex-col items-center z-10"
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="500"
            >
            <div className="w-4 h-4 bg-primary rounded-full absolute left-1/2 transform -translate-x-1/2 -top-2"></div>
            <div className="backdrop-blur-lg bg-black bg-opacity-30 border border-white border-opacity-20 rounded-2xl p-6 w-full shadow-lg mt-4">
                <h3 className="text-2xl font-semibold text-center">B.S. in Engineering Science - IISER Bhopal</h3>
                <p className="text-lg mt-2 text-center">2021 - Present</p>
                <p className="text-lg mt-2 text-center">
                Pursuing an interdisciplinary degree with a focus on Recearch and Development in various fields of Engineering. 
                </p>
            </div>
            </div>

            {/* Education Item 3 */}
            <div 
            className="relative flex flex-col items-center z-10"
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="1000"
            >
            <div className="w-4 h-4 bg-primary rounded-full absolute left-1/2 transform -translate-x-1/2 -top-2"></div>
            <div className="backdrop-blur-lg bg-black bg-opacity-30 border border-white border-opacity-20 rounded-2xl p-6 w-full shadow-lg mt-4">
                <h3 className="text-2xl font-semibold text-center">Certifications & Online Learning</h3>
                <p className="text-lg mt-2 text-center">Ongoing</p>
                <p className="text-lg mt-2 text-center">
                Continuously expanding my skills through online certifications in AI, Cloud Computing, and Full Stack Development from platforms like Coursera, Udemy, and DeepLearning.AI.
                </p>
            </div>
            </div>

        </div>

    </section>

  );
}

export default About;