import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/Rishikesh_photo.png";

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/singhh-rishikesh", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/rishikesh-sourabh87", label: "LinkedIn" },
    { icon: Mail, href: "mailto:rishikesh.sourabh@gmail.com", label: "Email" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-glow animate-float">
                <img
                  src={heroImage}
                  alt="Rishikesh Sourabh - Developer Portfolio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-accent rounded-full opacity-20 animate-pulse-glow"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-glow/10 rounded-full opacity-30"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <h2 className="text-lg text-orange-primary font-medium mb-2 tracking-wide">
                — I'M RISHIKESH SOURABH.
              </h2>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
                SOFTWARE
                <br />
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  DEVELOPER
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                I'm a B.Tech final-year developer passionate about building 
                excellent software that improves the lives of those around me. 
                I specialize in creating exceptional digital experiences with 
                modern technologies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="bg-gradient-accent hover:shadow-glow transition-all duration-300 group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                DOWNLOAD RESUME
              </Button>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:border-orange-primary hover:shadow-soft transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5 text-muted-foreground group-hover:text-orange-primary transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hidden lg:flex items-center text-muted-foreground">
              <div className="w-px h-16 bg-gradient-to-b from-orange-primary to-transparent mr-4"></div>
              <span className="text-sm tracking-widest rotate-90 origin-left">SCROLL DOWN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;