# BM Management — website project context

**Last updated:** August 10, 2026
**Purpose of this file:** everything needed to pick this project up cold — on a
different computer, in a new session, with no memory of the previous work.

If you are a fresh Claude session: read this file top to bottom before touching
anything. Sections 3 and 5 are the ones that prevent real mistakes.

---

## 1. Who this is for

- **James Mellenthin** (`jamesm11875@gmail.com`) is building this site.
- **Bill Mellenthin, CPA** is James's father. The site is for Bill's business.
- Bill has not been in the conversation directly. Everything attributed to him
  has come through James. Several items still need Bill's own sign-off — see
  section 7.

Tone that has worked: professional, plain-spoken, no marketing inflation. Bill
is an experienced CPA, not a startup. The copy should sound like a competent
adult, not a brochure.

---

## 2. The business

**BM Management** — short for **B**ill **M**ellenthin **Management**.

- Single-member Colorado **LLC**, solely owned by Bill. No partners, no outside
  investors.
- Based in Denver, Colorado. Serves Denver and the Front Range.
- Bill is a **Certified Public Accountant**, licensed by the Colorado State
  Board of Accountancy.
- Undergraduate degree in Business Administration, University of Colorado at
  Boulder.
- Well over twenty years of experience.

**Naming convention used throughout the site** — deliberate, keep to it:

| Context | Use |
|---|---|
| Header wordmark, hero eyebrow | BM Management |
| Home page `<h1>` | Bill Mellenthin, CPA |
| Legal (copyright, contracting) | BM Management, LLC |

The site leads with the **person** and supports with the **company**, because
clients hire a named CPA with twenty years of history, not a new LLC.

The `BM` monogram in the header works for both the old and new naming. That was
luck, not planning — but it works, so it stayed.

---

## 3. THE POSITIONING — the most important section

Bill described his niche in his own words:

> "mess management and investigating, understanding the source of disconnect and
> then offering reorganization that leads to better results"

And on the fractional CFO line specifically:

> "more about being temporary, bringing an accounting department up to a better
> level then leaving, more structural in nature than helping to find better
> product lines"

### His four service lines

1. **Forensic Accounting**
2. **Receiverships**
3. **Estate Management**
4. **Fractional CFO Support**

### The through-line

All four are the same job: **someone else's mess, investigated, understood,
restructured, handed back working.**

- Forensic → investigating
- Receivership → taking over a mess by court appointment
- Estate → untangling and administering
- Fractional CFO → structural repair of an accounting department, then exit

The site is built around this sequence:
**Investigate → Find the disconnect → Reorganize → Hand it back.**

### What he is NOT — do not reintroduce any of this

- ❌ Not ongoing outsourced accounting or a standing part-time controller seat
- ❌ Not strategic growth advisory — explicitly **not** product lines, pricing,
  or "where to grow next"
- ❌ Not routine month-to-month bookkeeping
- ✅ Engagements are designed to **END**. Dependency is a failure mode, not a
  business model.

### Why this warning exists

The first Services page was **invented from Bill's biography** before he
explained his niche. It listed eight plausible-sounding services (controller
services, budgeting & forecasting, audit prep, transaction support, closely-held
advisory) and offered "Ongoing — a recurring monthly commitment" as the lead
engagement model.

It read completely convincingly and it was **wrong** — it would have mis-sold
him. Only one of the eight (fractional CFO) survived contact with reality.

**Lesson: do not infer service offerings from a biography.** If something about
what Bill does is not on this page or confirmed by James, ask rather than
invent.

---

## 4. What is built

Plain static HTML and CSS. **No build step, no framework, no dependencies.**
Double-click `index.html` and it opens. This is deliberate — it has to be
maintainable by someone who is not a developer.

```
Mellenthin Website/
├── CLAUDE.md                 ← this file
├── README.txt                Human-facing orientation
├── index.html                Home
├── bio.html                  Bio
├── resume.html               Resume      (PLACEHOLDER CONTENT)
├── services.html             Services
├── questions.html            Questions (FAQ)
├── assets/
│   ├── css/styles.css        One stylesheet for the whole site
│   ├── js/main.js            Mobile menu ONLY — site works without JS
│   └── images/
│       ├── bill-mellenthin.jpg          His portrait (682×328 source)
│       ├── bill-mellenthin.avif         Original format
│       ├── hero-denver-rockies.jpg      Hero photo, 2000px (151KB)
│       ├── hero-denver-rockies-small.jpg  Hero photo, 1100px (53KB)
│       └── hero-denver-rockies.svg      Original hand-drawn hero, now UNUSED
├── docs/
│   └── ACCESSIBILITY-AND-FUTURE-IDEAS.txt   Running notes + ADA plan + changelog
├── print/
│   ├── business-card.html    Card source (3.5×2in + bleed)
│   ├── business-card.pdf     Print-ready, 2 pages
│   ├── skyline-card.svg      Skyline strip for the card back
│   └── README.txt            Printer instructions
└── archive/
    ├── README.txt            What differs between versions
    ├── compare.html          Side-by-side version viewer
    └── pre-niche-2026-07-24/ Complete earlier site, self-contained
```

The five pages match the five tabs Bill asked for: Home, Bio, Resume, Services,
Questions. Contact lives in the footer and in CTAs, not as a sixth tab.

**The header and footer are copy-pasted into all five pages.** A change to
either means editing five files. Acceptable at this size; if the site grows,
move to Eleventy or HTML includes.

---

## 5. REAL vs PLACEHOLDER — check before publishing anything

### Real (came from Bill or James)
- His **biography text** — verbatim from a previous employer's website
- Education, CPA credential, years of experience
- His **portrait photo**
- The **four service lines**
- The **niche description** in section 3
- Business name, LLC structure

### Placeholder — INVENTED, must not go live as-is
- **The entire Resume page.** Every job title, employer, and date is
  scaffolding built from his bio. It is not his real work history.
- **All contact information.** `REPLACE-WITH-EMAIL@example.com` (18 instances)
  and `(303) 555-1234` (5 instances, one per footer) are fake.
- Most **FAQ answers** — several are marked `[ ]` for Bill's input.
- The supporting bullet points under each of the four services.
- The job title "Owner" on the business card.

### The convention that protects this
Invented content sits inside a yellow **"Draft placeholder"** box visible on the
page, with an HTML comment above saying exactly what to delete. Two markers:

- `[ ]` — needs Bill's input
- `TODO` — needs real data

**Search the project for `TODO` to find every spot needing real information.**

Keep this convention. Nothing fabricated should be able to reach a live site by
accident.

---

## 6. Design decisions and why

### Home page vs Services page — a deliberate split
The **home page establishes credibility**: who Bill is, what he has run, why he
can be trusted with a mess. The **Services page explains method** (Investigate →
Find the disconnect → Reorganize → Hand it back).

The method was briefly on both. It made the home page read like a process
diagram rather than an introduction, and the home page was rebuilt to lead with
credentials instead. Keep the method on Services only.

### Visual
- **Navy `#0d1f33` + bronze `#8a6029`.** Reads established and financial without
  the generic blue every accounting site uses.
- **Serif headings, sans-serif body.** Traditional and credible for the
  profession, still easy to read.
- **System fonts, no web fonts.** Fast, no network dependency, no third-party
  privacy considerations. Revisit only if more typographic personality is wanted.

### The bronze has two weights — keep them separate
- `--accent` `#b07d3a` — **decorative only** (rules, borders, dots, focus rings).
  3.6:1 on white: fine for non-text, **fails for small text**.
- `--accent-dk` `#8a6029` — **text and buttons**. 5.55:1 on white, passes AA.

This split exists because the original primary button was white-on-`#b07d3a` at
3.59:1 and failed WCAG. Do not undo it.

### Contrast is measured, never eyeballed
Colours are computed against the WCAG 4.5:1 threshold before shipping. Results
are recorded in `docs/ACCESSIBILITY-AND-FUTURE-IDEAS.txt`.

### The hero photo — read before touching it
**"Silicon Mountain" by Sheila Sund**, from Wikimedia Commons.
Licence: **CC BY 2.0** — https://creativecommons.org/licenses/by/2.0/
Source: https://commons.wikimedia.org/wiki/File:Silicon_Mountain.jpg

**Attribution is a licence condition, not a courtesy.** The `.photo-credit` line
in all five footers is what satisfies it. Do not delete it while this photo is
in use.

The shipped file is **not** the raw original. Two edits were made to solve an
accessibility problem:

1. A graduated ND on the sky (30%, feathering out by 60% height).
2. **A highlight rolloff above value 190.** This is the important one. The
   sunlit tower faces were blown to pure white (luminance 1.000). No practical
   overlay fixes pure-white pixels — the headline was landing at 3.2:1. Fixing
   it with opacity alone took ~90% and veiled the mountains entirely. Rolling
   the highlights off solved it at the source and let the overlay come back down
   to 55–74%.

Note the overlay gets **heavier toward the bottom**, which is backwards from the
usual instinct: the sky is already graded down, so the brightest thing left in
frame is the lit buildings in the lower half.

Measured white-text contrast, worst-case pixel per viewport width:
`1280=7.58  1920=6.60  1440=7.23  768=7.31  390=8.19`. Lowest is 6.60:1.

**If this photo is ever swapped, re-measure. Those numbers are specific to this
image and this grade.**

### The business card
3.5×2in trim, 0.125in bleed, two-sided, print-ready PDF at 3.75×2.25in. Layout
in inches and type in points — never pixels — so it prints at true size.

The card's skyline (`print/skyline-card.svg`) is a **separate file** from the
website's hero SVG, not a copy. The hero version was tried first and looked
broken: its buildings (`#16233a`) are near-identical to the card's navy
(`#0d1f33`) so the silhouettes vanished, while its warm window lights stayed
visible — leaving pale boxes scattered on navy. **Art drawn for a light-on-dark
hero does not transfer to a dark card unmodified.**

---

## 7. Open questions — these block launch

### Needed from Bill
1. **Email address** and **phone number** — 18 fake email placeholders and 5
   fake phone placeholders currently
2. **His actual resume** — the Resume page is entirely scaffolding
3. **Does he prepare tax returns?** The FAQ currently dodges it
4. **Is BM Management a registered CPA firm?** Colorado regulates holding out as
   a CPA firm, firm registration, and use of "CPA" in a business name. Note the
   company name does not contain "CPA". A placeholder answer sits on the
   Questions page saying only that Bill personally is licensed — **he must write
   this answer himself.** Do not guess at it.
5. **Exact registered LLC name** on the Colorado Secretary of State filing.
   "BM Management, LLC" and "BM Management LLC" are different strings; the
   footer must match the filing character for character.
6. Fee structure, service area, accounting software to list, professional
   memberships, LinkedIn URL

### The big unresolved strategic question
**Who is the primary audience — attorneys or business owners?**

Forensic accounting and receivership work usually arrives via **attorneys and
courts**. Fractional CFO work arrives via **owners**. The site currently
addresses owners throughout (the Questions page still says "what business owners
usually ask first").

If attorneys are the real referral channel, the vocabulary and proof points need
to change — independence, court experience, testimony — and that reshapes more
than the Services page. **Bill has not answered this.**

### Other pending items
- Buy a domain — `bmmanagement.com` first; also grab `billmellenthincpa.com` and
  redirect, since people who know Bill will search his name
- Replace `mailto:` links with a real contact form (Formspree/Netlify/Basin)
- Favicon, Open Graph tags, schema.org markup
- The full ADA/WCAG 2.1 AA pass — plan is in `docs/`
- A higher-resolution portrait; the current source is 682×328, a wide crop

---

## 8. Conventions to follow

1. **Static HTML/CSS. No build step.** Do not introduce a framework, bundler, or
   package.json without being asked.
2. **Flag invented content visibly.** See section 5.
3. **Measure contrast, don't eyeball it.** Record results in `docs/`.
4. **Do not silently rewrite Bill's own words.** His bio came from a previous
   employer's site. Where it now reads oddly, the fix is an HTML comment
   suggesting a rewrite, not an edit. There is a live example in `bio.html` —
   the phrase "...to the firm" is ambiguous now that BM Management exists, and
   it is flagged rather than changed.
5. **US English.** Denver business. (I slipped into "stabilising" and
   "specialised" once and had to correct them.)
6. **Keep `docs/ACCESSIBILITY-AND-FUTURE-IDEAS.txt` updated** rather than
   starting new notes files. It has the ADA plan, decisions, and a changelog.
7. **Verify before claiming done.** Renders were checked with headless Chrome at
   320/390/768/1280/1920, links were checked programmatically, and the card PDF
   geometry was verified. Keep doing that.

---

## 9. What happened, in order

1. Built the five-page site from Bill's bio, with a hand-drawn SVG hero of the
   Rockies and Denver skyline (chosen over stock so there were no licensing
   questions in a draft).
2. Found and fixed a **real WCAG failure** — white on the bronze button at
   3.59:1.
3. Replaced the illustrated hero with a **real licensed photograph**; discovered
   the blown-highlight contrast problem described in section 6.
4. Changed the bottom home-page CTA to "Let's talk about your needs".
5. **Named the business BM Management**; rolled the naming through all pages,
   added entity FAQs, added Practice/Structure rows to the Bio.
6. Built the **business card** from the four service lines Bill supplied.
7. Fixed the "random boxes" on the card back (the window-lights problem).
8. **Bill explained his niche** — which contradicted the drafted Services page.
   Rebuilt Services entirely; updated Home, Bio, Questions, and the card
   tagline to match.
9. Created `archive/` so the pre-niche version could be compared against the
   current one.
10. **Restored the home page's structure** to match the archived version,
    which read as more professional — calm benefit-led headline, credentials
    first, and the "What Bill Brings" credibility cards. The corrected
    positioning was kept; only the register and running order changed.

Full changelog with detail is in `docs/ACCESSIBILITY-AND-FUTURE-IDEAS.txt`.

---

## 10. Moving to another computer

### What to copy
**The entire `Mellenthin Website` folder.** It is fully self-contained — no
dependencies, no node_modules, nothing installed. Copy it, double-click
`index.html`, and it works. Under 1MB including the archive — it fits anywhere:
email, USB stick, Dropbox, AirDrop.

### ⚠️ One thing that will NOT transfer
During this work, project notes were also saved to Claude Code's memory at:

```
~/.claude/projects/-Users-jamesmellenthin-Desktop-Claude-Website-IdeaS-Mellenthin-Website/memory/
```

That path is **outside the project folder** and will not come along with it.
Everything in those files has been folded into this document deliberately, so
nothing is lost — **this file is the source of truth.** If you want the memory
files too, copy that directory separately, but it is not required.

Note also that the memory path is derived from the folder's location on disk.
If the project lands at a different path on the new machine, Claude Code will
treat it as a new project with empty memory. That is fine — `CLAUDE.md` is read
from the project folder itself and will load regardless.

### Strongly recommended: put this under git first
This project is **not** under version control, and it has already cost
something. When the pre-niche version was wanted back for comparison, there was
no commit to return to — it had to be reconstructed by reversing each edit by
hand. That worked and was verified, but it only worked because the edits were
still recoverable in the session.

Three commands prevent it recurring:

```bash
cd "path/to/Mellenthin Website"
git init
git add -A
git commit -m "First draft — BM Management site"
```

After that, comparing versions is `git diff` and going back is `git checkout`.
The `archive/` folder becomes unnecessary.

### Resuming work
Open the folder in Claude Code and say what you want to do. This file loads
automatically. A reasonable first message:

> Read CLAUDE.md. We're continuing the BM Management site. [what you want next]

The most valuable next steps, in order:
1. Get Bill's real contact details in — the site cannot launch without them
2. Get his real resume in
3. Answer the attorneys-vs-owners question in section 7, since it affects copy
   across the whole site
