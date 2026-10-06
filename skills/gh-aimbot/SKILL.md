---
name: gh-aimbot
description: Guided Hacking aimbot math -- entity scanning, CalcAngle, GetBestTarget FOV sort, smoothing, SilentAim, and Bezier human-aim curves.
---

# GH Aimbot Tutorial

## Entity List Scanning

Read entity list base from game memory; iterate each slot, skip null/local/dead.
Extract world position (X, Y, Z) from each entity struct.

## CalcAngle

Convert delta vector (target - local position) to view angles:

    dx = tgt.x - loc.x
    dy = tgt.y - loc.y
    dz = tgt.z - loc.z
    dist2d = sqrt(dx*dx + dy*dy)
    pitch = -atan2f(dz, dist2d) * (180/PI)   // negative: up is negative pitch
    yaw   =  atan2f(dy, dx)    * (180/PI)

Normalize angles to [-180, 180] range after calculation.

## GetBestTarget

Calculate FOV angle between current view and each enemy:
    fov = acos(dot(viewFwd, normalize(tgtDir))) * (180/PI)

Sort candidates by FOV; select minimum. Optionally weight by distance or health.
Apply fov_limit filter: skip if fov > aim_fov.

## Smoothing (Linear Interpolation)

    delta = target_angle - current_angle
    NormalizeAngle(delta)
    out = current_angle + delta / smooth_factor

Higher smooth_factor = slower approach. smooth_factor=1 = instant snap.

## Silent Aim

Write target angles directly to the angle field read by the game for bullet direction
without moving the visible crosshair. Restore original angles next frame.
Detection risk: server-side checks compare view angle to bullet origin.

## Human Aim / Bezier Curves

Use quadratic or cubic Bezier to generate intermediate angle waypoints:
    P(t) = (1-t)^2 * P0 + 2*(1-t)*t * P1 + t^2 * P2
where P0=current, P2=target, P1=control point offset for natural arc.
Parameterize t from 0..1 over N frames.

## Output Methods

- SendInput(MOUSEEVENTF_MOVE): relative mouse delta, preferred for legit aim
- mouse_event: older API, same effect
- WriteProcessMemory to view angle struct: internal injection only
- Direct driver write: kernel-level, bypasses usermode hooks