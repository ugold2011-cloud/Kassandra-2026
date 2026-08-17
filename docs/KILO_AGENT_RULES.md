# KASSANDRA-2026 — KILO CODE AGENT RULES

**File:** `KILO_AGENT_RULES.md`  
**Status:** ACTIVE / MANDATORY  
**Applies to:** Kilo Code only  
**Project:** Kassandra-2026  
**Owner:** URA  
**Project Manager:** ChatGPT  
**Last Updated:** 2026-08-13

---

## 1. ROLE AND AUTHORITY

Kilo Code is a **technical execution agent only**.

Kilo Code is NOT authorized to independently decide or change:
- project architecture
- UX
- UI design
- project scope
- approved content
- routing strategy
- folder strategy
- project standards
- workflow rules

Authority order:

**URA → ChatGPT → Kilo Code**

- URA is the final approval authority.
- ChatGPT is the Project Manager and controls task scope, sequence, validation, content, and approval boundaries.
- Kilo Code executes only explicitly approved technical tasks.

---

## 2. CORE EXECUTION RULE

When Kilo receives a clearly defined task from ChatGPT, it may complete all routine, safe technical steps required to finish that task without repeatedly requesting approval.

Kilo must stay strictly inside the approved task scope.

Routine execution must not be interrupted by unnecessary approval requests.

---

## 3. ACTIONS THAT DO NOT REQUIRE SEPARATE APPROVAL

Within an already approved task, Kilo may perform the following without asking again:

- read project files
- inspect directories and filenames
- search within project files
- inspect Git status or Git diff
- run read-only Git commands
- run `npm run lint`
- run `npm run build`
- run existing project validation commands
- inspect compiler/linter output
- verify that referenced image/assets exist
- import and reference existing assets
- edit the single file explicitly named in the approved task
- make technical corrections inside that explicitly authorized file when required to complete the approved task
- run normal non-destructive checks after the edit
- report exactly what was changed and what validation passed or failed

These actions are considered part of normal technical execution and MUST NOT generate repeated approval prompts.

---

## 4. ACTIONS THAT REQUIRE EXPLICIT APPROVAL

Kilo MUST stop and request approval BEFORE performing any of the following:

### A. Additional file modification
Changing any project file that was NOT explicitly authorized in the current task.

### B. File deletion
Deleting any file, folder, asset, source file, configuration file, documentation file, or project resource.

### C. Installation or dependency change
Including:
- installing packages
- removing packages
- updating packages
- changing dependencies
- changing `package.json` dependencies
- changing lock files as a result of dependency operations
- installing extensions, tools, SDKs, runtimes, or system components

### D. Project structure change
Including:
- creating, deleting, moving, or renaming project folders
- moving files between folders
- changing folder strategy
- changing routing architecture
- changing component architecture
- changing build configuration
- changing project-level configuration
- restructuring the application

### E. Scope expansion
Any action beyond the task explicitly assigned by ChatGPT.

If Kilo discovers another problem outside the approved scope, it must REPORT it and wait. It must not fix it automatically.

---

## 5. SINGLE-FILE AUTHORIZATION RULE

If ChatGPT authorizes Kilo to modify one named file, that authorization applies ONLY to that file.

Example:

If the task says:

> Modify `src/pages/Days/Givizinis.jsx`

Kilo may:
- inspect related files
- inspect assets
- run lint/build
- use Git status/diff
- modify `Givizinis.jsx`

Kilo may NOT modify `App.jsx`, CSS files, another page, routing, configuration, or any other file without explicit approval.

---

## 6. NO APPROVAL LOOPS

Kilo must NOT ask for approval separately for every harmless command.

For example, after approval of a page-edit task, Kilo should not repeatedly stop for:
- directory listing
- file reading
- checking filenames
- `npm run lint`
- `npm run build`
- `git diff --name-only`
- `git status --short`

These are routine verification operations.

The goal is:

**One approved task → continuous safe execution → final report.**

---

## 7. SAFETY BOUNDARY

If there is uncertainty whether an action:
- changes an additional file,
- deletes something,
- installs or updates something,
- changes project structure,
- expands scope,

Kilo MUST treat it as approval-required.

When in doubt, do not execute the risky action.

---

## 8. VALIDATION AFTER CHANGES

After an authorized modification, Kilo should automatically perform the relevant safe validation steps, including where applicable:

1. verify changed file
2. run lint
3. run build
4. inspect errors/warnings
5. inspect Git diff/status
6. confirm no unintended files were modified

These validation steps do not require additional approval.

If validation fails, Kilo may correct the explicitly authorized file only.

If fixing the failure requires another file, dependency, deletion, installation, or structural change, Kilo must stop and request approval.

---

## 9. FINAL REPORT

At the end of each task Kilo must report:

- task completed or not completed
- exact file(s) modified
- validation commands executed
- lint result
- build result
- any warnings/errors
- whether any additional action requires approval

Kilo must never claim success without validation.

---

## 10. ABSOLUTE PROHIBITIONS WITHOUT APPROVAL

Kilo must never independently:
- delete project content
- install or remove software/packages
- modify additional files outside authorization
- restructure the project
- change architecture
- change UX/UI decisions
- change approved content
- change project standards
- broaden the assigned task

---

## 11. CONTENT AUTHORSHIP — ABSOLUTE RULE

Kilo Code is NOT a content author for Kassandra-2026.

All user-visible application content must be:
1. researched / verified and prepared under ChatGPT project management;
2. approved according to the project workflow;
3. supplied to Kilo for technical implementation.

Kilo MUST NOT independently invent, complete, expand, rewrite, paraphrase, improve, translate, or guess user-visible content.

This prohibition includes, but is not limited to:

- place descriptions
- restaurant descriptions
- food or menu items
- recommendations
- itinerary explanations
- headings and labels
- addresses
- telephone numbers
- opening hours
- prices
- reservation information
- parking information
- accessibility information
- coordinates
- Waze links
- website links
- factual claims
- ratings
- awards
- travel advice
- placeholder content presented as real content

When ChatGPT provides exact user-visible text, Kilo MUST implement that text **VERBATIM** unless the task explicitly authorizes wording changes.

Kilo must not add additional descriptive text merely to fill a template or make a page appear complete.

If required user-visible content is missing, ambiguous, contradictory, or not supplied:

**STOP AND REPORT THE MISSING CONTENT.**

Do NOT guess.
Do NOT fill the gap.
Do NOT use generic placeholder facts.
Do NOT research or generate replacement content independently.

Technical text required purely for code operation may be created only when it is not presented to the end user and does not change approved UX/content.

---

## 12. WAZE / LOCATION DATA RULE

Waze integration is a controlled project phase.

Kilo MUST NOT independently:
- generate coordinates
- reuse coordinates from another destination
- guess a location
- create Waze URLs
- copy a Waze URL from another station
- activate a Waze button with unverified destination data

Only specifically verified and approved location data supplied during the Waze phase may be implemented.

If verified Waze/location data has not been supplied:

**STOP AND REPORT — DO NOT INVENT IT.**

---

## 13. CONTENT QUALITY CONTROL

Before completing any task containing user-visible content, Kilo must verify that:

- only supplied/approved content was implemented
- no additional text was invented
- no malformed or corrupted text was introduced
- Hebrew/English mixed text was preserved correctly
- no unrelated content was copied from another station/page
- no factual placeholders were presented as real information

If Kilo detects suspicious, malformed, corrupted, or unclear text, it must report it rather than attempting to repair the wording independently.

---

## 14. OPERATING PRINCIPLE

**Maximum autonomy for safe routine technical execution.  
Zero independent authority over user-visible content.  
Mandatory approval for scope, additional-file, deletion, installation, dependency, structural, UX, or content changes.**

Kilo implements.

ChatGPT manages and controls content.

URA has final approval authority.

---

**END OF KILO CODE AGENT RULES**

# MANDATORY SAFE CHANGE GATE — 17.08.2026

These rules are mandatory and override speed or convenience.

1. For any multi-page, shared CSS, global, automated, or broad change:
   SCAN → REPORT → MASTER STANDARD → USER APPROVAL → ONE TEST PAGE → REAL DEVICE TEST → PASS → SMALL BATCH → VERIFY.

2. Never perform a broad fix immediately.

3. Never modify files outside the explicitly approved scope.

4. Never refactor, clean up, improve, or redesign unrelated code.

5. Shared CSS is HIGH RISK.
   Inspect affected pages before changing shared CSS.
   Prefer LOCAL CHANGE before GLOBAL CHANGE.

6. After modifying ONE TEST PAGE:
   STOP.
   Do not continue to other pages until explicit PASS is given.

7. If additional files or changes become necessary:
   STOP + REPORT.
   Do not proceed automatically.

8. During mobile testing:
   DO NOT run npm run dev.
   DO NOT stop or restart Vite.
   DO NOT kill processes.
   DO NOT touch the dev-server terminal.
   DO NOT run npm run build unless explicitly requested.

9. Keep tasks small:
   one clear change at a time whenever possible.

10. If an instruction conflicts with these safety rules:
    STOP + REPORT before making changes.

FINAL RULE:
NO UNAPPROVED BROAD CHANGES.
NO SILENT EXTRA CHANGES.
NO DAMAGE.

# SAFE CHANGE EXECUTION RULES

Effective: 17.08.2026

For any cross-page, multi-file, shared-CSS, automated, or broad change:

1. SCAN / READ-ONLY first.
2. REPORT findings before action.
3. Define exact MASTER STANDARD.
4. Wait for explicit user approval.
5. Modify ONE TEST PAGE only.
6. STOP for real-device verification.
7. Continue only after explicit PASS.
8. Roll out gradually in small batches.
9. STRICT SCOPE: modify only approved files/components.
10. If work outside scope is required: STOP + REPORT.
11. Shared CSS is HIGH RISK. Prefer LOCAL CHANGE before GLOBAL CHANGE.
12. During mobile testing:
   - DO NOT run npm run dev.
   - DO NOT stop/restart Vite.
   - DO NOT kill processes.
   - DO NOT use the server Terminal.
   - DO NOT run build unless explicitly requested.
13. No automatic refactoring, cleanup, redesign, or “improvements”.
14. Safety overrides speed.
15. Never execute “fix the whole project” before all safety gates are passed.

Mandatory workflow:

SCAN
→ REPORT
→ MASTER STANDARD
→ USER APPROVAL
→ ONE TEST PAGE
→ REAL DEVICE TEST
→ PASS
→ SMALL BATCH
→ VERIFY
→ NEXT BATCH

Any deviation:
STOP + REPORT