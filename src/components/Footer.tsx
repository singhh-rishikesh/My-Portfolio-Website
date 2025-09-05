import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/singhh-rishikesh", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/rishikesh-sourabh87/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:rishikesh.sourabh@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              Rishikesh Sourabh
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              B.Tech final-year developer passionate about creating innovative software solutions. 
              Always learning, always building.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-orange-primary/20 hover:text-orange-primary transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-orange-primary transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 rishikesh.sourabh@gmail.com</p>
              <p>📱 +91 8709631861</p>
              <p>📍 Patna, Bihar, India</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Open to internship and job opportunities
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Rishikesh Sourabh. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;