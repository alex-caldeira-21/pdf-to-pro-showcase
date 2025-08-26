import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
  "id": 1,
  "title": "Técnico de Infraestrutura",
  "company": "Vero SA",
  "period": "2025 - Atualmente",
  "location": "Jaú/SP",
  "current": true,
  "responsibilities": [
    "Instalação e manutenção de infraestrutura de fibra óptica",
    "Manutenção e instalação de equipamentos de rede, como switches e roteadores",
    "Manutenção preventiva e corretiva de sistemas de ar condicionado em Pontos de Presença (POPs)",
    "Operação e manutenção de geradores de energia a combustão para garantir a continuidade dos serviços em caso de falha elétrica",
    "Monitoramento e diagnóstico da infraestrutura de rede para assegurar a estabilidade dos serviços"
  ],
  "skills": ["Fibra Óptica", "Manutenção de Redes", "Infraestrutura de POPs", "Manutenção de Ar Condicionado", "Geradores de Energia", "Equipamentos de Rede"]
},
  {
    id: 2,
    title: "Técnico FTTX",
    company: "Tel Telecomunicações (Vivo Fibra)",
    period: "2023 - 2025",
    location: "Jaú/SP",
    current: false,
    responsibilities: [
      "Instalação e manutenção de redes ópticas (FTTH/FTTX)",
      "Suporte técnico a clientes residenciais e empresariais", 
      "Diagnóstico de falhas de conectividade e roteadores",
      "Atendimento especializado em fibra óptica"
    ],
    skills: ["Fibra Óptica", "FTTH", "FTTX", "Suporte Técnico", "Redes Ópticas"]
  },
  {
    id: 3,
    title: "Técnico em Informática",
    company: "Central Informática",
    period: "2019 - 2023",
    location: "Jaú/SP",
    current: false,
    responsibilities: [
      "Manutenção preventiva e corretiva de computadores",
      "Instalação de sistemas operacionais e softwares",
      "Atendimento ao cliente e suporte técnico remoto/presencial",
      "Diagnóstico e resolução de problemas de hardware e software"
    ],
    skills: ["Manutenção PC", "Sistemas Operacionais", "Suporte Remoto", "Hardware"]
  },
  {
    id: 4,
    title: "Estagiário de TI",
    company: "Fundação Amaral Carvalho",
    period: "2018 - 2019",
    location: "Jaú/SP",
    current: false,
    responsibilities: [
      "Suporte aos setores de Infraestrutura e T.I",
      "Manutenção de equipamentos e redes internas",
      "Apoio na organização de almoxarifado técnico e cabeamento",
      "Assistência em projetos de infraestrutura"
    ],
    skills: ["Infraestrutura", "Redes Internas", "Cabeamento", "Suporte TI"]
  },
  {
    id: 5,
    title: "Monitor de Informática",
    company: "Programa Acessa Escola",
    period: "2017 - 2018",
    location: "Jaú/SP",
    current: false,
    responsibilities: [
      "Apoio a alunos e professores no uso de computadores",
      "Controle de acessos e atividades no laboratório de informática",
      "Manutenção básica de equipamentos educacionais",
      "Suporte em atividades pedagógicas digitais"
    ],
    skills: ["Educação Digital", "Suporte Educacional", "Laboratório", "Ensino"]
  }
];

const ExperienceTimeline = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Experiência Profissional</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trajetória profissional sólida com crescimento consistente na área de tecnologia da informação
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary to-tech-green-light"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className={`shadow-lg hover:shadow-xl transition-all duration-300 bg-card border-border ${exp.current ? 'ring-2 ring-primary' : ''}`}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl text-primary mb-2">{exp.title}</CardTitle>
                          <div className="space-y-1">
                            <div className="flex items-center text-muted-foreground">
                              <Building2 className="w-4 h-4 mr-2" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <MapPin className="w-4 h-4 mr-2" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <Calendar className="w-4 h-4 mr-2" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>
                        {exp.current && (
                          <Badge className="bg-primary/20 text-primary border-primary/30">Atual</Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-primary mb-3">Principais Responsabilidades:</h4>
                          <ul className="space-y-1 text-muted-foreground">
                            {exp.responsibilities.map((resp, idx) => (
                              <li key={idx} className="text-sm">• {resp}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Competências:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs bg-primary/20 text-primary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    exp.current 
                      ? 'bg-primary ring-4 ring-primary/30' 
                      : 'bg-tech-green'
                  }`}>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
