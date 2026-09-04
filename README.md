<h1 align="center">
  <br>
  GrowthLift Digital
  <br>
</h1>

<h4 align="center">A structured front-end development journey — from HTML basics to JavaScript APIs.</h4>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Flexbox-44cc11?style=for-the-badge" alt="Flexbox">
  <img src="https://img.shields.io/badge/CSS Grid-006400?style=for-the-badge" alt="CSS Grid">
</p>

---

## Overview

**GrowthLift Digital** is a week-by-week collection of front-end exercises, practice files, and mini-projects built to strengthen core web development skills. Each week focuses on specific topics with hands-on code examples.

---

## Project Structure

```
GrowthLift-Digital/
├── Week 1/
│   ├── Baisc HTML CSS/      └── Team portfolio with admin CRUD
│   └── Flexbox/             └── Flexbox practice (basics & layouts)
│
├── Week 2/
│   ├── CSS Journey/
│   │   ├── Grid/             └── CSS Grid fundamentals
│   │   ├── Grid Garden/      └── Visual garden built with Grid
│   │   ├── Grid vs Flexbox/  └── Side-by-side comparison
│   │   └── CSS Transition/   └── Transitions, animations & keyframes
│   │
│   └── JS Journey/
│       ├── JS Basics/        └── Variables, operators, control flow, functions, arrays
│       ├── JS DOM/           └── Selecting, changing, creating & event handling
│       └── Fetch API/        └── GET/POST requests + Quotable API integration
│
└── README.md
```

---

## Week 1 — Foundations

### HTML & CSS
A fully functional team portfolio page with:
- Responsive nav & hero section
- Infinite auto-scrolling marquee
- Admin portal with PIN authentication
- Full CRUD dashboard (Create, Read, Update, Delete)
- `localStorage` persistence

### Flexbox
Two standalone practice files covering:
| File | Topics |
|------|--------|
| `practice1.html` | `display: flex`, direction, `justify-content`, `align-items`, centering |
| `practice2.html` | Equal columns, holy grail layout, `order`, `flex` grow/shrink, wrapping, navbar |

---

## Week 2 — CSS Journey

### CSS Grid
- **Grid** — rows, columns, `fr` units, `span`, template areas, `auto-fit` + `minmax()`
- **Grid Garden** — a visual garden scene composed entirely with grid tracks
- **Grid vs Flexbox** — same layouts built both ways + comparison table

### CSS Transitions & Animations
- **Transitions** — hover effects, timing functions, delays, multi-property transitions
- **Animations** — pulsing, sliding, spinning with `iteration-count` and `alternate`
- **Keyframes** — multi-step animations: rainbow, bounce, fade-in/out

---

## Week 2 — JS Journey

### JS Basics
Five standalone HTML files, each covering core concepts:

| File | Topics |
|------|--------|
| `01-variables` | `let`, `const`, `var`, data types, `typeof` |
| `02-operators` | Arithmetic, comparison, logical, string concatenation |
| `03-control-flow` | `if/else`, `switch`, `for`, `while`, `for...of` |
| `04-functions` | Declarations, arrow functions, default params, return |
| `05-arrays-objects` | Array methods (`map`, `filter`, `reduce`), object properties & methods |

### JS DOM
One HTML + CSS shell with 5 modular JS files:
- `dom1.js` — Selecting elements (`getElementById`, `querySelector`, `querySelectorAll`)
- `dom2.js` — Changing content & styles
- `dom3.js` — Creating & appending nodes
- `dom4.js` — Event listeners (`click`, `mouseover`, `input`)
- `dom5.js` — Traversing the DOM tree

### Fetch API & Quotable API
- `fetch-basics.html` — GET request to JSONPlaceholder
- `fetch-post.html` — Full posts manager with CRUD + modal editing
- **Quotable API** — Random quote generator with save to `localStorage` + offline fallback

---

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/SAADI773/growthlift-digital.git
   ```
2. **Open any HTML file** directly in your browser
   ```bash
   # Example
   open Week\ 1/Flexbox/practice1.html
   ```
3. **For the Fetch API files**, run a local server first:
   ```bash
   python -m http.server 8000
   # then visit http://localhost:8000/Week\ 2/JS\ Journey/Fetch\ API/
   ```

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Markup | HTML5 |
| Styling | CSS3 (Grid, Flexbox, Transitions, Animations, Keyframes) |
| Logic | JavaScript ES6+ |
| APIs | Fetch API, JSONPlaceholder, Quotable API |
| Storage | localStorage |

---

## Author

**SAADI** — [GitHub](https://github.com/SAADI773)

---

<p align="center">
  <i>Build. Learn. Repeat.</i>
</p>