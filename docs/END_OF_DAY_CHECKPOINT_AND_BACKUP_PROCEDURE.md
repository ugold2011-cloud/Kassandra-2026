# KASSANDRA-2026
# END-OF-DAY CHECKPOINT & PHYSICAL BACKUP PROCEDURE

**Document Type:** Mandatory Project Operating Procedure
**Applies To:** Kassandra-2026
**Status:** ACTIVE
**Priority:** MANDATORY
**Owner:** Project Owner
**Process Manager:** ChatGPT

---

## 1. PURPOSE

This procedure defines the mandatory end-of-day shutdown process for the Kassandra-2026 project.

Its purpose is to ensure that:

- No completed work is lost.
- The exact project stopping point is documented.
- The next work session can resume without reconstructing previous decisions.
- A complete physical backup exists independently of the working computer.
- AI conversations, agent history, or memory are never treated as the sole source of project continuity.
- Accidental changes, hardware failure, software failure, or synchronization problems cannot destroy the only copy of the project.

An end-of-day work session is NOT considered complete until both the checkpoint update and the physical backup have been successfully completed and verified.

---

## 2. AUTHORITY AND RESPONSIBILITY

The Project Owner has final authority over the project.

ChatGPT is the sole Project Manager responsible for:

- Determining when the work session is ready to close.
- Preparing the checkpoint update instructions.
- Verifying that the checkpoint accurately represents the project state.
- Guiding the physical backup procedure.
- Confirming that the backup has been verified before declaring the session closed.

Antigravity and any other AI agent or development tool are execution tools only.

They must not independently redefine, skip, or modify this procedure.

---

## 3. END-OF-DAY FREEZE

Once the end-of-day procedure begins:

**STOP DEVELOPMENT.**

No additional feature development, refactoring, design changes, content changes, or unrelated fixes may be performed.

Only actions required to:

1. Save the current project state.
2. Update the checkpoint.
3. Verify the checkpoint.
4. Create the physical backup.
5. Verify the backup.

are permitted.

If a new development issue is discovered during shutdown, record it in the checkpoint for the next session instead of beginning a new development task.

---

## 4. STEP 1 — VERIFY CURRENT PROJECT STATE

Before updating the checkpoint:

- Confirm that all approved changes from the current session have been accepted.
- Confirm that no agent-generated changes remain unintentionally pending.
- Confirm that the project files are saved.
- Confirm that the latest tested state matches the intended stopping point.
- Record any known unresolved issue.

Do not assume that an agent conversation or browser state represents the saved project state.

The filesystem is the authoritative working copy.

---

## 5. STEP 2 — UPDATE SESSION_CHECKPOINT.md

Update the existing project checkpoint:

`docs/SESSION_CHECKPOINT.md`

The checkpoint must contain, at minimum:

### Session Information
- Date of the work session.
- Major objective of the session.

### Work Completed
- Features completed.
- Pages/components created.
- Bugs diagnosed and fixed.
- Content finalized.
- Important configuration changes.

### Files Changed
Record significant files that were:
- Created.
- Modified.
- Removed, if applicable.

### Verification Performed
Record:
- Browser tests.
- Navigation tests.
- Build/runtime tests.
- Link/Waze tests.
- Any other relevant functional verification.

### Current Verified State
Clearly state what is currently working.

### Open Issues
Record anything that:
- Is incomplete.
- Requires verification.
- Requires future correction.
- Was intentionally deferred.

### Exact Stopping Point
State precisely where work stopped.

Avoid vague statements such as:

"Continue Day 2."

Use specific statements such as:

"Day 2 and the Sip Spot detail page are working. Sip Spot Waze coordinates were verified. Remaining Day 2 station detail pages have not yet been implemented."

### First Action for Next Session
Define exactly ONE first action for the next work session.

This prevents the next session from restarting with unnecessary investigation.

---

## 6. STEP 3 — VERIFY THE CHECKPOINT

The checkpoint must be reviewed before backup.

Verify that:

- `SESSION_CHECKPOINT.md` exists.
- The latest session information was successfully written.
- The date is correct.
- The stopping point reflects the actual project state.
- The next action is explicit.
- No valid historical rules or decisions were accidentally deleted.
- No unrelated source files were modified during the checkpoint update.

If the checkpoint is incomplete or inaccurate:

**STOP.**

Correct it before proceeding to backup.

---

## 7. STEP 4 — CREATE A FULL PHYSICAL BACKUP

Connect the designated physical USB backup drive.

Current designated backup device:

**KINGSTON USB drive**

Copy the ENTIRE project folder:

`Kassandra-2026`

to the physical backup drive.

### Mandatory Rule

Always back up the COMPLETE project folder.

Do NOT back up only:

- Files modified today.
- `src`.
- Day pages.
- Checkpoint files.
- Individual documents.

The backup must preserve the complete project structure.

This includes, where present:

- `src`
- `docs`
- `public`
- assets
- playlists
- configuration files
- project documentation
- application source files
- checkpoint files
- all other project-controlled content

---

## 8. STEP 5 — VERIFY THE PHYSICAL BACKUP

A copy operation completing without an error message is NOT sufficient verification.

Open the copied `Kassandra-2026` folder directly from the USB drive.

Verify at minimum:

### Application Files

Confirm that recent development files exist.

For the current project stage, examples include:

`src/pages/Days/Day1.jsx`

`src/pages/Days/Day2.jsx`

`src/pages/Days/SipSpot.jsx`

### Project Documentation

Confirm that the backup contains:

`docs/SESSION_CHECKPOINT.md`

Verify that the backed-up checkpoint contains the latest session update.

### Structure

Confirm that major project folders expected in the working project are present in the backup.

If any required file or folder is missing:

**THE BACKUP HAS FAILED.**

Do not remove the USB drive.

Repeat the backup and verification process.

---

## 9. STEP 6 — SAFE USB REMOVAL

After backup verification:

1. Close any files opened directly from the USB drive.
2. Use Windows **Safely Remove Hardware / Eject**.
3. Select the designated KINGSTON USB device.
4. Wait for Windows to confirm that the device can be safely removed.
5. Only then physically disconnect the USB drive.

Never remove the backup drive while a copy operation is still running.

---

## 10. BACKUP FAILURE RULE

If the physical backup cannot be completed for any reason:

- Do NOT declare the work session fully closed.
- Do NOT pretend that cloud storage, AI history, or ChatGPT memory replaces the required physical backup.
- Record the backup failure.
- The physical backup becomes the highest-priority operational task before significant development resumes.

---

## 11. NEXT-SESSION STARTUP RULE

At the beginning of the next work session:

1. Read the latest `SESSION_CHECKPOINT.md`.
2. Confirm the recorded stopping point.
3. Confirm the defined first action.
4. Resume from that exact point.

Do not reconstruct the project state from memory when a valid checkpoint exists.

---

## 12. END-OF-DAY DEFINITION OF DONE

A Kassandra-2026 work session is officially CLOSED only when ALL of the following are true:

- [ ] Development work has stopped.
- [ ] All approved changes are saved.
- [ ] `SESSION_CHECKPOINT.md` has been updated.
- [ ] The checkpoint has been verified.
- [ ] The exact stopping point is documented.
- [ ] The first action for the next session is documented.
- [ ] The entire `Kassandra-2026` folder has been copied to the physical USB backup drive.
- [ ] The physical backup has been opened and verified.
- [ ] The latest `SESSION_CHECKPOINT.md` exists on the USB backup.
- [ ] Recent project files exist on the USB backup.
- [ ] The USB drive has been safely ejected.

If ANY item above is incomplete:

**THE SESSION IS NOT CLOSED.**

---

## 13. STANDARD END-OF-DAY COMMAND

The Project Owner may initiate this procedure by saying:

**"End work — update Checkpoint and perform physical backup."**

or in Hebrew:

**"סיום עבודה — עדכן Checkpoint ובצע גיבוי פיזי."**

Upon receiving this command, ChatGPT must guide the process in the correct order, one controlled step at a time.

---

## 14. CORE SAFETY PRINCIPLE

### WORKING COPY + CHECKPOINT + PHYSICAL BACKUP

No single layer is sufficient by itself.

The working project provides the current application.

The checkpoint preserves project continuity and decision state.

The physical backup protects against loss of the working environment.

Together, these three layers form the minimum required end-of-day protection standard for Kassandra-2026.
