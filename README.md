# Software Engineering Course

Interaktiv læringsside for Software Engineering-faget.

## Struktur

```
software-engineering-course/
├── index.html                        # Forside med oversikt og fremdrift
├── assets/
│   ├── css/main.css                  # Felles styling
│   └── js/progress.js                # Fremdriftssporing (localStorage)
├── modules/
│   ├── module-01/                    # Modul 1 (f.eks. Introduction)
│   │   ├── index.html                # Interaktiv modulside
│   │   ├── slides/                   # Last opp .pptx-filer her
│   │   ├── exercises/                # Oppgaver (.md eller .html)
│   │   │   └── solutions/            # Fasiter
│   │   └── quiz/                     # Quiz-data (.json)
│   ├── module-02/                    # Modul 2
│   │   └── ...
│   └── module-XX/                    # Legg til flere etter hvert
└── archive/
    ├── old-exercises/                # Gamle eksamensoppgaver
    └── old-solutions/                # Tilhørende fasiter
```

## Kom i gang

1. Last opp PowerPoint-slides til riktig `modules/module-XX/slides/`
2. Legg gamle oppgaver i `archive/old-exercises/` med fasit i `archive/old-solutions/`
3. Kjør Claude Code i denne mappen for å bygge ut en modul

## Hosting

Siden hostes på **GitHub Pages**. Gå til:
`Settings → Pages → Source: Deploy from branch (main, / root)`
