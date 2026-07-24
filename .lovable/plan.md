Substituir a primeira imagem do hero (slide "main") pelas três novas versões enviadas.

## Passos

1. Fazer upload das 3 novas imagens via `lovable-assets`:
   - `setefios_desktop_limpo_final.png` → `src/assets/hero-main-v2.png.asset.json`
   - `setefios_tablet_limpo_final.png` → `src/assets/hero-tablet-v3.png.asset.json`
   - `setefios_iphone_limpo_final.png` → `src/assets/hero-mobile-v35.png.asset.json`

2. Atualizar `src/pages/Index.tsx`:
   - Trocar imports `heroMainDesktop`, `heroMainTablet`, `heroMainMobile` para apontar aos 3 novos pointers.
   - Demais slides (Microfibras, Microfibra, Poliamida, Poliéster) permanecem inalterados.

3. Remover os assets antigos que ficam órfãos após a troca:
   - `src/assets/hero-main.png.asset.json`
   - `src/assets/hero-tablet-v2.png.asset.json`
   - `src/assets/hero-mobile-v34.png.asset.json`
   (usando `lovable-assets delete --file` para limpar do CDN também)
