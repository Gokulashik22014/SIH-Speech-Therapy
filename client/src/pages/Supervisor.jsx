import React from "react";
const Supervisor = () => {
  return (
    <div className="flex flex-col justify-between items-center pt-20 h-screen">
      <div className="flex items-center space-x-10 flex-col">
        <div className="flex-shrink-0">
          <img
            src="/images/super.jpg"
            alt="Profile"
            className="rounded-full w-48 h-48 object-cover"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">Grisha Yeager</h1>
          <p className="text-lg mb-4">
            Hello! I'm Dr. Jeager, a dedicated therapy supervisor with over 13
            years of experience in the mental health field. I specialize in
            providing guidance and support to therapists, ensuring high-quality
            care for clients and fostering a collaborative environment for
            professional growth. My approach focuses on evidence-based
            practices, empathy, and holistic care, helping therapists enhance
            their skills and deliver impactful therapy sessions.
          </p>
          <p className="text-lg">
            I am passionate about mental health advocacy and committed to
            fostering a culture of continuous learning and development within
            therapeutic practices. Outside of work, I enjoy reading, mindfulness
            meditation, and engaging in community wellness programs.
          </p>
        </div>
      </div>
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Supervisor;
