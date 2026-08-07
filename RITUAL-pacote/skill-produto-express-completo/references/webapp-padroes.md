# Padrões de Código — Web App de Arquivo Único

Todo app do Produto Express é **um `.html` só**. Estes são os padrões que fazem ele funcionar no celular da cliente, offline, dentro do navegador do Instagram.

## 1. Bloco CONFIG — a sócia personaliza sem programar

Primeira coisa dentro do `<script>`, comentado em português. É o que permite revender o app personalizado.

```js
// ===== PERSONALIZE AQUI =====
const CONFIG = {
  nome:      "Nome do seu produto",
  autora:    "@seu_arroba",
  linkBio:   "https://seu-link.com",
  corPrimaria: "#B76E79",   // cor dos botões e destaques
  corFundo:    "#FFF8F5",
  ctaTexto:  "Quero minha rotina completa",
};
// ===== FIM DA PERSONALIZAÇÃO =====
```

Aplicar via CSS custom properties no boot:
```js
const r = document.documentElement.style;
r.setProperty('--cor-primaria', CONFIG.corPrimaria);
r.setProperty('--cor-fundo', CONFIG.corFundo);
```

## 2. Estado persistente

Um objeto de estado, uma chave de storage, salvar a cada mudança. Sempre com `try/catch` — o in-app browser do Instagram pode bloquear storage em modo privado, e o app **não pode quebrar** por causa disso.

```js
const CHAVE = 'app_v1';
let estado = carregar();

function carregar() {
  try { return JSON.parse(localStorage.getItem(CHAVE)) || estadoInicial(); }
  catch { return estadoInicial(); }   // storage bloqueado: roda em memória
}
function salvar() {
  try { localStorage.setItem(CHAVE, JSON.stringify(estado)); } catch {}
}
```

Sempre incluir botão de **recomeçar** que limpa a chave e recarrega — a pessoa vai querer refazer o diagnóstico.

Versionar a chave (`_v1`). Se a estrutura do estado mudar numa atualização, sobe pra `_v2` e o app antigo não quebra.

## 3. Navegação por telas

Sem router, sem framework. Uma função que troca a tela visível.

```js
function ir(tela) {
  document.querySelectorAll('[data-tela]').forEach(s =>
    s.hidden = s.dataset.tela !== tela);
  estado.tela = tela; salvar();
  window.scrollTo({top:0, behavior:'instant'});
}
```

Usar `hidden` (não `display:none` no CSS inline) — mantém o HTML semântico e acessível.

## 4. Motor de quiz orientado a dados

Perguntas como dados, não como HTML escrito à mão. Assim a sócia edita o array e o app inteiro muda.

```js
const PERGUNTAS = [
  { id:'tipo', titulo:'Como sua pele fica no fim do dia?',
    opcoes:[
      {txt:'Brilhando na testa e no nariz', valor:'mista'},
      {txt:'Repuxando, áspera',             valor:'seca'},
      {txt:'Oleosa no rosto todo',          valor:'oleosa'},
      {txt:'Vermelha, ardendo',             valor:'sensivel'},
    ]},
];
```

Resultado = função pura do estado. Fácil de conferir, fácil de ajustar:
```js
function calcularResultado(resp) { /* retorna o objeto do plano */ }
```

## 5. Exportar o resultado (a propaganda grátis)

O print no story é o marketing. Dois caminhos, sem dependência externa:

- **Compartilhar nativo** — `navigator.share()` quando existe (funciona no celular)
- **Copiar texto** — `navigator.clipboard.writeText()` como fallback
- **Imprimir/PDF** — `window.print()` com um `@media print` que esconde botões e navegação

```js
async function compartilhar(texto) {
  try {
    if (navigator.share) return await navigator.share({ text: texto });
    await navigator.clipboard.writeText(texto);
    aviso('Copiado! Cola no seu story 💛');
  } catch {}
}
```

Nunca usar html2canvas ou qualquer lib de CDN — quebra offline.

## 6. Tema claro/escuro

```css
:root { --bg:#FFF8F5; --txt:#2B2B2B; --card:#fff; }
@media (prefers-color-scheme: dark) {
  :root { --bg:#161214; --txt:#F2ECEA; --card:#221D20; }
}
```

## 7. Mobile e toque

- `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">`
- Botão: `min-height:48px`, `font-size:16px` (abaixo disso o iOS dá zoom sozinho no input)
- Respeitar a barra do iPhone: `padding-bottom: env(safe-area-inset-bottom)`
- Layout em coluna única. Grid só a partir de 640px.
- Testar mentalmente a **360px**.

## 8. Acessibilidade mínima

- Contraste ≥ 4.5:1 no texto
- `aria-label` em botão de ícone, `aria-current` no passo ativo
- Opções de quiz como `<button>` de verdade — funciona com teclado e leitor de tela
- `@media (prefers-reduced-motion: reduce)` desligando animação

## 9. Erros que quebram na mão da cliente

| Erro | Efeito |
|---|---|
| Fonte do Google Fonts | app sem estilo offline |
| `localStorage` sem try/catch | tela branca no modo privado do iOS |
| `alert()` para feedback | bloqueia a tela no in-app browser |
| Emoji como única informação | ilegível em leitor de tela |
| `100vh` no mobile | corta conteúdo atrás da barra do navegador — usar `100dvh` |
| Input com `font-size` < 16px | iOS dá zoom e desalinha o layout |
