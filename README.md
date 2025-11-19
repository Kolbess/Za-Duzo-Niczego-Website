# Za Dużo Niczego

**Za Dużo Niczego** to kampania edukacyjna, która pomaga młodym ludziom zrozumieć, jak działają mechanizmy uzależnienia od dopaminy. Uczymy, jak zachować równowagę między światem online i offline oraz odzyskać kontrolę nad swoim czasem i emocjami.

---

## Technologie

Projekt został stworzony z użyciem nowoczesnego stacku:

* **Frontend**: React + Vite
* **Styling**: TailwindCSS 4.x
* **Routing**: React Router DOM
* **Ikony**: Lucide React
* **Hosting**: przygotowany do GitHub Pages / AWS

---

## Struktura Projektu

```
my-react-app/
├─ public/            # statyczne zasoby (obrazy, favicon itp.)
├─ src/
│  ├─ components/     # komponenty React (Header, Footer, itp.)
│  ├─ styles/         # pliki CSS / Tailwind (globals.css)
│  ├─ App.tsx         # główny komponent aplikacji
│  └─ main.tsx        # punkt wejścia aplikacji
├─ vite.config.ts      # konfiguracja Vite
├─ tailwind.config.ts  # konfiguracja Tailwind
├─ package.json
└─ README.md
```

---

## Instalacja

1. Sklonuj repozytorium:

   ```bash
   git clone https://github.com/username/my-react-app.git
   cd my-react-app
   ```
2. Zainstaluj zależności:

   ```bash
   npm install
   ```
3. Uruchom środowisko developerskie:

   ```bash
   npm run dev
   ```
4. Otwórz przeglądarkę pod adresem wyświetlonym w terminalu (domyślnie `http://localhost:5173`).

---

## Style i CSS

* TailwindCSS 4.x został skonfigurowany z pełnym wsparciem dark mode i niestandardowych zmiennych CSS.
* Plik `globals.css` zawiera bazowe style, typografię, kolory oraz warstwy Tailwind (`@tailwind base`, `@tailwind components`, `@tailwind utilities`).
* Elementy interfejsu korzystają z przygotowanego systemu kolorów i zmiennych zgodnie z projektem Figma.

---

## Funkcje

* Responsywny header z menu desktop i mobile.
* Przejrzysta nawigacja po wszystkich podstronach.
* Animacje hover i interakcji zgodnie z UI/UX design.
* Przygotowanie pod analitykę (Google Analytics może być dodane).

---

## Współpraca

* Przygotowany przewodnik instalacyjny dla współpracowników.
* Zalecenia dotyczące nazewnictwa, branchy i workflow znajdziesz w Notion.
* Wszelkie bugi lub propozycje zmian zgłaszaj przez Issues na GitHubie.

---

## Kontakt

Projekt edukacyjny realizowany przez zespół **Za Dużo Niczego**. Chcemy inspirować młodych do świadomego korzystania z technologii i odkrywania przyjemności życia offline.

---


# 🚀 Project Installation Guide

This guide explains how to set up and run the project locally using Node.js, npm, and Git.

---

## 1. Prerequisites

Before starting, make sure you have:

- **Node.js** `v22.x` (or compatible)

```bash
node -v
```

- **npm** (comes with Node.js)

```bash
npm -v
```

- **Git**

```bash
git --version
```

---

## 2. Clone Repository

```bash
git clone https://github.com/Kolbess/Za-Duzo-Niczego-Website.git
cd Za-Duzo-Niczego-Website
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Run Dev Server

```bash
npm run dev
```

Open your browser and go to:

```
http://localhost:5173
```

---

## 5. Common Fixes

### Missing `node_modules`

```bash
npm install
```

### Tailwind/PostCSS Errors

- Ensure Tailwind is installed:

```bash
npm install -D tailwindcss
```

### TypeScript Errors

```bash
npm install --save-dev typescript @types/react @types/react-dom
```

---

## 6. Build for Production

```bash
npm run build
```

Build output will be created in:

```
dist/
```

---

## 7. Optional (Recommended)

### VSCode Extensions

- Tailwind CSS IntelliSense  
- Prettier – Code Formatter  

### Lint & Format Commands (if configured)

```bash
npm run lint
npm run format
```
