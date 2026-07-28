---
name: Be a Seedling site architecture
description: Key architecture decisions for the Be a Seedling website build
---

## Pages
- `/` — home.tsx (existing, updated)
- `/impact` — impact.tsx (new)
- `/governance` — governance.tsx (new)
- `/safeguarding` — safeguarding.tsx (new)
- `/partner` — partner.tsx (new)
- `/stories` — stories.tsx (new)
- `/theory-of-change` — theory-of-change.tsx (new)
- `/login`, `/admin` — existing

## Critical Rule: wouter Link + anchor nesting
`<Link href="..."><a>` creates nested `<a>` tags and triggers React hydration errors.
**Fix:** Use plain `<a href="...">` for internal navigation (wouter intercepts these) OR use `<Link href="..." className="...">text</Link>` directly.
The new page navbars all use plain `<a href="/">` not `<Link><a>`.

**Why:** wouter's `<Link>` renders its own `<a>` element; wrapping another `<a>` inside creates invalid HTML.

## Content rules (from client brief)
- Do NOT invent donors, partnerships, financial figures, staff, certifications, awards, or impact statistics
- Where info unavailable, use "Information to be uploaded" or "Policy under development"
- M-Pesa paybill does NOT exist yet — DonateModal shows bank-only with note about future digital options
- Bank: Equity Bank Kenya, Marsabit, account beaseedling, acc no 1010183178568
