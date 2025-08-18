import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, User, MessageSquare } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem Enviada!",
        description: "Sua mensagem foi enviada com sucesso. Retornarei o contato em breve.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 2000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-tech-green-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">Entre em Contato</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos interessantes. 
            Vamos conversar sobre como posso contribuir com sua equipe!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Cards */}
            <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-tech-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">Email</h3>
                  <p className="text-muted-foreground">alex-belchior-@hotmail.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-tech-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">Telefone</h3>
                  <p className="text-muted-foreground">(14) 99683-1894</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-tech-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">Localização</h3>
                  <p className="text-muted-foreground">Jaú, São Paulo</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-3">
                  <MessageSquare className="w-6 h-6" />
                  Envie uma Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-primary font-medium">
                        Nome Completo *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Seu nome completo"
                          className="pl-10 bg-background border-border"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-primary font-medium">
                        Email *
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="seu@email.com"
                          className="pl-10 bg-background border-border"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-primary font-medium">
                        Telefone
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(00) 00000-0000"
                          className="pl-10 bg-background border-border"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-primary font-medium">
                        Assunto *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Assunto da mensagem"
                        className="bg-background border-border"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-primary font-medium">
                      Mensagem *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Descreva sua mensagem, proposta ou oportunidade..."
                      className="min-h-[120px] bg-background border-border"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-surface/10 backdrop-blur-sm border-primary/20 shadow-xl">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">Vamos Trabalhar Juntos?</h3>
              <p className="text-primary-foreground/80 text-lg mb-6 max-w-2xl mx-auto">
                Estou disponível para oportunidades em tempo integral, projetos freelancer ou consultorias. 
                Entre em contato para discutirmos como posso agregar valor ao seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-background text-primary hover:bg-background/90">
                  <Phone className="w-5 h-5 mr-2" />
                  Ligar Agora
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Mail className="w-5 h-5 mr-2" />
                  Enviar Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;