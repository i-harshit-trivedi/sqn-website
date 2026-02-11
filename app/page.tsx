export default function Home() {
  return (
    <main className="font-sans text-gray-800 scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl text-blue-900">
            SQN Consultancy
          </h1>
          <div className="space-x-6 hidden md:block">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white pt-32 pb-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">
          STANDARD QUALITY NEXUS (SQN)
        </h1>
        <p className="text-xl max-w-2xl mx-auto">
          India's Trusted Partner for BIS, ISI, CRS, FSSAI & Compliance Certifications
        </p>
        <a
          href="#contact"
          className="inline-block mt-8 bg-white text-blue-900 px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition duration-300"
        >
          Get Free Consultation
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About SQN</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          STANDARD QUALITY NEXUS is a professional QMS consultancy firm
          providing end-to-end documentation and regulatory approval support
          across India. We ensure smooth, transparent and efficient certification processes.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-gray-100 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "BIS Certification",
            "ISI Mark Approval",
            "CRS Registration",
            "FSSAI License",
            "CGWA Approval",
            "Pollution NOC",
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-900">
                {service}
              </h3>
              <p className="text-gray-600">
                Complete documentation, application filing and expert compliance guidance.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "SQN helped us obtain BIS certification smoothly and professionally.",
            "Very supportive team with complete documentation assistance.",
            "Highly recommended for compliance and regulatory approvals.",
          ].map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <p className="text-gray-600 italic">“{review}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-blue-900 text-white py-20 px-6 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p>Let’s simplify your certification process.</p>

        <form className="max-w-3xl mx-auto mt-10 grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg text-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg text-black"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="p-3 rounded-lg text-black"
          />
          <button className="bg-green-500 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Send Message
          </button>
        </form>

        <a
          href="https://wa.me/919XXXXXXXXX"
          target="_blank"
          className="inline-block mt-8 bg-green-600 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Chat on WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 bg-gray-200 text-gray-700">
        © {new Date().getFullYear()} STANDARD QUALITY NEXUS (SQN). All rights reserved.
      </footer>

    </main>
  );
}
