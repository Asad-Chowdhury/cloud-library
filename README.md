# Cloud Library

Cloud Library is a modern digital library application built with Next.js. It helps users explore a curated collection of Story, Tech, and Science books, search by title, filter by category, view book details, and use placeholder authentication screens that are ready for BetterAuth integration.

## Live URL

Deployment URL: `https://cloud-library.vercel.app`

Update this URL after deploying the project to Vercel or your chosen hosting platform.

## Purpose

The project digitizes the traditional library experience with responsive browsing, private-route-ready profile and book details pages, and a clean foundation for BetterAuth and MongoDB integration.

## Key Features

- Responsive navbar with Home, All Books, My Profile, login state UI, and logout action.
- Home page banner with Browse Now CTA.
- Scrolling new-arrivals marquee.
- Featured books section using local JSON-style data.
- Two extra home sections for platform readiness and reading stats.
- All Books page with title search and category sidebar filtering.
- Book details page with cover, author, description, availability, and borrow confirmation.
- Login and Register UI routes grouped under `(auth)`.
- Profile and update profile UI prepared for protected access.
- Custom footer with social media links and contact information.
- Environment variable template for BetterAuth and MongoDB keys.

## NPM Packages Used

- `next`
- `react`
- `react-dom`
- `tailwindcss`
- `@tailwindcss/postcss`
- `daisyui`
- `lucide-react`
- `swiper`
- `eslint`
- `eslint-config-next`
- `babel-plugin-react-compiler`

## Environment Variables

Create a `.env.local` file using `.env.example` as the template. Keep real credentials out of Git.

```bash
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
MONGODB_URI=
```

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run lint
npm run build
```
