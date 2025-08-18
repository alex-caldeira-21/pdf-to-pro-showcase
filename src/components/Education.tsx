import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";

const educationData = [
  {
    id: 1,
    type: "higher",
    title: "Tecnólogo em Gestão da Tecnologia da Informação",
    institution: "FATEC Jaú",
    period: "5º semestre",
    status: "Cursando",
    description: "Formação focada em gestão de projetos de TI, infraestrutura, desenvolvimento de sistemas e liderança tecnológica.",
    current: true
  },
  {
    id: 2,
    type: "secondary",
    title: "Ensino Médio Completo",
    institution: "E.E. Caetano Lourenço de Camargo",
    period: "2007 - 2009",
    status: "Concluído",
    description: "Formação básica completa com foco em preparação para ensino superior.",
    current: false
  },
  {
    id: 3,
    type: "elementary",
    title: "Ensino Fundamental Completo",
    institution: "Centro Educacional SESI 026",
    period: "1999 - 2006",
    status: "Concluído",
    description: "Educação fundamental em instituição reconhecida pela qualidade de ensino.",
    current: false
  }
];

const certifications = [
  {
    name: "Certificação Cisco - Fundamentos de Redes",
    issuer: "Cisco Systems",
    category: "Redes"
  },
  {
    name: "Certificação Cisco - Defesa de Redes",
    issuer: "Cisco Systems", 
    category: "Segurança"
  },
  {
    name: "Informática Avançada & Hardware",
    issuer: "Instituição Técnica",
    category: "Hardware"
  },
  {
    name: "Pacote Office Completo",
    issuer: "Microsoft",
    category: "Produtividade"
  },
  {
    name: "Adobe Photoshop",
    issuer: "Adobe",
    category: "Design"
  },
  {
    name: "Adobe Premiere",
    issuer: "Adobe", 
    category: "Vídeo"
  },
  {
    name: "Adobe After Effects",
    issuer: "Adobe",
    category: "Animação"
  }
];

const Education = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Formação Acadêmica</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Base sólida de conhecimento através de formação acadêmica consistente e certificações especializadas
          </p>
        </div>

        {/* Academic Formation */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-8 flex items-center">
            <GraduationCap className="w-6 h-6 mr-3" />
            Formação Acadêmica
          </h3>
          <div className="space-y-6">
            {educationData.map((edu) => (
              <Card key={edu.id} className={`shadow-md hover:shadow-lg transition-shadow bg-card border-border ${edu.current ? 'ring-2 ring-primary' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg text-primary mb-2">{edu.title}</CardTitle>
                      <div className="space-y-1">
                        <div className="flex items-center text-muted-foreground">
                          <BookOpen className="w-4 h-4 mr-2" />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={edu.current ? 'bg-primary/20 text-primary border-primary/30' : 'bg-primary/20 text-primary border-primary/30'}>
                        {edu.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-8 flex items-center">
            <Award className="w-6 h-6 mr-3" />
            Certificações & Cursos Técnicos
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow bg-card border-border">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-tech-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-primary mb-2">{cert.name}</h4>
                    <p className="text-muted-foreground text-sm mb-3">{cert.issuer}</p>
                    <Badge variant="secondary" className="text-xs bg-primary/20 text-primary">
                      {cert.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16">
          <Card className="shadow-lg bg-gradient-to-r from-primary to-tech-green-light text-primary-foreground">
            <CardContent className="pt-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Resumo de Qualificações</h3>
                <p className="text-primary-foreground/90 text-lg max-w-3xl mx-auto">
                  Combinação única de formação acadêmica em gestão de TI com certificações técnicas especializadas, 
                  proporcionando uma visão abrangente desde a estratégia até a implementação técnica de soluções de tecnologia.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;