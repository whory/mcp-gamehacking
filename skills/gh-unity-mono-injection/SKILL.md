---
name: gh-unity-mono-injection
description: Unity Mono injection tutorial -- Loader/HackMain C# DLL pattern, MonoBehaviour hooks, DnSpy reverse engineering, FindObjectsOfType entity scan, WorldToScreen ESP.
---

# GH Unity Mono Injection

## Overview

Unity Mono games have all game code in C# DLLs (Assembly-CSharp.dll).
Inject a C# DLL into the game using a Mono injector.
Your DLL has full access to Unity engine and game assemblies.

## Tools

- JetBrains Rider or Visual Studio (C# Class Library .NET Framework project)
- DnSpy: .NET decompiler/debugger to read game assemblies
- GH DLL Mono Injector: injects your DLL into the game process
- Assemblies to reference: Assembly-CSharp.dll, Assembly-CSharp-firstpass.dll, all UnityEngine*.dll from GameName_Data/Managed/

## Loader Class (Entry Point)

The injector calls Namespace.Loader.Load() / Loader.Unload():

    public class Loader {
        private static readonly GameObject MGameObject = new GameObject();
        public static void Load() {
            MGameObject.AddComponent<HackMain>();
            Object.DontDestroyOnLoad(MGameObject);
        }
        public static void Unload() { Object.Destroy(MGameObject); }
    }

## HackMain Component (MonoBehaviour)

Inherits MonoBehaviour to get Unity game loop callbacks:
- Start(): runs once on initialization
- Update(): runs every frame (use for state updates)
- LateUpdate(): end of frame
- OnGUI(): runs every frame for drawing (twice: render + events)
- FixedUpdate(): fixed-rate physics loop (100Hz)

Draw text: GUI.Label(new Rect(x, y, w, h), "text")

## DnSpy Research Workflow

1. Open Assembly-CSharp.dll in DnSpy
2. Search for "player", "health", "alive", "enemy" etc.
3. Follow breadcrumbs: find ZH_Health.alive from ZH_AINav.ManualReference.healthScript
4. Public members accessible directly; private need reflection

## Entity Scan

    ZH_AINav[] enemies;
    void Update() {
        enemies = FindObjectsOfType<ZH_AINav>();  // expensive but simple
    }

Better: use coroutine to refresh every 5 seconds:

    IEnumerator EntityUpdateFunct(float time) {
        yield return new WaitForSeconds(time);
        enemies = FindObjectsOfType<ZH_AINav>();
        StartCoroutine(EntityUpdateFunct(5));
    }
    void Start() { StartCoroutine(EntityUpdateFunct(0)); }

## Camera and W2S

    Camera _mCamera;
    void Update() { _mCamera = Camera.main; }  // expensive; cache via coroutine

    private Vector3 W2S(Vector3 worldPos) {
        return _mCamera.WorldToScreenPoint(worldPos);
    }

W2S returns pos.z < 0 when behind camera -- skip those.
Screen Y is inverted: use Screen.height - pos.y for GUI coordinates.

## Basic ESP

    void Basic_ESP(Transform t, string text) {
        Vector3 pos = _mCamera.WorldToScreenPoint(t.position);
        if (pos.z > 0) {
            GUI.Label(new Rect(pos.x, Screen.height - pos.y, 200, 30), text);
        }
    }
    void OnGUI() {
        foreach (var e in enemies)
            if (e.ManualReference.healthScript.alive)
                Basic_ESP(e.transform, "Enemy");
    }

## DLL Version Trick

Unity caches injected DLLs. Edit AssemblyInfo.cs: [assembly: AssemblyVersion("1.0.*")]
Then set <Deterministic>false</Deterministic> in .csproj so version auto-increments.