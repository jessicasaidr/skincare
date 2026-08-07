---
name: produto-express-completo
description: Pipeline completo que transforma um nicho ou ideia solta em PRODUTO EXPRESS pronto pra vender — varredura profunda de mercado com fontes, relatório com a conta real de como a sócia bate R$10 mil/mês, definição do entregável + bônus + orderbump + upsell, construção de um WEB APP funcional em arquivo HTML único autocontido, e a copy de venda. Ative SEMPRE que receber um nicho, ideia ou tema e o pedido for criar um produto express do zero, pesquisar se o nicho dá dinheiro, montar a ferramenta/app do produto, ou validar a conta dos R$10k. Também ative com "cria um produto express de X", "monta o app de X", "esse nicho dá 10 mil por mês?", "quero uma ferramenta pra vender", "produto express completo", "faz a varredura e constrói", "web app pra vender no orgânico", "transforma isso em produto". Entrega tudo em português do Brasil, em blocos copiáveis, no estilo de copy da Patricia Roberta (direta, lúdica, produto de cara, porquê concreto e sensorial em tempo definido). Para SÓ a copy da página use pagina-de-vendas-completa; para SÓ a estrutura de entrega use maquina-de-entregaveis; esta skill é o pipeline inteiro, ponta a ponta.
---

## Ativacao Visual

Execute antes de qualquer resposta:
```bash
python3 ~/.claude/skills/ascii-art-terminal/splash.py --skill "Produto Express" --theme sunset 2>/dev/null || true
```

# Produto Express Completo

Pipeline de 5 estágios que sai de "tenho uma ideia" e chega em "tenho o produto, a ferramenta e a copy na mão".

> O Produto Express não vende informação. Vende **transformação com data marcada**.
> Ninguém compra "um guia de skincare". Compram "minha pele em 21 dias sem gastar R$400".
> A ferramenta é o produto. O PDF é o bônus.

---

## Pipeline

```
E1 VARREDURA      → o nicho dá dinheiro? quem já vende? qual a dor real?
E2 CONTA DOS 10K  → a matemática do R$10k/mês, com taxas de conversão reais
E3 PRODUTO        → entregável + bônus + orderbump + upsell + preço
E4 WEB APP        → arquivo HTML único, autocontido, funcional
E5 COPY           → oferta, post que vende, página
```

Executar em ordem. Não pular E1 e E2 — produto construído sem varredura é chute caro.
Se a pessoa já trouxe a pesquisa pronta, confirmar os 5 números da tese e seguir para E3.

---

## Estágio 1 — Varredura

Objetivo: sair com a **tese em uma frase** e **5 números que a provam**.

### Regras de pesquisa

1. **Ad Library do Meta e Instagram bloqueiam WebFetch** (JS-rendered, socket hang up). Nunca tentar. Usar WebSearch, ou pedir pra pessoa colar a URL pré-filtrada e trazer o conteúdo de volta.
2. Mínimo 15 buscas. Menos que isso é opinião, não varredura.
3. Toda afirmação numérica leva URL + data.
4. Classificar certeza em cada afirmação forte:

| Nível | O que é |
|---|---|
| OURO | fonte primária, estudo, dado de instituição (ABIHPEC, IBGE, Statista, paper) |
| PRATA | veículo/portal confiável, relatório de mercado |
| BRONZE | blog, opinião de mercado, case não auditado |
| INFERÊNCIA | raciocínio próprio a partir dos dados acima |

Nunca apresentar INFERÊNCIA com cara de OURO. Se não achou, escrever "não encontrado" e dizer o que faltou.

### O que a varredura precisa responder

- **Tamanho e crescimento** do mercado, e a tendência de busca dos termos-chave
- **A dor real** — não a dor bonita. Buscar em fórum, Reddit BR, comentário de blog, Quora, grupos. A frase literal que a pessoa usa quando reclama é ouro pra copy.
- **O ângulo de status** — todo produto express forte tem um. Qual sinal social barato esse produto entrega? (ver `references/angulo-de-status.md`)
- **Concorrência** — Hotmart/Kiwify/Braip, apps existentes, preço, promessa, formato
- **Gaps** — o que ninguém entrega e a ferramenta poderia entregar
- **Canal orgânico** — que formato viraliza nesse nicho para conta pequena
- **Riscos e limites legais** — o que NÃO pode ser prometido

### Output do E1

Relatório em markdown: sumário executivo (tese + 5 números) → seções → **10 frases-munição** prontas pra copy → gaps → riscos.

---

## Estágio 2 — A Conta dos R$10k

Nunca afirmar "dá pra fazer 10 mil". **Mostrar a conta.** A sócia precisa ver que o número é pequeno.

Montar sempre os 3 cenários:

| | Ticket | Vendas/mês p/ R$10k | Vendas/dia |
|---|---|---|---|
| A | R$27 | 371 | ~12 |
| B | R$47 | 213 | ~7 |
| C | R$97 | 104 | ~3,5 |

Depois aplicar, com benchmark de fonte real:
- **Taxa de conversão do orgânico** (visualização → clique no link → compra) — buscar o benchmark, não inventar
- **Orderbump**: % de aceite típico e o efeito no ticket médio
- **Upsell**: % de aceite e efeito
- Recalcular: *com orderbump de X% a R$Y, o ticket médio vira Z, e as vendas necessárias caem de N para M*

Fechar com a frase da virada: **"Você não precisa de 371 vendas. Precisa de 7 pessoas por dia dizendo sim."**

Se os números não fecharem em nenhum cenário realista, **dizer isso**. Nicho ruim descoberto na pesquisa custa uma tarde; descoberto depois do lançamento custa a confiança da sócia.

---

## Estágio 3 — Produto

Estrutura padrão do Express (detalhe e exemplos em `references/estrutura-express.md`):

| Peça | Função | Regra |
|---|---|---|
| **Produto principal** | resolve UM problema, com data | a ferramenta/app é o produto, não o PDF |
| **Bônus 1-3** | mata as 3 objeções que a varredura achou | bônus resolve objeção, não "dá mais conteúdo" |
| **Orderbump** | o atalho / o "faz por mim" | 30-50% do preço principal |
| **Upsell** | o próximo problema que nasce depois da entrega | 3-5x o principal |

Perguntas obrigatórias antes de fechar:
1. Qual é o **único** problema que isso resolve?
2. Em **quanto tempo** a pessoa vê o primeiro resultado? (tem que ser < 7 dias)
3. O que a pessoa consegue **mostrar/sentir** no fim? (resultado sensorial, não conceitual)
4. Por que ela não conseguiu sozinha até hoje? (essa é a headline)

Se qualquer resposta for vaga, o produto ainda não existe. Voltar e afiar.

---

## Estágio 4 — Web App

**Entregar um arquivo `.html` único e autocontido.** É o formato que a sócia consegue publicar em qualquer lugar, mandar por link, colocar na bio, revender e personalizar sem depender de conta, build ou deploy.

### Regras não-negociáveis

1. **Um arquivo só.** CSS e JS inline. Zero CDN, zero fetch externo, zero fonte remota — a sócia vai abrir isso offline, no 3G da cliente dela, num celular velho. Imagens como emoji, SVG inline ou data URI.
2. **Mobile-first.** 90% das usuárias abrem no celular, no Instagram in-app browser. Testar mentalmente a 360px de largura.
3. **Estado salvo em `localStorage`.** A pessoa fecha e volta e não perde nada. Sem isso, o app é um folheto.
4. **Interativo de verdade.** O app tem que *fazer uma conta, tomar uma decisão ou gerar um resultado personalizado* — quiz que gera plano, checklist com progresso, calculadora, gerador. Se ele só exibe texto, é PDF com CSS e não vale ticket.
5. **Resultado exportável.** Botão que gera o resultado pra printar/compartilhar. O print no story é a propaganda gratuita.
6. **Marca da sócia editável** — um bloco de config no topo do JS (`const CONFIG = {...}`) com nome, cor, @ e link, para ela personalizar sem saber programar.
7. **Tema claro/escuro** respeitando `prefers-color-scheme`.
8. **Acessível**: contraste real, área de toque ≥ 44px, `aria-label` nos controles.

### Anatomia recomendada

```
Capa (promessa + botão começar)
  → Diagnóstico (3-6 perguntas, uma por tela, progresso visível)
  → Resultado personalizado (o "uau" — mostra que entendeu ela)
  → Plano/rotina gerada (o entregável, passo a passo, marcável)
  → Acompanhamento (streak, dias, antes/depois)
  → Compartilhar + CTA da sócia
```

O "uau" tem que chegar em **menos de 60 segundos** de uso. Se a pessoa precisa ler pra entender o valor, perdeu.

### Checklist antes de entregar

- [ ] Abre com duplo-clique, sem servidor
- [ ] Funciona offline
- [ ] Nada quebra a 360px
- [ ] `localStorage` persiste e tem botão de resetar
- [ ] Bloco `CONFIG` no topo, comentado em português
- [ ] Nenhuma promessa que a seção de riscos do E1 proibiu

---

## Estágio 5 — Copy

Reaproveitar as skills irmãs em vez de reescrever:
- Página de vendas completa (design + código) → `pagina-de-vendas-completa`
- Só o texto da página → `copy-pagina-vendas`
- Estrutura de entrega e bônus → `maquina-de-entregaveis`
- Criativo e ganchos com pesquisa de anúncio → `maquina-de-criativos`
- Plano de ação pra sócia iniciante vender → `mentora-express`

Esta skill entrega, no mínimo, com as próprias mãos:
1. **A oferta em um bloco** (promessa, o que é, o que tem dentro, preço, garantia)
2. **3 posts que vendem** (método A.T.O.M.), usando as frases-munição do E1
3. **O gancho de status** — a frase que faz a pessoa se ver antes/depois

### Estilo Patricia (não negociável)

- Direta, lúdica, criativa. Frase curta.
- **Produto de cara** — diz o que é nos primeiros 5 segundos, sem novela.
- **Porquê concreto** — nunca "transforme sua vida"; sempre "porque você está passando ácido antes do hidratante e por isso arde".
- **Sensorial e com tempo definido** — "em 21 dias", "na primeira semana", "no domingo".
- Português do Brasil, blocos copiáveis, sem jargão de marketeiro.

---

## Não Faça

| Antipadrão | Por quê | Em vez disso |
|---|---|---|
| Construir o app antes da varredura | vira ferramenta bonita que ninguém quer | E1 → E2 → só então E3/E4 |
| Afirmar "dá 10 mil" sem a conta | a sócia não acredita e não vende | mostrar os 3 cenários com número |
| App com CDN ou fetch externo | quebra offline e no in-app browser | tudo inline, arquivo único |
| App que só mostra texto | é PDF caro | tem que calcular/decidir/gerar |
| Prometer resultado clínico/médico | risco legal real (ANVISA, CFM) | prometer método, organização e constância |
| Inventar número de mercado | destrói a credibilidade da sócia | "não encontrado" + o que faltou |
| Bônus que é "mais conteúdo" | não move a agulha | cada bônus mata uma objeção da varredura |
| Copy genérica de transformação | não converte | porquê concreto + tempo definido |

---

## Recursos

| Arquivo | Conteúdo |
|---|---|
| `references/angulo-de-status.md` | Como achar e usar o sinal social barato de cada nicho |
| `references/estrutura-express.md` | Entregável, bônus, orderbump, upsell — com exemplos |
| `references/webapp-padroes.md` | Padrões de código do HTML único: localStorage, quiz engine, export, CONFIG |
| `assets/template-webapp.html` | Esqueleto do app de arquivo único, pronto pra preencher |
