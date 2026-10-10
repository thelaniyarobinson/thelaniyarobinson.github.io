# La’Niya Robinson — technology portfolio

A responsive, standalone HTML/CSS/JavaScript portfolio. No installation or build needed. Includes a homepage and a dedicated Matchflow case study. All assets are local; no tracking, generated people, external fonts, or framework dependencies.

## Content status — read before publishing

The uploaded Matchflow project README was unavailable to this session. The case study is a draft grounded in the user's explicit contribution credits. It deliberately leaves out unverified product functionality, problem statements, stack, awards, dates, performance metrics, and credentials. The case-study documentation notice should remain until the project README is reviewed. This README describes the portfolio; it is not the missing Matchflow source document.

Confirmed credits: La’Niya Robinson — product concept, UX, Matchflow naming, branding, testing, presentation. Yateeka — lead developer. Amy — design/presentation. Madhuri — feedback/review.

## Edit links

Open `config.js`. Set `matchflowRepositoryUrl` to the actual Matchflow repository URL. Leave it empty until known; the site shows a visible pending label instead of a broken link. Optional `linkedinUrl`, `githubProfileUrl`, and `email` appear on the homepage only when set. Do not use the portfolio repository URL as the Matchflow repository URL unless they really are the same repository.

Edit text in `index.html` and `matchflow.html`. Edit colors and layout in `styles.css`. The live demo is linked directly in the case-study page: https://matchflowgirly.netlify.app/ .

## Preview

Open `index.html` in a browser. For an HTTP preview, from this folder run `python -m http.server 4173 --bind 127.0.0.1`, then visit http://127.0.0.1:4173 . Stop the server with Ctrl+C when finished.

## GitHub Pages publishing

No repository was created or changed, and nothing was published. Confirm your GitHub account and desired repository destination before any assisted publishing.

1. Choose a separate new repository, such as `laniya-tech-portfolio`. For GitHub Free, use a public repository. To use your account's root website instead, the repository must be named `YOUR-USERNAME.github.io`.
2. Upload the **contents** of this folder to the repository root, including `index.html`, `matchflow.html`, `styles.css`, `config.js`, `site.js`, `logo.png`, `portrait.jpg`, and `.nojekyll`. Do not upload the ZIP itself. Make sure `index.html` is at the top level.
3. In the repository, open **Settings → Pages**. Under Build and deployment, choose **Deploy from a branch**, then `main` and `/(root)`, and Save.
4. Wait for deployment. In Pages settings, use **Visit site**. A project repository normally uses `https://YOUR-USERNAME.github.io/laniya-tech-portfolio/`; an account site uses `https://YOUR-USERNAME.github.io/`.
5. Check both pages on your phone, internal navigation, the demo link, and the real repository link after adding it. Relative asset and page links support either URL structure.

Official guidance: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Before sharing

- Verify and complete project details using the original Matchflow README.
- Add your actual Matchflow repository and any preferred contact/profile links to `config.js`.
- Review the copy. AI, business technology, and tech sales are framed as interests rather than credentials or implemented project features.
- Confirm the destination account and repository. This portfolio is separate from the Matchflow application.

## Branding

The portfolio uses La’Niya’s supplied original LR logo in `logo.png`. The original image is preserved; CSS frames the monogram for the header. Pale pink and black match the supplied personal branding.

The homepage uses the supplied PhotosBySeven portrait in `portrait.jpg`, preserved without retouching. CSS controls its display crop.

Visual direction: pink-and-black tech editorial, with grid backgrounds, monospace interface labels, a profile-window portrait, and structured product cards. Decorative code labels do not claim a programming stack or implemented feature.

Current theme: dark ink backgrounds, luminous pink accents, soft pink glows, and subtle technical grids. The original pink-and-black LR logo is retained.

## Pixel sidekick

The homepage includes an original SVG pixel character with a click-to-cycle fact bubble. Edit the `funFacts` array in `config.js` to add personal facts. It uses only supplied project details, interests, and design preferences. Animation respects reduced motion preferences.

The sidekick now uses a smooth original SVG illustration and floats near the screen edge. Clicking opens her fact bubble; close with × or Escape. Movement pauses during interaction and respects reduced motion.

About content incorporates the supplied September 2026 résumé. No phone number or home address is displayed. The white logo is `logo-transparent.svg`, wrapping the exact original image with a luminance-to-alpha filter to remove black cleanly.

The current companion asset is `companion-fashion.png`, a transparent fashion pixel illustration based on the supplied visual reference. Floating and fun-fact controls remain unchanged.

The floating companion is named Niya Bot. Her current asset is `niya-bot.png`, with a rounded black afro, warm caramel skin, black-and-white suit, and black Chanel bag.

Decorative tech details include `circuit.svg`, monitor panel bars, and binary labels. These are decorative and do not represent live system status or project functionality.

Positioning incorporates the supplied LinkedIn screenshots: first-generation student, Realtor®, sales and business development experience, and aspirations in technology sales and solutions consulting. LinkedIn profile: https://www.linkedin.com/in/laniyarobinson/ . No unverified revenue numbers, brokerage affiliation, or real-estate role dates were added.

The first page visit per browser tab shows a brief animated logo intro. Later navigation skips it. Reduced motion skips the intro. Desktop pointers use pink SVG cursors; touch devices keep their native behavior.
