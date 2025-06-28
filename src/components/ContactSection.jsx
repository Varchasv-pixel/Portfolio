import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import "./ContactSection.css";

export const ContactSection = () => {
  const { toast } = useToast();
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace with your actual EmailJS keys
    const serviceID = "service_clo6fhl"
    const templateID = "template_r89fcxs";
    const publicKey = "eolFS3eydiME1F5Ih";

    emailjs
      .sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setIsSubmitting(false);
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS error", error);
        toast({
          title: "Error",
          description: "Sorry, something went wrong. Please try again later.",
          variant: "destructive",
        });
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container-custom">
        <h2 className="contact-heading">
          Get In <span>Touch</span>
        </h2>
        <p className="contact-subtext">
          Have a project in mind or want to collaborate? Let’s connect.
        </p>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info-card">
            <div className="contact-item">
              <Mail className="contact-icon" />
              <div>
               
                <a href="varch.1906@gmail.com">hello@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <Phone className="contact-icon" />
              <div>
                
                <a href="tel:+918977039133">+91 8977039133</a>
              </div>
            </div>

            <div className="contact-item">
              <MapPin className="contact-icon" />
              <div>
                
                <span>Pune, India</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card">
            <form ref={formRef} onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                required
                placeholder="Your name"
              />

              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="you@example.com"
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Write your message..."
              ></textarea>

              <button
                className="cosmic-button"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"} <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
