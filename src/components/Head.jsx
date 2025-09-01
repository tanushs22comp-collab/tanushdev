import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center px-6">
      {/* Grid container */}
      <div className="grid w-full max-w-6xl md:grid-cols-[24rem_1fr] gap-8 sm:gap-12 items-center">
        {/* Image */}
        <div className="enter-animation">
          <img
            src="src\assets\3.jpg"
            alt="Tanush Shyam"
            className="h-[28.5rem] md:h-[30rem] w-full rounded-md shadow-inner object-cover scale-x-[-1]"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col w-full">
          <p className="text-sm md:text-md lg:text-xl text-font-2nd text-center md:text-start enter-animation">
            I'm Tanush Shyam
          </p>

          <h1 className="mt-2 text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl text-center md:text-start enter-animation leading-[125%] font-mono font-bold">
            Building Apps<span className="aspire"> That </span>
                         <span className="text-red-600">INSPIRE</span>
          </h1>



          <div className="mt-6 text-2xl text-font-pr text-center md:text-start enter-animation">
            Full-Stack Developer | AI/ML
          </div>

          {/* Social Links */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4 enter-animation">
            <div className="flex gap-4 mt-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/tanushshyam/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 hover:opacity-80 transition"
              >
                <img src="src/assets/linkedin.png" alt="LinkedIn" className="w-full h-full" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/tanushdev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 hover:opacity-80 transition"
              >
                <img src="src\assets\github.png" alt="GitHub" className="w-full h-full" />
              </a>

              {/* Email */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=tanushshyam42@gmail.com&su=Hello&body=I%20want%20to%20connect!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 hover:opacity-80 transition"
              >
                <img src="src\assets\communication.png" alt="Email" className="w-full h-full" />
              </a>


              {/* Resume */}
              <a
                href="https://drive.usercontent.google.com/u/0/uc?id=1_s4FtX4XUtVRxR4Q-3BSXkKunxqYQj9N&export=download"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 hover:opacity-80 transition"
              >
                <img src="src\assets\resume.png" alt="Resume" className="w-full h-full" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
