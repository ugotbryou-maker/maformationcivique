type FbqData = Record<string, string | number>;

export function fbqTrack(event: string, data?: FbqData) {
  if (typeof window === 'undefined') return;
  const w = window as unknown as { fbq?: (...args: unknown[]) => void };
  if (typeof w.fbq === 'function') w.fbq('track', event, data ?? {});
}
