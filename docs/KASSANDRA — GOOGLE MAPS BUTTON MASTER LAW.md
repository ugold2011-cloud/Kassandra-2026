# KASSANDRA — GOOGLE MAPS BUTTON MASTER LAW

## STATUS
PERMANENT / MANDATORY / NO EXCEPTIONS

## MASTER REFERENCE
The approved Google Maps button implementation in:

`src/pages/Days/Dramis.jsx`

is the **single visual and behavioral source of truth** for every Google Maps navigation button in Kassandra-2026.

The Dramis implementation has passed physical mobile verification and is the approved MASTER STANDARD.

## MANDATORY GOOGLE MAPS BUTTON STANDARD

Every Google Maps navigation button in Kassandra-2026 MUST:

- appear on a separate row BELOW the Waze button
- use a WHITE background
- use border color: `#dbe2ea`
- use dark centered text
- match the approved Dramis button in:
  - width
  - height
  - border-radius
  - padding
  - spacing
  - alignment
  - mobile behavior
- visually remain consistent across ALL station pages

## WAZE PROTECTION

The existing Waze button/link is independent.

When adding or standardizing Google Maps:

- DO NOT change the Waze URL
- DO NOT change Waze coordinates
- DO NOT redesign the Waze button
- DO NOT move or alter existing Waze behavior unless separately approved

## NAVIGATION BUTTON LABEL STANDARD

Across ALL Kassandra station pages, navigation button labels are fixed and universal.

Waze button:
🚗 Waze

Google Maps button:
📍 Google Maps

RULES:

1. Do NOT include the station/destination name inside either navigation button.
2. Do NOT use labels such as:
   "Waze ל-Petralona Cave & Museum"
   "Google Maps ל-Petralona Cave & Museum"
3. The destination name already appears in the station page and does not need to be repeated in navigation buttons.
4. The fixed short labels prevent long station names from changing button dimensions or mobile layout.
5. Navigation buttons must remain visually uniform across all stations.
6. This label rule is mandatory and part of the Google Maps/Waze navigation Master Standard.

## NO LOCAL VARIATIONS

Individual pages are NOT allowed to create their own interpretation of the Google Maps button.

Forbidden:

- different colors
- different borders
- different button heights
- Google Maps beside Waze
- custom page-specific Google Maps styling
- approximating the standard
- changing the standard because another page has different existing CSS

If a page cannot reproduce the MASTER exactly, STOP and report the page as an exception before modifying it.

## NAVIGATION DATA PROTECTION

Applying this standard MUST NOT change:

- coordinates
- destination identity
- verified Place IDs
- page content
- images
- routes
- station order
- other navigation behavior

## LONG DESTINATION NAME RULE

When the destination/business/place name is too long for a clean mobile navigation button:

- The navigation button MUST use only a short identifying name.
- Prefer ONE identifying word whenever possible.
- The short name must still clearly identify the destination.
- The rule applies equally to Waze and Google Maps buttons.
- Waze and Google Maps on the same station must use the same short identifying destination name.
- Shortening the visible label MUST NEVER change:
  - URL
  - coordinates
  - Google Place ID
  - destination identity
  - navigation behavior

APPROVED EXAMPLE:
Petralona Cave & Museum

Waze visible label:
🚗 Waze ל-Petralona

Google Maps visible label:
🗺️ Google Maps ל-Petralona

The physical mobile Petralona implementation passed after this shortening.

NO APPROXIMATION.
NO OVERFLOW.
NO LONG LABEL MAY DAMAGE MOBILE LAYOUT.

## MASTER PRINCIPLE

**DRAMIS PASS = GOOGLE MAPS MASTER STANDARD.**

No compromise.
No approximation.
No page-specific interpretation.

## B. BOTTOM BACK / NEXT BUTTONS

The approved Day 1 bottom-navigation button dimensions and styling are MASTER.

Rules:

1. Preserve the approved button dimensions.
2. Preserve approved font size and styling.
3. Never enlarge a button because a destination name is long.
4. Never shrink the font merely to force a long destination name into the button.
5. If a destination label is too long, shorten the DISPLAY LABEL to the shortest clear wording.
6. The route/navigation destination remains unchanged.

Approved example:
Instead of:
"חזרה ל-Faros"
use:
"חזרה"

Instead of:
"המשך לטיילת חניוטי"
use:
"המשך לטיילת"

The purpose is:
SHORT CLEAR LABEL + FIXED MASTER BUTTON SIZE.

## C. DAY 1 MASTER ANCHOR

Day 1 remains the visual and functional MASTER ANCHOR for Day 2–Day 8.

Future days must follow:
- approved Waze / Google Maps placement;
- bold Google Maps text;
- approved button dimensions;
- short bottom-navigation labels when necessary;
- no overflow;
- no arbitrary resizing.