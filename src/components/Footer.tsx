import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary/20 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">Avinash Kumar</h3>
              <p className="text-muted-foreground">
                B.Tech Final Year Developer passionate about creating innovative web solutions 
                and contributing to meaningful projects.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <div className="flex flex-col space-y-2">
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
                <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </a>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </a>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Connect With Me</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://github.com/avinashkumar" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://linkedin.com/in/avinashkumar" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="mailto:avinash.kumar@example.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground flex items-center justify-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Avinash Kumar
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              © 2024 Avinash Kumar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;