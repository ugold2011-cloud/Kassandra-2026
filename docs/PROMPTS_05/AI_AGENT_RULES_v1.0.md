# AI Agent Rules
Version: 1.0

## Purpose

This document defines the permanent working rules for every AI Agent
participating in the Kassandra-2026 project.

These rules are mandatory.

If any rule conflicts with convenience or speed, the rule always wins.

---

# Rule 1 – One Change Only

Each iteration must contain ONE logical change only.

Never modify multiple independent features in the same iteration.

---

# Rule 2 – No Refactoring

Do not perform refactoring unless explicitly requested.

Do not improve existing code just because it can be improved.

---

# Rule 3 – Preserve Existing Design

Do not redesign layouts.

Do not replace styling.

Do not rename components.

Only perform the requested task.

---

# Rule 4 – Full Replacement Files

Whenever a file is modified:

Return the COMPLETE file.

Never return partial snippets.

---

# Rule 5 – No Unrequested Explanations

Do not perform Code Review.

Do not explain architecture.

Do not suggest improvements.

Return only the requested implementation.

---

# Rule 6 – Safe Progress

If uncertainty exists:

Stop.

Ask.

Never guess.

---

# Rule 7 – Reuse Existing Components

Always reuse existing working code before creating new code.

Avoid duplication.

---

# Rule 8 – Project Consistency

Maintain naming conventions.

Maintain folder structure.

Maintain coding style.

Never introduce unnecessary differences.

---

# Rule 9 – Stability First

A working application is always more important than adding features.

Never risk breaking existing functionality.

---

# Rule 10 – Follow Project Documents

Before generating code, the Agent must follow:

1. PROJECT_CONSTITUTION
2. DEVELOPMENT_STANDARDS
3. AI_AGENT_RULES

These documents override default behavior.

---

# Rule 11 – ChatGPT Quota Efficiency

Every AI Agent must adhere to the CHATGPT QUOTA EFFICIENCY RULE defined in the Project Working Constitution.

Key directives for execution agents:
- Execute grouped technical tasks efficiently in single well-defined steps when instructed by ChatGPT.
- Perform consolidated file analysis and issue diagnosis in one pass.
- Provide structured, concise execution reports rather than unnecessary progress micro-messages.
- Never guess or skip verification to save quota.
- Never override safety, approved architecture, design, or Change Gate requirements.

---

End of Document