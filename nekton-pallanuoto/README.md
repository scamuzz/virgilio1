# 🤽 Nekton Pallanuoto — Sito Web

Portale web della squadra di pallanuoto **Nekton**.

🌐 **URL**: https://scamuzz.github.io/nekton-pallanuoto/

---

## Struttura

| File | Descrizione |
|------|-------------|
| `index.html` | Home page con griglia di navigazione |
| `orari.html` | Orari allenamenti settimanali (con override gestore) |
| `acquagol.html` | News gruppo Acquagol (nati 2016+) |
| `under13.html` | News gruppo Under 13 (nati 2014–2015) |
| `senior.html` | News gruppo Senior (nati 2010 e prec.) |
| `news.html` | Comunicazioni generali per tutta la squadra |
| `calendario.html` | Calendario partite con filtri per campionato |
| `pagamenti.html` | Scadenze e quote da versare |
| `sondaggi.html` | Sondaggi per atleti e famiglie |

---

## Gruppi

| Gruppo | Anni di nascita | Allenamenti |
|--------|----------------|-------------|
| **Acquagol** | 2016 e seguenti | Mercoledì 17:00–18:00 • Sabato 16:00–17:00 |
| **Under 13** | 2014–2015 | Mar/Mer 18:00–19:15 • Ven 18:00–19:00 • Sab 17:00–18:00 |
| **Senior** | 2010 e precedenti | Mar/Ven 20:00–21:15 • Mer 19:00–20:15 • Sab 19:00–20:00 |

---

## Campionati FIN

- Habawaba (Acquagol)
- Under 12
- Under 14
- Under 16
- Under 18
- Prima Squadra Promozione

---

## Tecnologie

- **HTML/CSS/JS puro** — nessun framework
- **Firebase Realtime Database** — dati in tempo reale
- **GitHub Pages** — hosting statico gratuito

## Firebase — Struttura dati

```
nekton/
  orari/{annoSettimana}/       → Orari modificati dal gestore
  news/acquagol/               → Notizie gruppo Acquagol
  news/under13/                → Notizie gruppo Under 13
  news/senior/                 → Notizie gruppo Senior
  news/generale/               → Comunicazioni generali
  calendario/                  → Partite e risultati
  pagamenti/                   → Scadenze quote
  sondaggi/                    → Sondaggi
```

---

## Accesso gestore

Il sito include un sistema di autenticazione tramite PIN per il gestore.  
Clicca sull'icona 🔐 in alto a destra in ogni pagina per accedere alla modalità gestore.  
Il PIN è conservato in `sessionStorage` (dura finché il browser è aperto).

---

## Abilitare GitHub Pages

1. Vai su **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` — Folder: `/ (root)`
4. Salva e aspetta qualche minuto

Il sito sarà disponibile su `https://scamuzz.github.io/nekton-pallanuoto/`
