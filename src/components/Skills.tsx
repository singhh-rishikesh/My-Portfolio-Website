import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 85, color: "bg-blue-500" },
        { name: "Java", level: 80, color: "bg-red-500" },
        { name: "JavaScript", level: 90, color: "bg-yellow-500" },
      ],
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML5", level: 95, color: "bg-orange-500" },
        { name: "CSS3", level: 90, color: "bg-blue-400" },
        { name: "React", level: 85, color: "bg-cyan-500" },
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "PostgreSQL", level: 75, color: "bg-indigo-500" },
        { name: "Git", level: 80, color: "bg-orange-600" },
      ],
    },
  ];

  const techStack = [
    "Python", "Java", "JavaScript", "HTML5", "CSS3", "React", 
    "Node.js", "PostgreSQL", "Git", "REST APIs", 
    "Responsive Design", "Agile", "Problem Solving", "Manual Tester","Gira"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Technical <span className="text-orange-primary">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive set of technologies and tools I use to build modern applications
          </p>
        </div>

        {/* Skills Progress */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-soft transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-center text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Stack Badges */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm bg-muted hover:bg-orange-primary/20 hover:text-orange-primary hover:border-orange-primary/50 transition-all duration-300 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Professional Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-orange-primary">15+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-orange-primary">5+</div>
            <div className="text-sm text-muted-foreground">Technologies Mastered</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-orange-primary">2026</div>
            <div className="text-sm text-muted-foreground">Expected Graduation</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;