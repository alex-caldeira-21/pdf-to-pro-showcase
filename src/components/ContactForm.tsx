import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, User, MessageSquare } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Enviar dados para o webhook
      const response = await fetch('https://tecnia-n8n.thegkr.easypanel.host/webhook/resposta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          timestamp: new Date().toISOString(),
          source: 'portfolio_contact_form'
        }),
      });

      if (response.ok) {
        alert('Mensagem enviada com sucesso! Retornarei o contato em breve.');
        
        // Reset do formulário
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      } else {
        throw new Error('Erro no envio');
      }
    } catch (error) {
      console.error('Erro ao enviar:', error);
      alert('Houve um problema ao enviar sua mensagem. Tente novamente ou entre em contato diretamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Função para abrir WhatsApp
  const handleWhatsAppContact = (): void => {
    const phoneNumber = "5514996831894";
    const message = "Olá! Vim através do seu portfólio e gostaria de conversar sobre oportunidades.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
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
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  onClick={handleWhatsAppContact}
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Conversar no WhatsApp
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
