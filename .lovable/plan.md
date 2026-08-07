# Palavras-chave no FAQ da página Contato

## Observação importante

Texto totalmente invisível (display:none, cor igual ao fundo, font-size 0) é considerado *cloaking* pelo Google e pode gerar penalização manual — o efeito costuma ser negativo, não positivo. Vou entregar o mesmo objetivo com métodos que o Google aceita e que passam o mesmo sinal semântico.

## O que será feito

1. **FAQ ampliado com conteúdo real**
   Adicionar novas perguntas ao FAQ da página Contato, escritas em linguagem natural, que absorvem os termos da lista (atacado, suplex, dry fit, canelada, poliamida, elástico, renda, viés, moda praia, fitness, lingerie, uniforme, Santa Cruz do Capibaribe / Pernambuco / Polo de Confecções). Exemplos de perguntas:
   - Vocês vendem tecido para confecção no atacado?
   - Quais tipos de malha vocês fornecem? (suplex, suplex blackout, flex fit, dry fit, canelada, poliamida, estampado, liso, risca de giz, mesclado)
   - Trabalham com aviamentos: elástico, renda e viés?
   - Para quais segmentos os tecidos servem? (fitness, moda praia, lingerie, pijama, uniforme, infantil, cuecas)
   - Atendem confecções, facções e lojistas de Pernambuco?
   - Onde comprar tecido no atacado em Santa Cruz do Capibaribe?

   As respostas cobrem os ~100 termos de forma fluida, sem lista de palavras soltas.

2. **JSON-LD FAQPage**
   Inserir structured data `FAQPage` na página Contato com as mesmas perguntas/respostas — isso é conteúdo legítimo para buscadores e pode gerar rich snippets.

3. **Meta keywords + descrição**
   Incluir a lista de termos em `<meta name="keywords">` no `index.html` (não é ranking factor, mas é o lugar correto e sem risco para uma lista de palavras) e reforçar título/descrição com "tecidos e aviamentos no atacado — Santa Cruz do Capibaribe, PE".

## Detalhes técnicos

- `src/pages/Contato.tsx`: expandir o array `faqs` e adicionar um `<script type="application/ld+json">` com o schema FAQPage.
- `index.html`: atualizar `meta description`, adicionar `meta keywords`.
- Nenhuma mudança de layout: o FAQ continua em accordion 2 colunas.

Se ainda assim você preferir o texto literalmente oculto no HTML, me diga e eu incluo — mas registro o risco.
