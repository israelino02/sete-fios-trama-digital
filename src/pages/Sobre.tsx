import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Sobre = () => {
  const whatsappNumber = "5511999999999";
  const message = "Olá! Gostaria de conhecer mais sobre a 7 Fios.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
          Nossa História
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          A Sete Fios nasceu da fé e da determinação. Com apenas um computador, um birô e uma mala de mostruário, 
          os primeiros clientes surgiram entre idas e vindas em uma moto. O que parecia simples se tornou uma 
          história de superação, gratidão e confiança no futuro.
        </p>
      </section>

      {/* Story Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">
            Como Tudo Começou
          </h2>
          <div className="text-muted-foreground">
            <p>
              Desde os primeiros passos, nossa jornada foi marcada por aprendizados e superações. 
              Durante a pandemia, vivemos momentos desafiadores, mas descobrimos a força da equipe 
              e a fidelidade dos clientes que estiveram conosco desde o início. Nesse período, 
              entendemos que a Sete Fios já não era apenas um projeto, mas uma empresa sólida, 
              construída sobre união, fé e dedicação. Muitos clientes deixaram de ser apenas 
              compradores e se tornaram amigos, inspirando inovações e ajudando a moldar novos 
              produtos. Hoje, seguimos confiantes de que, juntos, podemos alcançar ainda mais patamares.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-warm rounded-lg p-8 lg:p-12 shadow-warm">
          <div className="text-center">
            <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🧵</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Nossa Missão
            </h3>
            <p className="text-muted-foreground">
              Na Sete Fios Têxtil, oferecemos tecidos que unem durabilidade, inovação e preço justo. 
              Mais que um produto, entregamos soluções inteligentes ao mercado.
            </p>
          </div>
        </div>
      </section>


      {/* Team Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Nossa Equipe
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Profissionais dedicados que compartilham a paixão pela costura e pelo atendimento de excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center shadow-soft hover:shadow-warm transition-all duration-300">
            <CardContent className="p-6">
              <div className="mx-auto mb-4">
                <img 
                  src="/lovable-uploads/raianne-comercial.png" 
                  alt="Raianne Oliveira - Departamento Comercial"
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Raianne Oliveira</h3>
              <p className="text-primary font-medium mb-2">Dep. Comercial</p>
              <p className="text-sm text-muted-foreground">
                Especialista em atendimento e relacionamento com clientes, sempre pronta para ajudar.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-soft hover:shadow-warm transition-all duration-300">
            <CardContent className="p-6">
              <div className="mx-auto mb-4">
                <img 
                  src="/lovable-uploads/manasses-ferreira.png" 
                  alt="Manassés Ferreira - Departamento Comercial"
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Manassés Ferreira</h3>
              <p className="text-primary font-medium mb-2">Dep. Comercial</p>
              <p className="text-sm text-muted-foreground">
                Especialista em atendimento e soluções comerciais para projetos técnicos e industriais.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-soft hover:shadow-warm transition-all duration-300">
            <CardContent className="p-6">
              <div className="mx-auto mb-4">
                <img 
                  src="/lovable-uploads/hellen-aragao.png" 
                  alt="Hellen Aragão - Departamento Financeiro"
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Hellen Aragão</h3>
              <p className="text-primary font-medium mb-2">Dep. Financeiro</p>
              <p className="text-sm text-muted-foreground">
                Responsável pela gestão financeira e administrativa, garantindo eficiência e organização.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-muted rounded-lg">
        <h2 className="font-display text-3xl font-bold text-foreground mb-6">
          Faça Parte da Nossa História
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Queremos conhecer você e ajudar a realizar seus projetos. Entre em contato conosco 
          e descubra como podemos contribuir para suas criações.
        </p>
        
        <Button
          asChild
          size="lg"
          className="bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-warm text-lg px-8 py-4 h-auto"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5 mr-2" />
            Conversar Conosco
          </a>
        </Button>
      </section>
    </div>
  );
};

export default Sobre;