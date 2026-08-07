import { MessageCircle, Mail, MapPin, Phone, Clock, Instagram, ChevronDown } from "lucide-react";
import mapaSeteFios from "@/assets/mapa-sete-fios.png";
import { Seo } from "@/components/Seo";


const WHATSAPP_URL = "https://wa.me/5581994616071";
const ADDRESS = "Av. Pref. Braz de Líra, 760 — Novo, Santa Cruz do Capibaribe — PE, 55192-460";
const MAPS_URL =
  "https://maps.google.com/?q=Av.+Pref.+Braz+de+Líra,+760+-+Novo,+Santa+Cruz+do+Capibaribe+-+PE,+55192-460";

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block text-[11px] font-bold tracking-[0.18em] text-accent uppercase mb-2">
    {children}
  </span>
);

const canais = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    info: "(81) 99461-6071",
    label: "Fale Conosco",
    url: WHATSAPP_URL,
    wide: false,
  },
  {
    icon: Mail,
    title: "E-mail",
    info: "Comercial@setefios.com.br",
    label: "Enviar E-mail",
    url: "mailto:Comercial@setefios.com.br",
    wide: false,
  },
  {
    icon: MapPin,
    title: "Endereço",
    info: "Av. Pref. Braz de Líra, 760 — Novo, SCC — PE",
    label: "Ver no Mapa",
    url: MAPS_URL,
    wide: true,
  },
];

const horarios = [
  { dia: "Segunda a Sexta", horario: "08:00 – 18:00", fechado: false },
  { dia: "Sábado", horario: "Fechado", fechado: true },
  { dia: "Domingo", horario: "Fechado", fechado: true },
];

const faqs = [
  {
    q: "Vocês vendem tecido para confecção no atacado?",
    a: "Sim. Somos fornecedor de tecidos para confecção e loja de tecidos no atacado e varejo: venda de tecidos no atacado em rolo ou por metro, ideal para comprar tecido para revenda, para lojistas, pequenas confecções, facção e costureira profissional. Consulte preço de tecido no atacado pelo WhatsApp.",
  },
  {
    q: "Quais tipos de tecido e malha vocês fornecem?",
    a: "Trabalhamos com malha poliamida atacado, tecido suplex atacado (incluindo suplex blackout e suplex flex fit), tecido dry fit atacado, malha canelada atacado, tecido liso para confecção, tecido risca de giz atacado, tecido mesclado para roupa, tecido estampado atacado e tecido premium para confecção — inclusive tecido para sublimação atacado e tecido para estamparia.",
  },
  {
    q: "Trabalham com aviamentos: elástico, renda e viés?",
    a: "Sim, somos loja de tecidos e aviamentos. Temos elástico para confecção atacado, elástico liso, elástico personalizado atacado, elástico para lingerie, elástico para roupa íntima, elástico para cueca atacado e elástico para costura industrial; renda para lingerie atacado, renda para confecção de roupa íntima e renda para moda íntima; além de viés para confecção atacado, viés colorido para confecção, viés para acabamento de roupa e viés para costura industrial.",
  },
  {
    q: "Para quais tipos de roupa esses tecidos servem?",
    a: "Nossos tecidos atendem moda fitness atacado e tecido para academia revenda, tecido para legging atacado, malha para legging e top, tecido para roupa esportiva e uniforme esportivo, tecido para camiseta dry fit e camisa polo dry fit, tecido para uniforme profissional, malha para moda praia e tecido para roupa de banho, tecido para moda praia feminina, tecido para lingerie atacado, malha para cueca e sutiã, tecido confort para roupa íntima, tecido para pijama atacado e malha para roupa infantil.",
  },
  {
    q: "Onde comprar tecido no atacado em Santa Cruz do Capibaribe?",
    a: "Estamos na Av. Pref. Braz de Líra, 760, em Santa Cruz do Capibaribe — PE, no coração do Polo de Confecções. Somos fornecedor de tecidos em Santa Cruz do Capibaribe e de aviamentos atacado, atendendo tecido para confecção em Pernambuco, no agreste pernambucano e em todo o Nordeste.",
  },
  { q: "Vocês fazem entrega?", a: "Entre em contato pelo WhatsApp para consultar prazo e condições de entrega de rolo de tecido para revenda em todo o Brasil." },
  { q: "Vendem no atacado?", a: "Sim! Trabalhamos no atacado e varejo, com preços especiais para grandes quantidades — ideal para loja de roupas, malharia e facção de roupas." },
  { q: "Posso ver os tecidos antes de comprar?", a: "Claro! Visite nossa loja física e avalie a qualidade dos tecidos e aviamentos para confecção pessoalmente." },
  { q: "Dão consultoria para projetos?", a: "Nossa equipe está pronta para ajudar na escolha dos melhores materiais, do tecido para confecção de roupas ao elástico e viés para acabamento." },
];


const Contato = () => {
  return (
    <div className="bg-background">
      <Seo
        title="Contato | 7 Fios Têxtil — Tecidos no Atacado"
        description="Fale com a 7 Fios Têxtil pelo WhatsApp (81) 99461-6071. Loja na Av. Pref. Braz de Líra, 760, Santa Cruz do Capibaribe — PE. Seg a sex, 08h às 18h."
        path="/contato"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "7 Fios Têxtil",
          url: "https://setefios.com.br/contato",
          image: "https://setefios.com.br/media/og-7fios.jpg",
          telephone: "+55 81 99461-6071",
          email: "Comercial@setefios.com.br",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Pref. Braz de Líra, 760 — Novo",
            addressLocality: "Santa Cruz do Capibaribe",
            addressRegion: "PE",
            postalCode: "55192-460",
            addressCountry: "BR",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "18:00",
            },
          ],
          sameAs: ["https://www.instagram.com/7fiostextil/"],
        }}
      />
      {/* 1. HERO */}
      <section className="bg-primary text-primary-foreground px-4 py-10 md:px-10 md:py-14 text-center">
        <span className="inline-block text-[11px] font-bold tracking-[0.18em] text-accent uppercase mb-2">
          Fale conosco
        </span>
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">Entre em Contato</h1>
        <p className="text-primary-foreground/85 text-sm md:text-base max-w-2xl mx-auto">
          Estamos aqui para ajudar você a encontrar exatamente o que precisa
        </p>
      </section>

      {/* 2. BANNER WHATSAPP */}
      <div className="m-4 md:mx-auto md:max-w-[600px] rounded-xl border border-primary/15 bg-primary/[0.08] p-5 text-center">
        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-3">
          <MessageCircle className="w-7 h-7 text-accent" />
        </div>
        <h2 className="font-display text-lg md:text-xl font-bold text-foreground mb-2">
          Atendimento pelo WhatsApp
        </h2>
        <p className="text-sm text-muted-foreground mb-5">
          Nossa forma mais rápida de atendimento. Tire suas dúvidas, consulte produtos e receba
          atendimentos personalizados.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full h-12 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
        >
          <MessageCircle className="w-5 h-5" />
          Conversar Agora
        </a>
      </div>

      {/* 3. FORMAS DE CONTATO */}
      <section className="bg-card px-4 py-8 md:px-10 md:py-12">
        <div className="text-center mb-6">
          <Tag>Canais</Tag>
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">Formas de Contato</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
          {canais.map(({ icon: Icon, title, info, label, url, wide }) => (
            <div
              key={title}
              className={`bg-muted rounded-xl p-4 text-center border border-border flex flex-col ${
                wide ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mx-auto mb-3">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-foreground mb-1">{title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-4 break-words">{info}</p>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center h-9 px-3 rounded-lg border border-primary text-primary text-xs md:text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {label}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 4. NOSSAS INFORMAÇÕES */}
      <section className="bg-muted px-4 py-8 md:px-10 md:py-12">
        <div className="text-center mb-6">
          <Tag>Informações</Tag>
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">Nossas Informações</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          <div className="bg-card rounded-xl p-5 border border-border md:col-span-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center mb-3">
              <MapPin className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-1">Endereço</h3>
            <p className="text-sm text-muted-foreground mb-4">{ADDRESS}</p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg overflow-hidden border border-border"
            >
              <img
                src={mapaSeteFios}
                alt="Mapa com a localização da Sete Fios Têxtil em Santa Cruz do Capibaribe"
                loading="lazy"
                className="w-full h-auto"
              />
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center h-9 px-4 rounded-lg border border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Abrir no Google Maps
            </a>
          </div>



          <div className="bg-card rounded-xl p-5 border border-border">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center mb-3">
              <Phone className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-1">Telefone</h3>
            <a href="tel:+5581994616071" className="text-sm text-muted-foreground hover:text-primary">
              (81) 99461-6071
            </a>
          </div>

          <div className="bg-card rounded-xl p-5 border border-border">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center mb-3">
              <Clock className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-3">Horário de funcionamento</h3>
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              {horarios.map((h) => (
                <div key={h.dia} className="contents">
                  <span className="text-muted-foreground">{h.dia}</span>
                  <span className={`text-right font-medium ${h.fechado ? "text-destructive" : "text-foreground"}`}>
                    {h.horario}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. BANNER INSTAGRAM */}
      <div className="mx-4 md:mx-auto md:max-w-[700px] rounded-xl bg-primary p-5 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary-foreground/15 flex items-center justify-center flex-shrink-0">
          <Instagram className="w-6 h-6 text-accent" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-primary-foreground/90 mb-3">
            Acompanhe nossas novidades, lançamentos e inspirações para seus projetos.
          </p>
          <a
            href="https://www.instagram.com/7fiostextil/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 h-9 px-4 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Instagram className="w-4 h-4" />
            @7fiostextil
          </a>
        </div>
      </div>

      {/* 6. FAQ */}
      <section className="bg-card px-4 py-8 md:px-10 md:py-12 mt-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />

        <div className="text-center mb-6">
          <Tag>Dúvidas</Tag>
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">Perguntas Frequentes</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-5xl mx-auto">
          {faqs.map((f) => (
            <details key={f.q} className="group bg-muted rounded-xl border border-border p-4">
              <summary className="flex items-center justify-between gap-3 cursor-pointer list-none text-sm md:text-base font-semibold text-foreground">
                {f.q}
                <ChevronDown className="w-4 h-4 flex-shrink-0 text-primary transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-sm text-muted-foreground mt-2">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 7. CTA FINAL */}
      <section className="bg-accent px-4 py-10 md:px-10 md:py-14 text-center">
        <h2 className="font-display text-xl md:text-3xl font-bold text-accent-foreground mb-2">
          Pronto para começar seu projeto?
        </h2>
        <p className="text-sm md:text-base text-accent-foreground/80 mb-6 max-w-xl mx-auto">
          Nossa equipe está pronta para te ajudar a encontrar exatamente o que você precisa.
        </p>
        <div className="flex flex-col md:flex-row gap-3 md:gap-3 md:justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full md:w-56 h-12 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
          <a
            href="tel:+5581994616071"
            className="flex items-center justify-center gap-2 w-full md:w-56 h-12 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Phone className="w-5 h-5" />
            Ligar
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contato;
