# Dalbert Joe J — Portfolio

A blazing, heroic portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Page transitions & animations |
| React Icons | Icon library |
| Canvas API | Live flame rendering |

## Features

- **Loading screen** — animated percentage counter with orange glow
- **Flame sweep transition** — canvas-rendered fire woosh between loading & hero
- **Hero section** — blazing name reveal with live bottom flames, particle burst on click
- **About** — photo + bio with teal frame
- **Projects radial wheel** — infinite scroll/drag carriage-wheel dial, 6 projects, click to detail
- **Project detail** — full project info with image, tags, badge
- **Achievements** — numbered list with hover slide
- **Publications** — best paper award card
- **Skills** — 23 skills with devicon SVGs in fire-ring bubbles, hover float animation
- **Education** — timeline + courses
- **Contact** — 4 cards with icons (phone, email, LinkedIn, GitHub)
- **Custom cursor** — orange dot + trailing ring

## Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

- **Your photo**: `public/dalbert.png` — replace with any photo
- **Content**: Edit `src/data/portfolio.js`
- **Colors**: Edit `tailwind.config.js` → `brand` colors
- **Fonts**: Loaded from Google Fonts in `index.html`

## Color Palette

| Name | Hex |
|------|-----|
| Green (bg) | `#163d36` |
| Orange (accent) | `#f85001` |
| Teal (highlight) | `#1ab8c8` |
| Flame yellow | `#ffd700` |
| Ember | `#ff6b00` |
