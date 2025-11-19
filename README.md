# Za-Duzo-Niczego-Website
Za Duzo Niczego to projekt społeczny mający na celu uświadamiać o problemie jakim jest uzależnienie od Dopaminy, a to jest strona tego projektu.

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
git clone https://github.com/username/project-name.git
cd project-name
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

- Remove leftover `postcss.config.js` or `postcss.config.ts`
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
