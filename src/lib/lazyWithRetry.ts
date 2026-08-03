import * as React from "react";

const RELOAD_KEY = "chunk-reload-attempt";

// Retries a dynamic import once, then force-reloads the page.
// Fixes "Failed to fetch dynamically imported module" caused by stale
// build hashes after a new deploy.
export function lazyWithRetry<T extends React.ComponentType<any>>(
  factory: () => Promise<{ default: T }>
) {
  return React.lazy(async () => {
    try {
      const mod = await factory();
      sessionStorage.removeItem(RELOAD_KEY);
      return mod;
    } catch (error) {
      const alreadyReloaded = sessionStorage.getItem(RELOAD_KEY) === "true";
      if (!alreadyReloaded) {
        sessionStorage.setItem(RELOAD_KEY, "true");
        window.location.reload();
        // Keep Suspense pending while the page reloads.
        return new Promise<{ default: T }>(() => {});
      }
      throw error;
    }
  });
}
