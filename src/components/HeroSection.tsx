import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Mail, Phone, Download, ExternalLink } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary via-tech-blue to-tech-blue-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 flex items-center min-h-screen relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Profile Info */}
          <div className="text-white">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                Profissional de TI
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Alex Rodrigues
                <span className="block text-4xl lg:text-5xl text-blue-100">
                  Belchior Caldeira
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Tecnólogo em Gestão de TI • Especialista em Redes e Infraestrutura
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-200" />
                <span className="text-blue-100">Jaú, São Paulo</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-200" />
                <span className="text-blue-100">(14) 99683-1894</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-200" />
                <span className="text-blue-100">alex-belchior-@hotmail.com</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 flex-wrap">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-blue-50 font-semibold"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Entre em Contato
              </Button>
            </div>
          </div>

          {/* Profile Card */}
          <div className="relative">
            <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-2xl">
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-tech-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">AR</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Perfil Profissional</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Idade:</span>
                  <span className="font-semibold">30 anos</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Estado Civil:</span>
                  <span className="font-semibold">Solteiro</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">CNH:</span>
                  <span className="font-semibold">A/D</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Status:</span>
                  <Badge className="bg-green-100 text-green-800">Disponível</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;