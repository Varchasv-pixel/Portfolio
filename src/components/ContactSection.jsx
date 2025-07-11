import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import "./ContactSection.css";

export const ContactSection = () => {
  const { toast } = useToast();
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(formRef.current);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
      };

      // Send to backend API
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: result.message || "Thank you for reaching out. I'll get back to you soon.",
        });
        formRef.current.reset();
      } else {
        // Handle validation errors
        if (result.errors && result.errors.length > 0) {
          const errorMessages = result.errors.map(error => `${error.field}: ${error.message}`).join(', ');
          toast({
            title: "Validation Error",
            description: errorMessages,
            variant: "destructive",
          });
        } else {
          toast({
            title: "Error",
            description: result.message || "Sorry, something went wrong. Please try again later.",
            variant: "destructive",
          });
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Connection Error",
        description: "Unable to connect to server. Please check your internet connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container-custom">
        <h2 className="contact-heading">
          Get In <span>Touch</span>
        </h2>
        <p className="contact-subtext">
          Have a project in mind or want to collaborate? Let's connect.
        </p>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info-card">
            <div className="contact-item">
              <Mail className="contact-icon" />
              <div>
                <a href="mailto:varch.1906@gmail.com">varch.1906@gmail.com</a>
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
                autoComplete="name"
                minLength="2"
                maxLength="100"
              />

              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                autoComplete="email"
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Write your message..."
                autoComplete="off"
                minLength="10"
                maxLength="1000"
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
