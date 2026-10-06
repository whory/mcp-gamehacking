---
name: ai-aimbot-detection
description: "Detection approaches for **AI visual cheats**—screen capture, computer vision, and hardware or filtered input—that may avoid game-memory access, code injection, and a local cheat driver. Defense l"
metadata:
  type: game-security
  source: awesome-game-security/wiki
  topics: [anti-cheat, game-hacking]
---


# AI Aimbot Detection

Detection approaches for **AI visual cheats**—screen capture, computer vision, and hardware or filtered input—that may avoid game-memory access, code injection, and a local cheat driver. Defense leans on behavioral telemetry, server-side replay, and contextual signals; claims require calibration per game, patch, and population. Pair with [[research-rigor]] before treating any feature as class-defining.

## Threat model

Some pipelines capture frames → run object detection → emit mouse/HID movement on a second PC or via hardware injectors (KMBox, Arduino/Teensy). Legitimate OBS Game Capture, Logitech G HUB, and accessibility tools can produce overlapping signals—**capture alone is not cheat attribution**.

## Client-side and environmental signals

- **Input micro-signatures** — acceleration, correction, quantization, overshoot-and-settle; must be demonstrated against matched human baselines.
- **Engagement timing** — latency distributions depend on capture, inference, frame rate, and hardware; not universal thresholds.
- **Hardware enumeration** — known USB VID/PID (KMBox, Arduino Leonardo, Teensy); mid-session device changes; KMBox Net UDP traffic on LAN. Offensive async BOF samples such as [[usb-monitor-bof]] (`WM_DEVICECHANGE` hotplug telemetry; Conquest; optional NetNTLM coerce via `.url` on storage volumes) illustrate the attach/detach surface those rules monitor.
- **Driver context** — known input-filter drivers (e.g. interception.sys), exploitable G HUB versions; contextual only until behavior is established.

## Server-side replay analysis

When telemetry provenance is trusted ([[input-provenance]]), servers can reconstruct aim without local process scans:

- Record per-tick mouse deltas, view angles, fire/damage events at server tick rate.
- Reconstruct crosshair trajectories; define **engagement windows** (time-to-target, overshoot, correction count, hold time before fire).
- Extract temporal features (reaction time, time-to-lock), spatial features (curvature, angular velocity), and engagement-pattern features (FOV-boundary sharpness, target-selection consistency, engagement rate).
- Compare distributions within skill- and context-matched populations—not fixed class rules.

## ML classifiers

Tabular engagement features (reaction time, curvature stats, dx/dy correlation, delta entropy, session aggregates) suit gradient-boosted trees; raw `(dx, dy, dt)` sequences suit 1D-CNN/LSTM offline analysis. Training needs confirmed positives, high-skill **hard negatives**, and held-out calibration. Adversaries tune smoothing to evade single features—retrain on new samples and prefer feature combinations over fixed thresholds.

## Corpus examples

- [[cs2ac]] — CS2 Metamod:Source server plugin; ~17 behavioral modules for aimbot/aimlock/silent aim/movement/input abuse on dedicated servers (no client install)
- [[waldo]] — CS2 deep-learning triggerbot/aimbot detection (user-trained model)
- [[cs2-hybrid-anticheat-proposal]] — CS2 hybrid AC proposal (ML + Glicko-2 Overwatch judges, honeypot entities, shadow monitoring; Python PoC)
- [[aimbot-detection-prototype]] — clip + live-window prototype
- [[delbot-mouse]] — deep learning human-vs-bot mouse movement classifier (Bureau404 internship; University of Mons; Detection:triggerbot & aimbot; chrisgdt)
- [[pine]] — neural-network aim/trigger research (CS:GO / Fortnite / Overwatch)
- [[human-mouse-movement]] — offensive human-like movement (informs baseline design)
- [[maplestory-worlds-automation]] — title-specific YOLO automation
- [[yolov5-pubg]] — PUBG YOLOv5 object-detection / modding (Python; offensive CV pipeline)
- [[yolo-v8s]] — PUBG YOLOv8s pretrained weights-only distribution (Hellonihaohh; license + compressed model artifact; no README or train/infer scripts; downstream game CV; cheat / PUBG yolo dataset)
- [[yolo-v8m]] — PUBG YOLOv8m pretrained weights-only distribution (Hellonihaohh; license + split compressed model artifact; no training/inference codebase; downstream detection-based game automation research; cheat / PUBG yolo dataset)
- [[pubg-ai-yolov4]] — PUBG YOLOv4/Darknet object detection (Darknet; screenshot-trained; YOLOv4-tiny/YOLOv7 configs; label tools; image/video scripts; dqforgive-sudo)
- [[camera-triggerbot]] — camera triggerbot (movement/color around crosshair; no trained model; cheat / triggerbot & aimbot)
- [[opencv-smart-aimbot]] — OpenCV + triggerbot (C++; classical CV; cheat / triggerbot & aimbot; gmh5225)
- [[ai-fps-b00m-h3adsh0t]] — external FPS aimbot (Python/C++; screen capture + YOLO player detection + mouse aim; cheat / Neural Network; gmh5225)
- [[ai-aimbot]] — RootKit-Org YOLOv5 screen-capture aimbot (Conda; Fortnite/Rust custom models; detection sensitivity + aim tuning; cheat / Machine Learning YOLOv5)
- [[rookieai-yolov8]] — Passer1072 YOLOv8 Ultralytics FPS aim-assist framework (Python; multi-process capture/inference; PyTorch/TensorRT/ONNX; Win32/Logitech/kmNet input; configurable aim/trigger; cheat / Machine Learning YOLOv8)
- [[yolov8-overlay-cs2]] — Leksa667 CS2 Python real-time overlay (YOLOv8 ONNX via ONNX Runtime; mss capture; Pygame + Win32 transparent topmost overlay; optional CUDA, confidence filter, hotkeys, smooth aim-assist; computer-vision cheat prototyping + AC research; cheat / game:cs2 [YOLOv8 in CS2])
- [[auto-aim]] — Fragmentaim C++ real-time AI aiming assistant core (DXGI Desktop Duplication capture; YOLO via ONNX Runtime/TensorRT; OpenCV; driver-level mouse simulation; CV game-automation research; DXGI + TensorRT + driver-level input)
- [[sf-trt-61]] — AMXZzzz Windows C++ computer-vision aiming framework (DXGI capture; OpenCV; ImGui; TensorRT + DirectML/ONNX; YOLO-style models; PID/FOV movement + trigger logic; multiple input injection; AI game automation + AC evasion research; cheat / Machine Learning YOLO)
- [[gan-aimbots]] — Miffyli academic ML-aimbot research repo (Python; ViZDoom FPS scenarios; data collection, GAN-aimbot training/evaluation, classifier plots, experiment orchestration; reproduces published pipelines with shared GAN-group parameters; offensive + defensive aimbot ML research; cheat / Machine Learning)
- [[dlac]] — LaihoE CS:GO demo-analysis anti-cheat package (Python inference + Go demo parser; ONNX models; per-shot suspicious-aim prediction; terminal/CSV/in-memory export; tunable confidence thresholds; replay-based behavioral detection research; Anti Cheat / Machine Learning)
- [[cs2guard]] — Driw0x CS2 ML behavioral cheat detection from demo parsing (Python; tick-level aim/tracking/reaction-time features; CS2CD dataset adapters; anomaly + supervised models; visualization/tests; goal of real-time server-side AC without client scans; Anti Cheat / Machine Learning)
- [[deepaimdetector]] — 87andrewh SourceTV demo LSTM prototype (Go demo parser → view-angle delta + crosshair-to-target angular features around attack events; Python notebooks; classifies legit-aimbot-assisted gunfights; research experiment; Anti Cheat / Deep Learning)
- [[yaacs-anticheat]] — oykuoner CS2 demo pitch/yaw telemetry research pipeline (Python; demoparser2 HLTV parsing; 100-tick spatiotemporal features from Fitts' Law + Minimum Jerk Model; heuristic rule engine vs Random Forest; synthetic + real datasets for honest/pro/aimbot/humanised-evasion profiles; privacy-preserving server-side aimbot detection without client memory probes; Anti Cheat / Machine Learning)
- [[cs2-overwatch]] — magicnothief CPU-friendly offline CS2 demo review pipeline (Python; hard rules + ray-cast visibility + CS2CD-trained ML behavior scoring + calibrated suspicion tiers; optional local LLM evidence summaries via llama.cpp; browser UI + CLI; ONNX inference; optional YOLO vision cross-checks; privacy-preserving local review; Anti Cheat / Analysis Framework)
- [[sentinel-anticheat-chess]] — AbdulAmi09 chess integrity platform (Python FastAPI + Next.js; Regan-style move-quality baseline + seven statistical signal layers—complexity, timing, historical play, behavioral/online/environmental cues—fused to explainable risk tiers; Stockfish PGN + Maia human-likeness; optional XGBoost/Isolation Forest; hash-chained audit logging, case management, live monitoring, partner API; human-review-first engine-assistance detection; Anti Cheat / Open Source Anti Cheat System)
- [[apex-anticheat-lab]] — NetVar1337 FPS anti-cheat research lab (Python server-side input telemetry; aim kinematics, reaction times, recoil regularity, triggerbot signatures; per-cohort baselines; analyst-review ranking; YARA loader/HWID-spoofer rules; read-only PowerShell host driver/PCIe/vulnerable-driver-blocklist survey; match-integrity SQL; FPS cheat taxonomy + threshold calibration docs; Anti Cheat / Open Source Anti Cheat System)
- [[nuremx]] — Apex Legends Python YOLOv5 screen-capture cheat (enemy detection, overlay, aiming; trained weights; no memory hooking; Windows/Linux; Zurek0x; cheat / [AI])
- [[clickpic]] — screen pixel color detection + auto-click (OpenCV + triggerbot; monitors regions for target colors; gmh5225)
- [[rust-auto-weapon-detection-opencv-example]] — Facepunch Rust OpenCV weapon detection sample (C++; color filtering + weapon index mapping; screen-based state recognition; no memory reads; YouNeverKnow00)
- [[battlerite-bot]] — Battlerite arena brawler automation bot (memory or screen recognition; ability casting, targeting, movement; gmh5225)
- [[auto-simulated-universe]] — Honkai: Star Rail Simulated Universe automation bot (screen recognition + input; pathfinding, combat rotation, blessing selection; gmh5225)
- [[minecraft-anticheatai]] — Minecraft Paper DeepGuard; ONNX 1D-CNN over server-side behavior sequences (scaffold-bridging focus; BehaviorRecorder + PyTorch training pipeline)
- [[mlanticheat]] — Minecraft Paper 1.21.4+ combat AC; per-server ensemble neural + logistic models + anomaly detection over combat rotations; operator labeling, Shadow Mode review, optional PacketEvents rotation tracking, automatic retraining (gravemaulr)
- [[model-anti-cheat]] — DayZ server-side ML pipeline; mission-script per-second telemetry (position, view, weapon, raycast line-of-sight) + Python feature extraction + RandomForest aimbot/movement anomaly classifier (sample cheater sessions)
- [[deep-learning-anti-cheat-csgo]] — CS:GO deep-learning anti-cheat implementation (memory scan, code integrity, process/debugger checks, network packet validation; detection-to-response pipeline; gmh5225)
- [[ark]] — distributed-GPU deep learning framework for scaled offensive/defensive ML training (gmh5225; cheat / Tool)
- [[game-cheating-exploit-detection-agent-skill]] — Claude Code skill + Python engine; statistical/invariant aimbot, wallhack, macro, memory-tamper, and exploit detectors with evidence-chain verdicts and CI-tested harness (dungnotnull)

## Related

[[hardware-input-injection]] · [[input-provenance]] · [[detector-operations]] · [[usb-monitor-bof]] · [[research-rigor]] · [[present-hook]] · [[kernel-mouse]] · [[overviews/anti-cheat]] · [[overviews/game-hacking]]
