import { Award, Star, Trophy, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Dean's List Recognition",
      description: "Recognized for academic excellence with consistent high performance throughout the semester",
      date: "2023",
      category: "Academic"
    },
    {
      icon: Award,
      title: "Best Project Award",
      description: "Received recognition for innovative e-commerce platform project in Software Engineering course",
      date: "2023",
      category: "Project"
    },
    {
      icon: Star,
      title: "Infosys Springboard Power BI Certification",
      description: "Successfully completed comprehensive training in business intelligence and data visualization",
      date: "2023",
      category: "Certification"
    },
    {
      icon: Users,
      title: "Technical Society Member",
      description: "Active member of the Computer Science Society, organizing workshops and technical events",
      date: "2022-Present",
      category: "Leadership"
    }
  ];

  const certifications = [
    {
      name: "Infosys Springboard Power BI",
      issuer: "Infosys",
      year: "2023",
      skills: ["Data Visualization", "Business Intelligence", "Analytics"]
    },
    {
      name: "Complete Web Development Bootcamp",
      issuer: "Udemy",
      year: "2023",
      skills: ["Full-Stack Development", "JavaScript", "Node.js", "React"]
    },
    {
      name: "Python Programming Specialization",
      issuer: "Coursera",
      year: "2022",
      skills: ["Python", "Data Analysis", "Object-Oriented Programming"]
    },
    {
      name: "Git & GitHub Fundamentals",
      issuer: "GitHub",
      year: "2022",
      skills: ["Version Control", "Collaboration", "DevOps"]
    }
  ];

  const skills = [
    "Problem Solving", "Team Leadership", "Project Management", "Technical Documentation",
    "Code Review", "Agile Methodologies", "Public Speaking", "Mentoring"
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Achievements & <span className="text-orange-primary">Recognition</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Milestones and accomplishments that showcase my dedication to excellence and continuous learning
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card key={index} className="bg-card border-border hover:border-orange-primary/50 transition-all duration-300 group">
                <CardHeader className="flex flex-row items-center space-y-0 space-x-4">
                  <div className="w-12 h-12 bg-orange-primary/10 rounded-lg flex items-center justify-center group-hover:bg-orange-primary/20 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-orange-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-foreground group-hover:text-orange-primary transition-colors duration-300">
                        {achievement.title}
                      </CardTitle>
                      <Badge variant="outline" className="text-orange-primary border-orange-primary/50 text-xs">
                        {achievement.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{achievement.date}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Professional Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-soft transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg text-foreground">{cert.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs bg-muted hover:bg-orange-primary/20 hover:text-orange-primary transition-colors duration-300"
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

        {/* Special Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Special Skills & Qualities
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm border-orange-primary/30 text-foreground hover:bg-orange-primary/20 hover:text-orange-primary hover:border-orange-primary transition-all duration-300 cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-orange-primary">4+</div>
            <div className="text-sm text-muted-foreground">Major Achievements</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-orange-primary">5+</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-orange-primary">3.8+</div>
            <div className="text-sm text-muted-foreground">Academic GPA</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-orange-primary">2+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;