import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science Engineering",
      institution: "Indian Institute of Technology (Example)",
      location: "New Delhi, India",
      period: "2021 - 2024",
      status: "Final Year",
      description: "Comprehensive program covering software engineering, data structures, algorithms, database systems, and modern programming languages. Focused on practical application of computer science principles.",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Software Engineering",
        "Web Development",
        "Object-Oriented Programming",
        "Computer Networks"
      ]
    }
  ];

  const certifications = [
    {
      title: "Infosys Springboard Power BI Certification",
      issuer: "Infosys",
      date: "2023",
      description: "Comprehensive training in business intelligence and data visualization using Microsoft Power BI"
    },
    {
      title: "Complete Web Development Bootcamp",
      issuer: "Udemy",
      date: "2023",
      description: "Full-stack web development course covering HTML, CSS, JavaScript, Node.js, and database integration"
    },
    {
      title: "Python Programming Specialization",
      issuer: "Coursera",
      date: "2022",
      description: "Advanced Python programming concepts, data analysis, and application development"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Education & <span className="text-orange-primary">Learning</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My academic journey and continuous learning through various courses and certifications
          </p>
        </div>

        {/* Formal Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Formal Education
          </h3>
          
          {education.map((edu, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-soft transition-all duration-300 max-w-4xl mx-auto">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-primary/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-orange-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">
                        {edu.degree}
                      </CardTitle>
                      <p className="text-lg text-orange-primary font-medium">
                        {edu.field}
                      </p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar className="h-4 w-4" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{edu.institution}</h4>
                    <span className="inline-block px-3 py-1 bg-orange-primary/20 text-orange-primary rounded-full text-sm font-medium">
                      {edu.status}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div>
                    <h5 className="font-medium text-foreground mb-3">Key Coursework:</h5>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <div
                          key={courseIndex}
                          className="text-sm text-muted-foreground bg-muted rounded-lg px-3 py-2"
                        >
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Certifications & Courses
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-card border-border hover:border-orange-primary/50 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground group-hover:text-orange-primary transition-colors duration-300">
                    {cert.title}
                  </CardTitle>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span className="font-medium">{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Academic Highlights */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-orange-primary">3.8+</div>
              <div className="text-sm text-muted-foreground">Cumulative GPA</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-orange-primary">15+</div>
              <div className="text-sm text-muted-foreground">Relevant Courses</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-orange-primary">5+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;