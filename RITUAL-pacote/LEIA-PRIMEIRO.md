# Pacote RITUAL — projeto de skincare + skill de pesquisa

Este pacote tem duas coisas independentes:

```
RITUAL-pacote/
├── projeto-skincare/                 → o app e os documentos
│   ├── app-skincare.html             → O APP (arquivo único, é só abrir)
│   ├── 01-VARREDURA-MERCADO.md       → a pesquisa de mercado completa
│   ├── Relatorio-Skincare-RITUAL.pdf → o relatório em PDF (9 páginas)
│   └── relatorio-print.html          → o fonte do PDF (pra reeditar/regerar)
│
└── skill-produto-express-completo/   → a SKILL que faz a pesquisa
    ├── SKILL.md
    ├── references/
    └── assets/
```

---

## 1. Instalar a SKILL de pesquisa na outra conta

A skill `produto-express-completo` é o pipeline que faz **varredura de mercado + relatório
dos R$10k + definição do produto + web app + copy**. É ela que gerou este projeto.

Skills do Claude Code ficam em `~/.claude/skills/`. Para instalar na outra máquina/conta:

**Mac ou Linux**
```bash
cp -R skill-produto-express-completo ~/.claude/skills/produto-express-completo
```

**Windows (PowerShell)**
```powershell
Copy-Item -Recurse skill-produto-express-completo "$env:USERPROFILE\.claude\skills\produto-express-completo"
```

Pronto. Abra o Claude Code nessa conta e digite `/produto-express-completo` — ela aparece.
Não precisa reiniciar nada; skills globais são descobertas sozinhas em qualquer projeto.

**Como usar depois de instalada:** dê a ela um nicho ou ideia. Exemplos:
- `/produto-express-completo cria um produto express de organização de casa`
- ou só descreva: "faz a varredura desse nicho e me diz se dá 10 mil por mês"

Ela roda os 5 estágios: varredura → conta dos R$10k → produto → web app → copy.

---

## 2. Levar o PROJETO pra outra conta

O app é **um arquivo HTML único e autocontido** — não tem build, não tem dependência.
Basta a pasta `projeto-skincare/`. Na outra conta você pode:

- **Só abrir:** dê dois cliques em `app-skincare.html`. Funciona offline.
- **Continuar editando no Claude Code:** abra a pasta `projeto-skincare/` como projeto.
  Tudo que personaliza fica no topo do arquivo, no bloco `const CONFIG` e `const PATRICIA`.

### Publicar na Vercel (na conta nova)
```bash
cd projeto-skincare
mkdir -p .deploy && cp app-skincare.html .deploy/index.html
printf 'User-agent: *\nDisallow: /\n' > .deploy/robots.txt   # não indexar no Google
cd .deploy && npx vercel deploy --prod
```
> Faça login com a conta Vercel NOVA quando o `vercel` pedir.
> O `robots.txt` bloqueia indexação — o link funciona pra quem tem, mas não aparece em busca.

---

## Onde estão os vídeos das aulas
No `app-skincare.html`, procure o bloco `const VIDEOS`. Cole a URL de cada aula no campo `url`
(aceita YouTube, Vimeo, Panda, Loom ou .mp4). Aula sem URL aparece como "em breve" e não
quebra nada — dá pra publicar hoje e ir gravando aos poucos.

## ⚠️ Cuidado com a pesquisa
`01-VARREDURA-MERCADO.md` e o PDF são **inteligência competitiva** — tem os gaps de mercado e a
conta de faturamento. Mande direto pra quem precisa (WhatsApp, e-mail). **Não suba em link público.**
Se publicar o app na Vercel, mantenha esses arquivos FORA da pasta `.deploy/` (o passo acima já
copia só o HTML do app).

## A blindagem legal continua no app
Termo de aceite obrigatório, triagem clínica, filtro de gestante, checador de conflito de ativos,
progressão semana a semana, linguagem só de "aparência de" (nunca "trata/cura/garante") e rodapé
legal em toda tela. Cobre ANVISA RDC 752/2022 e CDC Art. 37. Se editar textos, mantenha esse padrão.
