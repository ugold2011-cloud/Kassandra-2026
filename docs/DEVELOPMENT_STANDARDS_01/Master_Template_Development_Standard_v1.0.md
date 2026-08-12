# Master Template Development Standard
Version: 1.0

## Purpose

All new itinerary days in the Kassandra-2026 project must be created from an existing working day template.

Never build a new day from scratch.

---

## Standard Workflow

### Step 1

Select the most complete existing day (currently Day1.jsx).

### Step 2

Ask the Agent to create a copy named:

DayX.jsx

### Step 3

The Agent must:

- Duplicate the file.
- Rename the component.
- Update the export.
- Update the page title.
- Update the location name.
- Keep all layout.
- Keep all CSS classes.
- Keep all buttons.
- Keep all icons.
- Keep MusicModal.
- Keep navigation.
- Keep responsive layout.

No redesign.

No refactoring.

No optimization.

---

## Forbidden

The Agent must NOT:

- run npm
- run lint
- run build
- commit
- push
- modify App.jsx
- modify CSS
- change project architecture

unless explicitly instructed.

---

## Approval Rule

The Agent stops after creating the new page.

The user reviews it first.

Only after explicit approval may additional edits begin.

---

## Development Philosophy

Phase 1:
Create complete skeleton pages.

Phase 2:
Insert the real content.

Structure first.

Content second.

This workflow is the official development standard of the Kassandra-2026 project.