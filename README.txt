BM MANAGEMENT — WEBSITE
Bill Mellenthin Management · Bill Mellenthin, CPA
First draft, July 24, 2026

-------------------------------------------------------------------------------
MOVING THIS TO ANOTHER COMPUTER, OR PICKING IT BACK UP LATER
-------------------------------------------------------------------------------
Read CLAUDE.md in this folder. It has the full story — the business, the
positioning, what is real vs placeholder, why each design decision was made,
and what still needs answering. It is written so someone (or Claude) can start
cold and know what is going on.

Copy the WHOLE folder. Nothing is installed and nothing is linked externally,
so it works anywhere as-is.

-------------------------------------------------------------------------------
TO VIEW IT
-------------------------------------------------------------------------------
Double-click index.html. It opens in your browser. There is no build step and
no server needed — it's plain HTML and CSS.

-------------------------------------------------------------------------------
WHAT'S HERE
-------------------------------------------------------------------------------
index.html         Home
bio.html           Bio
resume.html        Resume
services.html      Services
questions.html     Questions

assets/css/        One stylesheet for the whole site
assets/js/         Mobile menu only (site works fine without JavaScript)
assets/images/     Bill's portrait + the hero photo and illustration
docs/              Accessibility plan, future ideas, and the open-questions list
print/             Business card (HTML source + print-ready PDF)
archive/           Earlier versions of the site, kept for comparison

TO COMPARE VERSIONS: open archive/compare.html — it shows the current site
and the pre-niche version side by side, page by page. See archive/README.txt
for exactly what differs.

-------------------------------------------------------------------------------
READ THIS FIRST
-------------------------------------------------------------------------------
  docs/ACCESSIBILITY-AND-FUTURE-IDEAS.txt

That file has the full list of what we still need from Bill, the ADA/WCAG
plan for later, design decisions already made, and the running idea list.

-------------------------------------------------------------------------------
WHAT'S REAL VS. PLACEHOLDER
-------------------------------------------------------------------------------
REAL:         The bio text (verbatim from his old firm's site), his education,
              his CPA credential, his portrait photo, and the Denver/Rockies
              hero photograph.

PLACEHOLDER:  Everything on the Resume page, the services list, most FAQ
              answers, and ALL contact information.

Placeholder sections are marked with a yellow "Draft placeholder" box on the
page so nothing invented can go live by accident. Each box has an HTML comment
above it saying exactly what to delete once real content is in.

To find every spot needing real information, search the project for: TODO

-------------------------------------------------------------------------------
BEFORE THIS GOES ONLINE
-------------------------------------------------------------------------------
At minimum, replace these:

  1. REPLACE-WITH-EMAIL@example.com   (appears 18 times across the 5 pages)
  2. (303) 555-1234                   (the footer phone, 5 times — one per page)
  3. The entire Resume page content
  4. Delete the three "Draft placeholder" boxes
  5. Confirm the EXACT registered LLC name against the Colorado Secretary of
     State filing. The footers currently read "BM Management, LLC" — if the
     filing says "BM Management LLC" (no comma), match it exactly.
  6. Have Bill write the "Is BM Management a CPA firm?" answer on the
     Questions page himself. Colorado has real rules about holding out as a
     CPA firm and about firm registration; that answer should be his.

The phone number and email are fake placeholders — do not publish them as-is.

-------------------------------------------------------------------------------
ONE LICENCE NOTE
-------------------------------------------------------------------------------
The hero photograph ("Silicon Mountain" by Sheila Sund) is Creative Commons
CC BY 2.0. That allows commercial use and editing, but REQUIRES a credit.
That's the small line at the very bottom of every page. Leave it there while
the photo is in use.

If Bill would rather not carry a credit line, the doc in docs/ lists the
alternatives — the short version is that Unsplash photos need no attribution,
or a paid stock licence removes the requirement entirely.
