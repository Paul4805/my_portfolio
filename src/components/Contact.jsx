import linkedinLogo from "./linkedin.png";
import instagramLogo from "./instagram.png";
import xLogo from "./x.png";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-4 space-y-12"
      data-aos="fade-up"
    >
      <h2
        className="text-4xl font-bold mb-8 text-center"
        data-aos="fade-down"
      >
        Contact Me
      </h2>

      {/* Social Icons Grid */}
      <div
        className="grid grid-cols-3 gap-8 max-w-[400px]"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        {/* Instagram */}
        <a
          href="https://www.instagram.com/j_pauul_?igsh=aXJlMnp3MGJnaHlv"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center hover:scale-110 transition-transform"
        >
          <img src={instagramLogo} alt="Instagram" className="w-16 h-16" />
          <span className="mt-2 text-lg">Instagram</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/paul-masillamani-5b1898284"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center hover:scale-110 transition-transform"
        >
          <img src={linkedinLogo} alt="LinkedIn" className="w-16 h-16" />
          <span className="mt-2 text-lg">LinkedIn</span>
        </a>

        {/* X (Twitter) */}
        <a
          href="https://x.com/jpaul197519"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center hover:scale-110 transition-transform"
        >
          <img src={xLogo} alt="X" className="w-16 h-16" />
          <span className="mt-2 text-lg">X</span>
        </a>
      </div>

      {/* Divider */}
      <div
        className="w-1/2 h-[1px] bg-primary my-8"
        data-aos="fade-right"
        data-aos-delay="400"
      ></div>

      {/* Contact Details */}
      <div className="text-center space-y-4" data-aos="fade-up" data-aos-delay="600">
        <p className="text-lg">
          📧 <span className="font-semibold">jpaulmasillamani@gmail.com</span>
        </p>
        <p className="text-lg">
          📱 <span className="font-semibold">+91 8122030350</span>
        </p>
      </div>
    </section>
  );
}

export default Contact;

