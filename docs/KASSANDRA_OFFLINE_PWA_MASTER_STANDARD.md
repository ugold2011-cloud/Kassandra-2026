# KASSANDRA-2026 — OFFLINE / PWA MASTER STANDARD

## STATUS
Created: 19.08.2026
Purpose: Permanent source of truth for all Kassandra Offline/PWA work.

## 1. CURRENT VERIFIED STATUS

Current Offline status: NONE.

Kassandra currently has:
- No Service Worker.
- No Web App Manifest.
- No PWA/offline plugin.
- No guaranteed offline application cache.
- No guaranteed offline startup after closing/reopening or hard refresh.

Application content itself is primarily local:
- Day 1 through Day 8 are bundled locally.
- Station detail pages are bundled locally.
- Text/content is local.
- Local images are bundled with the application.
- Internal navigation uses react-router-dom.

This does NOT currently constitute reliable offline operation.

## MANDATORY RELEASE REQUIREMENT

FULL OFFLINE OPERATION OF KASSANDRA IS A MANDATORY RELEASE REQUIREMENT, NOT AN OPTIONAL FEATURE.

Kassandra must not be considered ready for trip use until its required application content has passed physical-device offline testing.

Required offline behavior includes:
- Home page works without internet.
- Day 1 through Day 8 work without internet.
- All required station detail pages work without internet.
- All required local images display without internet.
- All required text/content remains available without internet.
- Internal navigation works without internet.
- The installed application can be closed and reopened while the device remains in Airplane Mode.
- The application must not rely on ordinary browser cache as its offline strategy.

Any failure of required Kassandra application content during the Airplane Mode acceptance test = FAIL.

External services such as Waze and external websites are excluded from this requirement, but their failure must not prevent Kassandra itself from opening and functioning offline.

## 2. MASTER OFFLINE STANDARD — APPROVED

Kassandra must become a genuinely offline-capable PWA.

After installation and one complete online preparation/load, the following MUST work without internet:

- Home.
- Day 1 through Day 8.
- All station detail pages.
- All required text/content.
- All required local images.
- Internal navigation.
- Closing and reopening the installed application.
- Reopening and operating Kassandra while the phone is in Airplane Mode.

Offline operation must NOT depend only on ordinary browser HTTP cache.

## 3. TARGET DEVICES

The PWA must support:

### Android
Primary physical test device: Samsung / Android.

### iPhone
Kassandra must also support installation and offline use on iPhone/iOS.

Final iPhone verification must be performed on a physical iPhone when available.

Android PASS alone does NOT constitute final cross-platform approval.

## 4. REQUIRED PWA ARCHITECTURE

Subject to separate implementation approval, the target architecture requires:

- Web App Manifest.
- Application name and short name.
- start_url.
- standalone display mode.
- PWA application icons.
- theme/background configuration.
- Service Worker.
- Pre-caching of required application shell/build assets.
- Pre-caching of required local images/assets.
- Android PWA configuration.
- Required iOS/Apple web-app metadata and icons.

Exact technical implementation must be reviewed and approved BEFORE code changes.

## 5. EXTERNAL NETWORK DEPENDENCIES

Current audit identified:

- Google Heebo font loaded remotely through Day.css.
- Lefko Suites external website link.
- Telephone links rely on phone/cellular capability.
- Waze uses external navigation functionality.

No active runtime fetch/axios/API dependency was found in the application.

The active application must NOT depend on a Google Fonts network request for correct offline presentation.

The remote Heebo dependency must eventually be replaced by an approved local/system solution.

Do NOT download or add font files without explicit project-owner approval.

## 6. OFFLINE FONT POLICY

CURRENT VERIFIED STATE:

The application currently loads Heebo through an external Google Fonts request in:

src/pages/Days/Day.css

This creates an unnecessary runtime network dependency.

APPROVED MASTER DECISION:

Kassandra must NOT depend on Google Fonts or another external font service for normal application presentation.

For the initial Offline/PWA implementation:

- Remove the runtime Google Fonts dependency.
- Do NOT download or add external font files.
- Do NOT add locally bundled Heebo font files at this stage.
- Use an approved system-font fallback stack already available on the device.
- Font rendering must remain readable in Hebrew and English.
- Removal of the external font dependency must not change application content, routes, images, Waze links, or functional behavior.

PURPOSE:

- Guarantee that font rendering does not require internet connectivity.
- Avoid introducing additional font assets into the PWA precache.
- Minimize implementation risk.
- Keep the first Offline/PWA implementation as small and controlled as possible.

VISUAL ACCEPTANCE RULE:

Because removing remote Heebo may cause a visual typography difference, the change must be physically checked on Samsung/Android.

Required checks:
- Hebrew readability.
- English readability.
- Headings.
- Buttons.
- Station names.
- Text wrapping.
- No overflow.
- No unexpected layout breakage.

Final iPhone typography must also be checked on a physical iPhone when available.

If the system-font appearance is not acceptable:
STOP → REPORT → USER DECISION

Only after explicit approval may locally bundled Heebo or another local font solution be considered.

NETWORK RULE:

After this change, no active Kassandra CSS may require fonts.googleapis.com or fonts.gstatic.com for normal application rendering.

## 7. WAZE — OFFLINE EXCEPTION

Kassandra Offline and Waze Offline are TWO DIFFERENT SYSTEMS.

Kassandra's PWA offline capability does NOT guarantee Waze navigation.

Existing approved waze:// links must NOT be modified during PWA implementation unless separately approved.

With connectivity:
- Waze buttons must continue opening the Waze application directly.

Without connectivity:
- Kassandra itself must continue working and displaying the required trip information.
- Waze routing must NOT be represented as guaranteed offline functionality.

A separate OFFLINE NAVIGATION BACKUP solution for Greece/Bulgaria will be designed later.

Do NOT mix the Offline Navigation Backup project into the initial Kassandra PWA implementation.

## 9. AIRPLANE MODE ACCEPTANCE TEST

Final offline testing must include:

1. Install/open Kassandra while internet is available.
2. Complete required online preparation/caching.
3. Close Kassandra.
4. Enable Airplane Mode.
5. Reopen Kassandra from its installed application icon.
6. Verify Home.
7. Verify Day 1 through Day 8.
8. Verify station detail pages.
9. Verify required local images.
10. Verify internal navigation.
11. Close Kassandra again.
12. Reopen while still in Airplane Mode.

If any required Kassandra page/content/image fails during this test:
RESULT = FAIL.

Waze routing itself is excluded from the Kassandra PWA offline PASS/FAIL test.

## 10. SAFETY / IMPLEMENTATION PROTOCOL

Offline/PWA work is HIGH-RISK / CROSS-CUTTING work.

Mandatory sequence:

SCAN / READ-ONLY
→ architecture report
→ exact Master implementation definition
→ explicit project-owner approval
→ smallest possible implementation/test stage
→ physical Samsung test
→ physical iPhone test when available
→ only after PASS expand/finalize.

Kilo Code is an execution tool only.

Kilo must NOT independently:
- choose PWA architecture
- install packages
- modify unrelated files
- modify station content
- modify Waze destinations
- modify navigation routes
- modify verified layouts
- refactor unrelated code
- invent offline behavior

If an unexpected modification/file is required:
STOP AND REPORT.

## 11. CURRENT NEXT STEP

NO PWA IMPLEMENTATION HAS BEEN APPROVED YET.

Next approved stage:

READ-ONLY architecture analysis of:
- package.json
- vite.config.js
- index.html
- asset/image structure
- routing/build structure

Purpose:
Prepare the exact PWA implementation plan.

No installation or source modification may occur during this analysis.

## 12. SOURCE OF TRUTH RULE

This document is the MASTER STANDARD for Kassandra-2026 Offline/PWA work.

Future Offline/PWA decisions must be checked against this document.

If a later approved decision changes this standard:
- update this document,
- record the decision and date/time,
- do not rely on conversation memory alone.

Do not silently override this document.

END OF MASTER STANDARD.

## APPROVED PWA ARCHITECTURE — POST AUDIT

The project architecture audit has been completed.

### APPROVED PRIMARY APPROACH

Kassandra-2026 will use:

- vite-plugin-pwa
- Workbox-based precaching
- Vite-generated hashed production assets
- Service Worker navigation fallback for the React SPA
- Web App Manifest
- Android PWA configuration
- iOS/Apple PWA metadata

A manually maintained custom Service Worker is NOT the preferred initial architecture.

Reason:
The application already uses Vite, all Day/Station components are statically bundled, and required local images are processed through the Vite asset pipeline. vite-plugin-pwa / Workbox provides lower implementation risk and automatic build-asset precaching.

### ROUTING / BASE PATH — LOCKED REQUIREMENT

Current Vite base:
`/Kassandra-2026/`

Current React Router basename:
`/Kassandra-2026`

These existing values must be preserved unless a separately approved technical correction becomes necessary.

The PWA configuration, manifest start_url, manifest scope and Service Worker scope/navigation fallback must remain aligned with the `/Kassandra-2026/` deployment path.

Offline navigation must support:
- Home
- Day 1 through Day 8
- all required station routes
- reopening the installed application while offline

Navigation requests inside the application scope must resolve to the cached SPA shell so React Router can render the correct route offline.

### PRECACHE STANDARD

The required production application must be prepared for offline use by precaching:

- application HTML / SPA shell
- generated JavaScript bundles
- generated CSS
- required local images/assets emitted by Vite
- required PWA icons/assets
- other application-local resources required for trip operation

The project must NOT depend on the user manually opening every Day or station page before going offline.

## PWA PRECACHE ASSET SIZE POLICY

Verified large-asset audit found three local image files above 2 MiB:

1. `src/assets/images/day8/day8-road.png`
   - 2,882,564 bytes
   - 2.75 MB

2. `src/assets/images/day8/day8-road-bg.png`
   - 2,538,944 bytes
   - 2.42 MB

3. `src/assets/maps/reference/kassandra-master-map-v1.png.png`
   - 2,521,948 bytes
   - 2.41 MB

The current largest required local image is:
`src/assets/images/day8/day8-road.png`
at 2,882,564 bytes.

APPROVED MASTER DECISION:

The PWA implementation will NOT modify or reduce these images at this stage.

The Workbox/Vite PWA precache maximum file-size limit must be configured explicitly to:

`maximumFileSizeToCacheInBytes: 4 * 1024 * 1024`

Purpose:
- Ensure all currently required local Kassandra images can be included in the offline precache.
- Avoid accidental exclusion of the verified files above 2 MiB.
- Preserve the currently approved application images without introducing a separate image-optimization task.
- Maintain a controlled upper limit so unexpectedly large future assets are not silently added to the offline cache.

Any future required asset larger than 4 MiB must trigger:
STOP → REPORT → USER APPROVAL

Do NOT silently increase the precache size limit.

This 4 MiB limit is part of the approved Kassandra Offline/PWA Master Standard.

### UPDATE / CACHE PRINCIPLE

Kassandra changes frequently.

The implementation must use versioned/hashed build assets and controlled Service Worker cache replacement.

A new application version must be fully prepared before replacing the currently working cached application version.

The project must avoid leaving the traveler with a partially updated or unusable offline application.

Exact Service Worker update behavior must be tested before final approval.

## PWA UPDATE / CACHE SAFETY POLICY

APPROVED MASTER DECISION:

Kassandra must NOT use automatic silent PWA updates as its default update strategy.

The approved update strategy is:

`registerType: 'prompt'`

PURPOSE:

- Preserve the currently working offline version until the user explicitly approves an update.
- Prevent an automatic application reload while Kassandra is being used during the trip.
- Prevent a newly deployed version from unexpectedly replacing the currently working experience.
- Allow controlled verification of a new version before treating it as the active trusted version.

### OFFLINE READY STATUS

The implementation should provide an explicit Offline Ready state using the PWA registration lifecycle.

When the Service Worker has successfully prepared the application for offline use, the application should be capable of indicating:

KASSANDRA OFFLINE READY

This state must mean that the required application shell/assets have completed the required offline preparation.

Do NOT represent the application as Offline Ready before the Service Worker reports that state.

### UPDATE AVAILABLE BEHAVIOR

When a new Kassandra version becomes available:

- Do NOT silently reload the application.
- Do NOT automatically force the new version while the user is actively using Kassandra.
- Notify the user that an update is available.
- The currently working version must remain usable until the user chooses to update.

### UPDATE SAFETY RULE

An update must not intentionally destroy the last known working offline version before the replacement version is ready to take control.

The project must preserve offline continuity as the highest priority.

### TRIP SAFETY RULE

During actual trip use, reliability is more important than immediate deployment of the newest version.

A known working offline version is preferred over an unverified newer version.

### IMPLEMENTATION NOTE

The approved architecture should use the vite-plugin-pwa registration mechanism with:

`registerType: 'prompt'`

and controlled handling of:
- `onNeedRefresh`
- `onOfflineReady`

Exact UI/implementation details must be approved before modification.

Do NOT use `registerType: 'autoUpdate'` unless the Project Owner explicitly changes this Master Standard.

### FONT DECISION — NOT YET APPROVED

The audit identified the remote Google Heebo font as a runtime internet dependency.

NO FONT CHANGE IS APPROVED YET.

Do NOT:
- remove Heebo
- replace it with a system font
- download font files
- add local font files

until a separate visual/offline font decision is approved.

Preserving the approved visual appearance of Kassandra remains important.

### IOS / IPHONE

Final PWA approval requires physical iPhone testing when available.

Android/Samsung PASS alone is not final cross-platform approval.

iPhone testing must include:
- Add to Home Screen
- standalone launch
- Service Worker activation
- Home/Days/stations offline
- local images offline
- internal navigation offline
- close and reopen while Airplane Mode remains active

### CURRENT IMPLEMENTATION GATE

NO PWA PACKAGE INSTALLATION OR APPLICATION MODIFICATION IS AUTHORIZED BY THIS DOCUMENT UPDATE.

Before implementation:
1. Define the exact first implementation batch.
2. List every file that will be modified or created.
3. Obtain explicit Project Owner approval.
4. Implement only that approved batch.
5. Validate technically.
6. Perform physical Samsung offline testing.

END APPROVED PWA ARCHITECTURE.

## APPROVED PWA ARCHITECTURE DIRECTION

The approved implementation direction for Kassandra-2026 is:

- Use `vite-plugin-pwa`.
- Preserve the existing Vite base path:
  `/Kassandra-2026/`
- Use `registerType: "prompt"`.
- Do NOT use `skipWaiting`.
- Do NOT use `clientsClaim`.
- The objective is to preserve the last working offline-capable version until the user explicitly accepts an update.
- Pre-cache the complete required application shell and all required local application assets/images.
- Configure navigation fallback so the installed application can reopen offline and internal routes continue to work.
- Preserve existing React Router architecture unless a concrete offline-routing issue requires a narrowly scoped correction.
- Do NOT change verified station content, Waze destinations, navigation, layout, or design as part of the PWA architecture work.

### ICONS

PWA icons are required before final installation testing.

Required final raster icon targets include:
- 192x192 PNG
- 512x512 PNG
- Apple touch icon

The current project has SVG assets but no confirmed rasterization tool.

Icon generation is a SEPARATE CONTROLLED TASK.

Do NOT install `sharp`, `@vite-pwa/assets`, ImageMagick, Inkscape, or any other icon-generation dependency without explicit project-owner approval.

Icon creation is NOT permission to modify unrelated application assets.

### UPDATE / CACHE SAFETY

The update strategy must prioritize reliability over immediate rollout.

Required principle:
- a new version must not automatically destroy or replace the last working offline version before the new version is ready and accepted.
- update behavior must be tested on the physical Samsung device.
- final iPhone behavior must also be physically verified when available.

### CURRENT IMPLEMENTATION GATE

NO PACKAGE INSTALLATION HAS BEEN APPROVED YET.

The next implementation decision is whether to approve installation of:

`vite-plugin-pwa`

No other package or tool is approved.

Before installation:
- confirm the exact package/version compatibility with the current Vite version.
- confirm which project files the installation will modify.
- do not combine package installation with unrelated code changes.
