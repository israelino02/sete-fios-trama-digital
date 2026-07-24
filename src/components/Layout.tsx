import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Search, Phone, MapPin, Clock } from "lucide-react";
import logo7Fios from "@/assets/logo-7fios.jpg.asset.json";

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

const WHATSAPP_URL = "https://wa.me/5581994616071";

const WhatsAppFloating = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-whatsapp shadow-xl hover:scale-110 transition-transform duration-300 flex items-center justify-center"
  >
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="hsl(var(--card))" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </a>
);

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* NAVBAR - navy background */}
      <header className="sticky top-0 z-40 bg-primary border-b border-primary/40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <span className="font-display text-xl md:text-2xl font-extrabold tracking-wide text-accent">
                7 FIOS TÊXTIL
              </span>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-accent",
                    location.pathname === item.href
                      ? "text-accent"
                      : "text-primary-foreground/90"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 text-primary-foreground">
              <button
                type="button"
                aria-label="Buscar"
                className="p-2 hover:text-accent transition-colors hidden sm:inline-flex"
              >
                <Search className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Abrir menu"
                className="md:hidden p-2 hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen((v) => !v)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden py-3 border-t border-primary-foreground/10">
              <nav className="flex flex-col space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      location.pathname === item.href
                        ? "bg-accent text-accent-foreground"
                        : "text-primary-foreground/90 hover:bg-primary-foreground/10"
                    )}
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

      {/* FOOTER - deep navy */}
      <footer className="bg-warm-deep text-primary-foreground mt-16">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display text-2xl font-extrabold text-primary-foreground mb-3">
                7 Fios Têxtil
              </h3>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                Tecidos e aviamentos de alta qualidade no Polo de Confecções de PE.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-primary-foreground">Contato</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/85">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                  <span>Av. Pref. Braz de Líra, 760 — Santa Cruz do Capibaribe — PE</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                  <a href="tel:+5581994616071" className="hover:text-accent transition-colors">
                    (81) 99461-6071
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Seg–Sex, 8h às 18h</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-primary-foreground">Navegação</h4>
              <ul className="space-y-2 text-sm">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-primary-foreground/85 hover:text-accent transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/70">
            <p>&copy; {new Date().getFullYear()} Sete Fios Têxtil. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <WhatsAppFloating />
    </div>
  );
};
