import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, FileText, Trophy } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Infosys Springboard Power BI Certification",
      type: "certification",
      description: "Completed comprehensive Power BI training covering data visualization, dashboard creation, and business intelligence.",
      date: "2024",
      issuer: "Infosys Springboard",
    },
    {
      title: "JavaScript Complete Course",
      type: "certification",
      description: "Mastered JavaScript fundamentals, DOM manipulation, async programming, and modern ES6+ features.",
      date: "2023",
      issuer: "Udemy",
    },
    {
      title: "Python for Data Science",
      type: "certification",
      description: "Learned data analysis, visualization, and machine learning basics using Python libraries like Pandas and NumPy.",
      date: "2023",
      issuer: "Udemy",
    },
    {
      title: "College Coding Competition",
      type: "award",
      description: "Secured top position in inter-college programming competition with algorithmic problem-solving.",
      date: "2023",
      issuer: "University",
    },
    {
      title: "Best Project Award",
      type: "award",
      description: "Received recognition for innovative web application project during semester exhibition.",
      date: "2023",
      issuer: "Computer Science Department",
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "certification":
        return <FileText className="w-6 h-6 text-primary" />;
      case "award":
        return <Trophy className="w-6 h-6 text-primary" />;
      default:
        return <Award className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Achievements & Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3 mb-2">
                    {getIcon(achievement.type)}
                    <Badge variant="outline" className="text-xs">
                      {achievement.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-primary leading-tight">
                    {achievement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-card-foreground text-sm leading-relaxed mb-3">
                    {achievement.description}
                  </p>
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span>{achievement.issuer}</span>
                    <span>{achievement.date}</span>
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

export default Achievements;