
import { useEffect, useState, useRef } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { toast } from "@/components/ui/sonner";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const sectionRef = useRef(null);
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace this URL with your deployed Google Apps Script Web App URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycbxAbbr3lqtZ_fGkXgE_0rkEbPvVAaasq4Q1bT6ScTiU2xatsF27MLUS5Zh71Atbs3-M/exec';
      
      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState)
      });
      
      // Since no-cors doesn't give us access to the response status,
      // we'll just assume it worked and show a success message
      toast.success("Message sent successfully!");
      
      // Reset the form
      setFormState({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: <Mail className="h-4 w-4 md:h-6 md:w-6 " />,
      title: "Email",
      value: "durgaprasadpandiripalli@outlook.com",
      link: "mailto:durgaprasadpandiripalli@outlook.com"
    },
    {
      icon: <MapPin className="h-4 w-4 md:h-6 md:w-6" />,
      title: "Location",
      value: "Rajam, Andhrapradesh, India",
      link: "https://maps.app.goo.gl/3ce13FpP2TGa4zY87"
    },
    {
      icon: <Phone className="h-4 w-4 md:h-6 md:w-6" />,
      title: "Phone",
      value: "+91 8247410560",
      link: "tel:+918247410560"
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      id="contact" 
      className="h-full md:h-screen pt-10 relative overflow-hidden flex items-center justify-center"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-purple-50 rounded-bl-[100px] opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-orange-50 rounded-tr-[100px] opacity-50"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4 mt-10 md:mt-0">GET IN TOUCH</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800">
            Let's Work Together
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm currently looking for new opportunities! Send me a message and let's discuss how I can contribute to your project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start w-full">

          {/* Contact form */}
          <div 
            className={`bg-white p-4 md:p-6 rounded-3xl shadow-xl transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } relative z-10 h-auto`}
          >
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 outline-none"
                  required
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 outline-none"
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 outline-none"
                  required
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center font-medium gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Contact information */}
          <div 
            className={`transition-all duration-1000 delay-200 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } flex flex-col h-full justify-center`}
          >
            {/* Contact cards */}
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={info.title}
                  className="bg-white p-6 rounded-xl shadow-lg flex items-center gap-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="p-2 md:p-3 bg-purple-50 text-purple-600 rounded-lg ">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700 mb-1">{info.title}</h3>
                    <a href={info.link} className=" text-sm md:text-lg font-medium text-purple-600 hover:underline target='_blank' ">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
