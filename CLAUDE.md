# PrepPal

A recipe tracking web app that extracts ingredients, steps, and macros from social media video links (TikTok, YouTube, Instagram) using AI.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 7**
- **Tailwind CSS v4** (CSS-based config via `@theme` in `src/index.css`)
- **React Router v7**

## Project Structure

```
src/
  pages/
    Landing.tsx       # Marketing landing page
    Dashboard.tsx     # Authenticated user dashboard
    Login.tsx
    SignUp.tsx
    ResetPassword.tsx
    Import.tsx        # URL entry point
    Processing.tsx    # AI processing states (downloading/transcribing/parsing)
    RecipeEditor.tsx  # Edit extracted recipe
  components/
    Navbar.tsx        # Shared nav bar
    UrlInput.tsx      # URL paste input with embedded "Get Recipe" button
  App.tsx             # Router setup
  main.tsx
  index.css           # Tailwind v4 theme tokens + component classes
```

## Theme Tokens

All tokens live in `src/index.css` under `@theme`.

### Fonts
- `font-heading` — Aboreto (serif) — used for all headings
- `font-body` — Golos Text (sans-serif) — used for body text

### Typography Classes (`@layer components`)
| Class | Size | Font |
|---|---|---|
| `.heading-xl` | 96px | Aboreto |
| `.heading-lg` | 64px | Aboreto |
| `.heading-md` | 48px | Aboreto |
| `.heading-sm` | 36px | Aboreto |
| `.body-text` | 24px | Golos Text |

All headings use `letter-spacing: -0.05em`.

### Colors
| Token | Hex | Tailwind Class |
|---|---|---|
| `gold` | `#C0B87A` | `bg-gold`, `text-gold` |
| `cream` | `#F2E3BB` | `bg-cream`, `text-cream` |
| `cream-light` | `#F9F5EC` | `bg-cream-light`, `text-cream-light` |
| `green` | `#427A43` | `bg-green`, `text-green` |
| `green-dark` | `#005F02` | `bg-green-dark`, `text-green-dark` |

## User Flow

1. Landing (`/`) → paste URL → `/processing`
2. Processing → `/editor` (recipe review)
3. If not logged in → `/signup`
4. Login → `/dashboard`
5. Forgot password → `/reset`

## Key Notes

- Tailwind v4 uses `@theme` in CSS — no `tailwind.config.js`
- `@apply` and `@layer` warnings in VSCode are suppressed via `.vscode/settings.json`
- Hero background image: `public/Landing-Hero.png`
- Commit format: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
  `<type>[optional scope]: <description>`

## Memory & Self-Improvement

Claude should maintain a persistent memory file at:
`~/.claude/projects/-Users-jimjim-Desktop-apps-liftsafe-preppal-Untitled-preppal/memory/MEMORY.md`

### Rules
- At the start of each session, read `MEMORY.md` to restore context
- After completing any non-trivial task, update `MEMORY.md` with what was learned
- Keep `MEMORY.md` concise — organized by topic, not chronologically
- Create separate topic files (e.g. `patterns.md`, `decisions.md`) for deep notes
- Remove or correct memories that turn out to be wrong
- Never duplicate what's already in this `CLAUDE.md`
