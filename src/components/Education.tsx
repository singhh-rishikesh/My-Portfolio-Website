import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { title } from "process";
import { Description } from "@radix-ui/react-toast";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science Engineering",
      institution: "Kalasalingam Academy of Research and Education",
      location: "Tamil Nadu, India",
      period: "2022 - 2026",
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
      title: "Introduction to Artificial Intelligence",
      issuer: "Infosys",
      date: "2024",
      description: "Gained an understanding of AI fundamentals, including machine learning concepts, natural language processing, and computer vision. Explored how AI can be applied in real-world problem solving, automation, and decision-making. The course also emphasized the ethical aspects of AI, its future potential, and the impact on industries and society."
    },
    {
      title: "Scrum in Practice",
      issuer: "Infosys",
      date: "2024",
      description: "Gained strong knowledge of Agile methodologies and the Scrum framework, including roles (Product Owner, Scrum Master, Development Team), artifacts (Product Backlog, Sprint Backlog, Increment), and ceremonies (Sprint Planning, Daily Stand-ups, Reviews, Retrospectives). Also learned practical skills in team collaboration, backlog management, sprint execution, and delivering value through iterative development, with a focus on transparency, adaptability, and productivity."
    },
    {
      title: "Software Engineering and Agile Software Development",
      issuer: "Infosys",
      date: "2024",
      description: "Learned the core principles of software engineering including requirements analysis, design, development, testing, and maintenance. Gained practical understanding of Agile methodologies, emphasizing iterative development, continuous integration, and customer collaboration. The course also highlighted the software development lifecycle (SDLC), best coding practices, and how Agile improves flexibility, quality, and faster delivery in modern projects."
    },
    {
      title: "PHP and MySQL for Web Application and Web Development",
      issuer: "Udemy",
      date: "2025",
      description: "Full-stack web development course focused on building dynamic web applications using PHP and MySQL, including database design, server-side scripting, and integration with front-end technologies."
    },
    {
      title: "Data Science Full Course",
      issuer: "Infosys",
      date: "2025",
      description: "Developed a foundation in data collection, cleaning, and preprocessing techniques. Gained hands-on knowledge of data visualization for identifying trends and patterns, along with basic statistical methods to support data-driven decision-making. The course also introduced the use of analytical tools and real-world applications of data science in solving business problems."
    },
    {
      title: "Leading in the Age of Generative AI",
      issuer: "Infosys",
      date: "2024",
      description: "This certification focused on understanding Generative AI fundamentals and its transformative role in industries. It covered topics like large language models (LLMs), prompt engineering, ethical considerations, and responsible AI usage. The course also emphasized business applications of GenAI such as content generation, automation, customer experience, and decision support. Additionally, it provided leadership perspectives, helping in understanding how to drive innovation, manage AI adoption in organizations, and balance technology with human creativity."
    },
    {
      title: "Prompt Engineering Application",
      issuer: "SimpliLearn",
      date: "2025",
      description: "A course on crafting effective AI prompts to optimize interactions with generative models. Covers prompt design, advanced prompting techniques, Large Language Models (LLMs), and hands-on experience with tools like ChatGPT, LangChain, and OpenAI Codex."
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
              <div className="text-2xl font-bold text-orange-primary">8.3+</div>
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