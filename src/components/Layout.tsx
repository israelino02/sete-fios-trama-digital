import { ReactNode, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X, Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import logo7Fios from "@/assets/logo-7fios.jpg";

interface LayoutProps {
  children: ReactNode;
}

const navigation = [
  { name: "Início", href: "/" },
  { name: "Catálogo", href: "/catalogo" },
  { name: "Outros Produtos", href: "/outros-produtos" },
  { name: "Sobre", href: "/sobre" },
  { name: "Contato", href: "/contato" },
];

const WhatsAppButton = () => {
  const whatsappNumber = "5581994616071";
  const message = "Olá! Vim do SITE e gostaria de saber mais sobre os produtos da 7 Fios.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 rounded-full w-16 h-16 shadow-warm bg-gradient-primary hover:scale-110 transition-all duration-300 z-50"
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="w-6 h-6" />
        <span className="sr-only">WhatsApp</span>
      </a>
    </Button>
  );
};

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logo7Fios} alt="7 Fios Têxtil" className="h-20 w-auto" loading="eager" decoding="async" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      location.pathname === item.href
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-primary hover:bg-muted"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-muted mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 7 Fios - Descrição da empresa */}
            <div>
              <div className="flex items-center mb-4">
                <img src={logo7Fios} alt="7 Fios Têxtil" className="h-16 w-auto" loading="lazy" decoding="async" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Sete Fios Têxtil é uma empresa especializada em tecidos e aviamentos que unem qualidade, inovação e custo-benefício. Nosso compromisso é oferecer soluções inteligentes para o setor têxtil, sempre com ética, agilidade e parceria, ajudando confecções em todo o Brasil a crescerem com segurança e confiança.
              </p>
            </div>

            {/* Navegação */}
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Navegação</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sobre"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    to="/catalogo"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Produtos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#institucional"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Missão, Visão e Valores
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contato"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Comercial@setefios.com.br</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>(81) 99461-6071</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Av. Pref. Braz de Líra, 760 - Novo, Santa Cruz do Capibaribe - PE, 55192-460</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Segunda a Sexta, das 8h às 18h</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Sete Fios Têxtil. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};