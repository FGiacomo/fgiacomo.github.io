# tuousername.github.io

Sito personale bilingua (IT 🇮🇹 / EN 🇬🇧) con Hugo Terminal theme.  
Auto-detect della lingua del browser + toggle manuale IT/EN.

---

## Setup passo per passo

### 1. Prerequisiti

```bash
# macOS
brew install git hugo

# Ubuntu/Debian
sudo apt install git
sudo snap install hugo   # versione recente con extended

# Windows
winget install Git.Git
winget install Hugo.Hugo.Extended
```

Verifica:
```bash
hugo version   # deve mostrare "extended"
git --version
```

---

### 2. Crea il repo su GitHub

1. Vai su **github.com/new**
2. Nome repo: `tuousername.github.io`  ← esatto, con il tuo username
3. Visibilità: **Public**
4. **Non** aggiungere README — lascia vuoto
5. Clicca **Create repository**

---

### 3. Clona e configura il progetto

```bash
# Clona il repo vuoto
git clone https://github.com/tuousername/tuousername.github.io.git
cd tuousername.github.io

# Copia tutti i file di questo zip dentro la cartella
# (hugo.toml, content/, static/, .github/, .gitmodules)

# Installa il tema Terminal come submodule
git submodule add https://github.com/panr/hugo-theme-terminal.git themes/terminal
```

> Se hai già copiato il `.gitmodules` dallo zip, usa invece:
> ```bash
> git submodule update --init --recursive
> ```

---

### 4. Personalizza

Modifica `hugo.toml`:
- `baseURL` → `"https://tuousername.github.io/"`
- `author`, `email`, `github`, `linkedin` → i tuoi dati

Modifica i file `.md` in `content/it/` e `content/en/` con i tuoi testi  
(cerca e sostituisci "Mario Rossi" e "mario@esempio.it").

---

### 5. Aggiungi la tua foto

```bash
cp ~/percorso/mia-foto.jpg static/foto.jpg
```

La foto appare nella pagina About. Se il file non esiste viene ignorata silenziosamente.

---

### 6. Anteprima locale

```bash
hugo server -D
```

Apri **http://localhost:1313** — si aggiorna in tempo reale ad ogni modifica.

---

### 7. Primo push

```bash
git add .
git commit -m "init: sito hugo terminal bilingua"
git push -u origin main
```

---

### 8. Attiva GitHub Pages

1. Vai su GitHub → repo → **Settings → Pages**
2. In **Source** seleziona **GitHub Actions**  ← non "Deploy from branch"
3. Salva

La GitHub Action parte in automatico dopo ogni push su `main`.  
Il sito sarà live su **https://tuousername.github.io** dopo ~1 minuto.

---

## Struttura cartelle

```
tuousername.github.io/
├── .github/
│   └── workflows/
│       └── hugo.yml          ← deploy automatico
├── .gitmodules               ← punta al tema Terminal
├── hugo.toml                 ← config principale + menu IT/EN
├── content/
│   ├── it/                   ← contenuti in italiano
│   │   ├── _index.md
│   │   ├── about.md
│   │   ├── cv.md
│   │   ├── projects.md
│   │   └── contacts.md
│   └── en/                   ← contenuti in inglese
│       ├── _index.md
│       ├── about.md
│       ├── cv.md
│       ├── projects.md
│       └── contacts.md
├── static/
│   ├── index.html            ← redirect radice con auto-detect lingua
│   ├── js/
│   │   └── lang.js           ← logica rilevamento lingua browser
│   └── foto.jpg              ← LA TUA FOTO (da aggiungere)
└── themes/
    └── terminal/             ← creata da: git submodule add ...
```

---

## Come funziona il cambio lingua

| Situazione | Comportamento |
|---|---|
| Prima visita, browser in inglese | → `/en/about/` |
| Prima visita, browser in italiano (o altro) | → `/it/about/` |
| Click su "🇬🇧 EN" in navbar | Salva preferenza, va su `/en/<pagina-corrente>/` |
| Click su "🇮🇹 IT" in navbar | Salva preferenza, va su `/it/<pagina-corrente>/` |
| Visite successive | Rispetta la scelta salvata in localStorage |

---

## Workflow quotidiano

```bash
# Modifica i .md in content/it/ o content/en/
hugo server -D        # anteprima live

git add .
git commit -m "aggiorno cv"
git push              # GitHub Actions ri-deploya in automatico
```
