/**
 * Runs `callback` when the browser is idle (or after `timeout` ms at the
 * latest). Falls back to a macrotask where `requestIdleCallback` is missing
 * (Safari). Returns a function that cancels the pending callback.
 */
export function whenIdle(callback: () => void, timeout = 500): () => void {
  if (typeof window.requestIdleCallback === "function") {
    const id = window.requestIdleCallback(() => callback(), { timeout });
    return () => window.cancelIdleCallback(id);
  }
  const id = window.setTimeout(callback, 1);
  return () => window.clearTimeout(id);
}
