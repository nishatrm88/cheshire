
# Cheshire — Cat Products Storefront with Subscription Box

Bright, fun, blue‑hued storefront for Malaysia. Built with Next.js + Tailwind.
Includes: product catalog, cart, subscription box builder (monthly/annual), and redirect‑based checkout via Stripe Payment Links (or iPay88 links).

## 1) Setup
```bash
npm install
npm run dev
```

## 2) Configure payments (no code)
- Create **Stripe Payment Links**:
  - One‑off cart link (products total) — or use a generic link for now.
  - Monthly subscription plan link.
  - Annual subscription plan link.
- Copy links into `.env.local` (see `.env.local.example`) and restart `npm run dev`.

Alternatively, replace the env vars with **iPay88** or **PayPal** links.

## 3) Deploy to Vercel
- Push this folder to GitHub (or upload directly).
- On Vercel: New Project → Import → Framework automatically detected.
- Add the same env vars in Vercel Project Settings → Environment Variables.
- Deploy. Connect your custom domain if desired.

## 4) Manage products
- Edit `lib/catalog.ts` to add/edit products (name, price, description, tag, rating).
- Prices are in RM by default. Change `money()` in `lib/cart.ts` for other currencies.

## 5) Subscriptions
- The **Add subscription** button drops a subscription item in the cart with your chosen plan.
- At checkout, the app redirects to the relevant Stripe link (monthly or annual).
- For full Stripe Billing + programmatic checkout, wire a Next.js API route using the Stripe SDK.

## 6) Optional Admin
- For a no‑code admin, use Airtable/Notion as a headless catalog and fetch in `getStaticProps`.
- Or ask ChatGPT to add an `/admin` page with password and CRUD for products.

---
© Cheshire
