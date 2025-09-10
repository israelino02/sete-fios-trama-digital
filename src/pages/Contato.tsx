import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Phone, Mail, Clock } from "lucide-react";

const Contato = () => {
  const whatsappNumber = "5581994616071";
  const message = "Olá! Gostaria de entrar em contato com a Sete Fios Têxtil.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const contactInfo = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      content: "(81) 99461-6071",
      description: "Nossa principal forma de atendimento",
      action: { label: "Fale Conosco", url: whatsappUrl }
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-mail",
      content: "7fiosloja@gmail.com",
      description: "Para parcerias e orçamentos",
      action: { label: "Enviar E-mail", url: "mailto:7fiosloja@gmail.com" }
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Endereço",
      content: "Av. Pref. Braz de Líra",
      description: "Santa Cruz do Capibaribe, PE - CEP: 55192-512",
      action: { label: "Ver no Mapa", url: "https://maps.google.com/?q=Av.+Pref.+Braz+de+Líra+Santa+Cruz+do+Capibaribe+PE" }
    }
  ];

  const horarios = [
    { dia: "Segunda a Sexta", horario: "8h às 18h" }
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

      {/* Business Hours */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6 flex items-center">
              <Clock className="w-8 h-8 mr-3 text-primary" />
              Horário de Funcionamento
            </h2>
            <p className="text-muted-foreground mb-6">
              Nossa loja física está aberta nos seguintes horários. Para atendimento pelo WhatsApp, 
              estamos disponíveis durante o horário comercial.
            </p>
            
            <div className="space-y-3">
              {horarios.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <span className="font-medium text-foreground">{item.dia}</span>
                  <span className="text-muted-foreground">{item.horario}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground text-center">
                Visite Nossa Loja
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-video bg-gradient-warm rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground">Localização da Loja</p>
                </div>
              </div>
              <div className="text-center space-y-2">
                <p className="font-medium text-foreground">Av. Pref. Braz de Líra</p>
                <p className="text-muted-foreground">Santa Cruz do Capibaribe, PE</p>
                <p className="text-muted-foreground">CEP: 55192-512</p>
              </div>
              <Button
                asChild
                className="w-full hover:scale-105 transition-all duration-300"
                variant="outline"
              >
                <a 
                  href="https://maps.google.com/?q=Av.+Pref.+Braz+de+Líra+Santa+Cruz+do+Capibaribe+PE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Como Chegar
                </a>
              </Button>
            </CardContent>
          </Card>
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