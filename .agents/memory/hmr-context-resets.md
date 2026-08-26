---
name: HMR context resets
description: Development-server behavior after editing the shared React content provider
---

After changing the shared content provider, a hot module reload can temporarily leave consumers with a stale context identity and report that a hook is outside its provider. A full workflow restart clears the stale module state.

**Why:** The provider and consumer modules can be reloaded out of sync during development even though the application tree is correctly wrapped.

**How to apply:** Restart the workflow before investigating application architecture when this error appears immediately after a provider HMR update and disappears on a clean load.