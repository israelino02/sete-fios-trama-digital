## Objetivo

Reativar o carrossel do hero na home usando os 5 conjuntos de imagens já salvos (desktop / tablet / mobile), sem nenhum texto ou botão por cima.

## O que muda

**Arquivo:** `src/pages/Index.tsx`

- A seção HERO atual (que está vazia, só com `bg-primary` e um container) passa a renderizar o componente `HeroCarousel` existente.
- Sem título, sem badge, sem parágrafo, sem botões "Ver catálogo" / "Falar com vendedor".
- O carrossel escolhe automaticamente a versão da imagem conforme a largura da tela (mobile < 768px, tablet 768–1023px, desktop ≥ 1024px), lógica que o `HeroCarousel` já implementa.
- Troca automática a cada 4s (padrão do componente), com setas e dots já existentes.

## Ordem dos slides (5 conjuntos)

1. Sete Fios Têxtil — `hero-main` / `hero-tablet-v2` / `hero-mobile-v34`
2. Microfibras 7 Fios — `hero-microfibras-desktop/tablet/mobile`
3. Microfibra de Poliamida e Poliéster — `hero-microfibra-desktop/tablet/mobile`
4. Referência em tecidos e aviamentos (fundo marrom) — `hero-poliamida-desktop/tablet/mobile`
5. Microfibras de Poliéster (praia) — `hero-poliester-desktop/tablet/mobile`

## Altura da seção

Como as imagens mobile são verticais e as desktop são horizontais, a seção usa alturas responsivas para não cortar nem deixar faixas vazias:

- Mobile: `min-h-[70vh]`
- Tablet: `md:min-h-[75vh]`
- Desktop: `lg:min-h-[80vh]`

O `HeroCarousel` já aplica `object-cover` e ajustes de `object-position` por breakpoint.

## Fora de escopo

- Nada muda nas outras seções (barra de confiança, categorias, banner "Microfibras 7 Fios", etc.).
- O banner de fundo marrom/azul dos tecidos (seção 6) continua como está.
- Nenhuma imagem é apagada nem re-enviada — uso as que já estão em `src/assets/`.

## Detalhes técnicos

- Importar os 15 `.asset.json` (5 desktop + 5 tablet + 5 mobile) no topo do `Index.tsx`.
- Montar 3 arrays (`heroDesktop`, `heroTablet`, `heroMobile`) com as URLs na mesma ordem.
- Substituir o bloco `<section className="bg-primary ...">...</section>` por:
  ```
  <section className="relative w-full min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh] overflow-hidden bg-primary">
    <HeroCarousel images={heroDesktop} tabletImages={heroTablet} mobileImages={heroMobile} />
  </section>
  ```
- Import de `HeroCarousel` de `@/components/HeroCarousel`.
