import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Network, Database, Monitor, Palette, Settings } from "lucide-react";
import { useState } from "react";

const skillCategories = [
  {
    id: "networks",
    name: "Redes & Infraestrutura",
    icon: Network,
    color: "text-blue-600",
    skills: [
      { name: "Redes FTTH/FTTX", level: 95, description: "Instalação e manutenção de fibra óptica" },
      { name: "Configuração Roteadores", level: 90, description: "Configuração e diagnóstico de equipamentos" },
      { name: "Redes LAN/WAN", level: 85, description: "Planejamento e implementação de redes" },
      { name: "Cabeamento Estruturado", level: 80, description: "Organização e instalação de infraestrutura" }
    ]
  },
  {
    id: "programming",
    name: "Programação",
    icon: Code,
    color: "text-green-600",
    skills: [
      { name: "JavaScript", level: 75, description: "Desenvolvimento web e automação" },
      { name: "PHP", level: 70, description: "Desenvolvimento backend e sistemas web" },
      { name: "C++", level: 65, description: "Programação estruturada e orientada a objetos" },
      { name: "SQL", level: 80, description: "Consultas e modelagem de banco de dados" }
    ]
  },
  {
    id: "systems",
    name: "Sistemas & Hardware",
    icon: Monitor,
    color: "text-purple-600",
    skills: [
      { name: "Manutenção de PC", level: 95, description: "Diagnóstico e reparo de hardware" },
      { name: "Sistemas Operacionais", level: 90, description: "Instalação e configuração Windows/Linux" },
      { name: "Suporte Técnico", level: 95, description: "Atendimento e resolução de problemas" },
      { name: "Infraestrutura de TI", level: 85, description: "Montagem e manutenção de servidores" }
    ]
  },
  {
    id: "database",
    name: "Banco de Dados",
    icon: Database,
    color: "text-orange-600",
    skills: [
      { name: "SQL Server", level: 75, description: "Administração e consultas" },
      { name: "MySQL", level: 80, description: "Desenvolvimento e otimização" },
      { name: "Modelagem de Dados", level: 70, description: "Design de estruturas de dados" },
      { name: "Backup & Recovery", level: 75, description: "Estratégias de backup e recuperação" }
    ]
  },
  {
    id: "design",
    name: "Design & Multimídia",
    icon: Palette,
    color: "text-pink-600",
    skills: [
      { name: "Adobe Photoshop", level: 80, description: "Edição e tratamento de imagens" },
      { name: "Adobe Premiere", level: 75, description: "Edição de vídeo profissional" },
      { name: "Adobe After Effects", level: 70, description: "Animação e efeitos visuais" },
      { name: "Design Gráfico", level: 75, description: "Criação de materiais visuais" }
    ]
  },
  {
    id: "tools",
    name: "Ferramentas & Produtividade",
    icon: Settings,
    color: "text-gray-600",
    skills: [
      { name: "Pacote Office", level: 90, description: "Word, Excel, PowerPoint avançado" },
      { name: "Gestão de Projetos", level: 75, description: "Planejamento e controle de projetos" },
      { name: "Suporte Remoto", level: 95, description: "Ferramentas de acesso remoto" },
      { name: "Documentação Técnica", level: 85, description: "Elaboração de manuais e relatórios" }
    ]
  }
];

const SkillsChart = () => {
  const [selectedCategory, setSelectedCategory] = useState("networks");
  const activeCategory = skillCategories.find(cat => cat.id === selectedCategory);

  const getSkillColor = (level: number) => {
    if (level >= 90) return "bg-primary";
    if (level >= 80) return "bg-tech-green-light";
    if (level >= 70) return "bg-tech-green-subtle";
    return "bg-muted";
  };

  const getSkillLabel = (level: number) => {
    if (level >= 90) return "Avançado";
    if (level >= 80) return "Proficiente";
    if (level >= 70) return "Intermediário";
    return "Básico";
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Competências & Habilidades</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Domínio técnico abrangente com experiência prática em múltiplas áreas da tecnologia da informação
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Selector */}
          <div className="lg:col-span-1">
            <Card className="shadow-md bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg text-primary">Categorias</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {skillCategories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors flex items-center gap-3 ${
                        selectedCategory === category.id
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted'
                      }`}
                    >
                      <IconComponent className={`w-5 h-5 ${selectedCategory === category.id ? 'text-primary-foreground' : category.color}`} />
                      <span className="font-medium">{category.name}</span>
                    </button>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-3">
            {activeCategory && (
              <Card className="shadow-lg bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-primary to-tech-green-light flex items-center justify-center`}>
                      <activeCategory.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-primary">{activeCategory.name}</CardTitle>
                      <p className="text-muted-foreground">Nível de proficiência nas principais habilidades</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {activeCategory.skills.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-primary">{skill.name}</h4>
                            <p className="text-sm text-muted-foreground">{skill.description}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant="secondary" className="mb-1 bg-primary/20 text-primary">
                              {getSkillLabel(skill.level)}
                            </Badge>
                            <div className="text-sm font-medium text-primary">{skill.level}%</div>
                          </div>
                        </div>
                        <div className="relative">
                          <Progress 
                            value={skill.level} 
                            className="h-3"
                          />
                          <div className={`absolute top-0 left-0 h-3 rounded-full transition-all duration-1000 ease-out ${getSkillColor(skill.level)}`} 
                               style={{ width: `${skill.level}%` }}>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Overall Skills Summary */}
        <div className="mt-16">
          <Card className="shadow-lg bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-primary text-center">Resumo Geral de Competências</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">6+</div>
                  <div className="text-text-secondary">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-text-secondary">Habilidades Técnicas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">7</div>
                  <div className="text-text-secondary">Certificações</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">4</div>
                  <div className="text-text-secondary">Empresas Atendidas</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsChart;