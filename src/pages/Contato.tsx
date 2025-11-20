import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import StoreLocationMap from "@/components/StoreLocationMap";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Contato = () => {
  const contactInfo = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      content: "(81) 99461-6071",
      description: "Nossa principal forma de atendimento",
      action: { label: "Fale Conosco", url: "whatsapp" }
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-mail",
      content: "Comercial@setefios.com.br",
      description: "Para parcerias e orçamentos",
      action: { label: "Enviar E-mail", url: "mailto:Comercial@setefios.com.br" }
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Endereço",
      content: "Av. Pref. Braz de Líra, 760 - Novo",
      description: "Santa Cruz do Capibaribe - PE, 55192-460",
      action: { label: "Ver no Mapa", url: "https://maps.google.com/?q=Av.+Pref.+Braz+de+Líra,+760+-+Novo,+Santa+Cruz+do+Capibaribe+-+PE,+55192-460" }
    }
  ];

  const horarios = [
    { dia: "Segunda-Feira", horario: "08:00 - 18:00" },
    { dia: "Terça-Feira", horario: "08:00 - 18:00" },
    { dia: "Quarta-Feira", horario: "08:00 - 18:00" },
    { dia: "Quinta-Feira", horario: "08:00 - 18:00" },
    { dia: "Sexta-Feira", horario: "08:00 - 18:00" },
    { dia: "Sábado", horario: "Fechado" },
    { dia: "Domingo", horario: "Fechado" }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          Entre em Contato
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Estamos aqui para ajudar você a encontrar exatamente o que precisa para seus projetos. 
          Entre em contato conosco!
        </p>
      </div>

      {/* WhatsApp Highlight */}
      <div className="bg-gradient-primary rounded-lg p-8 mb-12 text-center text-primary-foreground shadow-warm">
        <MessageCircle className="w-16 h-16 mx-auto mb-4" />
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
          Atendimento pelo WhatsApp
        </h2>
        <p className="mb-6 text-primary-foreground/90">
          Nossa forma mais rápida e prática de atendimento. Tire suas dúvidas, 
          consulte produtos e receba orientações personalizadas.
        </p>
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="hover:scale-105 transition-all duration-300 text-lg px-8 py-4 h-auto"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5 mr-2" />
            Conversar Agora
          </a>
        </Button>
      </div>

      {/* Contact Information */}
      <section className="mb-16">
        <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
          Formas de Contato
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => (
            <Card key={index} className="shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                  {info.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {info.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-medium text-foreground mb-2">{info.content}</p>
                <p className="text-sm text-muted-foreground mb-4">{info.description}</p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <a href={info.action.url} target="_blank" rel="noopener noreferrer">
                    {info.action.label}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Store Information Section */}
      <section className="mb-16">
        <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
          Nossas Informações
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-soft h-[500px] lg:h-full lg:min-h-[700px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.234567890123!2d-36.20123456789012!3d-7.950123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTcnMDAuNCJTIDM2wrAxMicwNC40Ilc!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Sete Fios Têxtil"
            ></iframe>
          </div>

          {/* Information Cards */}
          <div className="space-y-6">
            {/* Address Card */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Endereço</h3>
                    <p className="text-muted-foreground">
                      Av. Pref. Braz de Líra, 760 - Novo, Santa Cruz do Capibaribe - PE, 55192-460
                    </p>
                    <Button
                      asChild
                      size="sm"
                      className="mt-3 bg-gradient-primary hover:bg-gradient-primary/90 hover:scale-105 transition-all duration-300 shadow-warm"
                    >
                      <a 
                        href="https://maps.google.com/?q=Av.+Pref.+Braz+de+Líra,+760+-+Novo,+Santa+Cruz+do+Capibaribe+-+PE,+55192-460" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        Gerar Rota
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Telefone</h3>
                    <p className="text-muted-foreground">(81) 99461-6071</p>
                    <Button
                      asChild
                      size="sm"
                      className="mt-3 bg-gradient-primary hover:bg-gradient-primary/90 hover:scale-105 transition-all duration-300 shadow-warm"
                      onClick={(e) => {
                        e.preventDefault();
                        navigator.clipboard.writeText("81994616071");
                      }}
                    >
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Falar no WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours Card */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-4 text-foreground">Horário</h3>
                    <div className="space-y-2">
                      {horarios.map((item, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-muted-foreground">{item.dia}</span>
                          <span className="text-foreground font-medium">{item.horario}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Instagram Card */}
            <Card className="shadow-soft bg-gradient-primary text-primary-foreground">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-primary-foreground">Siga-nos no Instagram</h3>
                    <p className="text-primary-foreground/90 mb-4 text-sm">
                      Acompanhe nossas novidades, lançamentos e inspirações para seus projetos.
                    </p>
                    <Button
                      asChild
                      variant="secondary"
                      size="sm"
                      className="hover:scale-105 transition-transform duration-300 text-sm px-4"
                    >
                      <a 
                        href="https://www.instagram.com/7fiostextil/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Instagram className="w-3 h-3 mr-1.5" />
                        @7fiostextil
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
          Perguntas Frequentes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3 text-foreground">
                Vocês fazem entrega?
              </h3>
              <p className="text-muted-foreground">
                Sim! Fazemos entregas na região metropolitana de São Paulo. 
                Entre em contato pelo WhatsApp para consultar prazo e valores.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3 text-foreground">
                Vendem no atacado?
              </h3>
              <p className="text-muted-foreground">
                Sim, trabalhamos tanto no varejo quanto no atacado. 
                Temos preços especiais para grandes quantidades.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3 text-foreground">
                Posso ver os tecidos antes de comprar?
              </h3>
              <p className="text-muted-foreground">
                Claro! Visite nossa loja física ou solicite amostras 
                pelo WhatsApp para conhecer a qualidade dos produtos.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3 text-foreground">
                Dão consultoria para projetos?
              </h3>
              <p className="text-muted-foreground">
                Sim! Nossa equipe tem experiência e pode ajudar 
                na escolha dos melhores materiais para seu projeto.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-16 bg-muted rounded-lg">
        <h2 className="font-display text-3xl font-bold text-foreground mb-6">
          Pronto para Começar seu Projeto?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Nossa equipe está pronta para ajudar você a encontrar exatamente o que precisa. 
          Entre em contato e vamos criar algo incrível juntos!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-warm text-lg px-8 py-4 h-auto"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </a>
          </Button>
          
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-lg px-8 py-4 h-auto hover:bg-primary hover:text-primary-foreground"
          >
            <a href="tel:+551133334444">
              <Phone className="w-5 h-5 mr-2" />
              Ligar
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contato;