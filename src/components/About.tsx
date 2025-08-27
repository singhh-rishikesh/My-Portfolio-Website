import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            About Me
          </h2>
          
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="space-y-6 text-card-foreground">
                <p className="text-lg leading-relaxed">
                  I'm a passionate B.Tech final-year student with a strong foundation in software development 
                  and a keen interest in modern web technologies. My journey in programming started with a 
                  curiosity about how digital solutions can solve real-world problems.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Throughout my academic journey, I've developed expertise in multiple programming languages 
                  including Python, Java, and JavaScript. I'm particularly drawn to full-stack development 
                  and enjoy creating seamless user experiences backed by robust backend systems.
                </p>
                
                <p className="text-lg leading-relaxed">
                  I believe in continuous learning and staying updated with the latest industry trends. 
                  My goal is to contribute to innovative projects that make a positive impact while growing 
                  professionally in a collaborative environment.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">What I Bring</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Strong problem-solving skills</li>
                      <li>• Team collaboration experience</li>
                      <li>• Adaptability to new technologies</li>
                      <li>• Attention to detail</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">Interests</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Web Development</li>
                      <li>• Data Analysis</li>
                      <li>• Open Source Contribution</li>
                      <li>• Creative Writing</li>
                    </ul>
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

export default About;