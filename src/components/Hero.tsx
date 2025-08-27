import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Download, Github, Linkedin, Mail, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import avinashPhoto from "@/assets/avinash-photo.png";

const Hero = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedResume, setUploadedResume] = useState<string | null>(null);
  const { toast } = useToast();

  const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
        const resumeUrl = URL.createObjectURL(file);
        setUploadedResume(resumeUrl);
        toast({
          title: "Resume uploaded successfully!",
          description: `${file.name} is ready for download.`,
        });
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF file.",
          variant: "destructive",
        });
      }
    }
  };

  const handleDownloadResume = () => {
    if (uploadedResume) {
      const link = document.createElement('a');
      link.href = uploadedResume;
      link.download = 'Avinash_Kumar_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      toast({
        title: "No resume available",
        description: "Please upload your resume first.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 hero-gradient">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Avatar */}
          <div className="mb-8 flex justify-center">
            <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-primary animate-float">
              <AvatarImage src={avinashPhoto} alt="Avinash Kumar" />
              <AvatarFallback className="text-2xl font-bold">AK</AvatarFallback>
            </Avatar>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
            Avinash Kumar
          </h1>
          <p className="text-xl md:text-2xl text-primary mb-6 font-semibold">
            B.Tech Final Year Developer
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Passionate full-stack developer specializing in modern web technologies. 
            Ready to contribute to innovative projects and grow with a dynamic team.
          </p>

          {/* Resume Upload/Download Section */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Input
                type="file"
                accept=".pdf"
                onChange={handleResumeUpload}
                ref={fileInputRef}
                className="hidden"
              />
              <Button
                onClick={() => fileInputRef.current?.click()}
                variant="outline"
                className="w-full sm:w-auto"
              >
                <Upload className="mr-2 h-4 w-4" />
                Upload Resume
              </Button>
              <Button
                onClick={handleDownloadResume}
                className="w-full sm:w-auto"
                disabled={!uploadedResume}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
            {uploadedResume && (
              <p className="text-sm text-muted-foreground">
                Resume uploaded and ready for download
              </p>
            )}
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <Button variant="ghost" size="lg" asChild>
              <a href="https://github.com/avinashkumar" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="https://linkedin.com/in/avinashkumar" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="mailto:avinash@example.com">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </div>

          {/* CTA Button */}
          <Button size="lg" className="animate-pulse" asChild>
            <a href="#contact">Let's Connect</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;