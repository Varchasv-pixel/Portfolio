import {
  
  
  Mail,
  MapPin,
  Phone,
  Send,
  
  
} from "lucide-react";

import "./ContactSection.css";


import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container mx-auto max-w-5xl">
        <h2>
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p>
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities!
        </p>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h3 className="contact-info-title">Contact Information</h3>

            {/* Email */}
            <div className="contact-item">
              <div className="contact-icon">
                <Mail />
              </div>
              <div className="contact-text">
                <h4>Email</h4>
                <a
                  href="mailto:hello@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  hello@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-item">
              <div className="contact-icon">
                <Phone />
              </div>
              <div className="contact-text">
                <h4>Phone</h4>
                <a
                  href="tel:8977039133"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 8977039133
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="contact-item">
              <div className="contact-icon">
                <MapPin />
              </div>
              <div className="contact-text">
                <h4>Location</h4>
                <span className="text-muted-foreground hover:text-primary transition-colors">
                  Pune , India 
                </span>
              </div>
            </div>

            
            
          </div>

          {/* Contact Form */}
          <div className="contact-formm">
           

            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Pedro Machado..."
              />

              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="john@gmail.com"
              />

              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Hello, I'd like to talk about..."
                rows={4}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="cosmic-button w-full"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    );}
