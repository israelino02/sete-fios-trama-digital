import { Award, Heart, Clock, Users, ShieldCheck, Lightbulb, Target, Rocket, MessageCircle } from "lucide-react";
import { resolveUpload } from "@/lib/uploadAssets";

const WHATSAPP_URL = "https://wa.me/5581994616071";

const valores = [
  { icon: Award, title: "Qualidade", description: "Produtos que atendem aos mais altos padrões de durabilidade e conforto." },
  { icon: Heart, title: "Custo-benefício", description: "Excelência e preço justo, agregando valor ao seu investimento." },
  { icon: Lightbulb, title: "Inteligência", description: "Conhecimento e tecnologia aplicados para inovar em cada processo." },
  { icon: Clock, title: "Agilidade", description: "Rapidez e eficiência para responder às demandas do mercado." },
  { icon: Users, title: "Parceria e Confiança", description: "Relações duradouras, lado a lado com nossos clientes." },
  { icon: ShieldCheck, title: "Ética e Transparência", description: "Conduta íntegra e responsável em todas as negociações." },
];

const equipe = [
  { nome: "Raianne Oliveira", cargo: "Dep. Comercial", img: "/lovable-uploads/raianne-comercial.png" },
  { nome: "Manassés Ferreira", cargo: "Dep. Comercial", img: "/lovable-uploads/manasses-ferreira.png" },
  { nome: "Hellen Aragão", cargo: "Dep. Financeiro", img: "/lovable-uploads/hellen-aragao.png" },
];

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block text-[11px] font-bold tracking-[0.18em] text-accent uppercase mb-2">
    {children}
  </span>
);

const Sobre = () => {
  return (
    <div className="bg-background">
      <style>{`
        .sb-team { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; padding: 0 16px 4px; }
        .sb-team::-webkit-scrollbar { display: none; }
        .sb-team-card { width: 100%; }

        @media (min-width: 768px) {
          .sb-team { gap: 16px; padding: 0 40px; }
        }

      `}</style>

      {/* 1. HERO */}
      <section className="bg-primary text-primary-foreground px-4 py-10 md:px-10 md:py-14 text-center">
        <span className="inline-block text-[11px] font-bold tracking-[0.18em] text-accent uppercase mb-2">
          Quem somos
        </span>
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">Nossa História</h1>
        <p className="text-primary-foreground/85 text-sm md:text-base max-w-2xl mx-auto">
          Conheça a trajetória da Sete Fios Têxtil no Polo de Confecções de PE
        </p>
      </section>

      {/* 2. TEXTO DA HISTÓRIA */}
      <section className="bg-card px-4 py-6 md:px-10 md:py-12">
        <div className="md:max-w-[700px] md:mx-auto">
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
            Uma história de dedicação
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            A Sete Fios nasceu da fé e da determinação. Com apenas um computador, um birô e uma mala de
            mostruário, os primeiros clientes surgiram entre idas e vindas em uma moto. O que parecia simples
            se tornou uma história de superação, gratidão e confiança no futuro. Durante a pandemia, vivemos
            momentos desafiadores, mas descobrimos a força da equipe e a fidelidade dos clientes que estiveram
            conosco desde o início. Hoje, muitos clientes deixaram de ser apenas compradores e se tornaram
            amigos, inspirando inovações e ajudando a moldar novos produtos.
          </p>
        </div>
      </section>

      {/* 3. MISSÃO E VISÃO */}
      <section className="bg-muted px-4 py-8 md:px-10 md:py-12">
        <div className="grid grid-cols-2 gap-3 md:gap-6 max-w-5xl mx-auto">
          {[
            {
              Icon: Target,
              title: "Nossa Missão",
              text: "Fornecer produtos têxteis e aviamentos de alta qualidade com excelente custo-benefício, atendendo o mercado de moda íntima com agilidade e inovação.",
            },
            {
              Icon: Rocket,
              title: "Nossa Visão",
              text: "Ser referência nacional em distribuição de tecidos e aviamentos para o mercado de moda íntima, com parcerias estratégicas e crescimento sustentável.",
            },
          ].map(({ Icon, title, text }) => (
            <div key={title} className="bg-card rounded-xl p-4 md:p-10 border border-border">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg bg-primary flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 md:w-7 md:h-7 text-accent" />
              </div>
              <h3 className="font-display text-base md:text-xl font-bold text-foreground mb-2">{title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. VALORES */}
      <section className="bg-card px-4 py-8 md:px-10 md:py-12">
        <div className="text-center mb-6">
          <Tag>Princípios</Tag>
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">Nossos Valores</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
          {valores.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-muted rounded-xl p-4 text-center border border-border">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mx-auto mb-3">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-foreground mb-1">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. EQUIPE */}
      <section className="bg-muted py-8 md:py-12">
        <div className="text-center mb-6 px-4">
          <Tag>Time</Tag>
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">Nossa Equipe</h2>
        </div>
        <div className="sb-team">
          {equipe.map((m) => (
            <div key={m.nome} className="sb-team-card bg-card rounded-xl p-2 md:p-4 text-center border border-border">
              <img
                src={resolveUpload(m.img)}
                alt={`${m.nome} — ${m.cargo}`}
                loading="lazy"
                className="w-16 h-16 md:w-28 md:h-28 rounded-full object-cover mx-auto mb-2 md:mb-3 bg-primary"
              />
              <h3 className="text-[11px] leading-tight md:text-base font-semibold text-foreground">{m.nome}</h3>
              <p className="text-[10px] md:text-sm text-muted-foreground">{m.cargo}</p>

            </div>
          ))}
        </div>
      </section>

      {/* 6. CTA FINAL */}
      <section className="bg-accent px-4 py-10 md:px-10 md:py-14 text-center">
        <h2 className="font-display text-xl md:text-3xl font-bold text-accent-foreground mb-2">
          Faça parte da nossa história
        </h2>
        <p className="text-sm md:text-base text-accent-foreground/80 mb-6 max-w-xl mx-auto">
          Queremos conhecer você e ajudar a realizar seus projetos.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex md:inline-flex items-center justify-center gap-2 w-full md:w-auto md:px-10 h-12 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
        >
          <MessageCircle className="w-5 h-5" />
          Conversar Conosco
        </a>
      </section>
    </div>
  );
};

export default Sobre;
