
# Limpeza de arquivos não utilizados

Fiz uma varredura no projeto e encontrei arquivos que **não são referenciados em lugar nenhum do código**. Removê-los deixa o repositório e o deploy mais leves, sem afetar nada visível no site.

## O que quero remover (com sua permissão)

### 1. Vídeo e imagens antigas em `public/` — impacto grande no deploy (~21 MB)
| Arquivo | Tamanho | Motivo |
|---|---|---|
| `public/videos/video-institucional.mp4` | **19 MB** | Substituído pelo `historia-7fios.mp4` (asset CDN). Nenhuma referência no código. |
| `public/hero-2.png` | **2,3 MB** | Hero antigo. Nenhuma referência. |
| `public/images/video-poster.jpg` | 63 KB | Poster do vídeo antigo. Nenhuma referência. |

### 2. Imagens antigas em `src/assets/` (~2,5 MB)
| Arquivo | Tamanho | Motivo |
|---|---|---|
| `7fios-logo.png` | 498 KB | Logo antiga não usada |
| `sete-fios-logo.png` | 498 KB | Logo antiga duplicada |
| `logo-7fios.png` | 377 KB | Versão PNG antiga (uso atual é `logo-7fios.jpg`) |
| `hero-slide-1.jpg` | 140 KB | Slide de hero antigo |
| `loja-7fios.jpg` | 140 KB | Foto não referenciada |
| `hero-tecidos.jpg` | 144 KB | Só aparecia num `<link rel="preload">` no `index.html` que aponta pra um hero que não existe mais (também vou remover essa linha) |
| `romantik-estampado-masc-3.jpg` | 258 KB | Não referenciada |
| `romantik-estampado-masc-4.jpg` | 249 KB | Não referenciada |
| `romantik-estampado-masc-6.jpg` | 310 KB | Não referenciada |

### 3. Asset no CDN não utilizado
| Arquivo | Motivo |
|---|---|
| `src/assets/hero-strip-logo.png.asset.json` | Nenhuma referência no código (será removido via `lovable-assets delete` pra apagar também do CDN). |

### 4. Ajuste em `index.html`
Remover a linha:
```html
<link rel="preload" as="image" href="/src/assets/hero-tecidos.jpg" fetchpriority="high">
```
(aponta pra arquivo que vai ser removido)

## O que NÃO vou mexer
- `src/assets/uploads/` (125 MB, 459 imagens) — usadas dinamicamente pelo `resolveUpload()`.
- `public/lovable-uploads/` (82 MB, 562 imagens) — servem de fallback pra `resolveUpload()` e são preloadadas no `index.html` (poliester-capa, poliamida-capa). Auditar isso exigiria uma análise separada.
- `logo-7fios.jpg` — usada pela Layout (header) e pela página Sobre.

## Ganho estimado
- **~24 MB a menos** no bundle publicado (principalmente pelo vídeo antigo de 19 MB).
- Menos ruído na pasta `src/assets/`.

Posso prosseguir com essa remoção?
