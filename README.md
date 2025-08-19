# Rentify — Frontend (Vue + Vuetify)

Simple Vue + Vuetify frontend for the Rentify app. This repository contains only the frontend code.

## Tech stack
- Vue (CLI project)
- Vuetify (UI library)
- Axios (HTTP client)

## Quick start
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run serve
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Lint and fix:
   ```bash
   npm run lint
   ```

## Project structure (key files)
- `src/main.js`: App entry point
- `src/App.vue`: Root component with a basic Vuetify layout
- `src/components/loginComponent.vue`: Login form UI (email/password with validation)
- `src/plugins/vuetify.js`: Vuetify plugin setup
- `src/plugins/vue.js`: Vue export helper
- `public/index.html`: HTML template

## Features
- Basic Vuetify layout scaffold in `App.vue`
- Login form component with validation rules (not yet connected to an API)
- Axios installed and ready for API integration

## Configuration and environment
This project currently does not use environment variables. If you integrate APIs, you may want to add a base URL via a `.env` file (Vue CLI uses `VUE_APP_*` variables):

```env
VUE_APP_API_BASE_URL=https://api.example.com
```

Then reference it in your code via `process.env.VUE_APP_API_BASE_URL`.

## Known limitations and TODOs
- Dependencies vs code mismatch:
  - `package.json` declares Vue 3 and Vuetify 3, but the code uses patterns closer to Vue 2 / Vuetify 2 (e.g., `new Vue(...)` and `new Vuetify(...)`). This likely needs alignment.
  - Recommended paths:
    - EITHER migrate the code to Vue 3 + Vuetify 3 (use `createApp` and `createVuetify`).
    - OR pin to Vue 2 + Vuetify 2 and adjust dependencies accordingly.
- No routing yet (e.g., `vue-router`).
- No state management (e.g., `pinia` or `vuex`).
- Form is not wired to a backend; Axios is installed but not used.
- No tests.

## Suggested next steps
- Decide on framework versions and align code + deps (Vue 3 + Vuetify 3 recommended).
- Add routing and pages (e.g., Login, Dashboard, Listings).
- Connect login to a backend endpoint and handle API errors.
- Add basic auth state handling and protected routes.
- Add unit and e2e tests.
- Improve accessibility and responsive behavior where needed.

## Context
This frontend was built as part of a time‑boxed assignment (approximately 3–4 hours). As a result, it focuses on core scaffolding and a login UI rather than production‑ready polish. The section above lists clear next steps for maturation.

## Scripts
All scripts are provided via Vue CLI:

```bash
npm run serve   # Start dev server with HMR
npm run build   # Build for production
npm run lint    # Lint and attempt to fix
```

## License
No license specified.

