import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration. Built with modern web technologies and responsive design principles.",
      techStack: ["JavaScript", "React", "Node.js", "PostgreSQL", "CSS3"],
      githubLink: "https://github.com/avinashkumar/ecommerce-platform",
      liveLink: "https://ecommerce-demo.example.com",
      category: "Full-Stack"
    },
    {
      title: "Task Management System",
      description: "A comprehensive task management application with real-time updates, team collaboration features, and progress tracking. Includes drag-and-drop functionality and deadline notifications.",
      techStack: ["Python", "Django", "PostgreSQL", "HTML5", "CSS3"],
      githubLink: "https://github.com/avinashkumar/task-manager",
      liveLink: "https://taskmanager-demo.example.com",
      category: "Web Application"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for data visualization and analytics using Power BI and Python. Features dynamic charts, filters, and real-time data processing capabilities.",
      techStack: ["Python", "Power BI", "PostgreSQL", "JavaScript"],
      githubLink: "https://github.com/avinashkumar/analytics-dashboard",
      category: "Data Analysis"
    },
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio website showcasing projects, skills, and achievements. Built with modern design principles and optimized for performance and SEO.",
      techStack: ["React", "TypeScript", "HTML5", "CSS3", "Responsive Design"],
      githubLink: "https://github.com/avinashkumar/portfolio",
      liveLink: "https://avinashkumar.dev",
      category: "Frontend"
    },
    {
      title: "API Integration Project",
      description: "A RESTful API integration project demonstrating CRUD operations, authentication, and data validation. Includes comprehensive documentation and testing suite.",
      techStack: ["Java", "Spring Boot", "PostgreSQL", "Git"],
      githubLink: "https://github.com/avinashkumar/api-integration",
      category: "Backend"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-orange-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my development work demonstrating various technologies and problem-solving approaches
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border hover:border-orange-primary/50 transition-all duration-300 group h-full flex flex-col">
              <CardHeader className="flex-grow-0">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="text-orange-primary border-orange-primary/50">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-foreground group-hover:text-orange-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-muted text-muted-foreground hover:bg-orange-primary/20 hover:text-orange-primary transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6 pt-4 border-t border-border">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1 hover:border-orange-primary hover:text-orange-primary transition-all duration-300"
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  
                  {project.liveLink && (
                    <Button
                      size="sm"
                      asChild
                      className="flex-1 bg-gradient-accent hover:shadow-glow transition-all duration-300"
                    >
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work? Check out my GitHub profile for additional projects and contributions.
          </p>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="hover:border-orange-primary hover:text-orange-primary transition-all duration-300"
          >
            <a
              href="https://github.com/avinashkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;