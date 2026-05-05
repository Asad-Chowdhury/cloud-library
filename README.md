# Cloud Library

Cloud Library is a polished digital book borrowing platform for readers who want a fast, modern alternative to the traditional library counter. The application lets users browse real book titles, filter by category, inspect availability, authenticate securely, and manage their reader profile from a responsive interface.

## Live Preview

Live URL: `https://cloud-library.vercel.app`

Repository: `https://github.com/your-username/cloud-library`

## Project Goal

The goal of Cloud Library is to deliver a client-ready library experience that feels simple for readers and practical for library operators. It focuses on the core borrowing journey: discover a title, check available copies, sign in, and borrow from a protected details page.

## Core Features

- Responsive navigation with dynamic authentication state.
- Full-screen Swiper banner with clear Browse Now and Login actions.
- New-arrivals marquee powered by `react-fast-marquee`.
- Real book catalog with cover images, authors, descriptions, categories, and availability.
- Searchable All Books page with category filtering for Story, Tech, and Science.
- Protected single book details page with borrow confirmation.
- BetterAuth email/password registration and login.
- Google social login integration.
- Private profile dashboard with reader account information.
- Profile update flow for name and image.
- Custom footer with contact details and social media icons.

## User Experience Highlights

- Mobile, tablet, and desktop responsive layouts.
- Clear form validation for login and registration.
- Register password rules shown directly in the UI.
- Private routes redirect unauthenticated users to login.
- Book borrowing sections explain the reader journey and dashboard value.
- Consistent visual language using Tailwind CSS and DaisyUI.

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- DaisyUI
- BetterAuth
- MongoDB
- Swiper
- React Hook Form
- React Fast Marquee
- React Icons
- Lucide React

## Environment Variables

Create a `.env` or `.env.local` file in the project root.

```bash
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
MONGO_URI=
```

`MONGODB_URI` is also supported if you prefer that name instead of `MONGO_URI`.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser. If port `3000` is busy, Next.js may start the app on another port.

## Production Build

```bash
npm run lint
npx next build --webpack
```

The webpack build command is useful in restricted local environments where Turbopack cannot bind its internal build port.

## Deployment Notes

This project is ready for deployment on Vercel or a similar Next.js hosting platform. Add the same environment variables in the hosting dashboard before deploying. For Google login, make sure the authorized redirect URL matches your deployed domain and BetterAuth callback route.

## Client Showcase Summary

Cloud Library demonstrates a complete modern borrowing workflow with authentication, protected pages, catalog discovery, and profile management. It is structured to be extended with real borrowing records, due dates, return history, and administrative inventory management.
