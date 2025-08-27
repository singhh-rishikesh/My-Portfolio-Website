import { PenTool, BookOpen, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Writing = () => {
  const writingPieces = [
    {
      title: "The Future of Web Development",
      excerpt: "Exploring emerging technologies and trends that will shape the next generation of web applications. From AI integration to progressive web apps.",
      category: "Technology",
      readTime: "3 min read",
      date: "Dec 2023"
    },
    {
      title: "Learning Programming in College",
      excerpt: "Reflections on the journey of learning programming languages and software development concepts during my B.Tech program.",
      category: "Education",
      readTime: "2 min read",
      date: "Nov 2023"
    },
    {
      title: "Building My First Full-Stack App",
      excerpt: "A detailed walkthrough of creating my first complete web application, from conception to deployment, including challenges faced.",
      category: "Development",
      readTime: "4 min read",
      date: "Oct 2023"
    },
    {
      title: "Data Visualization with Power BI",
      excerpt: "Insights gained from working with Power BI for data analysis and visualization, and how it enhances decision-making processes.",
      category: "Data Science",
      readTime: "3 min read",
      date: "Sep 2023"
    }
  ];

  const exercises = [
    {
      prompt: "Innovation in everyday life",
      response: "Technology seamlessly integrates into our daily routines, from smart home devices that anticipate our needs to mobile apps that connect us globally. Innovation isn't just about groundbreaking inventions; it's about incremental improvements that enhance human experiences. The challenge lies in balancing technological advancement with privacy, sustainability, and human connection in our increasingly digital world."
    },
    {
      prompt: "The power of collaboration",
      response: "Great achievements rarely happen in isolation. Collaboration brings together diverse perspectives, skills, and experiences to solve complex problems. In software development, open-source projects demonstrate how global cooperation can create tools that benefit millions. Effective collaboration requires communication, trust, and the willingness to both lead and follow when appropriate."
    },
    {
      prompt: "Learning from failure",
      response: "Failure is often our greatest teacher, providing insights that success cannot offer. In programming, debugging teaches patience and systematic thinking. Each error message is a learning opportunity, each failed project a stepping stone to better solutions. The key is maintaining curiosity and resilience, viewing setbacks as data points rather than defeats in our journey of continuous improvement."
    }
  ];

  return (
    <section id="writing" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Creative <span className="text-orange-primary">Writing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Exploring ideas through writing - from technical insights to creative expression
          </p>
        </div>

        {/* Blog Posts */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-semibold text-foreground">Recent Blog Posts</h3>
            <Button variant="outline" className="hover:border-orange-primary hover:text-orange-primary transition-all duration-300">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {writingPieces.map((post, index) => (
              <Card key={index} className="bg-card border-border hover:border-orange-primary/50 transition-all duration-300 group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-orange-primary font-medium uppercase tracking-wide">
                      {post.category}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg text-foreground group-hover:text-orange-primary transition-colors duration-300">
                    {post.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                  <Button variant="ghost" size="sm" className="mt-4 p-0 h-auto text-orange-primary hover:text-orange-primary/80">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Writing Exercises */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              100-Word Writing Exercises
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Regular practice with constrained writing to explore ideas and improve expression
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {exercises.map((exercise, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-soft transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-orange-primary/10 rounded-full flex items-center justify-center">
                      <PenTool className="h-4 w-4 text-orange-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">Exercise #{index + 1}</span>
                  </div>
                  <CardTitle className="text-lg text-foreground capitalize">
                    "{exercise.prompt}"
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exercise.response}
                  </p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <BookOpen className="h-3 w-3 mr-1" />
                      ~100 words
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Writing Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-orange-primary">15+</div>
              <div className="text-sm text-muted-foreground">Blog Posts</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-orange-primary">50+</div>
              <div className="text-sm text-muted-foreground">Writing Exercises</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-orange-primary">5K+</div>
              <div className="text-sm text-muted-foreground">Words Written</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-orange-primary">3</div>
              <div className="text-sm text-muted-foreground">Topics Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Writing;