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
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
          Nossa História
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A <strong>Sete Fios</strong> nasceu do improviso e da fé. Com apenas um computador, um birô e uma mala de mostruário, 
          os primeiros clientes surgiram entre idas e vindas em uma moto. O que parecia simples se tornou uma história de 
          superação, gratidão e confiança no futuro.
        </p>
      </section>

      {/* Story Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">
            Como Tudo Começou
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Em 2010, Maria Silva, costureira há mais de 20 anos, decidiu abrir sua própria loja 
              de tecidos no centro de São Paulo. O nome "7 Fios" surgiu da crença de que cada 
              tecido é formado por múltiplos fios que, entrelaçados, criam algo belo e resistente.
            </p>
            <p>
              Com o tempo, a loja cresceu e se tornou referência na região. Hoje, atendemos 
              costureiras profissionais, estilistas iniciantes e amantes do DIY que buscam 
              materiais de qualidade para seus projetos.
            </p>
            <p>
              Nossa missão é simples: fornecer os melhores materiais para que cada cliente 
              possa dar vida às suas criações mais especiais.
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
              "Inspirar e capacitar pessoas a criarem peças únicas através da 
              disponibilização de materiais de qualidade superior e atendimento especializado."
            </p>
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