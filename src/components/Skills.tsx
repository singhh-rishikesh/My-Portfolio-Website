import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "TypeScript"],
    },
    {
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "React", "Node.js", "Express"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "Power BI", "VS Code", "Linux"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Bootstrap", "Tailwind CSS", "jQuery"],
    },
    {
      title: "Other Skills",
      skills: ["Data Analysis", "API Development", "Responsive Design", "Problem Solving"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
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

export default Skills;