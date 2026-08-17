BM MANAGEMENT — BUSINESS CARD
Draft 1, July 24, 2026

-------------------------------------------------------------------------------
FILES
-------------------------------------------------------------------------------
business-card.html   The source. Edit this.
business-card.pdf    Generated from the HTML — this is what a printer wants.
skyline-card.svg     The skyline strip on the back. Card-specific; see below.

To see it:     double-click business-card.html
To re-make
the PDF:       open the HTML in Chrome, Cmd+P, "Save as PDF",
               margins = None, scale = 100%, Background graphics = ON
               (the last one matters — without it the navy prints white)

-------------------------------------------------------------------------------
SPECS
-------------------------------------------------------------------------------
Trim size      3.5 x 2in  (standard US business card)
Bleed          0.125in on every side
Overall        3.75 x 2.25in  <- this is the PDF page size
Safe margin    0.16in inside the trim; no text sits outside that
Sides          2 (front = page 1, back = page 2)
Colour         RGB

The dashed line you see on screen is the trim guide. It does NOT print — it is
there so you can see where the cut lands.

WHAT TO TELL THE PRINTER: "3.5 x 2 inch, double-sided, 0.125 inch bleed
included, PDF is already at final size." Most online printers (Moo, Vistaprint,
Jukebox, local shops) will accept this file as-is.

If a printer asks for CMYK instead of RGB, say so and the colours can be
converted — the navy and bronze will shift very slightly but not visibly.

-------------------------------------------------------------------------------
STILL PLACEHOLDER — DO NOT ORDER YET
-------------------------------------------------------------------------------
  [ ] REPLACE-WITH-EMAIL@example.com
  [ ] (303) 555-1234
  [ ] "Owner" — confirm the title. Accurate for a single-member LLC, but
      "Principal" or "Owner & Principal" are equally fine.
  [ ] Decide whether to add a website URL once the domain is bought. There is
      room under the phone number; it is left off deliberately for now rather
      than printing a dead address.

-------------------------------------------------------------------------------
DESIGN NOTES
-------------------------------------------------------------------------------
Matches the website: same navy (#0d1f33) and bronze (#8a6029), same serif
headings over sans-serif body, same BM monogram with the bronze underline.

FRONT   Monogram + wordmark top left, the four service lines top right as
        requested, name and title bottom left, contact details beneath.
        A thin navy band bleeds off the top edge.

BACK    Navy, centred monogram in a bronze keyline, with a Denver skyline
        strip along the bottom. Its top edge is masked so it fades into the
        navy rather than ending on a hard horizon line behind the tagline.

        The skyline is skyline-card.svg — drawn for this card, NOT the
        website's hero SVG. The hero version was tried first and looked
        wrong: its buildings are almost the same colour as the card's navy,
        so the silhouettes disappeared while its warm window lights stayed
        visible, leaving pale boxes scattered on navy. The card version has
        no windows and a lighter fill that reads against the background.

        The buildings are separate shapes with an 8-unit gap between them and
        three alternating tones. A previous version used one continuous
        low-rise band to guarantee the bottom edge was covered; it did that,
        but it fused everything into a single blob. The gaps are narrow
        enough (~1.8px on screen, ~0.019in printed) that the base still reads
        as a dense city, not as isolated towers.

        IF YOU EDIT skyline-card.svg, READ THE COMMENT AT THE TOP OF IT.
        Only the top 187 units of its 240-unit viewBox are ever visible —
        the bottom 53 sit in the bleed and the printer cuts them off. The
        first attempt at making the bottom edge continuous drew the low-rise
        band at y=186-240, which is almost entirely inside the trim, so on
        the printed card nothing changed. Rooflines belong in y 20..170.

        Horizontally the trim takes ~53 units off each end too, which is why
        the two corner buildings start at x=0 and end at x=1600 and are 114
        wide — a narrower one would be cut away completely and the corner
        would go back to bare navy.

The colour tokens at the top of the HTML are a COPY of the ones in
assets/css/styles.css, so this file can be sent to a printer on its own. If the
site palette ever changes, change it here too or the two will drift apart.

Type sizes are set in points and the layout in inches, never pixels, so the
card prints at true size regardless of screen or DPI.
