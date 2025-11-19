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


# 🚀 Instrukcja Instalacji Projektu

Ten przewodnik wyjaśnia, jak uruchomić projekt lokalnie przy użyciu Node.js, npm i Git.

---

## 1. Wymagania wstępne

Przed rozpoczęciem upewnij się, że masz zainstalowane:

- **Node.js** `v22.x` (lub kompatybilną wersję)

```bash
node -v
```

- **npm** (dołączony do Node.js)

```bash
npm -v
```

- **Git**

```bash
git --version
```

---

## 2. Sklonuj repozytorium

```bash
git clone https://github.com/Kolbess/Za-Duzo-Niczego-Website.git
cd Za-Duzo-Niczego-Website
```

---

## 3. Zainstaluj zależności

```bash
npm install
```

---

## 4. Uruchom serwer deweloperski

```bash
npm run dev
```

Otwórz przeglądarkę i przejdź do:

```
http://localhost:5173
```

---

## 5. Typowe problemy i ich rozwiązania

### Brak folderu `node_modules`

```bash
npm install
```

### Błędy Tailwind/PostCSS

- Upewnij się, że Tailwind jest zainstalowany:

```bash
npm install -D tailwindcss
```

### Błędy TypeScript

```bash
npm install --save-dev typescript @types/react @types/react-dom
```

---

## 6. Budowa wersji produkcyjnej

```bash
npm run build
```

Wynikowa wersja zostanie utworzona w:

```
dist/
```

---

## 7. Opcjonalne (zalecane)

### Rozszerzenia VSCode

- Tailwind CSS IntelliSense  
- Prettier – Code Formatter  

### Polecenia lint & format (jeśli skonfigurowane)

```bash
npm run lint
npm run format
```
