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

PERPLEXITY_VALIDATION_STANDARD

Relevant design documents

---

# 20. CORE PRINCIPLE

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

END OF DOCUMENT