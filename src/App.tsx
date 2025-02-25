import React from 'react';
import {
  QrCode,
  Clock,
  CreditCard,
  Facebook,
  Instagram,
  Linkedin,
} from 'lucide-react';
import emailjs from 'emailjs-com'; // Import EmailJS

// Import the background image
import backgroundImage from './background.jpg'; // Adjust the path if necessary

function App() {
    const sendEmail = (e) => {
        e.preventDefault();
      
        emailjs
          .sendForm(
            'service_49dpcjv', // Replace with your Service ID
            'template_dqwtis7', // Replace with your Template ID
            e.target,
            'tTnFQdBgc3y7U95lU' // Replace with your Public Key
          )
          .then(
            (result) => {
              console.log(result.text);
              alert('Message sent successfully!');
            },
            (error) => {
              console.log(error.text);
              alert('Failed to send the message, please try again.');
            }
          );
      
        e.target.reset(); // Reset the form after submission
      };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header
        className="bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="bg-gradient-to-r from-blue-600/90 to-blue-800/90">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <QrCode className="h-8 w-8" />
              <span className="text-2xl font-bold">Scanwich</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="hover:text-blue-200">
                Features
              </a>
              <a href="#pricing" className="hover:text-blue-200">
                Pricing
              </a>
              <a href="#testimonials" className="hover:text-blue-200">
                Testimonials
              </a>
              <a href="#contact" className="hover:text-blue-200">
                Contact
              </a>
            </div>
            <button
              className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              onClick={() =>
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
              }
            >
              Get Started
            </button>
          </nav>

          <div className="container mx-auto px-6 py-24 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Revolutionize Your Restaurant with Scanwich
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
              Simplify operations, enhance customer satisfaction, and boost
              revenue with Scanwich's innovative QR-code ordering and payment
              solutions.
            </p>
            <button
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors"
              onClick={() =>
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
              }
            >
              Get Started Today
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose Scanwich?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<QrCode className="h-12 w-12 text-blue-600" />}
              title="QR Code Ordering"
              description="Let customers order directly from their phones using unique table QR codes."
            />
            <FeatureCard
              icon={<CreditCard className="h-12 w-12 text-blue-600" />}
              title="Flexible Payments"
              description="Offer both online and cash payment options for a seamless experience."
            />
            <FeatureCard
              icon={<Clock className="h-12 w-12 text-blue-600" />}
              title="Real-Time Updates"
              description="Keep customers informed with live order status notifications."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Pricing Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              title="Basic Plan"
              price="₹5,999"
              description="Perfect for small cafes and food trucks"
            />
            <PricingCard
              title="Business Plan"
              price="₹9,999"
              description="Ideal for mid-sized restaurants"
              featured={true}
            />
            <PricingCard
              title="Premium Plan"
              price="₹14,999"
              description="Best for large restaurants and chains"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <TestimonialCard
              quote="Scanwich has transformed the way we handle orders. Our customers love the convenience, and our staff is more efficient than ever!"
              author="Rajesh"
              role="Café Owner"
            />
            <TestimonialCard
              quote="The real-time updates and easy payment options have made dining out a breeze for our customers."
              author="Priya"
              role="Restaurant Manager"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Let's Connect!</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form className="space-y-6" onSubmit={sendEmail}>
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <QrCode className="h-8 w-8" />
                <span className="text-2xl font-bold">Scanwich</span>
              </div>
              <p className="text-gray-400">
                Transforming restaurant operations with innovative QR-code
                solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-400 hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-400 hover:text-white"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contact@scanwich.com</li>
                <li>+91-7388541763</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/syed0wais" className="text-gray-400 hover:text-white">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="https://instagram.com/syed_0wais" className="text-gray-400 hover:text-white">
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/syed0wais"
                  className="text-gray-400 hover:text-white"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Scanwich. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
      <div className="flex justify-center mb-6">{icon}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function PricingCard({ title, description, price, featured = false }) {
  return (
    <div
      className={`rounded-lg p-8 ${
        featured ? 'bg-blue-600 text-white' : 'bg-white'
      }`}
    >
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className={`mb-8 ${featured ? 'text-blue-100' : 'text-gray-600'}`}>
        {description}
      </p>
      <div className="text-3xl font-bold mb-8">{price}</div>
      <button
        className={`w-full py-3 rounded-lg font-semibold transition-colors ${
          featured
            ? 'bg-white text-blue-600 hover:bg-blue-50'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
        onClick={() =>
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
        }
      >
        Choose Plan
      </button>
    </div>
  );
}

function TestimonialCard({ quote, author, role }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <p className="text-gray-600 mb-6 text-lg italic">"{quote}"</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
  );
}

export default App;