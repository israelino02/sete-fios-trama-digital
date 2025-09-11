import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Clock, Award, MessageCircle } from "lucide-react";

const Sobre = () => {
  const whatsappNumber = "5511999999999";
  const message = "Olá! Gostaria de conhecer mais sobre a 7 Fios.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const valores = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Paixão pela Costura",
      description: "Compartilhamos o amor pela arte de costurar e criamos produtos que inspiram"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Qualidade Garantida",
      description: "Selecionamos cuidadosamente cada produto para oferecer sempre o melhor"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Atendimento Humano",
      description: "Nossa equipe está sempre pronta para ajudar com carinho e dedicação"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Tradição e Inovação",
      description: "Unimos a experiência tradicional com as tendências mais modernas"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Nossa História */}
      <section className="mb-16">
        <Card className="p-8 shadow-soft">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-center">
            Nossa História
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
            A Sete Fios nasceu do improviso e da fé. No começo, era apenas um computador, um birô e uma mala que servia de mostruário. Entre idas e vindas em uma pequena moto, com coragem e determinação, os primeiros clientes surgiram — alguns até brincavam com a cena. O que parecia simples se transformou em uma jornada de superação, onde cada desafio fortaleceu nossa missão: entregar qualidade, custo-benefício e confiança. Hoje, com estrutura consolidada, olhamos para trás com gratidão e seguimos em frente com os mesmos sonhos que nos impulsionaram desde o início.
          </p>
        </Card>
      </section>

      {/* Como Tudo Começou */}
      <section className="mb-16">
        <Card className="p-8 shadow-soft">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-center">
            Como Tudo Começou
          </h2>
          <div className="space-y-4 text-muted-foreground max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed">
              Desde os primeiros passos, nossa trajetória foi marcada por aprendizados e superações. Durante a pandemia, enfrentamos momentos de incerteza, mas também descobrimos a força da nossa equipe e a importância dos clientes que caminham conosco desde o início.
            </p>
            <p className="text-lg leading-relaxed">
              Foi nesse período que percebemos que a Sete Fios já não era apenas um projeto — era uma empresa sólida, sustentada pela união das pessoas que acreditam no mesmo propósito. Muitos clientes se tornaram verdadeiros amigos, ajudando a moldar nossos produtos e inspirando cada inovação.
            </p>
            <p className="text-lg leading-relaxed">
              Nossa caminhada é guiada pela fé, pela dedicação e pela confiança de que, juntos, podemos sempre alcançar novos patamares.
            </p>
          </div>
        </Card>
      </section>

      {/* Nossa Missão - Destaque especial */}
      <section className="mb-20">
        <div className="bg-gradient-primary/10 border border-primary/20 rounded-lg p-8 lg:p-12 shadow-warm">
          <div className="text-center">
            <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🎯</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Nossa Missão
            </h2>
            <div className="bg-background/80 rounded-lg p-6 max-w-3xl mx-auto">
              <p className="text-lg text-foreground font-medium leading-relaxed italic">
                "Na Sete Fios Têxtil, nossa missão é simples e clara: oferecer tecidos e aviamentos que unem durabilidade, inovação e preço justo. Trabalhamos com excelência e eficiência para entregar muito mais do que produtos — entregamos soluções inteligentes que acompanham as necessidades e tendências do mercado têxtil."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Nossos Valores
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Os princípios que guiam nosso trabalho e relacionamento com nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valores.map((valor, index) => (
            <Card key={index} className="text-center p-6 shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                  {valor.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {valor.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {valor.description}
                </p>
              </CardContent>
            </Card>
          ))}
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
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-primary-foreground">👩‍💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Maria Silva</h3>
              <p className="text-primary font-medium mb-2">Fundadora</p>
              <p className="text-sm text-muted-foreground">
                Costureira há mais de 25 anos, especialista em tecidos finos e aviamentos especiais.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-soft hover:shadow-warm transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-primary-foreground">👨‍💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">João Santos</h3>
              <p className="text-primary font-medium mb-2">Consultor Técnico</p>
              <p className="text-sm text-muted-foreground">
                Especialista em tecidos técnicos e industriais, sempre pronto para ajudar com projetos complexos.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-soft hover:shadow-warm transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-primary-foreground">👩‍🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Ana Costa</h3>
              <p className="text-primary font-medium mb-2">Consultora de Estilo</p>
              <p className="text-sm text-muted-foreground">
                Designer de moda com experiência em tendências e combinações de tecidos e cores.
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