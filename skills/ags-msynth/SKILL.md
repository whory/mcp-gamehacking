---
name: ags-msynth
description: "msynth is a Python code deobfuscation framework for simplifying Mixed Boolean-Arithmetic (MBA) expressions by reducing complex bitwise and arithmetic formulas to shorter equivalent forms. It walks exp"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-msynth
---

# msynth

**Author:** mrphrazer
**Source:** mcp-gamehacking/skills/ags-msynth

## Description

msynth is a Python code deobfuscation framework for simplifying Mixed Boolean-Arithmetic (MBA) expressions by reducing complex bitwise and arithmetic formulas to shorter equivalent forms. It walks expression abstract syntax trees and applies oracle-backed algebraic and semantic rewrites using large pre-computed lookup tables, or alternatively learns equivalent expressions through stochastic program synthesis augmented with Search Modulo Inference Rules (Smir). Built on Miasm with optional symbolic-execution integration, it incorporates techniques such as SiMBA and GAMBA, supports parallel processing, and can verify simplifications with an SMT solver. It is aimed at reverse engineers and binary analysts recovering readable semantics from MBA-heavy obfuscation in protected software.
