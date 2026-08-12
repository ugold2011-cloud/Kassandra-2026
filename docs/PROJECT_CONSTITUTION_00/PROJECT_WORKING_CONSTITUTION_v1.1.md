# KASSANDRA-2026
# PROJECT WORKING CONSTITUTION

Version: 1.0
Status: ACTIVE
Effective Date: __________
Project Owner: URA

---

# 1. PURPOSE

This document defines the official development methodology for the
Kassandra-2026 project.

It does not describe the application.

It defines HOW the application must be developed.

This document is binding for every participant in the project,
including the Project Owner, AI assistants and future developers.

---

# 2. GOVERNING PRINCIPLE

The project shall always be managed using:

• Facts
• Documentation
• Verification
• Testing

The project shall never be managed using:

• Memory
• Assumptions
• Guesswork
• Personal interpretation

---

# 3. SINGLE SOURCE OF TRUTH

Project documentation is the only official source of truth.

Whenever information already exists in the documentation,
the documentation overrides:

• previous conversations

• AI memory

• assumptions

• personal recollection

If documentation is missing,
the information must be requested before continuing.

---

# 4. FACTS BEFORE DECISIONS

No decision may be made without evidence.

Every conclusion must be supported by:

• the relevant file

• the relevant code

• observed behaviour

• verification

If evidence does not exist,
the conclusion must not be made.

---

# 5. NO GUESSING POLICY

Guessing is prohibited.

When information is missing:

STOP.

Request the required file.

Never invent:

• filenames

• code

• folder structure

• application behaviour

• implementation details

---

# 6. ONE ACTIVE TASK

Only one development task may be active.

No parallel development.

No switching between unrelated problems.

Complete one task.

Verify it.

Only then begin another.

---

# 7. FILE-FOR-FILE RULE

Source code is exchanged using complete files only.

Never:

• partial snippets

• inline edits

• "replace line 125"

Always:

User provides one complete file.

AI returns one complete replacement file.

---

# 8. DEVELOPMENT WORKFLOW

Every task follows the same lifecycle.

1. Define the problem

2. Identify the exact file

3. Verify the facts

4. Modify the file

5. Return the complete file

6. Replace the file

7. Build

8. Test

9. User approval

10. Close the task

No task may skip these stages.

---

# 9. TEST BEFORE CONCLUSION

No statement may be presented as fact
unless it has been verified.

Examples:

✓ Build succeeded

✓ Navigation works

✓ Image loads

✓ Link opens

✓ Music plays

If verification has not been performed,
this must be stated explicitly.

---

# 10. APPROVED DECISIONS

Approved decisions are frozen.

They remain unchanged until the Project Owner explicitly requests
their reconsideration.

Previously approved architecture,
UI decisions,
workflow decisions,
and project rules
must not be reopened.

---

# 11. NO SCOPE CREEP

While fixing one issue,
no unrelated improvements shall be introduced.

Forbidden during task execution:

• feature additions

• refactoring

• architecture changes

• UI redesign

• optimisation unrelated to the task

Only the requested work shall be performed.

---

# 12. DEFINITION OF DONE

A task is complete only when:

✓ Code builds successfully

✓ No runtime errors exist

✓ Requested behaviour works

✓ User verifies success

✓ Documentation is updated if required

---

# 13. VERSION SAFETY

Before significant changes,
a recovery point shall exist.

Recommended:

Git Commit

or

Backup copy.

Development without recovery capability is prohibited.

---

# 14. CHANGE MANAGEMENT

Every project change belongs to one of three categories:

A. Bug Fix

B. Content Update

C. New Feature

Categories shall never be mixed in one task.

---

# 15. COMMUNICATION RULES

Project communication shall be:

Clear

Sequential

Specific

Actionable

Unless explicitly requested otherwise,
only one actionable step should be given at a time.

---

# 16. DOCUMENTATION POLICY

Important decisions belong in project documentation.

Never rely on chat history
as permanent documentation.

If a decision is important,
document it.

---

# 17. RED TEAM VALIDATION

Before every major release,
the project shall be reviewed as if delivered to a first-time user.

Validation includes:

Navigation

Maps

Waze

Music

Images

Offline behaviour

Links

General usability

---

# 18. AI PARTICIPATION RULES

Every AI working on this project shall:

Read the relevant project documentation.

State uncertainty explicitly.

Ask for missing files.

Avoid assumptions.

Respect approved project decisions.

Work according to this Constitution.

---

# 19. REQUIRED PROJECT DOCUMENTS

Before development begins,
the following documents shall be consulted when relevant:

PROJECT_CONSTITUTION

PROJECT_WORKING_CONSTITUTION

DECISION_LOG

MASTER_TEMPLATE_DEVELOPMENT_STANDARD

Relevant design documents

---

# 20. CHANGE GATE — MANDATORY PRE-ACTION SAFETY CHECK

The CHANGE GATE is mandatory before any action that may alter project state.

It applies before:

• editing a file

• replacing a file

• deleting a file or folder

• moving a file or folder

• renaming a file or folder

• changing code

• changing configuration

• overwriting existing content

Before giving the Project Owner any instruction to perform such an action,
the AI must verify all of the following:

1. ACTIVE TASK

The proposed action belongs to the currently approved active task.

2. EXACT TARGET

The exact file or folder to be changed has been identified from evidence,
not memory or assumption.

3. VERIFIED NEED

There is verified evidence that the proposed change is required.

4. AUTHORIZING BASIS

The action is consistent with the current SESSION_CHECKPOINT,
relevant project documentation, and approved decisions.

5. RECOVERY SAFETY

For any significant or potentially destructive change,
a valid recovery point exists before execution.

This shall be a Git Commit or verified backup copy.

If ANY requirement above is missing, uncertain, contradictory, or unverified:

STOP.

Do not instruct the Project Owner to perform the change.

Do not guess the missing information.

Request or inspect the required evidence first.

For file replacement, deletion, overwrite, code modification,
or other potentially destructive actions, the AI must explicitly state:

CHANGE GATE PASSED — SAFE TO EXECUTE

before providing the execution instruction.

If this statement has not been issued,
the Project Owner shall treat the change as NOT AUTHORIZED.

The Project Owner is not the primary safety mechanism.

The AI is responsible for performing the CHANGE GATE before issuing
the instruction.

A user noticing an unsafe instruction is a last-resort safeguard,
not part of the normal validation process.

---

# 21. CHANGE GATE FAILURE RULE

If an instruction is discovered to have bypassed the CHANGE GATE:

1. Stop the active operation immediately.

2. Do not continue from the unsafe instruction.

3. Determine whether any project state was changed.

4. Verify the affected files and project state.

5. Restore from the recovery point if required.

6. Re-establish the correct active task from documentation.

7. Only then may normal work resume.

No attempt shall be made to "continue anyway" after a CHANGE GATE failure.

---

# 22. CORE PRINCIPLE

The objective of this project is not
to produce more code.

The objective is to produce
a reliable,
maintainable,
fully verified application
that successfully serves its users.

Every decision shall favour:

Reliability over speed.

Verification over assumptions.

Facts over memory.

Documentation over conversations.

Quality over quantity.

---

# 23. CHATGPT QUOTA EFFICIENCY RULE

## Purpose

Reduce unnecessary ChatGPT message and media usage while preserving project safety, accuracy, verification quality, and management control.

Quota efficiency is an operational optimization only.

It must NEVER override:
- project safety;
- correctness;
- verification;
- approved architecture;
- approved UX/design;
- content accuracy;
- backup requirements;
- checkpoint requirements;
- project governance.

## Operating Model

ChatGPT remains the sole Project Manager.

The Project Owner retains final authority.

Antigravity, Claude, Perplexity, and all other agents/tools remain execution or review tools only.

Quota optimization does NOT grant any agent additional decision-making authority.

## Mandatory Efficiency Rules

1. GROUP RELATED LOW-RISK TASKS

When several technical actions:
- belong to the same objective;
- are deterministic;
- are low-risk;
- do not require intermediate owner decisions;

prefer one well-defined Antigravity task instead of multiple micro-instructions.

2. CONSOLIDATED ANALYSIS

When diagnosing an issue, inspect all directly relevant files and configuration in one controlled analysis pass when safe.

Prefer one consolidated report containing:
- findings;
- root cause;
- affected files;
- recommended minimal fix;
- verification requirements.

3. REDUCE UNNECESSARY SCREENSHOTS

Do not request a screenshot after every routine click or navigation step.

Screenshots should primarily be requested when:
- visual verification is required;
- an unexpected result occurs;
- UI/UX must be evaluated;
- a significant change requires approval;
- the current state cannot be reliably determined otherwise.

4. REDUCE REPETITIVE CONFIRMATIONS

Routine, reversible, deterministic actions may be grouped when they belong to one approved objective.

Do not require unnecessary ChatGPT message cycles merely to confirm obvious intermediate steps.

5. USE ANTIGRAVITY FOR TECHNICAL EXECUTION

Use Antigravity for grouped technical inspection and execution when appropriate.

ChatGPT should focus its interactions on:
- project management;
- planning;
- decision-making;
- instruction design;
- validation;
- quality control;
- exception handling.

6. PRESERVE CONTROLLED APPROVAL

Efficiency must NOT remove approval gates for:
- architectural changes;
- structural changes;
- destructive actions;
- deletion;
- major multi-file changes;
- changes to frozen templates;
- changes to approved UX/design;
- unverified business/location information;
- changes to governance documents;
- any change with significant uncertainty or risk.

7. REPORT INSTEAD OF MICRO-CONVERSATIONS

After a grouped Antigravity task, prefer one concise structured report rather than multiple progress messages.

8. DO NOT GUESS TO SAVE QUOTA

If information is uncertain, verify it.

Saving ChatGPT quota is NEVER a valid reason to guess.

9. CRITICAL VERIFICATION REMAINS MANDATORY

Browser testing, navigation verification, Waze/location verification, backup verification, checkpoint verification, and other required quality checks must still be performed when applicable.

10. QUOTA LIMITS MUST NOT THREATEN PROJECT CONTINUITY

Project continuity must remain stored in project files and checkpoints.

Do not rely on ChatGPT conversation history as the only record of project state.

## Core Principle

ONE WELL-DEFINED TASK
is preferred over
MULTIPLE MICRO-INSTRUCTIONS

ONLY when doing so is safe, deterministic, and does not remove a required decision or verification point.

## Priority Rule

QUALITY AND SAFETY > QUOTA EFFICIENCY

Always.

---

END OF DOCUMENT