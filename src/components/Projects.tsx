import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.",
      techStack: ["React", "Node.js", "PostgreSQL", "Express", "CSS3"],
      githubUrl: "https://github.com/avinashkumar/ecommerce-project",
      liveUrl: "https://demo-ecommerce.com",
    },
    {
      title: "Task Management App",
      description: "A responsive task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
      techStack: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
      githubUrl: "https://github.com/avinashkumar/task-manager",
      liveUrl: "https://task-manager-demo.com",
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for data analysis and visualization using Power BI and Python for data processing.",
      techStack: ["Python", "Power BI", "Pandas", "SQL"],
      githubUrl: "https://github.com/avinashkumar/data-dashboard",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects, skills, and achievements with responsive design and modern UI.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/avinashkumar/portfolio",
      liveUrl: "https://avinashkumar.dev",
    },
    {
      title: "Weather App",
      description: "Real-time weather application with location-based forecasts, weather maps, and historical data analysis.",
      techStack: ["JavaScript", "API Integration", "HTML5", "CSS3"],
      githubUrl: "https://github.com/avinashkumar/weather-app",
      liveUrl: "https://weather-app-demo.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-card-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-primary/30 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className="flex-1"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Live
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;