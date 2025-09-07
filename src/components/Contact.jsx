import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: " ",
      link: "mailto:durgaprasadpandiripalli@outlook.com",
      linkText: "Send an email",
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: "+91 8247410560",
      link: "tel:+918247410560",
      linkText: "Call me"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "Rajam, Vizianagaram",
      link: "https://maps.app.goo.gl/Rm2JQznzquPG5T9h7",
      linkText: "View on map"
    }
  ];

  const socialLinks = [
    { icon: "fab fa-github", href: "https://github.com/Durgaprasad2408", hoverColor: "hover:bg-[#333]" },
    { icon: "fab fa-linkedin-in", href: "https://www.linkedin.com/in/durga-prasad-pandiripalli-5b97ab264", hoverColor: "hover:bg-[#0077b5]" },
    { icon: "fab fa-twitter", href: "#", hoverColor: "hover:bg-[#1da1f2]" },
    { icon: "fab fa-instagram", href: "#", hoverColor: "hover:bg-[#ea4c89]" }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = Object.values(formData);
    if (requiredFields.some(field => !field.trim())) {
      toast.warning("⚠️ Please fill in all fields", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }

    setLoading(true);

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      toast.success(`🚀 Thank you, ${formData.name}! Your message was sent successfully.`, {
        position: "top-right",
        autoClose: 4000,
        theme: "colored",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
      setLoading(false);
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      toast.error("❌ Oops! Something went wrong. Please try again later.", {
        position: "top-right",
        autoClose: 4000,
        theme: "colored",
      });
      setLoading(false);
    });
  };

  return (
    <section id="contact" className=" px-32 py-10 bg-white scroll-mt-14">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-2">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Info */}
          <div className="md:w-1/2" data-aos="fade-right" data-aos-duration="1000">
            <div className="bg-gray-50 p-8 rounded-xl shadow-md h-full">
              <h3 className="text-xl font-semibold mb-6 gradient-text">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                      <i className={`${info.icon} text-indigo-600 text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{info.title}</h4>
                      <p className="text-gray-600">{info.value}</p>
                      <a
                        href={info.link}
                        target="_blank" 
                        rel={info.title === 'Location' ? 'noreferrer' : ''}
                        className="text-indigo-600 hover:text-indigo-800 transition mt-1 inline-block"
                      >
                        {info.linkText}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Socials */}
              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-6 gradient-text">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`social-icon bg-gray-100 text-gray-700 ${social.hoverColor} hover:text-white transition`}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Form */}
          <div className="md:w-1/2" data-aos="fade-left" data-aos-duration="1000">
            <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 gradient-text">Send Me a Message</h3>

              {['name','email','subject','message'].map((field, idx) => (
                <div key={idx} className="mb-2">
                  <label
                    htmlFor={field}
                    className="block text-gray-700 mb-2 font-medium"
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {field === 'message' ? (
                    <textarea
                      id={field}
                      rows={2}
                      className="contact-input"
                      placeholder={`Your ${field}`}
                      value={formData[field]}
                      onChange={handleChange}
                    ></textarea>
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      className="contact-input"
                      placeholder={`Your ${field}`}
                      value={formData[field]}
                      onChange={handleChange}
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
                <i className="fas fa-paper-plane ml-2"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </section>
  );
};

export default Contact;
