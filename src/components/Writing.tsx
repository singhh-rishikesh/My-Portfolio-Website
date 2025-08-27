import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PenTool, Clock } from "lucide-react";

const Writing = () => {
  const writings = [
    {
      title: "The Future of Web Development",
      excerpt: "Exploring emerging trends in web development, from AI integration to progressive web apps. Modern frameworks are reshaping how we build digital experiences, making development more efficient and user-centric. The evolution continues with new tools and methodologies emerging every day.",
      date: "Dec 2024",
      readTime: "2 min",
    },
    {
      title: "Learning Programming Effectively",
      excerpt: "Strategies for mastering programming concepts through practical projects and consistent practice. Building a strong foundation requires patience, dedication, and the right approach to problem-solving. Every developer's journey is unique, but certain principles remain universal.",
      date: "Nov 2024",
      readTime: "3 min",
    },
    {
      title: "Data Visualization Best Practices",
      excerpt: "Creating meaningful insights through effective data presentation and storytelling. Good visualization transforms complex data into actionable insights, helping stakeholders make informed decisions. The key lies in understanding both the data and the audience.",
      date: "Oct 2024",
      readTime: "2 min",
    },
    {
      title: "Building Responsive Designs",
      excerpt: "Techniques for creating websites that work seamlessly across all devices and screen sizes. Modern users expect consistent experiences whether they're on mobile, tablet, or desktop. Responsive design is no longer optional—it's essential.",
      date: "Sep 2024",
      readTime: "2 min",
    },
  ];

  return (
    <section id="writing" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Creative Writing & Blog
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {writings.map((writing, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <PenTool className="w-5 h-5 text-primary" />
                    <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                      <span>{writing.date}</span>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{writing.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-lg text-primary">
                    {writing.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-card-foreground text-sm leading-relaxed line-clamp-4">
                    {writing.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              These are 100-word writing exercises that help me explore ideas and improve my communication skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Writing;