import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Mail, Phone, Download, ExternalLink } from "lucide-react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative w-full overflow-hidden bg-background flex flex-col items-center justify-center">
      {/* Background Boxes */}
      <div className="absolute inset-0 w-full h-full bg-background z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      
      <div className="container mx-auto px-4 py-16 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Profile Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-foreground"
          >
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4 bg-tech-green/20 text-primary border-primary/30 animate-glow">
                Profissional de TI
              </Badge>
              <h1 className={cn("text-5xl lg:text-6xl font-bold mb-4 leading-tight text-foreground")}>
                Alex Rodrigues
                <span className="block text-4xl lg:text-5xl text-primary">
                  Belchior Caldeira
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Tecnólogo em Gestão de TI • Especialista em Redes e Infraestrutura
              </p>
            </div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-3 mb-8"
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Jaú, São Paulo</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">(14) 99683-1894</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">alex-belchior-@hotmail.com</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-4 flex-wrap"
            >
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a 
                    href="https://drive.google.com/uc?export=download&id=1i1YX6Fk43skS2dSH9gTAGGLubqBMUREW"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                <Download className="w-5 h-5 mr-2" />
                Download CV
                  </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <a
                    href="https://wa.me/5514996831894?text=Ol%C3%A1%20Alex!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar." 
                    target="_blank" 
                    rel="noopener noreferrer"
                        >
                <ExternalLink className="w-5 h-5 mr-2" />
                Entre em Contato
                  </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Card className="p-8 bg-card/95 backdrop-blur-sm shadow-2xl border-border">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg overflow-hidden">
                    <img
                    src="/Profile.jpg" // Coloque sua imagem em public/profile.png
                    alt="Foto de Perfil"
                    className="w-full h-full object-cover"
                  />
              </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Perfil Profissional</h3>              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Idade:</span>
                  <span className="font-semibold text-foreground">30 anos</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Estado Civil:</span>
                  <span className="font-semibold text-foreground">União Estável</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">CNH:</span>
                  <span className="font-semibold text-foreground">A/D</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Status:</span>
                  <Badge className="bg-primary/20 text-primary border-primary/30">Disponível</Badge>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
