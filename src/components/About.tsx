import { Code2, Database, Globe, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Proficient in both frontend and backend technologies with modern frameworks",
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Experience with SQL databases and data modeling for efficient applications",
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "Modern web development using HTML5, CSS3, JavaScript, and responsive design",
    },
    {
      icon: Palette,
      title: "UI/UX Focused",
      description: "Creating intuitive and visually appealing user interfaces and experiences",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            About <span className="text-orange-primary">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate about technology and innovation, I'm dedicated to creating 
            impactful software solutions that make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a final-year B.Tech student specializing in software development, 
                I bring a fresh perspective combined with solid technical foundations. 
                My journey in technology has been driven by curiosity and a desire to 
                solve real-world problems through code.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I have experience working with modern technologies including Python, 
                Java, JavaScript, and various databases. My approach focuses on writing 
                clean, maintainable code while staying updated with the latest industry trends.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond coding, I enjoy exploring creative writing and continuously 
                learning new technologies. I'm actively seeking opportunities to contribute 
                to meaningful projects and grow as a developer.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-orange-primary rounded-full"></div>
                <span className="text-muted-foreground">Final Year B.Tech Student</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-orange-primary rounded-full"></div>
                <span className="text-muted-foreground">Full-Stack Developer</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-orange-primary rounded-full"></div>
                <span className="text-muted-foreground">Problem Solver</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="bg-card border-border hover:border-orange-primary/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-orange-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-primary/20 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-orange-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;