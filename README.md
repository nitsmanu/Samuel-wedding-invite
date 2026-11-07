# Christian Wedding Invitation — Free Editable Dummy

A mobile-first, cinematic wedding microsite template. No cross graphics are used, and the bride/groom are represented separately so you can use individual portraits.

## Edit it
1. Open `index.html` in a browser to preview.
2. Open `script.js` and edit the `WEDDING` object at the top.
3. Replace the `GROOM PHOTO` and `BRIDE PHOTO` placeholder blocks with your images (see notes below).
4. Replace gallery placeholders with your images.
5. Replace the event names, dates, times, venue and text directly in `index.html`.
6. Put your MP3 at `assets/wedding-song.mp3`.

## Make photos real
The easiest method is to replace a placeholder div such as:
`<div class="portrait placeholder"><span>GROOM PHOTO</span></div>`
with:
`<div class="portrait"><img src="assets/groom.jpg" alt="Groom"></div>`
Then add this CSS to `style.css`:
`.portrait img{width:100%;height:100%;object-fit:cover;display:block}`

## Free hosting
You can host this as a static site on GitHub Pages or Cloudflare Pages. No paid framework is required.

## RSVP
The included RSVP is a demo only. For real submissions, connect the form to a free service such as Google Forms or Formspree, or replace the submit handler with your preferred backend.

## Important
This is an original template inspired by the interaction pattern of modern wedding microsites. It does not copy Wedence's proprietary code, assets, or branding.
