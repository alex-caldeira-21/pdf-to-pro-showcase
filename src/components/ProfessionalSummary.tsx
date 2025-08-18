import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, TrendingUp, Award } from "lucide-react";

const ProfessionalSummary = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Resumo Profissional</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Profissional experiente em tecnologia da informação com sólida formação acadêmica e 
            ampla experiência prática em infraestrutura, redes e suporte técnico.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Especializations */}
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-tech-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-primary">Especializações</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="mr-2 mb-2">Redes FTTH/FTTX</Badge>
                <Badge variant="secondary" className="mr-2 mb-2">Infraestrutura de TI</Badge>
                <Badge variant="secondary" className="mr-2 mb-2">Suporte Técnico</Badge>
                <Badge variant="secondary" className="mr-2 mb-2">Certificações Cisco</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-tech-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-primary">Principais Conquistas</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-text-secondary space-y-2">
                <li>• Certificações Cisco em Redes</li>
                <li>• Especialização em Fibra Óptica</li>
                <li>• Formação em Gestão de TI</li>
                <li>• Experiência Multidisciplinar</li>
              </ul>
            </CardContent>
          </Card>

          {/* Career Goals */}
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-tech-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-primary">Objetivos de Carreira</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-text-secondary space-y-2">
                <li>• Liderança em Projetos de TI</li>
                <li>• Gestão de Infraestrutura</li>
                <li>• Desenvolvimento de Soluções</li>
                <li>• Crescimento Profissional</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Summary */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary text-center">Perfil Detalhado</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none text-text-secondary">
              <p className="text-center leading-relaxed">
                Tecnólogo em Gestão da Tecnologia da Informação com sólida experiência em infraestrutura de TI, 
                especializado em instalação e manutenção de redes ópticas FTTH/FTTX. Possui certificações Cisco 
                em fundamentos e defesa de redes, com competências em suporte técnico, manutenção de equipamentos, 
                programação em múltiplas linguagens e design multimídia. Demonstra capacidade de adaptação e 
                crescimento profissional através de experiências diversificadas desde estagiário até técnico 
                especializado, sempre focado em entregar soluções de qualidade e excelência no atendimento ao cliente.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProfessionalSummary;