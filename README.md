# EazyKash

EazyKash is a **Next.js 13** application built with the App Router that provides a simple interface for sending payments, managing recipients, and handling user profiles. Authentication and database/storage are powered by **Supabase**. The project is structured with clean components and API routes to keep the frontend and backend logic organized.

---

## Key Features

- **Email/password authentication** via Supabase
- **Payouts**: create transactions to external payment providers
- **Recipient management**: save and resolve recipient accounts
- **Profile settings**: update user-specific preferences
- **Payments history** and success/error handling
- Modular React components with Tailwind CSS
- Server-side logic contained within `app/api` routes

---

## Getting Started

### Prerequisites

- Node.js 18+ (or compatible with Next.js)
- npm, yarn, pnpm or bun
- Supabase project (for auth, database, storage)
- Environment variables (see below)

### Installation

```bash
# clone repository
git clone https://github.com/CodewithMiguelll/eazykash.git
cd eazykash

# install dependencies
npm install
# or yarn install
# or pnpm install
```

### Environment Variables

Copy the example and fill with your credentials:

```bash
cp .env.example .env.local
```

You will need:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (server only)
- any other API keys for your payment provider

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building & Production

```bash
npm run build
npm start
```

Or deploy using Vercel, Netlify, or any Next.js-compatible platform.

---

## Project Structure

```text
src/
  app/                 # Next.js App Router pages & layouts
    api/
      payout/route.ts  # handles payout creation
      resolve-account/route.ts # resolves recipient account info
    auth/              # login UI & callback
    payments/          # payment pages & layouts
    profile/           # user profile and settings
    about/             # informational pages
  components/          # reusable React components
  lib/                 # shared helpers (e.g. utils.ts)
  utils/supabase       # client/server wrappers
```

---

## Authentication

Auth is managed using Supabase's built-in OAuth/Email flows in `src/utils/supabase/client.ts` and `server.ts`. The login page triggers a redirect to the Supabase auth endpoint, and `auth/callback/route.ts` processes the returned session.

---

## API Routes

- `POST /api/payout` → create a new payout
- `GET/POST /api/resolve-account` → lookup recipient info

Server routes validate requests, interact with external payment providers, and insert records into Supabase.

---

## Development Tips

- Use `CountUp` component for animated numbers
- The `payment-form.tsx` component is the main form used on the payments page
- `profile-sidebar.tsx` contains navigation for profile subpages
- Tailwind CSS classes are used throughout; adjust in `globals.css` or `postcss.config.mjs`

---

> **Note:** EazyKash is not an open source project. Contributions are not being accepted at this time. The repository is intended for internal use only.

---

## License

This repository is private and not distributed under an open source license. Refer to internal documentation or contact the project owner for licensing information.

---

Happy coding! 
