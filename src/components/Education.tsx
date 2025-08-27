import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Education
          </h2>
          
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-primary mb-2">
                    Bachelor of Technology (B.Tech)
                  </h3>
                  <h4 className="text-xl text-card-foreground mb-2">
                    Computer Science Engineering
                  </h4>
                  <p className="text-lg text-muted-foreground mb-3">
                    [Your University Name]
                  </p>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Expected Graduation: 2025</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-semibold text-card-foreground mb-2">Relevant Coursework:</h5>
                      <div className="grid md:grid-cols-2 gap-2 text-muted-foreground">
                        <ul className="space-y-1">
                          <li>• Data Structures & Algorithms</li>
                          <li>• Object-Oriented Programming</li>
                          <li>• Database Management Systems</li>
                          <li>• Web Development</li>
                        </ul>
                        <ul className="space-y-1">
                          <li>• Software Engineering</li>
                          <li>• Computer Networks</li>
                          <li>• Operating Systems</li>
                          <li>• Machine Learning Basics</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-card-foreground mb-2">Academic Achievements:</h5>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Consistent academic performance with good grades</li>
                        <li>• Active participation in coding competitions</li>
                        <li>• Member of Computer Science Society</li>
                        <li>• Completed multiple technical projects</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;