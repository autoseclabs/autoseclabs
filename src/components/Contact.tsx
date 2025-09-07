import { useState } from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxyT-lcHN2FjJBjUUqMXZs08lmcq-C6t02Jmf9jelz8u7X2pUeihrNVfyrPUrMWsoTA/exec"; // <- replace if different

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const submissionData = {
      ...formData,
      timestamp: new Date().toISOString(),
    };

    const params = new URLSearchParams();
    Object.entries(submissionData).forEach(([key, value]) => {
      params.append(key, String(value ?? ""));
    });

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: params.toString(),
      });

      const json = await response.json().catch(() => null);

      if (response.ok) {
        alert("✅ Thank you for your message! It has been saved.");
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          message: "",
        });
        console.log("Submission response:", json);
      } else {
        console.error("Submission failed", response.status, json);
        alert("❌ Failed to submit. Please try again later.");
      }
    } catch (error) {
      console.error("Network / CORS error:", error);
      alert("⚠️ Network error. Please check console for details.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12 fade-in">
          Get In Touch
        </h2>

        <div className="bg-white shadow-lg rounded-2xl p-8 fade-in">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="company" className="block font-medium mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="service" className="block font-medium mb-2">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Select a service</option>
                <option value="qa-testing">QA/Manual Testing</option>
                <option value="automation">Automation Testing</option>
                <option value="security">Security Testing</option>
                <option value="ai-automation">AI Automation</option>
                <option value="devops">DevOps</option>
                <option value="development">Development</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-10 text-center space-y-4 fade-in">
          <a
            href="mailto:contact@autoseclabs.com"
            className="block text-blue-600 font-medium hover:underline"
          >
            ✉️ contact@autoseclabs.com
          </a>
          <a
            href="https://wa.me/+918712388153"
            className="block text-green-600 font-medium hover:underline"
          >
            💬 WhatsApp Chat
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
